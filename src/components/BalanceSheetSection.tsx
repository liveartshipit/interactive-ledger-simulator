import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLedgerStore } from '@/stores/ledgerStore';

export function BalanceSheetSection() {
  const { entries, getTotalAssets, getTotalLiabilities, getBalance, currency } = useLedgerStore();

  const assets = entries.filter((e) => e.type === 'asset');
  const liabilities = entries.filter((e) => e.type === 'liability');
  const totalAssets = getTotalAssets();
  const totalLiabilities = getTotalLiabilities();
  const equity = getBalance();

  return (
    <div className="space-y-8">
      <Card className="bg-card text-card-foreground border-border">
        <CardHeader>
          <CardTitle className="text-foreground">Balance Sheet</CardTitle>
          <CardDescription className="text-muted-foreground">
            Comprehensive view of your financial position
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-display font-medium text-foreground mb-4 pb-2 border-b border-border">
                Assets
              </h3>
              <div className="space-y-3">
                {assets.length === 0 ? (
                  <p className="text-sm text-muted-foreground">No assets recorded</p>
                ) : (
                  assets.map((asset) => (
                    <div key={asset.id} className="flex justify-between items-center">
                      <span className="text-foreground">{asset.name}</span>
                      <span className="font-mono text-foreground">
                        {asset.value.toFixed(2)} {currency}
                      </span>
                    </div>
                  ))
                )}
                <div className="pt-3 border-t border-border flex justify-between items-center font-semibold">
                  <span className="text-foreground">Total Assets</span>
                  <span className="font-mono text-success">
                    {totalAssets.toFixed(2)} {currency}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-display font-medium text-foreground mb-4 pb-2 border-b border-border">
                Liabilities & Equity
              </h3>
              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">Liabilities</h4>
                  {liabilities.length === 0 ? (
                    <p className="text-sm text-muted-foreground">No liabilities recorded</p>
                  ) : (
                    liabilities.map((liability) => (
                      <div key={liability.id} className="flex justify-between items-center mb-2">
                        <span className="text-foreground">{liability.name}</span>
                        <span className="font-mono text-foreground">
                          {liability.value.toFixed(2)} {currency}
                        </span>
                      </div>
                    ))
                  )}
                  <div className="flex justify-between items-center font-medium pt-2">
                    <span className="text-foreground">Total Liabilities</span>
                    <span className="font-mono text-warning">
                      {totalLiabilities.toFixed(2)} {currency}
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-border">
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">Equity</h4>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground">Owner's Equity</span>
                    <span className="font-mono text-foreground">
                      {equity.toFixed(2)} {currency}
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-border flex justify-between items-center font-semibold">
                  <span className="text-foreground">Total Liabilities + Equity</span>
                  <span className="font-mono text-primary">
                    {(totalLiabilities + equity).toFixed(2)} {currency}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 rounded-lg bg-muted">
            <p className="text-sm text-foreground font-mono text-center">
              Assets ({totalAssets.toFixed(2)}) = Liabilities ({totalLiabilities.toFixed(2)}) +
              Equity ({equity.toFixed(2)})
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
