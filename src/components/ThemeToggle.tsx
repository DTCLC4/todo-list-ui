"use client"

import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Button } from './ui/button'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'

type TogglerProps = {
  containerStyles: string;
};

const ThemeToggle = ({ containerStyles }: TogglerProps) => {
  const { theme, setTheme } = useTheme()

  return (
    <div className={containerStyles} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} >
      <span className="">{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
    </div>
  )
}

export default ThemeToggle
