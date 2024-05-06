import React from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { DashboardIcon, DotIcon, Component1Icon } from "@radix-ui/react-icons"

type SidebarProps = {
  containerStyles: string;
};

const Sidebar = ({ containerStyles }: SidebarProps) => {
  return (
    <aside className={containerStyles}>
      <ul className="p-0 m-0 w-full">
        <li className="font-medium cursor-pointer flex items-center hover:text-blue-600">
          <DashboardIcon className="mr-2" />
          Dashboard</li>
        <li className="overflow-x-hidden "> <Accordion type="single" collapsible>
          <AccordionItem value="item-1">

            <AccordionTrigger className="hover:text-blue-600 ">
              <div className="flex items-center">
                <Component1Icon className="mr-2" />
                Component 1
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ul>
                <li className="relative pl-8 cursor-pointer hover:text-blue-600">
                  <span className="absolute left-0 top-0 w-6 h-6 flex items-center justify-center">
                    <DotIcon />
                  </span>
                  Link 1
                </li>
                <li className="relative pl-8 cursor-pointer hover:text-blue-600">
                  <span className="absolute left-0 top-0 w-6 h-6 flex items-center justify-center">
                    <DotIcon />
                  </span>
                  Link 2
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        </li>
        <li className="overflow-x-hidden"> <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="hover:text-blue-600 ">
              <div className="flex items-center">
                <Component1Icon className="mr-2" />
                Component 2
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ul>
                <li className="relative pl-8 cursor-pointer hover:text-blue-600">
                  <span className="absolute left-0 top-0 w-6 h-6 flex items-center justify-center">
                    <DotIcon />
                  </span>
                  Link 1
                </li>
                <li className="relative pl-8 cursor-pointer hover:text-blue-600">
                  <span className="absolute left-0 top-0 w-6 h-6 flex items-center justify-center">
                    <DotIcon />
                  </span>
                  Link 2
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        </li>
        <li className="overflow-x-hidden"> <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="hover:text-blue-600">
              <div className="flex items-center">
                <Component1Icon className="mr-2" />
                Component 3
              </div></AccordionTrigger>
            <AccordionContent>
              <ul>
                <li className="relative pl-8 cursor-pointer hover:text-blue-600">
                  <span className="absolute left-0 top-0 w-6 h-6 flex items-center justify-center">
                    <DotIcon />
                  </span>
                  Link 1
                </li>
                <li className="relative pl-8 cursor-pointer hover:text-blue-600">
                  <span className="absolute left-0 top-0 w-6 h-6 flex items-center justify-center">
                    <DotIcon />
                  </span>
                  Link 2
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        </li>
      </ul>

    </aside>
  )
}

export default Sidebar
