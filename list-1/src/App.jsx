import './App.css'
import { Colors } from './component/Colors';


function App() {
const colors = [
  { name: `red`, id: 1 },
  { name: `yellow`, id: 2 },
];

  return (
    <>
      <Colors colors={colors}></Colors>
    </>
  );
}

export default App
