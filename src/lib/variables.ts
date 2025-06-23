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

export function getHeadphonesLayout(slug: string): "left" | "right" {
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

export function getSpeakersLayout(slug: string): "left" | "right" {
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
    image: "./assets/shared/desktop/image-category-thumbnail-headphones.png",
    link : "/headphones"
  },
  {
    name: "Speakers",
    image: "./assets/shared/desktop/image-category-thumbnail-speakers.png",
    link : "/speaker"
  },
  {
    name: "Earphones",
    image: "./assets/shared/desktop/image-category-thumbnail-earphones.png",
    link : "/earphones"
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
