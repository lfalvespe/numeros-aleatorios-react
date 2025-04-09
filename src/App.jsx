import { useState } from 'react'
import './App.css'

import useGetRandomInt from '../hooks/useGetRandomInt'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import Controls from '../components/Controls'
import Display from '../components/Display'

function App() {

  const [numbers, setNumbers] = useState(([]))

  const [min, setMin] = useState(0)
  const [max, setMax] = useState(10)
  const [qtd, setQtd] = useState(5)
  const [duplicate, setDuplicate] = useState(false)

  const [error, setError] = useState(false)
  const [message, setMessage] = useState('')

  const getRandomInt = useGetRandomInt()


  //functions
  const handleReset = () => {
    setMin(0)
    setMax(10)
    setQtd(5)
    setNumbers([])
    setMessage('')
  }

  const handleGenerate = (duplicate) => {

    let array = []
    let n = 0

    if (!max || max < min) {
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

    setError(false)
    setMessage('')

    if (duplicate) {
      for (let i = 0; i < qtd; i++) {
        array.push(getRandomInt(min, max))
      }
    }
    setNumbers(array)

    if (duplicate) { return }

    if(qtd > max - min + 1){
      setNumbers([])
      setError(true)
      setMessage(`Não é possível gerar ${qtd} números únicos entre ${min} e ${max}`)
      return
    }

    while (array.length < qtd) {
      n = getRandomInt(min, max)
      array.indexOf(n) === -1 && array.push(n)
    }
    setNumbers(array)

  }

  return (
    <>
      <Navbar />

      <h1>Gerador de números aleatórios</h1>

      <div className="card">

        <Controls min={min} setMin={setMin} max={max} setMax={setMax} qtd={qtd} setQtd={setQtd} duplicate={duplicate} setDuplicate={setDuplicate} handleReset={handleReset} handleGenerate={handleGenerate} />

      </div>

      <Display numbers={numbers} error={error} message={message} />

      <Footer />
    </>
  )
}

export default App
