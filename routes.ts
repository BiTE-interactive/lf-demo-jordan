import { Region } from "./data/ladder";

export const getRegion = () =>
  typeof window === "undefined"
    ? ""
    : (new URLSearchParams(window.location.search).get("region") as Region);

export const routes = {
  HOME: () => {
    const region = getRegion();
    const regionQuery = region ? `?region=${region}` : "";
    return `/${regionQuery}`;
  },
  PLAYER: (id: string) => {
    const region = getRegion();
    const regionQuery = region ? `?region=${region}` : "";
    return `/player/${id}${regionQuery}`;
  },
};
