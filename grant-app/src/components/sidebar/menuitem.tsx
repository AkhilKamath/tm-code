"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const MenuItem = ({item}: {item: any}) => {

  const pathname = usePathname()
  
  return (
    <Link href={item.path} className={`p-2.5 flex items-center gap-2.5 my-2.5 mx-0 rounded-lg hover:bg-color-primary-hover ${pathname === item.path ? 'bg-color-primary-hover': ''}`}>
      {item.icon}
      {item.title}
    </Link>
  )
}

export default MenuItem