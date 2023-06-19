import React, { Fragment, useCallback, useEffect, useState } from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation'

function RenderMenuList({MemuList}) {
  const pathname = usePathname()

  return MemuList.map(route => 
     (
      <Link 
        className={pathname.startsWith(route.href)?`text-purple-500 font-bold leading-3rem px-6` : 'leading-3rem px-6'} 
        key={route.href} 
        href={route.href}>
        {route.label}
      </Link>
    )
  )
}

export default RenderMenuList