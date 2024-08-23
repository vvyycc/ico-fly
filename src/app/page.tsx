
"use client"
import HomeOne from "@/component/homes/home-one";
import Wrapper from "@/layouts/Wrapper";
// import  appWithTranslation  from '../../i18.js';
import { AppProps } from "next/app";
 interface PageProps {
  locale: string;
  defaultLocale: string;
  messages:string;
  // Add other properties as needed
}

interface CustomAppProps extends AppProps {
  pageProps: {
    locale: string;
    defaultLocale: string;
    messages: Record<string, string>;
  };
}
// export const metadata = {
//   title: "FLowty – ICO FLY ",
// };
const index: React.FC<PageProps> = async() => {


  return (
    <Wrapper>
      <HomeOne />
    </Wrapper>
  )
}
//  const getServerSideProps: GetServerSideProps<PageProps> = async (context) => {
//   // Fetch data based on locale or other parameters available in context.params or context.req
//   const locale = context.locale ?? 'en';
//   const defaultLocale = context.defaultLocale ?? 'en';
//   const messages = {}; // Fetch or define messages based on locale

//   return {
//     props: { locale, defaultLocale, messages },
//   };
// };
export default index;



