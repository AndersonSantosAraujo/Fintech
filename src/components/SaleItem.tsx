import { NavLink } from "react-router-dom";
import { ISale } from "../contexts/DataContext";

const linkStyle: React.CSSProperties = {
  fontFamily: "monospace",
};

const SaleItem = ({ sale: { id, nome, preco } }: { sale: ISale }) => {
  return (
    <div className="sale box">
      <NavLink to={`/vendas/${id}`} style={linkStyle}>
        {id}
      </NavLink>
      <div>{nome}</div>
      <div>
        {preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
      </div>
    </div>
  );
};

export default SaleItem;
