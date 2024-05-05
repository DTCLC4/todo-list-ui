import React, { useState } from "react"
import { MagnifyingGlassIcon, BellIcon, ChatBubbleIcon } from "@radix-ui/react-icons"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu"
import ThemeToggle from "./ThemeToggle"
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { Input } from "./ui/input"
import { FormProvider, useForm } from "react-hook-form"
const Nav = () => {
  const methods = useForm();
  return (
    <nav className="ml-auto">
      <ul className="flex items-center space-x-3">
        <li className="block md:hidden"> {/* Ẩn form trên thiết bị nhỏ hơn medium */}
          <MagnifyingGlassIcon className="text-base mr-3 h-[1.2rem] w-[1.2rem]" />
        </li>
        <li className="hidden md:block">
          <FormProvider {...methods}>
            <FormField
              control={methods.control}
              name="username"
              render={({ field }) => (
                <FormItem className="flex items-center">
                  <FormControl className="flex-grow">
                    <Input placeholder="Tìm kiếm..." {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </FormProvider>
        </li>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <li className="block ">
              <BellIcon className="text-base mr-3 h-[1.2rem] w-[1.2rem]" />
              <span className="absolute top-2 font-normal text-xs rounded-lg py-1 px-2 bg-red-500">4</span>
            </li>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel className="text-center">You have 4 new notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="border-b-2">
                <h4 className="font-bold">Lorem Ipsum</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit... <button className="text-blue-500 mt-2">Xem thêm</button></p>
                <p>30 min. ago</p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>    <div className="border-b-2">
              <h4 className="font-bold">Lorem Ipsum</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit... <button className="text-blue-500 mt-2">Xem thêm</button></p>
              <p>30 min. ago</p>
            </div></DropdownMenuItem>
            <DropdownMenuItem>    <div className="border-b-2">
              <h4 className="font-bold">Lorem Ipsum</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit... <button className="text-blue-500 mt-2">Xem thêm</button></p>
              <p>30 min. ago</p>
            </div></DropdownMenuItem>
            <DropdownMenuItem>    <div className="">
              <h4 className="font-bold">Lorem Ipsum</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit... <button className="text-blue-500 mt-2">Xem thêm</button></p>
              <p>30 min. ago</p>
            </div></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <li className="block">
              <ChatBubbleIcon className="text-base  mr-3 h-[1.2rem] w-[1.2rem]" />
              <span className="absolute top-2 font-normal text-xs rounded-lg py-1 px-2 bg-red-500">4</span>
            </li>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel className="text-center">You have 4 new chat</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="border-b-2">
                <h4 className="font-bold">Lorem Ipsum</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit... <button className="text-blue-500 mt-2">Xem thêm</button></p>
                <p>30 min. ago</p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>    <div className="border-b-2">
              <h4 className="font-bold">Lorem Ipsum</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit... <button className="text-blue-500 mt-2">Xem thêm</button></p>
              <p>30 min. ago</p>
            </div></DropdownMenuItem>
            <DropdownMenuItem>    <div className="border-b-2">
              <h4 className="font-bold">Lorem Ipsum</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit... <button className="text-blue-500 mt-2">Xem thêm</button></p>
              <p>30 min. ago</p>
            </div></DropdownMenuItem>
            <DropdownMenuItem>    <div className="">
              <h4 className="font-bold">Lorem Ipsum</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit... <button className="text-blue-500 mt-2">Xem thêm</button></p>
              <p>30 min. ago</p>
            </div></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger >
            <li className="flex items-center pr-5">
              <Avatar className="w-7 h-7">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span className="hidden md:block ps-2">K. Anderson</span>
            </li>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer"><ThemeToggle containerStyles="border-none" /></DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">Billing</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">Team</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </ul>
    </nav>
  )
}

export default Nav
