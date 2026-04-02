import CampoDeEntrada from "./CampoDeEntrada";
import CampoDeFormulario from "./CampoDeFromulario";
import Label from "./Label";
import TituloFormulario from "./TituloFormulario";
import "./formulario-de-evento.estilos.css";
import DropDownDeFormulario from "./DropDownDeFormulario";
import BotaoDeFormulario from "./BotaoDeFormulario";

export default function FormularioDeEvento() {
  return (
    <form className="form-evento">
      <TituloFormulario>Preencha para criar um evento:</TituloFormulario>
      <div className="campos">
        <CampoDeFormulario>
          <Label htmlfor="nome" id="nomeEvento">
            Qual o nome do evento?
          </Label>
          <CampoDeEntrada type="text" id="nome" placeholder="Summer dev hits" />
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlfor="dataEvento" id="dataEvento">
            Data do evento
          </Label>
          <CampoDeEntrada
            type="text"
            id="dataEvento"
            placeholder="XX/XX/XXXX"
          />
        </CampoDeFormulario>
        <DropDownDeFormulario>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </DropDownDeFormulario>
        <div className="acoes">
          <BotaoDeFormulario>Criar evento</BotaoDeFormulario>
        </div>
      </div>
    </form>
  );
}
