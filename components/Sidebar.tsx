import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command'
import {
  LayoutDashboard,
  Newspaper,
  Folders,
  CreditCard,
  Settings,
  User,
} from 'lucide-react'
import Link from 'next/link'

const Sidebar = () => {
  return (
    <Command className='rounded-none bg-secondary'>
      <CommandInput placeholder='Type a command or search...' />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading='Suggestions'>
          <CommandItem>
            <LayoutDashboard className='w-4 h-4 mr-2' />
            <Link href='/'>Dashboard</Link>
          </CommandItem>
          <CommandItem>
            <Newspaper className='w-4 h-4 mr-2' />
            <Link href='/posts'>Posts</Link>
          </CommandItem>
          <CommandItem>
            <Folders className='w-4 h-4 mr-2' />
            <Link href='#'>Categories</Link>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading='Settings'>
          <CommandItem>
            <User className='w-4 h-4 mr-2' />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CreditCard className='w-4 h-4 mr-2' />
            <span>Billing</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Settings className='w-4 h-4 mr-2' />
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  )
}

export default Sidebar
