import './App.css';
import Capa from "./Capa.jsx"
import brasCubasImage from './assets/bras_cubas.jpeg';

function App() {

  const informacoesLivro = {
    nome: 'Memórias Póstumas de Brás Cubas',
    autor: 'Machado de Assis',
    totalCapitulos: 2,
    capa: brasCubasImage,
    textoAlternativo: 'Capa do livro Memórias Póstumas de Brás Cubas.'
  }

  return (
    <>
      <Capa 
      imagemCapa={informacoesLivro.capa}
      textoAlternativo={informacoesLivro.textoAlternativo}
      />
    </>
  )
}

export default App
