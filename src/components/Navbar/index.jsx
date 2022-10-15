import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../../assets/logo/logo-mw2.svg";

const navigation = [
  { name: "Home", href: "https://mw.ub.ac.id/" },
  { name: "Tentang", href: "https://mw.ub.ac.id/tentang/" },
  { name: "MW INFO", href: "https://mw.ub.ac.id/category/berita/" },
  {
    name: "Data Pengurus dan Alumni",
    href: "https://mw.ub.ac.id/data-pengurus/",
  },
  { name: "Contact", href: "https://mw.ub.ac.id/contact-2/" },
];

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
                    <NavLink to="/">
                      <img
                        className="block h-8 w-auto lg:hidden"
                        src={logo}
                        alt="Your Company"
                      />
                    </NavLink>
                    <NavLink to="/">
                      <img
                        className="hidden h-10 w-auto lg:block"
                        src={logo}
                        alt="Your Company"
                      />
                    </NavLink>
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          smooth="true"
                          duration={500}
                          className="text-zinc-600 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-zinc-600 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium"
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </a>
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
