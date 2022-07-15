export interface Entry {
    type: 'expense' | 'revenue';
    amount: number;
    description: string;
    date: string;
  };
