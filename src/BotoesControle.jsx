const BotoesControle = ({
    retrocederFaixa,
    avancarFaixa,
    tocando,
    tocarOuPausar,
    avancar15s,
    voltar15s
}) => {
    return (
    <div className="caixa-botoes">
        <button onClick={retrocederFaixa}><i className="bi bi-skip-start"></i></button>
        <button onClick={voltar15s}><i className="bi bi-arrow-counterclockwise"></i></button>
        <button onClick={tocarOuPausar}>
            <i className={`bi bi-${tocando ? "pause" : "play"}-circle-fill`}></i>
        </button>
        <button onClick={avancar15s}><i className="bi bi-arrow-clockwise"></i></button>
        <button onClick={avancarFaixa}><i className="bi bi-skip-end"></i></button>
    </div>
    )
}

export default BotoesControle;