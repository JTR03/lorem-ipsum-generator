import { useState } from 'react';
import './App.css';
import text from './data';

function App() {
  const [num, setNum] = useState(0)
  const [paragraphs, setParagraphs] = useState([])

  const handleNum = (e)=>{
    setNum(e.target.value)
  }

  const handlePara = (e) =>{
    e.preventDefault()
    let amt = num
    if(num <= 0){
      amt = 0
    }
    setParagraphs(text.slice(0,amt))
  }
  return (
    <div className="App">
      <h3>Lorem Ipsum Generator</h3>
      <form onSubmit={handlePara}>
        <label htmlFor='amount'>Paragraphs: </label>
        <input
        type='number'
        name='amount'
        id='amount'
        value={num}
        onChange={handleNum} 
        />
        <button>
          Generate
        </button>
      </form>
      <article>
        {paragraphs.map((para,index)=>
          <p key={index}>
            {para}
          </p>
      )}
      </article>
    </div>
  );
}

export default App;
