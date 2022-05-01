export const DEFAULT_LAYOUT = "default";

export const PROFILE_OPTIONS = [
  {
    name: "My Wallet",
    icon: "t2ico-wallet",
    route: {
      name: "Budget",
      params: {},
    },
  },
  {
    name: "Categories",
    icon: "t2ico-category",
    route: {
      name: "Categories",
      params: {},
    },
  },
  {
    name: "Privacy",
    icon: "t2ico-lock",
    route: {
      name: "Home",
      params: {},
    },
  },
  {
    name: "About",
    icon: "t2ico-info-square",
    route: {
      name: "Home",
      params: {},
    },
  },
  {
    name: "Logout",
    icon: "t2ico-logout",
    route: {
      name: "LogOut",
      params: {},
    },
  },
];

export const NAV_BOTTOM_ITEMS = [
  {
    icon: "t2ico-category",
    text: "Home",
    nameRoute: "Home",
  },
  {
    icon: "t2ico-chart",
    text: "Report",
    nameRoute: "Report",
  },
  {
    icon: "t2ico-presentation",
    text: "Budget",
    nameRoute: "Budget",
  },
  {
    icon: "t2ico-profile",
    text: "Profile",
    nameRoute: "Profile",
  },
];
