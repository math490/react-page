import './App.css';
import {useState, useRef, useEffect} from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import livro from "./assets/capitulos/livro.js";
import Capa from "./Capa.jsx";
import SeletorCapitulos from "./SeletorCapitulos.jsx";
import BotoesControle from "./BotoesControle.jsx";
import GerenciadorDeFaixa from "./GerenciadorDeFaixa.jsx";
import ContainerProgresso from './ContainerProgresso.jsx';
import brasCubasImage from './assets/bras_cubas.jpeg';

function App() {

  const [tocando, definirTocando] = useState(false)
  const [faixaAtual, definirFaixaAtual] = useState(0)
  const [tempoTotalFaixa, definirTempoTotalFaixa] = useState(0)
  const [tempoAtualFaixa, definirTempoAtualFaixa] = useState(0)
  const [listaCapitulosAberta, setListaCapitulosAberta] = useState(false)
  const tagAudio = useRef(null);
  const barraProgresso = useRef(null)

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
    totalCapitulos: livro.length,
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

  const alternarListaCapitulos = () => {
    setListaCapitulosAberta((aberto) => !aberto)
  }

  const selecionarCapitulo = (indice) => {
    definirFaixaAtual(indice)
    setListaCapitulosAberta(false)
  }

  const avancar15s = () => {
    tagAudio.current.currentTime += 15;
  }
  
  const voltar15s = () => {
    tagAudio.current.currentTime -= 15;
  }

  const avancarPara = (evento) => {
    const barra = barraProgresso.current;
    if (!barra || tempoTotalFaixa === 0) {
      return;
    }

    const rect = barra.getBoundingClientRect();
    const clientX = evento.clientX ?? evento.nativeEvent?.clientX;
    const offsetX = Math.min(Math.max(clientX - rect.left, 0), rect.width);
    const novoTempo = (offsetX / rect.width) * tempoTotalFaixa;
    tagAudio.current.currentTime = novoTempo;
  }

  return (
    <>
      <Capa 
      imagemCapa={informacoesLivro.capa}
      textoAlternativo={informacoesLivro.textoAlternativo}
      />
      <SeletorCapitulos
        capituloAtual={faixaAtual + 1}
        capitulos={informacoesLivro.capitulos}
        aberto={listaCapitulosAberta}
        alternarLista={alternarListaCapitulos}
        selecionarCapitulo={selecionarCapitulo}
      />
      <GerenciadorDeFaixa
      faixa={informacoesLivro.capitulos[faixaAtual]}
      referencia={tagAudio}
      definirTempoTotalFaixa={definirTempoTotalFaixa}
      definirTempoAtualFaixa={definirTempoAtualFaixa}
      />
      <ContainerProgresso
      tempoTotalFaixa={tempoTotalFaixa}
      tempoAtualFaixa={tempoAtualFaixa}
      referencia={barraProgresso}
      avancarPara={avancarPara}
      />
      <BotoesControle
      tocando={tocando}
      tocarOuPausar={tocarOuPausar}
      avancarFaixa={avancarFaixa}
      retrocederFaixa={retrocederFaixa}
      avancar15s={avancar15s}
      voltar15s={voltar15s}
      />
    </>
  )
}

export default App
