'use client'

import { Fragment, useState } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@headlessui/react'
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const currencies = ['CAD', 'USD', 'AUD', 'EUR', 'GBP']
const navigation = {
  categories: [
    // {
    //   name: 'Women',
    //   featured: [
    //     {
    //       name: 'New Arrivals',
    //       href: '#',
    //       imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/mega-menu-category-01.jpg',
    //       imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
    //     },
    //     {
    //       name: 'Basic Tees',
    //       href: '#',
    //       imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/mega-menu-category-02.jpg',
    //       imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
    //     },
    //     {
    //       name: 'Accessories',
    //       href: '#',
    //       imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/mega-menu-category-03.jpg',
    //       imageAlt: 'Model wearing minimalist watch with black wristband and white watch face.',
    //     },
    //     {
    //       name: 'Carry',
    //       href: '#',
    //       imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/mega-menu-category-04.jpg',
    //       imageAlt: 'Model opening tan leather long wallet with credit card pockets and cash pouch.',
    //     },
    //   ],
    // },
    // {
    //   name: 'Men',
    //   featured: [
    //     {
    //       name: 'New Arrivals',
    //       href: '#',
    //       imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/mega-menu-01-men-category-01.jpg',
    //       imageAlt: 'Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.',
    //     },
    //     {
    //       name: 'Basic Tees',
    //       href: '#',
    //       imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/mega-menu-01-men-category-02.jpg',
    //       imageAlt: 'Model wearing light heather gray t-shirt.',
    //     },
    //     {
    //       name: 'Accessories',
    //       href: '#',
    //       imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/mega-menu-01-men-category-03.jpg',
    //       imageAlt:
    //         'Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.',
    //     },
    //     {
    //       name: 'Carry',
    //       href: '#',
    //       imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/mega-menu-01-men-category-04.jpg',
    //       imageAlt: 'Model putting folded cash into slim card holder olive leather wallet with hand stitching.',
    //     },
    //   ],
    // },
  ],
  pages: [
    { name: 'Shop', href: '/products' },
    // { name: 'Categories', href: '#' },
    // { name: 'Contact', href: '#' },
  ],
}




export default function Navigation() {
  const [open, setOpen] = useState(false)
  
  return (
   <>
       <div className="bg-white">
      {/* Mobile menu */}
      <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
          >
            <div className="flex px-4 pb-2 pt-5">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>

            {/* Links */}
            {/* <TabGroup className="mt-2">
              <div className="border-b border-gray-200">
                <TabList className="-mb-px flex space-x-8 px-4">
                  {navigation.categories.map((category) => (
                    <Tab
                      key={category.name}
                      className="flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-gray-900 data-[selected]:border-indigo-600 data-[selected]:text-indigo-600"
                    >
                      {category.name}
                    </Tab>
                  ))}
                </TabList>
              </div>
              <TabPanels as={Fragment}>
                {navigation.categories.map((category) => (
                  <TabPanel key={category.name} className="space-y-12 px-4 py-6">
                    <div className="grid grid-cols-2 gap-x-4 gap-y-10">
                      {category.featured.map((item) => (
                        <div key={item.name} className="group relative">
                          <img
                            alt={item.imageAlt}
                            src={item.imageSrc}
                            className="aspect-square w-full rounded-md bg-gray-100 object-cover group-hover:opacity-75"
                          />
                          <a href={item.href} className="mt-6 block text-sm font-medium text-gray-900">
                            <span aria-hidden="true" className="absolute inset-0 z-10" />
                            {item.name}
                          </a>
                          <p aria-hidden="true" className="mt-1 text-sm text-gray-500">
                            Shop now
                          </p>
                        </div>
                      ))}
                    </div>
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup> */}

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {navigation.pages.map((page) => (
                <div key={page.name} className="flow-root">
                  <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                    {page.name}
                  </a>
                </div>
              ))}
            </div>

            {/* <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              <div className="flow-root">
                <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                  Create an account
                </a>
              </div>
              <div className="flow-root">
                <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                  Sign in
                </a>
              </div>
            </div> */}

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {/* Currency selector */}
              {/* <form>
                <div className="-ml-2 inline-grid grid-cols-1">
                  <select
                    id="mobile-currency"
                    name="currency"
                    aria-label="Currency"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-0.5 pl-2 pr-7 text-base font-medium text-gray-700 focus:outline focus:outline-2 group-hover:text-gray-800 sm:text-sm/6"
                  >
                    {currencies.map((currency) => (
                      <option key={currency}>{currency}</option>
                    ))}
                  </select>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-1 size-5 self-center justify-self-end fill-gray-500"
                  />
                </div>
              </form> */}
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      <header className="relative">
        <nav aria-label="Top">
          {/* Top navigation */}
          <div className="bg-gray-900 hidden">
            <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
              {/* Currency selector */}
              {/* <form>
                <div className="-ml-2 inline-grid grid-cols-1">
                  <select
                    id="desktop-currency"
                    name="currency"
                    aria-label="Currency"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-gray-900 py-0.5 pl-2 pr-7 text-left text-base font-medium text-white focus:outline focus:outline-2 focus:-outline-offset-1 focus:outline-white sm:text-sm/6"
                  >
                    {currencies.map((currency) => (
                      <option key={currency}>{currency}</option>
                    ))}
                  </select>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-1 size-5 self-center justify-self-end fill-gray-300"
                  />
                </div>
              </form> */}

              {/* <div className="flex items-center space-x-6">
                <a href="#" className="text-sm font-medium text-white hover:text-gray-100">
                  Sign in
                </a>
                <a href="#" className="text-sm font-medium text-white hover:text-gray-100">
                  Create an account
                </a>
              </div> */}
            </div>
          </div>

          {/* Secondary navigation */}
          <div className="bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="border-b border-gray-200">
                <div className="flex h-16 items-center justify-between">
                  {/* Logo (lg+) */}
                  <div className="hidden lg:flex lg:flex-1 lg:items-center">
                  <a href="/" className="">
                    <div className="flex items-center gap-2 text-lg font-bold">
                      <img src="/logo.svg" alt="Logo" width={32} height={32} />
                      <span>WooNext</span>
                    </div>
                  </a>
                    {/* <a href="#">
                      <span className="sr-only">Your Company</span>
                      <img
                        alt=""
                        src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                        className="h-8 w-auto"
                      />
                    </a> */}
                  </div>

                  <div className="hidden h-full lg:flex">
                    {/* Flyout menus */}
                    <PopoverGroup className="inset-x-0 bottom-0 px-4">
                      <div className="flex h-full justify-center space-x-8">
                        
                        {/* {navigation.categories.map((category) => (
                          <Popover key={category.name} className="flex">
                            <div className="relative flex">
                              <PopoverButton className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800 data-[open]:border-indigo-600 data-[open]:text-indigo-600">
                                {category.name}
                              </PopoverButton>
                            </div>

                            <PopoverPanel
                              transition
                              className="absolute inset-x-0 top-full text-sm text-gray-500 transition data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                            >
                      
                              <div aria-hidden="true" className="absolute inset-0 top-1/2 bg-white shadow" />

                              <div className="relative bg-white">
                                <div className="mx-auto max-w-7xl px-8">
                                  <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-16">
                                    {category.featured.map((item) => (
                                      <div key={item.name} className="group relative">
                                        <img
                                          alt={item.imageAlt}
                                          src={item.imageSrc}
                                          className="aspect-square w-full rounded-md bg-gray-100 object-cover group-hover:opacity-75"
                                        />
                                        <a href={item.href} className="mt-4 block font-medium text-gray-900">
                                          <span aria-hidden="true" className="absolute inset-0 z-10" />
                                          {item.name}
                                        </a>
                                        <p aria-hidden="true" className="mt-1">
                                          Shop now
                                        </p>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </PopoverPanel>
                          </Popover>
                        ))} */}

                        {navigation.pages.map((page) => (
                          <a
                            key={page.name}
                            href={page.href}
                            className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                          >
                            {page.name}
                          </a>
                        ))}
                      </div>
                    </PopoverGroup>
                  </div>

                  {/* Mobile menu and search (lg-) */}
                  <div className="flex flex-1 items-center lg:hidden">
                    <button
                      type="button"
                      onClick={() => setOpen(true)}
                      className="-ml-2 rounded-md bg-white p-2 text-gray-400"
                    >
                      <span className="sr-only">Open menu</span>
                      <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>

                    {/* Search */}
                    {/* <a href="#" className="ml-2 p-2 text-gray-400 hover:text-gray-500">
                      <span className="sr-only">Search</span>
                      <MagnifyingGlassIcon aria-hidden="true" className="size-6" />
                    </a> */}
                  </div>

                  {/* Logo (lg-) */}
                  <a href="/" className="lg:hidden">
                    <div className="flex items-center gap-2 text-lg font-bold">
                      <img src="/logo.svg" alt="Logo" width={32} height={32} />
                      <span>WooNext</span>
                    </div>
                  </a>
                  {/* <a href="/" className="lg:hidden">
                    <span className="sr-only">WooNext</span>
                    <img
                      alt=""
                      src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                      className="h-8 w-auto"
                    />
                  </a> */}

                  <div className="flex flex-1 items-center justify-end">
                    {/* <a href="#" className="hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:block">
                      Search
                    </a> */}

                    <div className="flex items-center lg:ml-8">
                      {/* Help */}
                      {/* <a href="#" className="p-2 text-gray-400 hover:text-gray-500 lg:hidden">
                        <span className="sr-only">Help</span>
                        <QuestionMarkCircleIcon aria-hidden="true" className="size-6" />
                      </a> */}
                      {/* <a href="#" className="hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:block">
                        Help
                      </a> */}

                      {/* Cart */}
                      <div className="ml-4 flow-root lg:ml-8">
                        <a href="#" className="group -m-2 flex items-center p-2">
                          <ShoppingBagIcon
                            aria-hidden="true"
                            className="size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
                          />
                          <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                          <span className="sr-only">items in cart, view bag</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
   </>
  );
}
