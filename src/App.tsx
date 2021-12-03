import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import RootRouter from './route/RootRouter'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import GlobalStyle from './style/Global'

function App() {
  return (
    <ChakraProvider>
      <GlobalStyle /> {/* css reset */}
      <NavBar />
      <div className="App">
        <RootRouter />
        <Footer />
      </div>
    </ChakraProvider>
  )
}

export default App
