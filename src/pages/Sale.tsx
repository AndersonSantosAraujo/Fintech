import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import { ISale } from "../contexts/DataContext";
import Loading from "../components/Loading";

const Sale = () => {
  const { id } = useParams();

  const { data, loading } = useFetch<Omit<ISale, "data">>(
    `https://data.origamid.dev/vendas/${id}`,
  );

  if (loading) return <Loading />;
  if (!data) return null;
  return (
    <div>
      <div className="box mb">ID: {data.id}</div>
      <div className="box mb">Nome: {data.nome}</div>
      <div className="box mb">
        Preço:{" "}
        {data.preco.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
      <div className="box mb">Status: {data.status}</div>
      <div className="box mb">Pagamento: {data.pagamento}</div>
      {data.parcelas && (
        <div className="box mb">Parcela(s): {data.parcelas}</div>
      )}
    </div>
  );
};

export default Sale;
