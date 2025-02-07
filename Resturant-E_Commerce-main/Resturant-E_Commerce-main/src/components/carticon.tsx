import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Carticon = () => {
  return (
    <Link href="/cart" className='flex items-center gap-4'>
        <div className='relative w-8 h-8'>
            <Image src="/shopping-bag.png" alt="" fill/>
        </div>
        <span>cart (3)</span>
    </Link>
  )
}

export default Carticon
