'use client'

import Timeline from './components/Timeline';
import { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import GoToTop from './components/common/GoToTop';

export default function Home() {
  const [owner, setOwner] = useState('Google');
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function searchRepos(owner: string) {
      const response = await fetch(`/api/repos/search?query=${owner.trim()}`, {
        cache: 'no-store'
      })

      const repos = await response.json();
      setRepos(repos)
    }

    searchRepos(owner);
  }, [owner]);

  return (
    <>
      <main className="flex flex-col items-center justify-between">
        <div className='h-[230px] w-full border-b border-b-slate-500 bg-transparent bg-clip-padding blur-backdrop-filter'>
          <SearchBar
            getSearch={(owner) => setOwner(owner)}
          />
        </div>
        <div className='pb-6 pt-6'>
          <div className='flex flex-row w-full justify-center pb-4'><span className='text-white lg:text-3xl font-bold '>{`${owner} repositories`}</span></div>
          <Timeline
            props={repos.map((repo: any) => ({
              repoName: repo.name,
              description: repo.description,
              repoHtmlUrl: repo.html_url,
              languagesUrl: repo.languages_url,
              contributorsUrl: repo.contributors_url,
              stargazersCount: repo.stargazers_count,
              watchersCount: repo.watchers_count,
            }))
            }
          />
        </div>
      </main>
      <GoToTop />
    </>
  )
}
