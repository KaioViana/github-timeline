import Image from "next/image"
import githubLogo from '../../../../public/github-logo.svg'

export default function Header(props: any) {
  return (
    <header className="sticky top-0 border-b border-b-slate-500 bg-slate-900 bg-opacity-40 z-40">
      <div className="bg-clip-padding blur-backdrop-filter">
        <nav className="mx-auto max-w-7xl flex w-full justify-between p-6 lg:px-8">
          <div>
            <a href="#" className="flex lg:flex-1 items-center gap-3">
              <Image src={githubLogo} alt="Github logo" width={40} height={40} />
              <span className="font-bold text-white">Github Timeline</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
