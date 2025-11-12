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

// Мне короче надо щас в контексте
//  добавить получение инфы из lcal storage
//  чтобы особо ниего не менять и дальше все
//  так же использовать

// Отлично! У тебя уже есть типизированный контекст для spendings. Теперь нужно его инициализировать из localStorage и синхронизировать при изменениях. Вот как это делается с твоим кодом:

// import React, { createContext, useState, useEffect } from "react";
// import { SpendingType } from "./types"; // предположим, что у тебя есть такой тип

// export const SpendingContext = createContext<{
//     spendings: SpendingType[];
//     setSpendings: React.Dispatch<React.SetStateAction<SpendingType[]>>;
// }>({
//     spendings: [],
//     setSpendings: () => {},
// });

// export const SpendingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//     const [spendings, setSpendings] = useState<SpendingType[]>([]);

//     // Загружаем данные из localStorage при монтировании
//     useEffect(() => {
//         const stored = localStorage.getItem("spendings");
//         if (stored) {
//             setSpendings(JSON.parse(stored));
//         }
//     }, []);

//     // Сохраняем данные в localStorage при каждом изменении
//     useEffect(() => {
//         localStorage.setItem("spendings", JSON.stringify(spendings));
//     }, [spendings]);

//     return (
//         <SpendingContext.Provider value={{ spendings, setSpendings }}>
//             {children}
//         </SpendingContext.Provider>
//     );
// };


// Теперь можно использовать контекст в компонентах:

// import { useContext } from "react";
// import { SpendingContext } from "./SpendingContext";

// const MyComponent = () => {
//     const { spendings, setSpendings } = useContext(SpendingContext);

//     const addSpending = () => {
//         const newSpending: SpendingType = { id: Date.now(), name: "Новая трата", amount: 100 };
//         setSpendings([...spendings, newSpending]);
//     };

//     return (
//         <div>
//             <button onClick={addSpending}>Добавить</button>
//             <ul>
//                 {spendings.map(s => (
//                     <li key={s.id}>{s.name}: {s.amount}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

<h3>наконец-то работает</h3>