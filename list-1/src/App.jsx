import './App.css'
import { Color } from './component/Color'

function App() {


  return (
    <>
      <Color colors={[
        {id:1, name:"green"},
        {id:2, name:"yellow"}
    ]}/>
    </>
  );
}

export default App
