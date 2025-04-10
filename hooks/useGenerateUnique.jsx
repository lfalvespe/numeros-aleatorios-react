
const useGenerateUnique = () => {

    const generateUnique = (min, max, qtd, getRandomInt, setNumbers) => {

        let n = 0
        let array = []

        while (array.length < qtd) {
            if(qtd > max-min+1) {return}
            n = getRandomInt(min, max)
            array.indexOf(n) === -1 && array.push(n)
        }
        console.log(array)
        setNumbers(array)
        return

    }

    return generateUnique

}

export default useGenerateUnique