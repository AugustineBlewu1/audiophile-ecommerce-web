import { navItems, socialIcons } from '@/lib/variables'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
       <div className="bg-secondary w-full mt-52 border-b-4">
        <div className="w-28 h-2 bg-primary lg:ml-32  2xl:ml-92"></div>
        <div className="lg:max-w-[1200px] 2xl:max-w-[1350px] mx-auto py-24">
          <div className="flex flex-row justify-between">
            <h2 className="text-white text-3xl font-extrabold ">audiophile</h2>
            <div className="flex space-x-8">
              {navItems?.map((navItem, index) => (
                <Link
                  href={navItem.link}
                  key={index}
                  className="text-white font-medium tracking-widest hover:text-primary"
                >
                  {navItem?.name?.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-14 flex flex-row justify-between ">
            <div className="space-y-16">
              <p className="w-[600px] tracking-wide text-white/50">
                Audiophile is an all in one stop to fulfill your audio needs.
                We're a small team of music lovers and sound specialists who are
                devoted to helping you get the most out of personal audio. Come
                and visit our demo facility - we’re open 7 days a week.
              </p>
              <h5 className="tracking-wide text-white/50">
                Copyright 2021. All Rights Reserved
              </h5>
            </div>

            <div className="flex flex-row gap-5 items-center"> 
              {
                socialIcons?.map((icon, index) => (
                  <img src={icon} alt="Social Icon" key={index} className="hover:text-primary  group transition-colors" />
                ))
              }
            </div>
          </div>
        </div>
      </div>
  )
}

export default Footer
