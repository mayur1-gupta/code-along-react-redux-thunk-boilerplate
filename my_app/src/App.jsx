import Data from './Data'
import { Provider } from 'react-redux'
import './App.css'
import { ThunkStore } from './Redux/Store'

function App() {
  return (
    <>
     <Provider store = {ThunkStore} >
      <Data/>
     </Provider>
    </>
  )
}

export default App