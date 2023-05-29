import React, { Fragment, useCallback, useEffect, useState } from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import menuList  from './config'

function RenderMenuList() {
  const pathname = usePathname()
  const MemuList = menuList()

  return MemuList.map(route => {
    return (
      <Link 
        className={pathname.startsWith(route.href)?`text-purple-500 font-bold leading-3rem px-6` : 'leading-3rem px-6'} 
        key={route.href} 
        href={route.href}>
        {route.label}
      </Link>
    )
  })
}

export default RenderMenuList