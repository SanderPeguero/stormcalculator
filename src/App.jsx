
import './App.css'
import LeftButtons from './components/Calculator/UI/RightButton/RightButtons'
import RightButtons from './components/Calculator/UI/LeftButton/LeftButtons'
import CenterControls from './components/Calculator/UI/CenterControl/CenterControls'
function App() {


  return (
    <>
      <h1>Buttons Layout</h1>
      <div className='calculatorbody'>
        <RightButtons/>
        <CenterControls/>
        <LeftButtons/>
      </div>

    </>
  )
}

export default App
