import { BookOpenIcon, FileDownIcon, HomeIcon, SettingsIcon, UserIcon, LogOutIcon, MenuIcon, XIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { useUIStore } from '@/stores/uiStore';

const navigationItems = [
  { id: 'ledger', label: 'Ledger Entry', icon: HomeIcon },
  { id: 'balance', label: 'Balance Sheet', icon: BookOpenIcon },
  { id: 'learn', label: 'Learn', icon: BookOpenIcon },
  { id: 'export', label: 'Export', icon: FileDownIcon },
  { id: 'settings', label: 'Settings', icon: SettingsIcon },
];

export function SidebarNav() {
  const { sidebarOpen, activeSection, setActiveSection, toggleSidebar } = useUIStore();

  return (
    <>
      <Button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 lg:hidden bg-primary text-primary-foreground"
        size="icon"
      >
        {sidebarOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
      </Button>

      <aside
        className={`fixed lg:sticky top-0 left-0 h-screen bg-card border-r border-border transition-smooth-out z-40 flex flex-col ${
          sidebarOpen ? 'translate-x-0 w-64' : '-translate-x-full lg:translate-x-0 lg:w-20'
        }`}
      >
        <div className="p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-1 flex items-center justify-center">
              <BookOpenIcon className="w-6 h-6 text-white" />
            </div>
            {sidebarOpen && (
              <div>
                <h1 className="font-display font-medium text-lg text-foreground">
                  Interactive Ledger
                </h1>
                <p className="text-xs text-muted-foreground">Simulator</p>
              </div>
            )}
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <Button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                variant={isActive ? 'default' : 'ghost'}
                className={`w-full justify-start gap-3 transition-smooth ${
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-transparent text-foreground hover:bg-muted hover:text-foreground'
                }`}
              >
                <Icon className="w-5 h-5" />
                {sidebarOpen && <span>{item.label}</span>}
              </Button>
            );
          })}
        </nav>

        <Separator />

        <div className="p-4 space-y-3">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarFallback className="bg-tertiary text-tertiary-foreground">
                <UserIcon className="w-5 h-5" />
              </AvatarFallback>
            </Avatar>
            {sidebarOpen && (
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">Student</p>
                <p className="text-xs text-muted-foreground">Learning Mode</p>
              </div>
            )}
          </div>
          
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 bg-transparent text-foreground hover:bg-muted hover:text-foreground"
          >
            <LogOutIcon className="w-5 h-5" />
            {sidebarOpen && <span>Logout</span>}
          </Button>
        </div>
      </aside>
    </>
  );
}
