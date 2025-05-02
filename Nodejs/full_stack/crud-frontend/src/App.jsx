
import { useState } from 'react'
import './App.css'
import ModelForm from './modelForm'
import NavBar from './navbar'
import TableList from './tableList'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [modelMode, setModelMode] = useState('add')
  const handleOpen = (model) => {
    setIsOpen(true)
    setModelMode(model)
  }
  const handleSubmit = () => {
    if (modelMode === 'add') {
      console.log('added')
    } else {
      console.log('edit')
    }
  }
  return (
    <>
      <NavBar onOpen={() => handleOpen()} />
      <TableList handleOpen={handleOpen} />
      <ModelForm isOpen={isOpen} onSubmit={handleSubmit()} onClose={() => setIsOpen(false)} model={modelMode} />
    </>
  )
}

export default App
