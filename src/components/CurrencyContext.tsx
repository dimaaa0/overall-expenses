import { createContext, useState, useEffect } from "react";

interface CurrencyContextType {
    currency: string;
    setCurrency: (c: string) => void;
}

export const CurrencyContext = createContext<CurrencyContextType>({
    currency: "$",
    setCurrency: (c: string) => { }
});

interface SpendingType {
    description: string;
    amount: number | null;
    category: string;
    date: string;
}

export const SpendingContext = createContext<{
    spendings: SpendingType[];
    setSpendings: React.Dispatch<React.SetStateAction<SpendingType[]>>;
}>({
    spendings: [],
    setSpendings: () => { },
});
