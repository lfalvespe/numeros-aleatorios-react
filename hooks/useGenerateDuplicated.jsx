

const useGenerateDuplicated = () => {

    const generateduplicated = (min, max, qtd, getRandomInt, setNumbers) => {

        let array = []

        for (let i = 0; i < qtd; i++) {
            array.push(getRandomInt(min, max))
        }
        setNumbers(array)
        return
    }


    return generateduplicated
}

export default useGenerateDuplicated