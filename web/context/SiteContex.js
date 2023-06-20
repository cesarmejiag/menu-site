import { createContext } from "react";

export const siteLinks = [
  { href: "come-todo", label: "Come todo" },
  { href: "/menu-a-la-carta", label: "Menú a la carta" },
  { href: "/bebidas", label: "Bebidas" },
  { href: "/promociones", label: "Promociones" },
  { href: "/postres", label: "Postes" },
];

export const socialLinks = [
  { href: "https://www.instagram.com/lachidavida", label: "Instagram" },
  { href: "https://www.facebook.com/chidachidavida", label: "Facebook" },
];

export const homePromos = [
  "/assets/images/promo-1.jpg",
  "/assets/images/promo-2.jpg",
  "/assets/images/promo-3.jpg",
];

export const SiteContext = createContext({});
