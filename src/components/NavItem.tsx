interface NavItemProps {
    icon:React.ReactNode;
    label:string;
}
const NavItem:React.FC<NavItemProps> = ({icon,label}) => {
  return (
    <li className='flex items-center py-3 px-3 space-x-4 hover:rounded hover:bg-secondary hover:text-white hover:cursor-pointer dark:hover:bg-gray-800'>
    <span className="text-xl">{icon}</span>
    <span className='hidden md:inline'>{label}</span>
</li>
  )
}

export default NavItem
