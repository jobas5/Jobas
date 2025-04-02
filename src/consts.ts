import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Jobas",
  DESCRIPTION: "Welcome to Jobas Personal Website, a portfolio and blog designed and wrote by me.",
  AUTHOR: "Jobas",
  DOMAIN: "https://jobas.github.io",
}

// Books Page
export const BOOKS: Page = {
  TITLE: "Books",
  DESCRIPTION: "Recent books I have read.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  {
    TEXT: "Home",
    HREF: "/",
  },
  {
    TEXT: "Books",
    HREF: "/books",
  },
  {
    TEXT: "Blog",
    HREF: "/blog",
  },
  {
    TEXT: "Projects",
    HREF: "/projects",
  },
]

// Socials
export const SOCIALS: Socials = [
  {
    NAME: "Email",
    ICON: "email",
    TEXT: "jonibastian01@gmail.com",
    HREF: "mailto:jonibastian01@gmail.com",
  },
  {
    NAME: "Github",
    ICON: "github",
    TEXT: "Joni Bastian",
    HREF: "https://github.com/jobas5"
  },
  {
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "Joni Bastian",
    HREF: "https://www.linkedin.com/in/jonibastian/",
  },
  {
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "Joni Bastian",
    HREF: "https://twitter.com/jobass_03",
  },
]

