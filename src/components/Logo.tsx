import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link className='leading-none	flex items-center' href="/">
      <Image className='mr-1 w-6 h-6' src='/logo.png' width={0} height={0} priority alt='' />
      <span className="hidden lg:block text-2xl font-bold text-blue-900">Admin</span>
    </Link>
  )
}

export default Logo
