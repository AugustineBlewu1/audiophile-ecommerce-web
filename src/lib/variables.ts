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
    link: "/speaker",
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

export function getHeadphonesLayout(slug: string) : 'left' | 'right' {
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

export function getSpeakersLayout(slug: string) : 'left' | 'right' {
  switch (slug) {
    case "zx9-speaker":
      return "left";
    case "zx7-speaker":
      return "right";
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

  /**
   * split a text into two after a text
   * @param text 
   * @param word 
   * @returns an array
   */
  export function splitAfterWord(text: string, word: string) {
  const index = text.indexOf(word);

  if (index === -1) {
    return [text, ""];
  }

  const splitIndex = index + word.length;

  const firstPart = text.slice(0, splitIndex).trim();
  const secondPart = text.slice(splitIndex).trim();

  return [firstPart, secondPart];
}