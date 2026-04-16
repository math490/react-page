import './App.css';
import {useState, useRef, useEffect} from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import livro from "./assets/capitulos/livro.js";
import Capa from "./Capa.jsx";
import SeletorCapitulos from "./SeletorCapitulos.jsx";
import BotoesControle from "./BotoesControle.jsx";
import GerenciadorDeFaixa from "./GerenciadorDeFaixa.jsx";
import brasCubasImage from './assets/bras_cubas.jpeg';

function App() {

  const [tocando, definirTocando] = useState(false)
  const [faixaAtual, definirFaixaAtual] = useState(0)
  const tagAudio = useRef(null);

  useEffect(() => {
    if (tocando) {
      tocar();
    }
  }, [
    faixaAtual
  ]);

  const informacoesLivro = {
    nome: 'Memórias Póstumas de Brás Cubas',
    autor: 'Machado de Assis',
    totalCapitulos: 2,
    capa: brasCubasImage,
    capitulos: livro,
    textoAlternativo: 'Capa do livro Memórias Póstumas de Brás Cubas.'
  };

  function tocar() {
    tagAudio.current.play();
    definirTocando(true);
  };

  const pausar = () => {
    tagAudio.current.pause();
    definirTocando(false);
  };

  const tocarOuPausar = () => {
    if (tocando) {
      pausar();
    }
    else {
      tocar();
    }
  };

  const avancarFaixa = () => {
    if(informacoesLivro.totalCapitulos === faixaAtual + 1) {
      definirFaixaAtual(0);
    } else {
      definirFaixaAtual(faixaAtual + 1);
    }
  };
  
  const retrocederFaixa = () => {
    if(faixaAtual === 0) {
      definirFaixaAtual(informacoesLivro.totalCapitulos - 1);
    } else {
      definirFaixaAtual(faixaAtual - 1);
    }
  };

  return (
    <>
      <Capa 
      imagemCapa={informacoesLivro.capa}
      textoAlternativo={informacoesLivro.textoAlternativo}
      />
      <SeletorCapitulos capituloAtual={faixaAtual + 1} />
      <GerenciadorDeFaixa faixa={informacoesLivro.capitulos[faixaAtual]}
      referencia={tagAudio}
      />
      <BotoesControle
      tocando={tocando}
      tocarOuPausar={tocarOuPausar}
      avancarFaixa={avancarFaixa}
      retrocederFaixa={retrocederFaixa}
      />
    </>
  )
}

export default App
