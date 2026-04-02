import "./tema.estilos.css";
export default function Tema({ tema }) {
  return <h3 className="tema">{tema.nome}</h3>;
}
