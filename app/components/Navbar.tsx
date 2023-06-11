
'use client'

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [show, setShow] = React.useState<"hidden" | "block">("hidden")
  const pathname = usePathname()
  const handleMenuClick = () => {
    setShow(show === "hidden" ? "block" : "hidden")
  }
  const highlightNavItem = "inline-flex items-center border-b-2 border-[#222ac5] px-1 pt-1 text-sm font-medium"
  const standardNavItem = "inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"

  return (
    <nav className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
            <div className="flex flex-shrink-0 items-center">
            🧞‍♂️
            </div>     
                 <div className="flex justify-end">

            <div className="hidden sm:ml-6 sm:flex sm:space-x-8 sm:float-right">
              <span className={pathname === "/" ? highlightNavItem : standardNavItem}><Link href="/" className='text-gray-500'>Page 1</Link></span>
              <span className={pathname.includes("/news") ? highlightNavItem : standardNavItem}><Link href="/news" className='text-gray-500'>Page 2</Link></span>
            </div>
          </div>


          <div className="-mr-2 flex items-center sm:hidden">
            {/* <!-- Mobile menu button --> */}
            <button type="button" onClick={handleMenuClick} className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#222ac5]" aria-controls="mobile-menu" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              {/* <!--
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
          --> */}
              <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" height="24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              {/* <!--
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
          --> */}
              <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" height="24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}

      <div className={`${show} `} id="mobile-menu">
        <div className="space-y-1 pb-3 pt-2">

          <span className={pathname === "/" ? "block border-l-4 border-[#222ac5] bg-[#222ac527] py-2 pl-3 pr-4 text-base font-medium text-[#222ac5]" : "block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"}><Link href="/" className='text-gray-500'>Page 1</Link></span>
          <span className={pathname.includes("/news") ? "block border-l-4 border-[#222ac5] bg-[#222ac527] py-2 pl-3 pr-4 text-base font-medium text-[#222ac5]" : "block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"}><Link href="/showroom" className='text-gray-500'>Page 2</Link></span>

        </div>
      </div>


    </nav>

  )
}