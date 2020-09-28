import React from 'react'
import ReactDOM from 'react-dom'

import Header from './components/header/header'
import Content from './components/content/content'
import Cards from './components/cards/cards'

import './styles.css'

function App() {
  return (
    <div className="app">
      <Header />
      <Content />
      <Cards />
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
