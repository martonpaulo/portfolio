import type { PagesCollection } from "@/types/pagesCollection";

function createPage(page: {
  label: string;
  pathname: string;
  showInNavbar: boolean;
}) {
  const { label, pathname, showInNavbar } = page;

  return {
    label,
    pathname,
    showInNavbar,
    pageTitle: `${label} | Marton Paulo`,
  };
}

export const pagesMetadata: PagesCollection = {
  home: createPage({
    label: "Home",
    pathname: "/",
    showInNavbar: true,
  }),
  projects: createPage({
    label: "Projects",
    pathname: "/projects",
    showInNavbar: true,
  }),
  about: createPage({
    label: "About Me",
    pathname: "/about",
    showInNavbar: true,
  }),
  contact: createPage({
    label: "Contact",
    pathname: "/contact",
    showInNavbar: true,
  }),
  admin: createPage({
    label: "Admin",
    pathname: "/admin",
    showInNavbar: false,
  }),
};
