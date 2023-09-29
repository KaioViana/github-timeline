import Card from "../Card";

interface TimelineProps {
  props: {
    repoName: string;
    description: string;
    languagesUrl: string;
    contributorsUrl: string;
    stargazersCount: number;
    watchersCount: number;
    repoHtmlUrl: string;
  }[]
}

export default function Timeline({ props }: TimelineProps) {
  return (
    <>
      <div className="max-w-7xl mx-auto w-full grid grid-cols-9 px-2">
        {
          props.map((item, index) => {
            if (index % 2 === 0) {
              return (
                <>
                  <div className="col-span-4 w-full h-full ">
                    <Card
                      props={{
                        repoName: item.repoName,
                        description: item.description,
                        languagesUrl: item.languagesUrl,
                        contributorsUrl: item.contributorsUrl,
                        stargazersCount: item.stargazersCount,
                        watchersCount: item.watchersCount,
                        repoHtmlUrl: item.repoHtmlUrl,
                      }}
                    />
                  </div>
                  <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                    <div className="h-full w-1 bg-slate-400"></div>
                    <div className="absolute w-6 h-6 rounded-full bg-slate-400 z-10 text-white text-center"></div>
                  </div>
                  <div className="col-span-4 w-full h-full"></div>
                </>
              )
            } else {
              return (
                <>
                  <div className="col-span-4 w-full h-full"></div>
                  <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                    <div className="h-full w-1 bg-slate-400"></div>
                    <div className="absolute w-6 h-6 rounded-full bg-slate-400 z-10 text-white text-center"></div>
                  </div>
                  <div className="col-span-4 w-full h-full ">
                    <Card
                      props={{
                        repoName: item.repoName,
                        description: item.description,
                        languagesUrl: item.languagesUrl,
                        contributorsUrl: item.contributorsUrl,
                        stargazersCount: item.stargazersCount,
                        watchersCount: item.watchersCount,
                        repoHtmlUrl: item.repoHtmlUrl,
                      }}
                    />
                  </div>
                </>
              )
            }
          })
        }
      </div>
    </>
  )
}
