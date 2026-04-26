import "./App.css";
import Banner from "./components/Banner";
import FormularioDeEvento from "./components/FormularioDeEvento";
import Tema from "./components/Tema";
import Header from "./components/Header";
import CardEvento from "./components/CardEvento";

function App() {
  const temas = [
    { id: 1, nome: "front-end" },
    { id: 2, nome: "back-end" },
    { id: 3, nome: "devops" },
    { id: 4, nome: "inteligência artificial" },
    { id: 5, nome: "Data Science" },
    { id: 6, nome: "Cloud" },
  ];

  const eventos = [
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png",
      tema: temas[0],
      data: new Date(),
      titulo: "mulheres no front-end",
    },
  ];

  return (
    <>
      <main>
        <Header />
        <Banner />
        <FormularioDeEvento temas={temas} />
        {temas.map(function (item) {
          return (
            <section key={item.id}>
              <Tema tema={item} />
              <CardEvento evento={eventos[0]} />
            </section>
          );
        })}
      </main>
    </>
  );
}

export default App;
