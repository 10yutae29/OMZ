import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import DeleteCommentModal from "../common/DeletetModal";
import { useMutation } from "react-query";
import { updateArticle } from "../../api/community";
import {
  deleteArticle,
  likeArticle,
  dislikeArticle,
} from "../../api/community";
import { imageUrl } from "../../api";
import { useRecoilValue } from "recoil";
import { userStatus } from "../../recoil/userAtom";
import moment from "moment";

type Article = {
  [key: string]: any;
};

type Props = {
  item: Article;
  refetch: () => Promise<any>;
};

export default function CommunityArticleItem({ item, refetch }: Props) {
  const navigate = useNavigate();

  // 삭제 눌렀을 때 띄울 모달 state
  const [showModal, setShowModal] = useState(false);
  // 댓글창 눌렀을 때 띄울 모달
  // const [commentModal, setCommentModal] = useState(false);

  // 수정 눌렀을 때 form 으로 바뀌는 state
  const [showUpdate, setShowUpdate] = useState(false);
  // 수정된 article content
  const articleContent = useRef<HTMLTextAreaElement>(item.content);

  // 시간 원하는 걸로 바꾸기
  const date = new Date(item.registeredTime);

  const imageUrlRoot = imageUrl + item.file;
  const boardId = item.boardId;
  const file = item.file;

  const memberId = useRecoilValue(userStatus).id;
  // 클릭하면 Detail 페이지로 이동시킴
  const handleClick = (boardId: number) => {
    navigate(`/community/${boardId}`, {
      state: { boardId: boardId },
    });
  };

  // Community 내의 마이 페이지로 이동시킴
  const goToMyPage = (memberId: number) => {
    navigate(`/community/mypage/${memberId}`);
  };

  // 게시글 수정
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredArticleContent = articleContent.current!.value;

    if (enteredArticleContent.trim().length == 0) {
      return;
    }
    handleArticleUpdate(enteredArticleContent);
    setShowUpdate(false);
  };

  const upDateArticle = useMutation(
    (board: {
      boardId: number;
      content: string;
      file: File;
      memberId: number;
    }) => updateArticle(board),
    {
      onSuccess: () => {
        refetch();
      },
    }
  );

  const handleArticleUpdate = (content: string) => {
    upDateArticle.mutate({ boardId, content: content, file, memberId });
  };

  // 게시글 삭제
  const deleteArticleItem = useMutation(
    (boardId: number) => deleteArticle(boardId),
    {
      onSuccess: () => {
        setShowModal(false);
        refetch();
      },
    }
  );

  // 게시글 좋아요
  const loveArticle = useMutation(
    (board: { memberId: number; boardId: number }) =>
      likeArticle(board.memberId, board.boardId),
    {
      onSuccess: () => {
        refetch();
      },
    }
  );

  const goLoveArticle = async () => {
    loveArticle.mutate({ memberId, boardId });
  };

  // 게시글 좋아요 취소
  const disloveArticle = useMutation(
    (board: { memberId: number; boardId: number }) =>
      dislikeArticle(board.memberId, board.boardId),
    {
      onSuccess: () => {
        refetch();
      },
    }
  );

  const goDisloveArticle = async () => {
    disloveArticle.mutate({ memberId, boardId });
  };

  // 삭제 모달 관련
  function closeModalHandler() {
    setShowModal(false);
  }

  function confirmModalHandler(boardId: number) {
    deleteArticleItem.mutate(boardId);
  }
  const IMAGE_ROOT = import.meta.env.VITE_APP_IMAGE_ROOT;
  return (
    <>
      <div className="min-w-full max-w-full">
        <div
          className="bg-white w-full justify-start rounded-xl cursor-pointer p-2 hover:bg-opacity-60"
          onClick={() => handleClick(item.boardId)}
        >
          <div className="px-5 py-2">
            <div className="justify-start mt-3">
              <div
                className="flex justify-start gap-4 items-center hover:scale-105"
                onClick={(e) => {
                  e?.stopPropagation();
                  goToMyPage(item.member.memberId);
                }}
              >
                <img
                  className="w-[3rem] h-[3rem] border rounded-full"
                  src={IMAGE_ROOT + item.member.file}
                />
                <div className="flex flex-col">
                  <p className="text-ml cursor-pointer font-bold">
                    {item.member.nickname}
                  </p>
                  {moment(date).format("YYYY년 MM월 DD일 HH:mm")}
                </div>
              </div>
            </div>

            <div>
              {item.file ? (
                <div className="flex justify-center">
                  <img className="rounded-[10px] mt-5" src={imageUrlRoot} />
                </div>
              ) : (
                <></>
              )}
              {/* 수정할 때 나오는 창  */}
              {/* {showUpdate ? (
                <form
                  onSubmit={submitHandler}
                  className="flex flex-col justify-center items-end"
                >
                  <textarea
                    onClick={(e) => e.stopPropagation()}
                    defaultValue={item.content}
                    ref={articleContent}
                    maxLength={140}
                    rows={5}
                    className="w-full focus:outline-none target my-5 px-5 py-3 bg-black/10 rounded-lg"
                  ></textarea>
                  <div className="flex justify-end">
                    <button
                      className="cursor-pointer hover:text-white"
                      onClick={(e) => e.stopPropagation()}
                    >
                      수정
                    </button>
                    <button
                      className="cursor-pointer hover:text-white ml-5"
                      onClick={() => setShowUpdate(false)}
                    >
                      취소
                    </button>
                  </div>
                </form>
              ) : (
                <p className="w-full text-ml text-left break-all my-5">
                  {item.content}
                </p>
              )} */}
              <p className="w-full text-ml text-left break-all my-5 pl-2">
                {item.content}
              </p>
            </div>
            <div className="flex justify-between items-center my-5 pl-2">
              {!showUpdate && (
                <div className="flex w-3/12 justify-start gap-3">
                  <FontAwesomeIcon
                    icon={faComment}
                    className="cursor-pointer hover:text-teal-400 text-lg"
                  />
                  <p className="flex-grow-0 flex-shrink-0 text-sm font-bold">
                    {item.replyCnt}
                  </p>
                  {!item.ilikeBoard ? (
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="text-lg ml-5"
                      onClick={(e) => {
                        e.stopPropagation();
                        goLoveArticle();
                      }}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="text-red-600 text-lg ml-5"
                      onClick={(e) => {
                        e.stopPropagation();
                        goDisloveArticle();
                      }}
                    />
                  )}

                  <p className="text-sm font-bold">{item.likeCnt}</p>
                </div>
              )}
              {/* <div>
                {memberId === item?.member.memberId && !showUpdate && (
                  <div className="flex justify-start gap-5 items-center">
                    <p
                      className="cursor-pointer hover:text-white text-lg"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (showUpdate) {
                          setShowUpdate(false);
                        } else {
                          setShowUpdate(true);
                        }
                      }}
                    >
                      수정
                    </p>
                    <p
                      className="cursor-pointer hover:text-white text-lg"
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowModal(true);
                      }}
                    >
                      삭제
                    </p>
                  </div>
                )}
              </div> */}
            </div>
          </div>
        </div>
        {showModal && (
          <DeleteCommentModal
            onCancel={closeModalHandler}
            onConfirm={() => confirmModalHandler(item.boardId)}
          />
        )}
      </div>
    </>
  );
}
