import { useState } from 'react';
import { PlusIcon, RotateCcwIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useLedgerStore } from '@/stores/ledgerStore';

export function LedgerInputForm() {
  const { addEntry } = useLedgerStore();
  const [assetName, setAssetName] = useState('');
  const [assetValue, setAssetValue] = useState('');
  const [liabilityName, setLiabilityName] = useState('');
  const [liabilityValue, setLiabilityValue] = useState('');

  const handleAddEntry = () => {
    if (assetName && assetValue) {
      addEntry({
        type: 'asset',
        name: assetName,
        value: parseFloat(assetValue),
      });
      setAssetName('');
      setAssetValue('');
    }

    if (liabilityName && liabilityValue) {
      addEntry({
        type: 'liability',
        name: liabilityName,
        value: parseFloat(liabilityValue),
      });
      setLiabilityName('');
      setLiabilityValue('');
    }
  };

  const handleReset = () => {
    setAssetName('');
    setAssetValue('');
    setLiabilityName('');
    setLiabilityValue('');
  };

  return (
    <Card className="bg-card text-card-foreground border-border">
      <CardHeader>
        <CardTitle className="text-foreground">Ledger Entry</CardTitle>
        <CardDescription className="text-muted-foreground">
          Add assets and liabilities to your ledger
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Label htmlFor="asset-name" className="text-foreground cursor-help">
                  Asset Name
                </Label>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-sm">Assets are resources owned by the business</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <Input
            id="asset-name"
            type="text"
            placeholder="e.g., Cash, Equipment"
            value={assetName}
            onChange={(e) => setAssetName(e.target.value)}
            className="bg-background text-foreground border-input"
          />
        </div>

        <div className="space-y-4">
          <Label htmlFor="asset-value" className="text-foreground">
            Asset Value
          </Label>
          <Input
            id="asset-value"
            type="number"
            placeholder="0.00"
            value={assetValue}
            onChange={(e) => setAssetValue(e.target.value)}
            className="bg-background text-foreground border-input"
          />
        </div>

        <div className="space-y-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Label htmlFor="liability-name" className="text-foreground cursor-help">
                  Liability Name
                </Label>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-sm">Liabilities are obligations owed to others</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <Input
            id="liability-name"
            type="text"
            placeholder="e.g., Loan, Accounts Payable"
            value={liabilityName}
            onChange={(e) => setLiabilityName(e.target.value)}
            className="bg-background text-foreground border-input"
          />
        </div>

        <div className="space-y-4">
          <Label htmlFor="liability-value" className="text-foreground">
            Liability Value
          </Label>
          <Input
            id="liability-value"
            type="number"
            placeholder="0.00"
            value={liabilityValue}
            onChange={(e) => setLiabilityValue(e.target.value)}
            className="bg-background text-foreground border-input"
          />
        </div>

        <div className="flex gap-3 pt-4">
          <Button
            onClick={handleAddEntry}
            className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <PlusIcon className="w-5 h-5 mr-2" />
            Add Entry
          </Button>
          <Button
            onClick={handleReset}
            variant="outline"
            className="bg-background text-foreground border-border hover:bg-muted hover:text-foreground"
          >
            <RotateCcwIcon className="w-5 h-5 mr-2" />
            Reset
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
