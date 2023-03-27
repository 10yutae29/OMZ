import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Model } from "../../assets/3DAvatar/Rabbit";
import CameraAvatar from "../common/CameraAvatar";
import {
  faHome,
  faHeart,
  faHeartCrack,
} from "@fortawesome/free-solid-svg-icons";
import TagList from "./TagList";
import FriendBtn from "./FriendBtn";
type Props = {
  handleRefuseModal(): void;
  handleProposalModal(): void;
  handleModalFor(memberId: number, nickname: string): void;
};
export default function FriendsCard({
  handleRefuseModal,
  handleProposalModal,
  handleModalFor,
}: Props) {
  // const tags = ["곰상", "ISFP", "짝꿍", "가능성", "95%"];
  const tags = ["100%", "가능성", "짝꿍", "곰상", "ISFP"];
  return (
    <div className="w-full bg-slate-500/50 rounded-2xl flex flex-col items-center gap-8 p-8">
      {/* <CameraAvatar Avatar={<Bear />} /> */}
      {/* <CameraAvatar Avatar={<Fox />} /> */}
      <CameraAvatar Avatar={<Model />} />
      <div className="font-semibold text-white">윾태초이</div>
      <TagList tags={tags} />
      <button className="text-white wor">
        <FontAwesomeIcon icon={faHome} className="mr-2" />
        놀러가기
      </button>
      <div className="flex justify-center my-8 gap-8">
        <FriendBtn
          icon={<FontAwesomeIcon icon={faHeart} />}
          text={"친구 신청"}
          logic={handleProposalModal}
        />
        <FriendBtn
          icon={<FontAwesomeIcon icon={faHeartCrack} />}
          text={"친구 거절"}
          logic={handleRefuseModal}
        />
      </div>
    </div>
  );
}
