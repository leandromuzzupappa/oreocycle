import { A1Link } from "@atoms/A1Link";
import { M8SocialLinks } from "@molecules/M8SocialLinks";

export const O4Footer = () => {
  const footerLinks = {
    prefooter: {
      links: [
        { label: "Shop", url: "#" },
        { label: "Accesorios", url: "#" },
        { label: "Indumentaria", url: "#" },
      ],
      motos: [
        { label: "Bonneville T120", url: "#" },
        { label: "Meteor 350", url: "#" },
        { label: "Heritage Classic", url: "#" },
        { label: "Street Bob 114", url: "#" },
        { label: "Fat Bob 114", url: "#" },
      ],
      address: [
        {
          label: "Av. Del Libertador 3304, Vicente López, 1637, Argentina",
          url: "#",
        },
        {
          label: "info@revicentelopez.com",
          url: "mailto:info@revicentelopez.com",
        },
        {
          label: "11 3221 9220",
          url: "tel:+541132219220",
        },
      ],
    },
    legals: [
      { label: "Defensa del consumidor", url: "#" },
      { label: "Términos y condiciones", url: "#" },
      { label: "Politica de privacidad", url: "#" },
      { label: "Sitemap", url: "#" },
    ],
  };

  const beforeClasses =
    "before:bg-purpleDark before:absolute before:top-0 before:left-0 before:w-screen before:h-full before:left-[50%] before:-translate-x-2/4 before:-z-10";

  return (
    <section
      className={`relative mx-auto mt-24 w-full max-w-[1110px] px-4 py-16 text-center text-white lg:px-0 ${beforeClasses}`}
    >
      <div className="pre-footer mb-16 flex flex-wrap text-center lg:flex-nowrap lg:text-left">
        <ul className="mb-4 w-full max-w-[255] space-y-4">
          {footerLinks.prefooter.links.map((link, index) => (
            <li key={`footer-link-${link.label}+${index}`}>
              <A1Link {...link} classList="hover:text-white font-bold"></A1Link>
            </li>
          ))}
        </ul>

        <ul className="mb-4 w-full max-w-[255] space-y-4">
          <h6 className="font-bold">Motos</h6>
          {footerLinks.prefooter.motos.map((link, index) => (
            <li key={`footer-link-${link.label}+${index}`}>
              <A1Link
                {...link}
                classList="text-secondary-lightest hover:text-white"
              ></A1Link>
            </li>
          ))}
        </ul>

        <ul className="mb-4 w-full max-w-[255] space-y-4">
          <h6 className="font-bold">Dirección</h6>
          {footerLinks.prefooter.address.map((link, index) => (
            <li key={`footer-link-${link.label}+${index}`}>
              <A1Link
                {...link}
                classList="text-secondary-lightest hover:text-white"
              ></A1Link>
            </li>
          ))}
        </ul>

        <div className="w-full max-w-[255] space-y-4">
          <h6 className="font-bold">Sobre nosotros</h6>
          <p className="text-secondary-lightest">Contactános</p>
          <div className="lg:w-fit">
            <M8SocialLinks />
          </div>
        </div>
      </div>

      <ul className="flex w-full flex-wrap justify-center gap-4 border-t-[1px] border-[#261041] pt-7 lg:justify-start">
        {footerLinks.legals.map((link, index) => (
          <li key={`footer-link-${link.label}+${index}`}>
            <A1Link
              {...link}
              classList="hover:text-white w-full sm:w-fit-content"
            ></A1Link>
          </li>
        ))}

        <li className="text-secondary-lightest lg:ml-auto">
          <small>© 2023 SimpliMuv</small>
        </li>
      </ul>
    </section>
  );
};
