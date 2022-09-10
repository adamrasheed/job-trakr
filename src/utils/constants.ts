const isDev = process.env.NODE_ENV !== "production";
export const server = isDev ? "http://localhost:3000" : "https://myspace.com";

export const siteInfo = {
  title: "Job Trakr",
};

export const ROUTES = {
  BOARD: "/board",
  BOARDS: "/boards",
};
