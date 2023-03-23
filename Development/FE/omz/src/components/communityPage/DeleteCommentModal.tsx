import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function DeleteCommentModal(props: any) {
  // esc 누르면 모달 사라지게 하기
  window.onkeydown = function (event) {
    if (event.keyCode == 27) {
      props.onCancel();
    }
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 ">
        <div
          id="배경"
          onClick={() => props.onCancel()}
          className="absolute opacity-25 w-full h-full inset-0 bg-black"
        ></div>
        <div className="relative w-auto mx-auto max-w-3xl">
          <div className="p-5 rounded-lg shadow-lg relative flex flex-col w-full bg-white">
            <div className="flex justify-between items-center">
              <FontAwesomeIcon icon={faTrash} />
              <p>댓글을 정말 삭제하시겠습니까?</p>
              <button onClick={() => props.onCancel()}>
                <FontAwesomeIcon
                  icon={faXmark}
                  size="lg"
                  className="hover:text-red-500"
                  onClick={() => props.onCancel()}
                />
              </button>
            </div>
            <div className="flex items-center justify-between p-6 gap-5">
              <button onClick={props.onConfirm} className="border-2">
                예
              </button>
              <button onClick={props.onCancel}>아니오</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}