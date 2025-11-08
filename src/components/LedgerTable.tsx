import { Trash2Icon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLedgerStore } from '@/stores/ledgerStore';

export function LedgerTable() {
  const { entries, currency, removeEntry } = useLedgerStore();

  return (
    <Card className="bg-card text-card-foreground border-border">
      <CardHeader>
        <CardTitle className="text-foreground">Transaction Ledger</CardTitle>
        <CardDescription className="text-muted-foreground">
          All recorded entries with live balance tracking
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-medium text-foreground">Type</th>
                <th className="text-left py-3 px-4 font-medium text-foreground">Name</th>
                <th className="text-right py-3 px-4 font-medium text-foreground">
                  Value ({currency})
                </th>
                <th className="text-right py-3 px-4 font-medium text-foreground">Action</th>
              </tr>
            </thead>
            <tbody>
              {entries.length === 0 ? (
                <tr>
                  <td colSpan={4} className="text-center py-8 text-muted-foreground">
                    No entries yet. Add your first transaction above.
                  </td>
                </tr>
              ) : (
                entries.map((entry) => (
                  <tr
                    key={entry.id}
                    className="border-b border-border transition-smooth hover:bg-muted"
                  >
                    <td className="py-3 px-4">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                          entry.type === 'asset'
                            ? 'bg-success/10 text-success'
                            : 'bg-warning/10 text-warning'
                        }`}
                      >
                        {entry.type.charAt(0).toUpperCase() + entry.type.slice(1)}
                      </span>
                    </td>
                    <td className="py-3 px-4 font-mono text-foreground">{entry.name}</td>
                    <td className="py-3 px-4 text-right font-mono text-foreground">
                      {entry.value.toFixed(2)}
                    </td>
                    <td className="py-3 px-4 text-right">
                      <Button
                        onClick={() => removeEntry(entry.id)}
                        variant="ghost"
                        size="icon"
                        className="bg-transparent text-destructive hover:bg-destructive/10 hover:text-destructive"
                      >
                        <Trash2Icon className="w-4 h-4" />
                      </Button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
