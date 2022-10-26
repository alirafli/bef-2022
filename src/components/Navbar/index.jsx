import React from "react";
import { Link, Outlet, useMatch, useResolvedPath } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../../assets/logo/logo-bef.svg";
import classNames from "classnames";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Seminar", href: "/seminar" },
  { name: "Expo", href: "/expo" },
  { name: "Competition", href: "/competition" },
  { name: "Live", href: "/live" },
  { name: "About Us", href: "/about-us" },
];

function CustomLink({ children, to, className, addStyle, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        className={classNames(
          match ? "text-orange-600" : "text-zinc-600 hover:text-orange-400",
          "px-3 py-2 rounded-md text-sm font-medium",
          addStyle
        )}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}

const Navbar = () => {
  return (
    <>
      <Disclosure as="nav" className="bg-white fixed w-full z-50 bg-opacity-75">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                  <div className="flex flex-shrink-0 items-center">
                    <Link to="/">
                      <img className="h-8 w-auto" src={logo} alt="BEF 2022" />
                    </Link>
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <CustomLink
                          key={item.name}
                          to={item.href}
                          addStyle="px-3 py-2 rounded-md text-sm font-medium"
                        >
                          {item.name}
                        </CustomLink>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <CustomLink
                    key={item.name}
                    to={item.href}
                    addStyle="block px-3 py-2 rounded-md text-base font-medium"
                  >
                    {item.name}
                  </CustomLink>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Outlet />
    </>
  );
};

export default Navbar;
