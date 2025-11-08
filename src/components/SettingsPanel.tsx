import { SettingsIcon, MoonIcon, SunIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { useLedgerStore } from '@/stores/ledgerStore';

export function SettingsPanel() {
  const { clearEntries } = useLedgerStore();

  return (
    <Card className="bg-card text-card-foreground border-border">
      <CardHeader>
        <CardTitle className="text-foreground flex items-center gap-2">
          <SettingsIcon className="w-5 h-5" />
          SettingsIcon
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          Customize your learning experience
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <Label htmlFor="theme-toggle" className="text-foreground">
              Dark Mode
            </Label>
            <p className="text-sm text-muted-foreground">Toggle between light and dark themes</p>
          </div>
          <Switch id="theme-toggle" />
        </div>

        <div className="pt-6 border-t border-border">
          <h4 className="font-medium text-foreground mb-3">Data Management</h4>
          <Button
            onClick={clearEntries}
            variant="destructive"
            className="w-full bg-destructive text-destructive-foreground hover:bg-destructive/90"
          >
            Clear All Entries
          </Button>
          <p className="text-xs text-muted-foreground mt-2">
            This action cannot be undone. All ledger entries will be permanently deleted.
          </p>
        </div>

        <div className="pt-6 border-t border-border">
          <h4 className="font-medium text-foreground mb-2">About</h4>
          <p className="text-sm text-muted-foreground mb-2">
            Interactive Ledger Simulator v1.0.0
          </p>
          <p className="text-xs text-muted-foreground">Made for educational use</p>
        </div>
      </CardContent>
    </Card>
  );
}
