import { A1Link } from "@atoms/A1Link";
import { A2Icon, IconNames } from "@atoms/A2Icon";

export type M8SocialLinksProps = {
  hideLabel?: boolean;
};

export const M8SocialLinks = ({ hideLabel = true }: M8SocialLinksProps) => {
  const hideLabelClass = hideLabel ? "[&>.link-label]:sr-only" : "";

  return (
    <ul className="flex items-center justify-center space-x-4">
      <li>
        <A1Link
          label="Facebook"
          url="https://www.facebook.com/simplimuv"
          newTab
          classList={`hover:text-purple ${hideLabelClass}`}
        >
          <A2Icon name={IconNames.FACEBOOK_ICON} />
        </A1Link>
      </li>
      <li>
        <A1Link
          label="Instagram"
          url="https://www.instagram.com/simplimuv"
          newTab
          classList={`hover:text-purple ${hideLabelClass}`}
        >
          <A2Icon name={IconNames.INSTAGRAM_ICON} />
        </A1Link>
      </li>
      <li>
        <A1Link
          label="Twitter"
          url="https://twitter.com/simplimuv"
          newTab
          classList={`hover:text-purple ${hideLabelClass}`}
        >
          <A2Icon name={IconNames.TWITTER_ICON} />
        </A1Link>
      </li>
      <li>
        <A1Link
          label="YouTube"
          url="https://www.youtube.com/channel/UC4c4V0K4k1s3QI7V1f2J2Pw"
          newTab
          classList={`hover:text-purple ${hideLabelClass}`}
        >
          <A2Icon name={IconNames.YOUTUBE_ICON} />
        </A1Link>
      </li>
    </ul>
  );
};
