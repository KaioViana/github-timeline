import React, { useState } from "react";
import Image from 'next/image';
import searchIcon from '../../../../public/search.svg';

interface SearchBarProps {
  getSearch: (search: string) => void;
}

export default function SearchBar({ getSearch }: SearchBarProps) {
  const [value, setValue] = useState<string>('')

  function handleSubmit(e: React.FormEvent<HTMLElement>) {
    e.preventDefault();

    getSearch(value);
  }

  return (
    <div className="flex flex-row p-6 justify-center h-full">
      <form className="lg:w-[500px] top-1/3 relative" onSubmit={handleSubmit}>
        <div className="relative">
          <input
            className="w-full p-4 rounded-full bg-white"
            type='text'
            placeholder="Search for users or organizations repositories"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            className="absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-slate-500 rounded-full"
            type="submit"
          >
            <Image
              src={searchIcon}
              alt="Search icon"
              width={18}
            />
          </button>
        </div>
      </form>
    </div>
  )
}
