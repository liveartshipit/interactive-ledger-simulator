import { useState } from 'react';
import { BookOpenIcon, ChevronRightIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const flashcards = [
  {
    id: 1,
    term: 'Assets',
    definition: 'Resources owned by a business that have economic value and can provide future benefits.',
    example: 'Cash, inventory, equipment, buildings',
  },
  {
    id: 2,
    term: 'Liabilities',
    definition: 'Obligations or debts that a business owes to external parties.',
    example: 'Loans, accounts payable, mortgages',
  },
  {
    id: 3,
    term: 'Equity',
    definition: "The owner's residual interest in the assets after deducting liabilities.",
    example: 'Owner capital, retained earnings',
  },
  {
    id: 4,
    term: 'Debit',
    definition: 'An entry on the left side of an account that increases assets or expenses.',
    example: 'Recording cash received',
  },
  {
    id: 5,
    term: 'Credit',
    definition: 'An entry on the right side of an account that increases liabilities or revenue.',
    example: 'Recording a loan received',
  },
  {
    id: 6,
    term: 'Trial Balance',
    definition: 'A report that lists all accounts and their balances to verify debits equal credits.',
    example: 'End-of-period balance verification',
  },
];

export function FlashcardsPanel() {
  const [currentCard, setCurrentCard] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const handleNext = () => {
    setFlipped(false);
    setCurrentCard((prev) => (prev + 1) % flashcards.length);
  };

  const card = flashcards[currentCard];

  return (
    <Card className="bg-card text-card-foreground border-border">
      <CardHeader>
        <CardTitle className="text-foreground flex items-center gap-2">
          <BookOpenIcon className="w-5 h-5" />
          Learning Flashcards
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          Master accounting concepts interactively
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div
          className="relative h-64 cursor-pointer perspective-1000"
          onClick={() => setFlipped(!flipped)}
        >
          <div
            className={`absolute inset-0 transition-smooth-out transform-style-3d ${
              flipped ? 'rotate-y-180' : ''
            }`}
          >
            <div className="absolute inset-0 backface-hidden">
              <div className="h-full p-8 rounded-lg bg-gradient-1 flex flex-col items-center justify-center text-center">
                <h3 className="text-3xl font-display font-semibold text-white mb-4">
                  {card.term}
                </h3>
                <p className="text-sm text-white/80">Click to reveal definition</p>
              </div>
            </div>
            <div className="absolute inset-0 backface-hidden rotate-y-180">
              <div className="h-full p-8 rounded-lg bg-gradient-2 flex flex-col justify-center">
                <p className="text-white mb-4 leading-relaxed">{card.definition}</p>
                <div className="pt-4 border-t border-white/20">
                  <p className="text-sm text-white/80 mb-1">Example:</p>
                  <p className="text-white font-medium">{card.example}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">
            Card {currentCard + 1} of {flashcards.length}
          </span>
          <Button
            onClick={handleNext}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Next Card
            <ChevronRightIcon className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
