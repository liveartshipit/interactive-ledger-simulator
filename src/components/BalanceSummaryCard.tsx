import { CheckCircle2Icon, AlertCircleIcon, TrendingUpIcon, TrendingDownIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLedgerStore } from '@/stores/ledgerStore';

export function BalanceSummaryCard() {
  const { getTotalAssets, getTotalLiabilities, getBalance, isBalanced, currency } = useLedgerStore();

  const totalAssets = getTotalAssets();
  const totalLiabilities = getTotalLiabilities();
  const balance = getBalance();
  const balanced = isBalanced();

  return (
    <Card className="bg-card text-card-foreground border-border">
      <CardHeader>
        <CardTitle className="text-foreground">Trial Balance</CardTitle>
        <CardDescription className="text-muted-foreground">
          Real-time financial position summary
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-success/5 border border-success/20">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUpIcon className="w-5 h-5 text-success" />
              <span className="text-sm font-medium text-foreground">Total Assets</span>
            </div>
            <p className="text-2xl font-mono font-semibold text-success">
              {totalAssets.toFixed(2)} {currency}
            </p>
          </div>

          <div className="p-4 rounded-lg bg-warning/5 border border-warning/20">
            <div className="flex items-center gap-2 mb-2">
              <TrendingDownIcon className="w-5 h-5 text-warning" />
              <span className="text-sm font-medium text-foreground">Total Liabilities</span>
            </div>
            <p className="text-2xl font-mono font-semibold text-warning">
              {totalLiabilities.toFixed(2)} {currency}
            </p>
          </div>
        </div>

        <div
          className={`p-4 rounded-lg border ${
            balanced
              ? 'bg-success/5 border-success/20'
              : 'bg-destructive/5 border-destructive/20'
          }`}
        >
          <div className="flex items-center gap-2 mb-2">
            {balanced ? (
              <CheckCircle2Icon className="w-5 h-5 text-success" />
            ) : (
              <AlertCircleIcon className="w-5 h-5 text-destructive" />
            )}
            <span className="text-sm font-medium text-foreground">Balance</span>
          </div>
          <p
            className={`text-2xl font-mono font-semibold ${
              balanced ? 'text-success' : 'text-destructive'
            }`}
          >
            {balance.toFixed(2)} {currency}
          </p>
          <p className="text-sm mt-2 text-muted-foreground">
            {balanced
              ? 'Your ledger is balanced! Assets equal liabilities.'
              : 'Ledger is not balanced. Review your entries.'}
          </p>
        </div>

        <div className="p-4 rounded-lg bg-muted">
          <h4 className="font-medium text-foreground mb-2">Accounting Equation</h4>
          <p className="text-sm text-muted-foreground font-mono">
            Assets = Liabilities + Equity
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            In a balanced ledger, total assets should equal total liabilities plus owner's equity.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
