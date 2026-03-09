export type NavItem = {
  key: string;
  label: string;
  isActive?: boolean;
};

export const navItems: NavItem[] = [
  { key: "workout", label: "운동" },
  { key: "routes", label: "루트", isActive: true },
];
