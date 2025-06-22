import { SpeakersList } from "./interface";

export const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "HeadPhones",
    link: "/headphones",
  },
  {
    name: "Speakers",
    link: "/speakers",
  },
  {
    name: "Earphones",
    link: "/earphones",
  },
];

export const socialIcons = [
  "./assets/shared/desktop/icon-facebook.svg",
  "./assets/shared/desktop/icon-instagram.svg",
  "./assets/shared/desktop/icon-twitter.svg",
];

export function getLayout(slug: string) : 'left' | 'right' {
  switch (slug) {
    case "xx99-mark-two-headphones":
      return "left";
    case "xx99-mark-one-headphones":
      return "right";
    case "xx59-headphones":
      return "left";
    default:
      return "left";
  }
}

 export const speakersList: SpeakersList[] = [
    {
      name: "Headphones",
      image: {
        mobile:
          "./assets/shared/mobile/image-category-thumbnail-headphones.png",
        tablet:
          "./assets/shared/tablet/image-category-thumbnail-headphones.png",
        desktop:
          "./assets/shared/desktop/image-category-thumbnail-headphones.png",
      },
    },
    {
      name: "Speakers",
      image: {
        mobile: "./assets/shared/mobile/image-category-thumbnail-speakers.png",
        tablet: "./assets/shared/tablet/image-category-thumbnail-speakers.png",
        desktop:
          "./assets/shared/desktop/image-category-thumbnail-speakers.png",
      },
    },
    {
      name: "Earphones",
      image: {
        mobile: "./assets/shared/mobile/image-category-thumbnail-earphones.png",
        tablet: "./assets/shared/tablet/image-category-thumbnail-earphones.png",
        desktop:
          "./assets/shared/desktop/image-category-thumbnail-earphones.png",
      },
    },
  ];