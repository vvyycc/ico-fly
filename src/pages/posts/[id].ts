// // pages/posts/[id].tsx
// import { GetServerSideProps, NextPage } from 'next';
// import { ParsedUrlQuery } from 'querystring';

// interface Post {
//   title: string;
//   content: string;
// }

// interface PostPageProps {
//   post: Post;
// }

// interface IParams extends ParsedUrlQuery {
//   id: string;
// }

// const PostPage: NextPage<PostPageProps> = ({ post }) => {
//   return (<div>{post.title}</div>);
// };

// export const getServerSideProps: GetServerSideProps<PostPageProps, IParams> = async (context) => {
//   const { id } = context.params!;
//   const res = await fetch(`https://api.example.com/posts/${id}`);
//   const post: Post = await res.json();

//   return { props: { post } };
// };

// export default PostPage;
