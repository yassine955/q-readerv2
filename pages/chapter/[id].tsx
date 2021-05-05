import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { AyahTypes } from "../../interface/AyahsTypes";
import Router from "next/router";

interface Props {
   quran: AyahTypes;
}

const Chapter: React.FC<Props> = ({ quran }) => {
   return (
      <div>
         <div
            style={{
               background: "#0d0d0d",
               margin: "0 5rem",
               textAlign: "center",
            }}
         >
            <h1>{quran?.englishName}</h1>
            <h1
               style={{
                  fontFamily: "UTHMAN !important",
               }}
            >
               {quran?.name}
            </h1>
            <h1>{quran?.numberOfAyahs}</h1>
            <button onClick={() => Router.push("/")}>Back</button>
         </div>
         <div
            dir="rtl"
            style={{
               background: "#0d0d0d",
               margin: "0 5rem",
               color: "#FFF",
            }}
         >
            {quran?.ayahs?.map((ayah) => (
               <p
                  key={ayah?.numberInSurah}
                  style={{
                     fontFamily: "UTHMAN !important",
                     fontSize: "4rem",
                     padding: "1rem 15px",
                     lineHeight: "130px",
                     wordSpacing: "40px",
                  }}
               >{`${ayah?.numberInSurah}. ${ayah?.text}`}</p>
            ))}
         </div>
      </div>
   );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
   const res = await fetch(`https://api.alquran.cloud/v1/surah/${params?.id}`);

   const posts = await res.json();

   return {
      props: {
         quran: posts?.data,
      },
   };
};

export const getStaticPaths: GetStaticPaths = async () => {
   const res = await fetch(`https://api.alquran.cloud/v1/surah`);

   const quran = await res.json();

   const paths = quran?.data?.map((post) => ({
      params: { id: String(post?.number) },
   }));

   return {
      paths,
      fallback: false, // See the "fallback" section below
   };
};

export default Chapter;
