import React, { createContext, useContext } from "react";
import useFetch from "../Hooks/useFetch";

type IDataContext = {
  data: ISale[] | null;
  loading: boolean;
  error: string | null;
};

type ISale = {
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

export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
  const { data, loading, error } = useFetch<ISale[]>(
    "https://data.origamid.dev/vendas/",
  );

  return (
    <DataContext.Provider value={{ data, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};
