import { SidebarNav } from './components/SidebarNav';
import { TopBar } from './components/TopBar';
import { LedgerSection } from './components/LedgerSection';
import { BalanceSheetSection } from './components/BalanceSheetSection';
import { LearnSection } from './components/LearnSection';
import { ExportPanel } from './components/ExportPanel';
import { SettingsPanel } from './components/SettingsPanel';
import { useUIStore } from './stores/uiStore';

function App() {
  const { activeSection } = useUIStore();

  const renderSection = () => {
    switch (activeSection) {
      case 'ledger':
        return <LedgerSection />;
      case 'balance':
        return <BalanceSheetSection />;
      case 'learn':
        return <LearnSection />;
      case 'export':
        return <ExportPanel />;
      case 'settings':
        return <SettingsPanel />;
      default:
        return <LedgerSection />;
    }
  };

  return (
    <div className="flex min-h-screen bg-background">
      <SidebarNav />
      <div className="flex-1 flex flex-col">
        <TopBar />
        <main className="flex-1 p-6 lg:p-8 overflow-y-auto">
          <div className="max-w-7xl mx-auto">
            <div
              className="mb-8 h-48 rounded-lg bg-cover bg-center relative overflow-hidden"
              style={{
                backgroundImage: 'url(https://c.animaapp.com/mhq7fw15n2jfmS/img/ai_1.png)',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90 flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-4xl font-display font-semibold text-white mb-2">
                    Interactive Ledger Simulator
                  </h1>
                  <p className="text-white/90">
                    Learn and practice accounting with real-time feedback
                  </p>
                </div>
              </div>
            </div>
            {renderSection()}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
