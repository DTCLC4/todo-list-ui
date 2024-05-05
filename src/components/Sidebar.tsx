import React from 'react'

type SidebarProps = {
  containerStyles: string;
};

const Sidebar = ({ containerStyles }: SidebarProps) => {
  return (
    <aside className={containerStyles}>
      Sidebar
    </aside>
  )
}

export default Sidebar
