
import React from 'react';
import { Bell, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useIsMobile } from '@/hooks/use-mobile';

const NavBar = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = React.useState(false);
  
  const navItems = [
    { name: 'Dashboard', href: '#' },
    { name: 'Weather', href: '#weather' },
    { name: 'Soil Health', href: '#soil' },
    { name: 'Pest Alerts', href: '#pests' },
    { name: 'Recommendations', href: '#recommendations' },
  ];

  const renderMobileNav = () => (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[240px] bg-background">
        <div className="flex flex-col mt-4 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="px-4 py-2 text-sm rounded-md hover:bg-muted"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );

  const renderDesktopNav = () => (
    <nav className="hidden md:flex items-center space-x-6">
      {navItems.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          {item.name}
        </a>
      ))}
    </nav>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          {isMobile && renderMobileNav()}
          <a href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-farm flex items-center justify-center">
              <span className="text-white font-bold text-sm">FS</span>
            </div>
            <span className="font-semibold">FarmSense Now</span>
          </a>
        </div>
        
        {renderDesktopNav()}
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full"></span>
            <span className="sr-only">Notifications</span>
          </Button>
          
          <Avatar>
            <AvatarImage src="" alt="User" />
            <AvatarFallback className="bg-farm-green text-white">JD</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
