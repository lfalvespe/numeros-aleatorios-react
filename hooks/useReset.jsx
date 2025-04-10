
const useReset = () => {
    const reset = (setNumbers, setError, setMessage, setMin, setMax, setQtd) => {
        setError(false)
        setMessage('')
        setMin(0)
        setMax(10)
        setQtd(5)
        setNumbers([])
    }
    return reset
}

export default useReset

