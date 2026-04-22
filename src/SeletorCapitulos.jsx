function SeletorCapitulos(props) {
    return (
        <div className="seletor-capitulos">
            <button className="seletor" onClick={props.alternarLista}>
                <i className="bi bi-list-task"></i>
                <p>Capítulo {props.capituloAtual}</p>
            </button>
            {props.aberto && (
                <div className="seletor-lista">
                    {props.capitulos.map((_, index) => (
                        <button
                            key={index}
                            className={index + 1 === props.capituloAtual ? 'capitulo-item ativo' : 'capitulo-item'}
                            onClick={() => props.selecionarCapitulo(index)}
                        >
                            Capítulo {index + 1}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}

export default SeletorCapitulos;