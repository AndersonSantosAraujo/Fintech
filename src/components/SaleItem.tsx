import { ISale } from "../contexts/DataContext";

const linkStyle: React.CSSProperties = {
  fontFamily: "monospace",
};

const SaleItem = ({ sale: { id, nome, preco } }: { sale: ISale }) => {
  return (
    <div className="sale box">
      <a href={id} style={linkStyle}>
        {id}
      </a>
      <div>{nome}</div>
      <div>
        {preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
      </div>
    </div>
  );
};

export default SaleItem;
