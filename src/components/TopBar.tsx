import { useState, useEffect } from 'react';
import { SearchIcon, TrendingUpIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { useLedgerStore } from '@/stores/ledgerStore';
import { useUIStore } from '@/stores/uiStore';

const currencies = [
  { code: 'USD', name: 'US Dollar' },
  { code: 'EUR', name: 'Euro' },
  { code: 'GBP', name: 'British Pound' },
  { code: 'JPY', name: 'Japanese Yen' },
  { code: 'CAD', name: 'Canadian Dollar' },
];

export function TopBar() {
  const { currency, exchangeRate, setCurrency, setExchangeRate } = useLedgerStore();
  const { searchQuery, setSearchQuery } = useUIStore();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      if (currency === 'USD') {
        setExchangeRate(1);
        return;
      }

      setLoading(true);
      try {
        const response = await fetch(
          `https://api.exchangerate-api.com/v4/latest/USD`
        );
        const data = await response.json();
        setExchangeRate(data.rates[currency] || 1);
      } catch (error) {
        console.error('Failed to fetch exchange rate:', error);
        setExchangeRate(1);
      } finally {
        setLoading(false);
      }
    };

    fetchExchangeRate();
  }, [currency, setExchangeRate]);

  return (
    <header className="sticky top-0 z-30 bg-card border-b border-border px-6 py-4">
      <div className="flex items-center gap-4 flex-wrap">
        <div className="flex-1 min-w-[200px] max-w-md">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="SearchIcon transactions or terms..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-background text-foreground border-input"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Select value={currency} onValueChange={setCurrency}>
            <SelectTrigger className="w-[140px] bg-background text-foreground border-input">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {currencies.map((curr) => (
                <SelectItem key={curr.code} value={curr.code}>
                  {curr.code}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Badge variant="secondary" className="bg-secondary text-secondary-foreground gap-2">
            <TrendingUpIcon className="w-4 h-4" />
            {loading ? 'Loading...' : `1 USD = ${exchangeRate.toFixed(4)} ${currency}`}
          </Badge>
        </div>
      </div>
    </header>
  );
}
