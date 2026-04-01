import CampoDeEntrada from "./CampoDeEntrada";
import CampoDeFormulario from "./CampoDeFromulario";
import Label from "./Label";
import TituloFormulario from "./TituloFormulario";
import "./formulario-de-evento.estilos.css";

export default function FormularioDeEvento() {
  return (
    <form className="form-evento">
      <TituloFormulario>Preencha para criar um evento:</TituloFormulario>
      <CampoDeFormulario>
        <Label htmlfor="nome">"Qual o nome do evento?"</Label>

        <CampoDeEntrada type="text" id="nome" placeholder="Summer dev hits" />
      </CampoDeFormulario>
    </form>
  );
}
