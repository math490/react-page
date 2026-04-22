const ContainerProgresso = ({tempoTotalFaixa, tempoAtualFaixa, referencia, avancarPara}) => {

    const formatarTempo = (tempoEmSegundos) => {
        const tempo = new Date(null);
        tempo.setSeconds(tempoEmSegundos);
        return tempo.toISOString().slice(14, 19);
    }

    const handlePointerDown = (evento) => {
        evento.preventDefault();
        evento.currentTarget.setPointerCapture(evento.pointerId);
        avancarPara(evento);
    }

    const handlePointerMove = (evento) => {
        if (evento.buttons !== 1) {
            return;
        }
        avancarPara(evento);
    }

    const handlePointerUp = (evento) => {
        if (evento.currentTarget.hasPointerCapture(evento.pointerId)) {
            evento.currentTarget.releasePointerCapture(evento.pointerId);
        }
    }

    return (
        <section className="container-progresso">
            <div className="progresso-total"
            ref={referencia}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}>
                <div className="progresso-atual" style={{
                    width: `${(tempoAtualFaixa*100)/tempoTotalFaixa}%`,
                }}></div>
                <div className="marcador-posicao" style={{
                    left: `${(tempoAtualFaixa*100)/tempoTotalFaixa}%`,
                }}></div>
            </div>
            <div className="metricas-tempo">
                <p>{formatarTempo(tempoAtualFaixa)}</p>
                <p>{formatarTempo(tempoTotalFaixa)}</p>
            </div>
        </section>
    )
}

export default ContainerProgresso;