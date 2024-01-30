import React, { createContext, useContext, useState } from "react";
import useFetch from "../Hooks/useFetch";

type IDataContext = {
  data: ISale[] | null;
  loading: boolean;
  error: string | null;
  initial: string;
  final: string;
  setInitial: React.Dispatch<React.SetStateAction<string>>;
  setFinal: React.Dispatch<React.SetStateAction<string>>;
};

export type ISale = {
  id: string;
  nome: string;
  preco: number;
  status: "pago" | "processando" | "falha";
  pagamento: "boleto" | "pix" | "cartao";
  parcelas?: number;
  data: string;
};

const DataContext = createContext<IDataContext | null>(null);

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error("useData precisa estar em DataContextProvider");

  return context;
};

const getNDaysAgo = (n: number) => {
  const date = new Date();
  date.setDate(date.getDate() - n);
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();

  return `${yyyy}-${mm}-${dd}`;
};

export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
  const [initial, setInitial] = useState(getNDaysAgo(30));
  const [final, setFinal] = useState(getNDaysAgo(0));

  const { data, loading, error } = useFetch<ISale[]>(
    `https://data.origamid.dev/vendas/?inicio=${initial}&final=${final}`,
  );

  return (
    <DataContext.Provider
      value={{ data, loading, error, initial, setInitial, final, setFinal }}
    >
      {children}
    </DataContext.Provider>
  );
};
