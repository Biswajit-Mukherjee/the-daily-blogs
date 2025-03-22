import * as React from "react";
import Image from "next/image";

const Jumbotron: React.FC = () => {
  return (
    <div className="w-full h-[240px] sm:h-[360px] md:h-[480px] relative bg-slate-400">
      <div className="w-full h-full absolute top-0 left-0 z-[1] bg-black/50" />
      <Image
        className="w-full object-cover bg-center"
        src="/jumbotron.webp"
        alt="jumbotron"
        fill
        priority
      />
      <div className="text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <h1 className="text-xl sm:text-3xl md:text-5xl font-bold text-white antialiased select-none">
          Welcome to The Daily Blogs
        </h1>
      </div>
    </div>
  );
};

export default Jumbotron;
