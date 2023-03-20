import Camera3D from "../common/Camera3D";

export default function FriendsCard() {
  return (
    <div className="w-5/6 bg-slate-500/75 rounded-2xl h-full flex flex-col items-center">
      <Camera3D />
      <div>아바타</div>
      <div>이름</div>
      <div>태그</div>
      <button>놀러가기</button>
    </div>
  );
}
