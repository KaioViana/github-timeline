import React, { useEffect, useState } from "react";
import chevronUp from '../../../../../public/chevron-up.svg';
import Image from 'next/image';

export default function GoToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 20;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <>
      {isVisible && (
        <div className="bg-slate-500 fixed right-9 bottom-9 w-16 h-16 rounded-full items-center hover:cursor-pointer" onClick={goToBtn}>
          <div className="flex flex-row w-full h-full justify-center">
            <Image
              src={chevronUp}
              alt="Go to up page"
            />
          </div>
        </div>
      )}
    </>
  );
};


