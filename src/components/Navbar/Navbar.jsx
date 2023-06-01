import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  MapIcon,
  UserGroupIcon,
  FolderOpenIcon,
} from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";

const categories = ["Playa", "Montaña", "Ciudad"];

const navigation = [{ name: "Destinos", to: "/travelPrueba/", current: false }];

const category = [
  ...categories.map((category) => ({
    name: category,
    to: `/travelPrueba/category/${category}`,
    current: true,
  })),
];

const submenuItems = [
  { name: "Añadir destinos", to: "/travelPrueba/form", current: true },
  {
    name: "Modificar Destinos",
    to: "/travelPrueba/formUpdate",
    current: true,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-custom-black hover:bg-custom-salmon hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-9 w-auto lg:hidden object-contain"
                    src={logo}
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-9 w-auto lg:block object-contain"
                    src={logo}
                    alt="Your Company"
                  />
                </div>

                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.to}
                        activeclassname="bg-gray-900 text-white"
                        className={classNames(
                          "text-customer-black hover:bg-custom-salmon hover:text-white",
                          {
                            "bg-gray-900 text-white": item.current,
                          },
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                      >
                        <div className="flex items-center">
                          <MapIcon className="h-6 w-6" aria-hidden="true" />
                          {item.name}
                        </div>
                      </NavLink>
                    ))}
                  </div>
                </div>

                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <Disclosure.Button
                            as={NavLink}
                            to="#"
                            activeClassName="bg-gray-900 text-white"
                            className={classNames(
                              "text-customer-black hover:bg-custom-salmon hover:text-white",
                              "rounded-md px-3 py-2 text-sm font-medium"
                            )}
                          >
                            <div className="flex items-center">
                              <FolderOpenIcon className="h-6 w-6" />
                              Categorias
                            </div>
                          </Disclosure.Button>
                          <div className="relative z-50">
                            <Transition
                              show={open}
                              enter="transition ease-out duration-100"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                              leave="transition ease-in duration-75"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95"
                            >
                              <Disclosure.Panel
                                static
                                className="absolute mt-2 bg-custom-salmon text-white rounded-md top-10 right-0 w-auto  py-2 shadow-lg ring-black ring-opacity-5 focus:outline-none z-50"
                              >
                                {category.map((item) => (
                                  <NavLink
                                    key={item.name}
                                    to={item.to}
                                    activeClassName="bg-gray-900 text-white"
                                    className={classNames(
                                      "text-custom-blue hover:bg-custom-blue hover:text-custom-blue3",
                                      {
                                        "bg-gray-900 text-white": item.current,
                                      },
                                      "block px-4 py-2"
                                    )}
                                  >
                                    {item.name}
                                  </NavLink>
                                ))}
                              </Disclosure.Panel>
                            </Transition>
                          </div>
                        </>
                      )}
                    </Disclosure>
                  </div>
                </div>

                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <Disclosure.Button
                            as={NavLink}
                            to="#"
                            className={classNames(
                              "text-customer-black hover:bg-custom-salmon hover:text-white",
                              "rounded-md px-3 py-2 text-sm font-medium"
                            )}
                          >
                            <div className="flex items-center">
                              <UserGroupIcon className="h-6 w-6" />
                              Proveedores
                            </div>
                          </Disclosure.Button>
                          <div className="relative z-50">
                            <Transition
                              show={open}
                              enter="transition ease-out duration-100"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                              leave="transition ease-in duration-75"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95"
                            >
                              <Disclosure.Panel
                                static
                                className="absolute mt-2 bg-custom-salmon text-white rounded-md top-10 right-0 w-auto  py-2 shadow-lg ring-black ring-opacity-5 focus:outline-none"
                              >
                                {submenuItems.map((item) => (
                                  <NavLink
                                    key={item.name}
                                    to={item.to}
                                    activeClassName="bg-gray-900 text-white"
                                    className={classNames(
                                      "text-customer-black hover:bg-custom-blue hover:text-custom-blue3",
                                      {
                                        "bg-gray-900 text-white": item.current,
                                      },
                                      "block px-4 py-2"
                                    )}
                                  >
                                    {item.name}
                                  </NavLink>
                                ))}
                              </Disclosure.Panel>
                            </Transition>
                          </div>
                        </>
                      )}
                    </Disclosure>
                  </div>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="rounded-full bg-with p-1 text-custom-black hover:text-custom-salmon focus:outline-none focus:ring-2 focus:ring-custom-salmon focus:ring-offset-2 focus:ring-offset-custom-salmon"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-with text-sm focus:outline-none focus:ring-2 focus:ring-custom-salmon focus:ring-offset-2 focus:ring-offset-custom-salmon">
                      <span className="sr-only">Open user menu</span>
                      <UserCircleIcon
                        className="h-6 w-6 text-custom-black hover:text-custom-salmon"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Iniciar Sesión
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Configuración
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Cerrar sesión
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden space-y-4 p-4">
            <div>
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  to={item.to}
                  className={classNames(
                    item.current
                      ? "bg-custom-salmon text-custom-black"
                      : "text-custom-black hover:bg-custom-salmon hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  <div className="flex items-center">
                    <MapIcon className="h-auto w-6  my-0" aria-hidden="true" />
                    {item.name}
                  </div>
                </Disclosure.Button>
              ))}
            </div>
            <div>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      as={NavLink}
                      to="#"
                      activeClassName="bg-gray-900 text-white"
                      className={classNames(
                        "text-custom-black hover:bg-custom-salmon hover:text-white",
                        "block rounded-md px-3 py-2 text-sm font-medium"
                      )}
                    >
                      <div className="flex items-center  my-0">
                        <FolderOpenIcon
                          className="h-auto w-6  my-0"
                          aria-hidden="true"
                        />
                        Categorias
                      </div>
                    </Disclosure.Button>

                    <Transition
                      show={open}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Disclosure.Panel static>
                        {category.map((item) => (
                          <NavLink
                            key={item.name}
                            to={item.to}
                            className={classNames(
                              " rounded-md text-custom-black hover:bg-custom-salmon hover:text-white ",
                              {
                                "bg-gray-900 text-custom-black ": item.current,
                              },
                              "block px-4 py-2 "
                            )}
                          >
                            {item.name}
                          </NavLink>
                        ))}
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            </div>
            <div>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      as={NavLink}
                      to="#"
                      className={classNames(
                        "text-custom-black hover:bg-custom-salmon hover:text-white",
                        "block rounded-md px-3 py-2 text-sm font-medium"
                      )}
                    >
                      <div className="flex items-center  my-0">
                        <UserGroupIcon className="w-6 h-auto my-0" />
                        Proveedores
                      </div>
                    </Disclosure.Button>

                    <Transition
                      show={open}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Disclosure.Panel static>
                        {submenuItems.map((item) => (
                          <NavLink
                            key={item.name}
                            to={item.to}
                            activeClassName="bg-gray-900 text-white"
                            className={classNames(
                              "rounded-md text-custom-black hover:bg-custom-salmon hover:text-white ",
                              {
                                "bg-gray-900 text-custom-black ": item.current,
                              },
                              "block px-4 py-2 "
                            )}
                          >
                            {item.name}
                          </NavLink>
                        ))}
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
