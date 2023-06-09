import { images } from "../assets/images";
import TitleBar from "../components/common/TitleBar";
import CommunityMyPageBanner from "../components/communityPage/CommunityMyPageBanner";
import CommunityNavbar from "../components/communityPage/CommunityNavbar";
import { getMemberArticle } from "../api/community";
import { useQuery } from "react-query";
import CommunityArticleItem from "../components/communityPage/CommunityArticleItem";
import Loading from "../components/common/Loading";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Masonry from "react-masonry-css";

type Article = {
  [key: string]: any;
};

export default function CommunityMyPage() {
  const { memberId } = useParams();
  if (!memberId) {
    return <h3>Invalid memberId</h3>;
  }
  const memberIdNumber = parseInt(memberId);
  let page = 0;
  const sort = "registeredTime,DESC";
  const { data, isLoading, isError, refetch } = useQuery("articlemy", () =>
    getMemberArticle(memberIdNumber, page, 100, sort)
  );

  useEffect(() => {
    refetch();
  }, []);

  if (isLoading) return <Loading />;
  if (isError) return <p className="title">Error...</p>;
  // const memberNickname = data?.data.content[0].member.nickname;
  const memberNickname = data?.data.member.nickname;
  const file = data?.data.member.file;
  return (
    <div className="flex flex-col items-center">
      <TitleBar title="Community" icon={images.community_img} goto={`/community`} />
      <CommunityMyPageBanner item={memberNickname} memberId={memberIdNumber} file={file}/>
      {/* <div className="w-11/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.data.articles.content.map((article: Article) => (
          <CommunityArticleItem
            key={article.boardId}
            item={article}
            refetch={refetch}
          />
        ))}
      </div> */}
      <Masonry
        breakpointCols={{ default: 1, 3000: 3, 1000: 2, 600: 1 }}
        className="my-masonry-grid w-11/12 gap-4"
        columnClassName="my-masonry-grid_column"
      >
        {data?.data.articles.content.map((article: Article) => (
          <CommunityArticleItem
            key={article.boardId}
            item={article}
            refetch={refetch}
          />
        ))}
      </Masonry>
      <div className="pb-20"></div>
      <CommunityNavbar />
    </div>
  );
}
