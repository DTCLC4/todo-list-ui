import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { AlignJustify } from 'lucide-react'

const SHEET_SIDES = ["left"] as const

const MobileSidebar = () => {
  return (
    <div className='flex-shrink-0 fixed top-0 left-0 bottom-0'>
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <AlignJustify className="cursor-pointer" />
          </SheetTrigger>
          <SheetContent className='overflow-y-auto' side={side}>
            ABC
            <div className="h-[4000px]"></div>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )

}

export default MobileSidebar
