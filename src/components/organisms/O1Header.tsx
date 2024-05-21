import Image from "next/image";

import { M1HeaderNav } from "@molecules/M1HeaderNav";

export const O1Header = () => {
  return (
    <header className="flex justify-between gap-4 bg-black px-8 py-6 font-bold text-white">
      <div className="">
        <Image
          src="/images/logo.svg"
          alt="Royal Enfield logo"
          width={200}
          height={30}
        />
      </div>
      <M1HeaderNav />
    </header>
  );
};
