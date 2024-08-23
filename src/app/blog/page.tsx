import Blog from "@/component/blogs/blog";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Blog FLowty – ICO FLY ",
};
const index = () => {
  return (
    <Wrapper>
      <Blog />
    </Wrapper>
  )
}

export default index