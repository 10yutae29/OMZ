package com.ssafy.omz.repository;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.HashOperations;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Repository;

import javax.annotation.PostConstruct;

@RequiredArgsConstructor
@Repository
//@Getter
public class ChatRoomRedisRepository { // ChatRoomRedisRepository

    public static final String CHAT_ROOM_ID_ = "CHAT_ROOM_ID_";

    public static final String SESSION_ID = "SESSION_ID";

    //  chat data 관련
    private final RedisTemplate<String, String> roomRedisTemplate;

    //  key - Hash Key - value
    private HashOperations<String, String, String> opsHashEnterRoom;

    @PostConstruct
    private void init() {
        opsHashEnterRoom = roomRedisTemplate.opsForHash();
    }

    //채팅 SubScribe 할 때, WebSocket SessionId 를 통해서 redis에 저장
    public void enterChatRoom(String roomId, String sessionId, String nickname) {

        //  세션 - 세션ID - 방 번호
        //  hgetall SESSION_ID
        //  roomId$sessionId
        //  roomId\x0218
        opsHashEnterRoom.put(SESSION_ID, sessionId, roomId);

        //  채팅방 - 세션ID - 유저 아이디
        //  hgetall CHAT_ROOM_ID_?
        //  roomId$sessionId
        //  roomId\x06닉네임
        opsHashEnterRoom.put(CHAT_ROOM_ID_ + roomId, sessionId, nickname);

    }

    //채팅 DisConnect 할 때, WebSocket SessionId 를 통해서 redis에서 삭제
    public String disconnectWebsocket(String sessionId) {
        String roomId = opsHashEnterRoom.get(SESSION_ID, sessionId);
        opsHashEnterRoom.delete(CHAT_ROOM_ID_ + roomId, sessionId);
        opsHashEnterRoom.delete(SESSION_ID, sessionId);
        return roomId;
    }

    //채팅 unsubscribe 할 때
    public String leaveChatRoom(String sessionId) {
        String roomId = opsHashEnterRoom.get(SESSION_ID, sessionId);
        opsHashEnterRoom.delete(CHAT_ROOM_ID_ + roomId, sessionId);
        return roomId;
    }

}
