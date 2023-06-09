package com.ssafy.omz.entity;

import com.sun.istack.NotNull;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Reply {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long replyId;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "board_id")
    private Board board;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @Column(length = 70)
    private String content;

    @CreationTimestamp
    private LocalDateTime registeredTime;

    @ColumnDefault("false")
    private boolean isDeleted;

    @Builder
    private Reply(Board board, Member member, String content, boolean isDeleted){
        this.board = board;
        this.member = member;
        this.content = content;
        this.isDeleted = isDeleted;
    }

    public Reply updateContent(String content){
        this.content = content;
        return this;
    }

    public Reply updateIsDeleted(){
        this.isDeleted = true;
        return this;
    }
}
