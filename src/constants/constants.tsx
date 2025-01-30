import { HomeIcon, PersonStanding, Settings2, Box } from "lucide-react";

export const navlinks = [
  {
    name: "Home",
    href: "/some",
  },
  {
    name: "products",
    href: "/products",
  },
  {
    name: "login",
    href: "/login",
  },
  {
    name: "register",
    href: "/register",
  },
];

export const registerfields = [
  {
    name: "username",
    type: "text",
  },
  {
    name: "email",
    type: "email",
  },
  {
    name: "password",
    type: "password",
    rules: {
      required: "Password is required",
      minLength: { value: 5, message: "Password is too short" },
    },
  },
];

export const loginfields = [
  {
    name: "email",
    type: "email",
    rules: {
      required: "Email is required",
      minLength: { value: 5, message: "Email is too short" },
    },
  },
  {
    name: "password",
    type: "password",
    rules: {
      required: "Password is required",
      minLength: { value: 5, message: "Password is too short" },
    },
  },
];

export const SidebarItems = [
  {
    label: "Home",
    icon: <HomeIcon />,
    path: "/",
  },
  {
    label: "Products",
    icon: <Box />,
    path: "/",
  },
  { label: "Profile", icon: <PersonStanding />, path: "/" },

  { label: "Settings", icon: <Settings2 />, path: "/" },
];
