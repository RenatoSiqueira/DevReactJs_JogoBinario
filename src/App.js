import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [estado, setEstado] = useState('ENTRADA')
  const [palpite, setPalpite] = useState(150)
  const [numeroPalpites, setNumeroPalpites] = useState(1)

  const [min, setMin] = useState(0)
  const [max, setMax] = useState(300)

  const iniciarJogo = () => {
    setEstado('RODANDO')
    setMin(0)
    setMax(300)
    setNumeroPalpites(1)
    setPalpite(150)
  }

  if (estado === 'ENTRADA') {
    return (
      <div className="App">
        <header className="App-header">
          <button className="btn" onClick={iniciarJogo}>Começar a Jogar</button>
        </header>
      </div>
    )
  }

  const menor = () => {
    setNumeroPalpites(numeroPalpites + 1)
    setMax(palpite)
    const proximoPalpite = parseInt((palpite - min) / 2) + min
    setPalpite(proximoPalpite)
  }

  const maior = () => {
    setNumeroPalpites(numeroPalpites + 1)
    setMin(palpite)
    const proximoPalpite = parseInt((max - palpite) / 2) + palpite
    setPalpite(proximoPalpite)
  }

  const acertou = () => {
    setEstado('FIM')
  }

  if (estado === 'FIM') {
    return (
      <div className="App">
        <header className="App-header">
          <p>Acertei o número {palpite} com {numeroPalpites} chutes.</p>
          <button className="btn" onClick={iniciarJogo}>Recomeçar?</button>
        </header>
      </div>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>O Seu número é {palpite}?</p>
        <p>
          <button className="btn" onClick={menor}>Menor</button>
          <button className="btn" onClick={acertou}>Acertou</button>
          <button className="btn" onClick={maior}>Maior</button>
        </p>
      </header>
    </div>
  )
}

export default App
