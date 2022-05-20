import React from 'react'
import Image from 'next/image'
function Header() {
  return (
    <div className="">
        <div className="relative w-20 h-10 flex-shrink-0 cursor-pointer">
            <Image 
            objectFit="contain"
            src="/reddit.png" layout="fill" 
            />
        </div>
    </div>
  )
}

export default Header 