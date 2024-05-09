import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { TextAlignLeftIcon } from '@radix-ui/react-icons'
import Sidebar from './Sidebar'
import Logo from './Logo'

const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <TextAlignLeftIcon className="cursor-pointer h-[1.5rem] w-[1.5rem]" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center overflow-y-auto h-full py-8">
            <Logo />
            <Sidebar containerStyles='flex flex-col items-center gap-y-6 w-full' />
        </div>

      </SheetContent>
    </Sheet>
  )

}

export default MobileSidebar









//const SHEET_SIDES = ["left"] as const




// <div className='flex-shrink-0 fixed top-0 left-0 bottom-0'>
//   {SHEET_SIDES.map((side) => (
//     <Sheet key={side}>
//       <SheetTrigger asChild>
//         <AlignJustify className="cursor-pointer" />
//       </SheetTrigger>
//       <SheetContent className='overflow-y-auto' side={side}>
//         <Sidebar />
//       </SheetContent>
//     </Sheet>
//   ))}
// </div>
