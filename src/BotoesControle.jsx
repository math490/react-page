const BotoesControle = (props) => {
    return (
    <div className="caixa-botoes">
        <button onClick={props.retrocederFaixa}><i className="bi bi-skip-start"></i></button>
        <button><i className="bi bi-arrow-counterclockwise"></i></button>
        <button onClick={props.tocarOuPausar}>
            <i className={`bi bi-${props.tocando ? "pause" : "play"}-circle-fill`}></i>
        </button>
        <button><i className="bi bi-arrow-clockwise"></i></button>
        <button onClick={props.avancarFaixa}><i className="bi bi-skip-end"></i></button>
    </div>
    )
}

export default BotoesControle;