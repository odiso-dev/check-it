import { useState } from 'react';
import {Header} from './components/header';

export function App():React.FC {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 style={{fontFamily:'unbounded'}}>Unbounded</h1>
      <h1 style={{fontFamily:'raleway'}}>Raleway</h1>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <Header/>
      
    </>
  )
};
export default App;
