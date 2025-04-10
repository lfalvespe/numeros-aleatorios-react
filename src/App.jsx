import { useState } from 'react'
import './App.css'

import useReset from '../hooks/useReset'
import useCheckConditions from '../hooks/useCheckConditions'
import useGetRandomInt from '../hooks/useGetRandomInt'
import useGenerateUnique from '../hooks/useGenerateUnique'
import useGenerateDuplicated from '../hooks/useGenerateDuplicated'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import Controls from '../components/Controls'
import Display from '../components/Display'

const App = () => {

  const [numbers, setNumbers] = useState([])

  const [min, setMin] = useState(0)
  const [max, setMax] = useState(10)
  const [qtd, setQtd] = useState(5)
  const [duplicate, setDuplicate] = useState(false)

  const [error, setError] = useState(false)
  const [message, setMessage] = useState('')

  const reset = useReset()
  const checkConditions = useCheckConditions()
  const getRandomInt = useGetRandomInt()
  const generateUnique = useGenerateUnique()
  const generateduplicated = useGenerateDuplicated()

  //Reset
  const handleReset = () => {
    reset(setNumbers, setError, setMessage, setMin, setMax, setQtd)
  }

  const handleGenerate = (duplicate) => {

    setMessage('')
    setError(false)

    checkConditions(min, max, qtd, duplicate, setNumbers, setError, setMessage)

    // Generate unique
    !duplicate && generateUnique(min, max, qtd, getRandomInt, setNumbers)

    //Generate duplicates
    duplicate && generateduplicated(min, max, qtd, getRandomInt, setNumbers)

  }

  return (
    <>
      <Navbar />
      <h1 className='page-title'>Gerador de números aleatórios</h1>

      <div className="card">

        <Controls min={min} setMin={setMin} max={max} setMax={setMax} qtd={qtd} setQtd={setQtd} duplicate={duplicate} setDuplicate={setDuplicate} handleReset={handleReset} handleGenerate={handleGenerate} />

      </div>

      <Display numbers={numbers} error={error} message={message} />

      <hr />

      <p className='instructions'>
        * Gere um conjunto de números inteiros aleatórios no intervalo selecionado. <br />
        ** Defina a quantidade de números gerados. <br />
        ** Escolha se deseja permitir duplicatas. <br />
      </p>

      <Footer />
    </>
  )
}

export default App
