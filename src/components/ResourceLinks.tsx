import { ExternalLinkIcon, BookOpenIcon, CalculatorIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const resources = [
  {
    title: 'Investopedia: Accounting Basics',
    description: 'Comprehensive guide to fundamental accounting principles',
    url: 'https://www.investopedia.com/terms/a/accounting.asp',
    icon: BookOpenIcon,
  },
  {
    title: 'AccountingCoach: Debits vs. Credits',
    description: 'Learn the difference between debits and credits',
    url: 'https://www.accountingcoach.com/debits-and-credits/explanation',
    icon: BookOpenIcon,
  },
];

export function ResourceLinks() {
  return (
    <Card className="bg-card text-card-foreground border-border">
      <CardHeader>
        <CardTitle className="text-foreground">Learning Resources</CardTitle>
        <CardDescription className="text-muted-foreground">
          External guides and tools to deepen your understanding
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 rounded-lg border border-border bg-background hover:bg-muted transition-smooth"
              >
                <div className="flex items-start gap-3">
                  <Icon className="w-5 h-5 text-primary mt-1" />
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground mb-1">{resource.title}</h4>
                    <p className="text-sm text-muted-foreground">{resource.description}</p>
                  </div>
                  <ExternalLinkIcon className="w-4 h-4 text-muted-foreground" />
                </div>
              </a>
            );
          })}
        </div>

        <div className="pt-4 border-t border-border">
          <div className="flex items-center gap-2 mb-3">
            <CalculatorIcon className="w-5 h-5 text-primary" />
            <h4 className="font-medium text-foreground">Tax CalculatorIcon</h4>
          </div>
          <div className="rounded-lg overflow-hidden border border-border">
            <iframe
              src="https://quickbooks.intuit.com/r/taxes/free-tax-calculator/"
              title="QuickBooks Tax Calculator"
              className="w-full h-96"
              loading="lazy"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
