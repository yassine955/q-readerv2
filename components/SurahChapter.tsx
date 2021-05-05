import React from "react";
import Router from "next/router";
import { SurahSingleChapter } from "../interface/SurahChaptersTypes";

interface Props {
   chapter: SurahSingleChapter;
}

export const _SurahChapter: React.FC<Props> = ({ chapter }) => {
   return (
      <div
         onClick={() => {
            Router.push(`/chapter/${chapter?.number}`);
         }}
      >
         <div className="chapter-container">{`${chapter?.number}. ${chapter?.englishName} | ${chapter?.numberOfAyahs}`}</div>
         <style jsx>{`
            .chapter-container {
               background: #1f1f1f;
               margin: 1rem;
               font-size: 3rem;
               color: white;
               padding: 5px 1rem;
               cursor: pointer;
            }
         `}</style>
      </div>
   );
};
