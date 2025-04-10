
const useCheckConditions = () => {


    const check = (min, max, qtd, duplicate, setNumbers, setError, setMessage) => {
        
        if (max < min) {
            setNumbers([])
            setError(true)
            setMessage('Max não pode ser menor que Min !')
            return
        }

        if (qtd <= 0) {
            setNumbers([])
            setError(true)
            setMessage('Qtd tem que ser maior que 0 !')
            return
        }

        if (!duplicate & qtd > max - min + 1) {
            setNumbers([])
            setError(true)
            setMessage(`Não é possível gerar ${qtd} números únicos entre ${min} e ${max}`)
            return
        }

    }

    return check

}

export default useCheckConditions