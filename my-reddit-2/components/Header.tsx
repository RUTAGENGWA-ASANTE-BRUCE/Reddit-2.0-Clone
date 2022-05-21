import React from 'react'
import Image from 'next/image'
import { ChatIcon, ChevronDownIcon, ChevronUpIcon, MenuIcon, PlusIcon, SearchIcon, SpeakerphoneIcon, VideoCameraIcon } from "@heroicons/react/solid"
import { BellIcon, GlobeIcon, HomeIcon, SparklesIcon } from "@heroicons/react/outline"
function Header() {
  return (
    <div className="sticky flex top-0 z-50 flex-row bg-white px-4 py-2 shadow-sm">
      <div className="relative w-20 h-10 flex-shrink-0 cursor-pointer">
        <Image
          objectFit="contain"
          src="/reddit.png" layout="fill"
        />
      </div>
      <div className="mx-7 flex-row flex items-center">
        <HomeIcon className="h-5 w-5" />
        <p className="ml-2 hidden flex-1 lg:inline">Home</p>
        <ChevronDownIcon className="w-5 h-5" />
      </div>
      {/* SearchBox */}
      <form className="flex flex-1 items-center space-x-2 rounded-sm border  border-gray-200 bg-gray-100 px-3 py-1">
        <SearchIcon className="h-6 w-6 text-gray-600" />
        <input type="text" placeholder="Seacrh Reddit" className="flex-1 bg-transparent outline-none" />
        <button type="submit" hidden />
      </form>
      <div className=" flex-row text-gray-500 items-center mx-5 space-x-2 hidden lg:inline-flex">
        <SparklesIcon className="icon" />
        <GlobeIcon className="icon" />
        <VideoCameraIcon className="icon" />
        <hr className="h-10 border-gray-100" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <PlusIcon className="icon" />
        <SpeakerphoneIcon className="icon" />
      </div>
      <div className="ml-5 flex items-center lg:hidden">
        <MenuIcon className="icon" />
      </div>
      {/* Sign in/sign out icon */}
      <div>

        <div className="relative h-5 w-5 flex-shrink-0">
          <Image src="/redditHead.png" alt="" layout="fill" />
        </div>
      </div>
    </div>
  )
}

export default Header 