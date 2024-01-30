import resume from "../assets/icons/resume.svg";
import sales from "../assets/icons/sales.svg";
import webhooks from "../assets/icons/webhooks.svg";
import config from "../assets/icons/config.svg";
import contact from "../assets/icons/contact.svg";
import logout from "../assets/icons/logout.svg";
import FintechSVG from "../assets/FintechSVG";

const Sidenav = () => {
  return (
    <nav className="sidenav box bg-3">
      <FintechSVG title="Fintech Logo" />
      <ul>
        <li>
          <span>
            <img src={resume} alt="..." />
          </span>
          <a href="#">Resumo</a>
        </li>
        <li>
          <span>
            <img src={sales} alt="..." />
          </span>
          <a href="#">Vendas</a>
        </li>
        <li>
          <span>
            <img src={webhooks} alt="..." />
          </span>
          <a href="#">Webhooks</a>
        </li>
        <li>
          <span>
            <img src={config} alt="..." />
          </span>
          <a href="#">Configurações</a>
        </li>
        <li>
          <span>
            <img src={contact} alt="..." />
          </span>
          <a href="#">Contato</a>
        </li>
        <li>
          <span>
            <img src={logout} alt="..." />
          </span>
          <a href="#">Sair</a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidenav;
