interface NavItemProps {
    icon:React.ReactNode;
    label:string;
    onClick?: () => void;
}
const NavItem:React.FC<NavItemProps> = ({icon,label,onClick}) => {
  return (
    <li onClick={onClick} className='flex items-center py-3 px-3 space-x-4 hover:rounded hover:bg-gray-200 hover:text-primary  hover:cursor-pointer dark:hover:bg-gray-800'>
    <span className="text-xl">{icon}</span>
    <span className='hidden md:inline'>{label}</span>
</li>
  )
}

export default NavItem
