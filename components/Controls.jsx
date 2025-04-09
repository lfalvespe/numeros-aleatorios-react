

const Controls = ({min, setMin, max, setMax, qtd, setQtd, duplicate, setDuplicate, handleReset, handleGenerate}) => {
    return (
        <div className="controls">

            <div className="form-control">

                <label>Intervalo: </label>
                <div>
                    <input
                        type="number"
                        id='min'
                        value={min}
                        onChange={(e) => setMin(e.target.value)}
                    />
                    &nbsp;-&nbsp;
                    <input
                        type="number"
                        id='max'
                        value={max}
                        onChange={(e) => setMax(e.target.value)}
                    />
                </div>
            </div>

            <div className="form-control">
                <label htmlFor="qtd">Qtd de valores: </label>
                <input
                    type="number"
                    id="qtd"
                    value={qtd}
                    onChange={(e) => setQtd(e.target.value)}
                />
            </div>

            <div className="check-control">
                <label htmlFor="duplicated">Permitir duplicados: </label>
                <input type="checkbox" id="duplicated" onChange={() => setDuplicate(!duplicate)} />
            </div>

            <div className="actions">
                <button onClick={() => handleGenerate(duplicate)}>Gerar</button>
                <button onClick={handleReset}>Limpar</button>
            </div>

        </div>
    )
}

export default Controls