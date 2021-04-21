import './App.css';

function App() {
  function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
  }
  function fiveHeads() {
        return new Promise( (resolve, reject) => {
            let headsCount = 0;
            let attempts = 0;
            while(headsCount < 5) {
              attempts++;
              let result = tossCoin();
              console.log(`${result} was flipped`);
              if(result === "heads") {
                headsCount++;
              } else {
                headsCount = 0
              }
            }
            if (attempts < 101) {
              resolve(`It took ${attempts} tries to flip five heads!`)
            } else {
              reject("Too bad. It took over 100 tries to flip five heads. You lose :(")
            }
        });
    }
    fiveHeads()
        .then( res => console.log(res) )
        .catch( err => console.log(err) );
    console.log( "When does this run now?" );
    
  return (
    <div className="App">
<h1>hello world</h1>
    </div>
  );
}

export default App;
