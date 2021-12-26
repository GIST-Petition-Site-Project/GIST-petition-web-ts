// import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import RootRouter from './route/RootRouter'
import NavBar from './components/NavBar/NavBar'
// import Footer from './components/Footer/Footer'
import GlobalStyle from './style/Global'

const App = (): JSX.Element => {
  return (
    <ChakraProvider>
      <div
        className="App"
        style={{
          position: 'relative',
          display: 'block',
          margin: '0 auto',
          background: 'white',
          minHeight: '1000px',
        }}
      >
        <GlobalStyle /> {/*css reset*/}
        <NavBar />
        {/* <Footer /> */}
        <RootRouter />
      </div>
      {/* <Footer /> */}
    </ChakraProvider>
  )
}

export default App
