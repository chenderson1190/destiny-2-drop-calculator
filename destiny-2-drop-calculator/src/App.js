import './App.css';
import React from 'react';

function calc_drop(drop_rate, max_runs) {
  let percent_of_drop = 0
  for(let i = 1; i <= max_runs; i++) {
    percent_of_drop = (1 - ((1 - drop_rate) ** i))
    if(percent_of_drop > .98){
      return i
    }
  }
  return "Number of runs needed to guarantee exceeds max number of runs"
}

function App() {
  const [currentAnswer, setCurrentAnswer] = React.useState(0)

  const calculate = (e) => {
    e.preventDefault();
    let dropRate = document.querySelector('#drop-rate').value
    let maxRuns = document.querySelector('#max-runs').value
    setCurrentAnswer(calc_drop(dropRate, maxRuns))
    console.log(dropRate, maxRuns)
  }

  return (
      <div className="App">
        <header className="App-header">
        
          <div style={{display: "table", margin: "auto"}}>
            <form className="pure-form pure-form-stacked">
              <label>
                Drop Rate:
                <input type="text" id="drop-rate"/>
              </label>
              <label>
                Max. Num of Runs:
                <input type="text" id="max-runs"/>
              </label>
              <input type="submit" value="Submit" className="pure-button pure-button-primary" onClick={calculate}/>
              <label>
                Answer:
                <h1 id="result">{currentAnswer}</h1>
              </label>
            </form>
          </div>
        </header>
      </div>
    );
  }
export default App;
