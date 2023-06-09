package com.ssafy.omz.service;

import com.google.cloud.storage.BlobInfo;
import com.ssafy.omz.dto.req.BoardRequestDto;
import com.ssafy.omz.dto.resp.BoardResponseDto;
import com.ssafy.omz.dto.resp.MemberResponseDto;
import com.ssafy.omz.entity.Board;
import com.ssafy.omz.entity.BoardLikes;
import com.ssafy.omz.repository.BoardLikesRepository;
import com.ssafy.omz.repository.BoardRepository;
import com.ssafy.omz.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import javax.transaction.RollbackException;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.*;
import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@RequiredArgsConstructor
@Service("BoardService")
public class BoardServiceImpl implements BoardService {
    private final BoardRepository boardRepository;
    private final BoardLikesRepository boardLikesRepository;
    private final MemberRepository memberRepository;
    private final GCSService gcsService;

    @Override
    public List<BoardResponseDto.Info> getBoardList(Long memberId, Pageable pageable) {
        Page<Board> boards = boardRepository.findAllByIsDeletedIsFalse(pageable);
        List<BoardResponseDto.Info> res = new ArrayList<>();
        for(Board b : boards){
            BoardResponseDto.Info info = BoardResponseDto.Info.fromEntity(b);
            info.setILikeBoard(boardLikesRepository.existsByMember_MemberIdAndBoard_BoardId(memberId, b.getBoardId()));

            res.add(info);
        }
        return res;
    }

    @Override
    public List<BoardResponseDto.Info> searchBoardByContent(Long memberId, String word) {
        List<Board> boards = boardRepository.findAllByIsDeletedIsFalseAndContentContaining(word);
        List<BoardResponseDto.Info> res = new ArrayList<>();
        for (int i = boards.size() - 1; i >= 0; i--) {
            BoardResponseDto.Info respDto = BoardResponseDto.Info.fromEntity(boards.get(i));
            respDto.setILikeBoard(boardLikesRepository.existsByMember_MemberIdAndBoard_BoardId(memberId, boards.get(i).getBoardId()));

            res.add(respDto);
        }
        return res;
    }

    @Override
    public List<BoardResponseDto.Info> searchBoardByNickname(Long memberId, String word) {
        List<Board> boards = boardRepository.findAllByIsDeletedIsFalseAndMember_NicknameContaining(word);
        List<BoardResponseDto.Info> res = new ArrayList<>();
        for (int i = boards.size() - 1; i >= 0; i--) {
            BoardResponseDto.Info respDto = BoardResponseDto.Info.fromEntity(boards.get(i));
            respDto.setILikeBoard(boardLikesRepository.existsByMember_MemberIdAndBoard_BoardId(memberId, boards.get(i).getBoardId()));

            res.add(respDto);
        }
        return res;
    }

    @Override
    public BoardResponseDto.Detail getBoardDetail(Long memberId, Long boardId) {
        Board board = boardRepository.findByBoardId(boardId);
        BoardResponseDto.Detail res = BoardResponseDto.Detail.fromEntity(board);
        res.setILikeBoard(boardLikesRepository.existsByMember_MemberIdAndBoard_BoardId(memberId, boardId));
        res.setReplyCnt(res.getReplies().size());
        return res;
    }

    @Override
    public void memberLikeBoard(Long memberId, Long boardId) {
        if (!boardLikesRepository.existsByMember_MemberIdAndBoard_BoardId(memberId, boardId)) {
            boardLikesRepository.save(BoardLikes.builder()
                    .member(memberRepository.findByMemberId(memberId))
                    .board(boardRepository.findByBoardId(boardId))
                    .build());
        }
    }

    @Override
    public void memberCancleLikeBoard(Long memberId, Long boardId) {
        if (boardLikesRepository.existsByMember_MemberIdAndBoard_BoardId(memberId, boardId)) {
            boardLikesRepository.deleteById(boardLikesRepository
                    .findByMember_MemberIdAndBoard_BoardId(memberId, boardId).getBoardLikesId());
        }
    }

    @Override
    public List<BoardResponseDto.Info> getLikeList(Long memberId) {
        List<BoardLikes> likeInfo = boardLikesRepository.findAllByMember_MemberId(memberId);
        List<BoardResponseDto.Info> res = new ArrayList<>();
        for (int i = likeInfo.size() -1; i >= 0; i--) {
            Board board = boardRepository.findByIsDeletedIsFalseAndBoardId(likeInfo.get(i).getBoard().getBoardId());
            if (board != null) {
                BoardResponseDto.Info respDto = BoardResponseDto.Info.fromEntity(board);
                respDto.setILikeBoard(true);
                res.add(respDto);
            }
        }
        return res;
    }

    @Override
    @Transactional
    public void writeBoard(MultipartFile file, BoardRequestDto.Write writeInfo) throws RollbackException, IOException {
        Long boardId = BoardRequestDto.Info.fromEntity(boardRepository.save(Board.builder()
                .content(writeInfo.getContent())
                .member(memberRepository.findByMemberId(writeInfo.getMemberId()))
                .build())).getBoardId();
        Board board = boardRepository.findByBoardId(boardId);
        if (file != null)
            gcsService.uploadBoardImage(file, board);
    }

    @Override
    @Transactional
    public void updateBoard(Long boardId, MultipartFile file, BoardRequestDto.Write writeInfo) throws RollbackException, IOException {
        BoardRequestDto.Info.fromEntity(boardRepository.save(
                boardRepository.findById(boardId).get()
                        .updateContent(writeInfo.getContent())));

        Board board = boardRepository.findByBoardId(boardId);

        if (file != null)
            gcsService.uploadBoardImage(file, board);
    }

    @Override
    @Transactional
    public void deleteBoard(Long boardId) throws RollbackException {
        BoardRequestDto.Info.fromEntity(boardRepository.save(
                boardRepository.findById(boardId).get().updateIsDeleted()));
    }

    @Override
    public Map<String, Object> getMemberBoardList(Long memberId, Pageable pageable) {
        Map<String, Object> res = new HashMap<>();
        res.put("member", MemberResponseDto.LittleInfo.fromEntity(memberRepository.findByMemberId(memberId)));
        res.put("articles",
                boardRepository.findAllByIsDeletedIsFalseAndMember_MemberId(memberId, pageable)
                        .map(board -> {
                            BoardResponseDto.Info info = BoardResponseDto.Info.fromEntity(board);
                            info.setILikeBoard(boardLikesRepository.existsByMember_MemberIdAndBoard_BoardId(memberId, board.getBoardId()));
                            return info;
                        }));
        return res;
    }

}