export interface Core {
  header: Header;
  footer: Footer;
  white_logo: MediaFile;
  dark_logo: MediaFile;
  generalColors: GeneralColors;
  social: Social;
}

export interface MediaFile {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: EXT | string;
  mime: MIME | string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  data: Data;
  type: string;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
  uuid: null;
}

export interface Data {}

export enum EXT {
  Webp = ".webp",
}

export interface Formats {
  large: Large;
  small: Large;
  medium: Large;
  thumbnail: Large;
}

export interface Large {
  ext: EXT | string;
  url: string;
  hash: string;
  mime: MIME | string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
}

export enum MIME {
  ImageWebp = "image/webp",
}

export interface Footer {
  "background-color": string;
  "text-color": string;
  "text-hover": string;
  logo: MediaFile;
  menu: Menu[];
}

export interface Menu {
  label: string;
  slug: string;
  href: null | string;
  newTab: boolean;
}

export interface GeneralColors {
  background: string;
  black: string;
  "primary-dark": string;
  "primary-disabled": string;
  primary: string;
  "secondary-dark": string;
  "secondary-lightest": string;
  "secondary-disabled": string;
  secondary: string;
  "success-lightest": string;
  "success-dark": string;
  success: string;
  info: string;
  danger: string;
}

export interface Header {
  id: number;
  html: null;
  link: null;
  logo: MediaFile;
  banner: MediaFile[];
  menu: Menu[];
  "background-color": string;
  "text-color": string;
  "text-hover": string;
}

export interface Social {
  fb: string;
  ws: string;
  ins: string;
  yb: string;
}
