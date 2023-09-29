import CardTag from "./CardTag";
import Image from 'next/image';
import starImage from '../../../../public/star_white.svg';
import arrowRight from '../../../../public/arrow-right.svg';
import { useEffect, useState } from "react";

interface CardProps {
  props: {
    repoName: string;
    description: string;
    languagesUrl: string;
    contributorsUrl: string;
    stargazersCount: number;
    watchersCount: number;
    repoHtmlUrl: string;
  }
}

export default function Card({ props }: CardProps) {
  const [languages, setLanguages] = useState<string[]>([]);
  useEffect(() => {
    async function getLanguages() {
      const response = await fetch(props.languagesUrl);
      const languages = Object.keys(await response.json());
      setLanguages(languages)
    }

    getLanguages();
  }, [props.languagesUrl]);

  return (
    <div className="relative text-white px-6 py-3 h-full min-h-[240px] max-w-7xl bg-slate-600/50 backdrop-filter shadow-lg rounded-2xl border border-slate-600">
      <div className="flex flex-row pb-4 justify-between">
        <span className="lg:text-xl font-bold">{props.repoName}</span>
        <div className="flex flex-row items-center gap-2">
          <Image
            src={starImage}
            alt="Star Image"
          />
          <span>{props.stargazersCount}</span>
        </div>
      </div>
      <div className="flex flex-col pb-4 gap-1">
        <span className="lg:text-lg font-medium">Description:</span>
        <p>{props?.description ?? 'No description'}</p>
      </div>
      <div className="border border-b-slate-600" />
      <div className="flex flex-col w-full justify-center lg:pt-6">
        <div className="pt-2 flex flex-col justify-between sm:justify-center">
          <div className="grid lg:grid-cols-4 lg:grid-rows-3 md:grid-cols-2 md:grid-rows-1 gap-1 pb-4">
            {
              languages.map((language, key) => (<CardTag key={key} props={{ language }} />))
            }
          </div>
        </div>
        <div className="flex flex-row w-full  justify-end transition ease-in-out delay-200 hover:translate-y-1 hover:scale-105 duration-300">
          <a href={props.repoHtmlUrl} className="flex flex-row gap-2" target="_blank">
            View on Github
            <Image src={arrowRight} alt="arrow" />
          </a>
        </div>
      </div>
    </div>
  )
}
