import { A1Link } from "@atoms/A1Link";
import { A2Icon, IconNames } from "@atoms/A2Icon";

export type M3CTAProps = {
  label: string;
  url: string;
  classList?: string;
};

export const M3CTA = ({ label, url, classList }: M3CTAProps) => {
  const classMap = {
    parent:
      "cta-link transition-padding-inline-end relative flex w-fit items-center justify-between gap-4 overflow-hidden rounded-2xl bg-[#903DF7] py-4 pe-6 ps-4 text-white duration-300 ease-in-out hover:pe-8 hover:text-white",
    child:
      "link-icon transition-left relative left-0 z-10 duration-300 ease-in-out",
    parentChild: "[&>.link-icon]:hover:left-4",
    parentChildMisc: "[&>div]:hover:-right-8 [&>div]:hover:w-20",
    misc: "transition-right transition-width -z-5 absolute -right-5 aspect-square w-4 rounded-full bg-[#180A2A] duration-300 ease-in-out",
  };

  return (
    <A1Link
      label={label}
      url={url}
      classList={`${classMap.parent} ${classMap.parentChild} ${classMap.parentChildMisc} ${classList ?? ""} `}
    >
      <A2Icon name={IconNames.ARROW_RIGHT_ICON} classList={classMap.child} />
      <div className={classMap.misc}></div>
    </A1Link>
  );
};
