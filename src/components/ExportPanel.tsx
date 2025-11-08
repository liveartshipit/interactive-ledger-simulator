import { DownloadIcon, FileSpreadsheetIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLedgerStore } from '@/stores/ledgerStore';
import Papa from 'papaparse';

export function ExportPanel() {
  const { entries, currency } = useLedgerStore();

  const handleExportCSV = () => {
    const data = entries.map((entry) => ({
      Type: entry.type,
      Name: entry.name,
      Value: entry.value,
      Currency: currency,
      Timestamp: new Date(entry.timestamp).toISOString(),
    }));

    const csv = Papa.unparse(data);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `ledger_export_${Date.now()}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Card className="bg-card text-card-foreground border-border">
      <CardHeader>
        <CardTitle className="text-foreground">Export Data</CardTitle>
        <CardDescription className="text-muted-foreground">
          DownloadIcon your ledger entries for external analysis
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="p-4 rounded-lg bg-muted">
          <p className="text-sm text-foreground mb-2">
            <strong>Total Entries:</strong> {entries.length}
          </p>
          <p className="text-sm text-muted-foreground">
            Export your complete transaction history in CSV format for use in spreadsheet applications.
          </p>
        </div>

        <Button
          onClick={handleExportCSV}
          disabled={entries.length === 0}
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
        >
          <DownloadIcon className="w-5 h-5 mr-2" />
          Export as CSV
        </Button>

        <div className="flex items-start gap-3 p-4 rounded-lg border border-border bg-background">
          <FileSpreadsheetIcon className="w-5 h-5 text-primary mt-1" />
          <div>
            <h4 className="font-medium text-foreground mb-1">Export Format</h4>
            <p className="text-sm text-muted-foreground">
              CSV files can be opened in Excel, Google Sheets, or any spreadsheet application.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
