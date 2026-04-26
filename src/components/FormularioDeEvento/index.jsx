import CampoDeEntrada from "./CampoDeEntrada";
import CampoDeFormulario from "./CampoDeFromulario";
import Label from "./Label";
import TituloFormulario from "./TituloFormulario";
import "./formulario-de-evento.estilos.css";
import DropDownDeFormulario from "./DropDownDeFormulario";
import BotaoDeFormulario from "./BotaoDeFormulario";

export default function FormularioDeEvento({ temas }) {
  return (
    <form className="form-evento">
      <TituloFormulario>Preencha para criar um evento:</TituloFormulario>
      <div className="campos">
        <CampoDeFormulario>
          <Label htmlfor="nome" id="nomeEvento">
            Qual o nome do evento?
          </Label>
          <CampoDeEntrada
            type="text"
            id="nome"
            name="nome"
            placeholder="Summer dev hits"
          />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlfor="capa" id="capaEvento">
            Qual o endereço da imagem de capa do evento?
          </Label>
          <CampoDeEntrada
            type="text"
            id="capa"
            name="capa"
            placeholder="http://..."
          />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlfor="dataEvento" id="dataEvento">
            Data do evento
          </Label>
          <CampoDeEntrada
            type="date"
            id="dataEvento"
            name="dataEvento"
            placeholder="XX/XX/XXXX"
          />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlfor="tema" id="temaEvento">
            Tema do evento
          </Label>
          <DropDownDeFormulario id="tema" name="tema" itens={temas} />
        </CampoDeFormulario>
        <div className="acoes">
          <BotaoDeFormulario>Criar evento</BotaoDeFormulario>
        </div>
      </div>
    </form>
  );
}
