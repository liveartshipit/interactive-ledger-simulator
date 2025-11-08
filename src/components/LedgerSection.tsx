import { LedgerInputForm } from './LedgerInputForm';
import { LedgerTable } from './LedgerTable';
import { BalanceSummaryCard } from './BalanceSummaryCard';

export function LedgerSection() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <LedgerInputForm />
        <BalanceSummaryCard />
      </div>
      <LedgerTable />
    </div>
  );
}
