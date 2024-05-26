import Link from "next/link";
import { A2Icon, IconNames } from "@atoms/A2Icon";
import { M1HeaderNav } from "@molecules/M1HeaderNav";

export const O1Header = () => {
  return (
    <header className="fixed z-20 flex w-full justify-between gap-4 px-8 py-6 align-middle">
      <Link href="/">
        <A2Icon
          name={IconNames.SIMPLI_LOGO}
          label="SimpliMuv logo"
          classList="hover:text-primary text-[#903DF7]"
        />
      </Link>
      <M1HeaderNav />
    </header>
  );
};
