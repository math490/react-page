const GerenciadorDeFaixa = ({faixa, referencia}) => {
    return <audio src={faixa} ref={referencia} />
};

export default GerenciadorDeFaixa;