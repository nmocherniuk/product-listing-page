import React, { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationProps {
  isOpen: boolean;
  toogleMenu: () => void;
}

interface NavItem {
  title: string;
  to: string;
}

const Navigation: FC<NavigationProps> = ({ isOpen, toogleMenu }) => {
  const pathname = usePathname();

  const navItems: NavItem[] = [
    { title: "Home", to: "/" },
    { title: "Product List", to: "/products" },
  ];

  return (
    <nav
      className={`absolute left-0 top-[90px] w-full bg-purple py-8 ${isOpen ? "block border-t border-gray-500 sm:border-none" : "hidden sm:block"} sm:static sm:w-auto sm:bg-transparent`}
    >
      <ul
        className={`flex flex-col items-center justify-center gap-y-6 sm:flex-row sm:gap-x-11`}
      >
        {navItems.map((navItem: NavItem, index: number) => (
          <li key={`nav-${index}`}>
            <Link
              href={navItem.to}
              className={`text-lg ${
                pathname === navItem.to ? "text-white" : "text-gray-400"
              }`}
              onClick={toogleMenu}
            >
              {navItem.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
