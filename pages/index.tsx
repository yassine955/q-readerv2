import { GetStaticProps } from "next";
import React from "react";
import { _SurahChapter } from "../components/SurahChapter";
import { SurahChaptersTypes } from "../interface/SurahChaptersTypes";

interface Props {
   posts: SurahChaptersTypes;
}

const Home: React.FC<Props> = ({ posts }) => {
   return (
      <div>
         {posts?.data?.map((chapter) => (
            <_SurahChapter key={chapter?.number} chapter={chapter} />
         ))}
      </div>
   );
};

export const getStaticProps: GetStaticProps = async ({}) => {
   const res = await fetch("https://api.alquran.cloud/v1/surah");

   const posts = await res.json();

   return {
      props: {
         posts,
      },
   };
};

export default Home;
