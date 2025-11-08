import { FlashcardsPanel } from './FlashcardsPanel';
import { ResourceLinks } from './ResourceLinks';
import { Card, CardContent } from '@/components/ui/card';

export function LearnSection() {
  return (
    <div className="space-y-8">
      <Card className="bg-card text-card-foreground border-border">
        <CardContent className="p-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-display font-medium text-foreground mb-4">
              Understanding Accounting Fundamentals
            </h2>
            <div className="space-y-4 text-foreground">
              <p className="leading-relaxed">
                <strong>Assets</strong> are resources owned by a business that have economic value.
                They represent what the company owns and can use to generate future benefits.
              </p>
              <p className="leading-relaxed">
                <strong>Liabilities</strong> are obligations or debts that a business owes to
                external parties. They represent what the company owes to others.
              </p>
              <p className="leading-relaxed">
                <strong>Balance</strong> ensures accuracy in your accounting records. The
                fundamental equation is: Assets = Liabilities + Equity. When your ledger is
                balanced, this equation holds true.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <FlashcardsPanel />
        <ResourceLinks />
      </div>
    </div>
  );
}
