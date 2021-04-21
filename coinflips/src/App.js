import './App.css';

function App() {
  function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
  }
  let attempts = 0;
  function fiveHeads() {
        return new Promise( (resolve, reject) => {
            let headsCount = 0;
            let attempts = 0;
            while(headsCount < 5) {
              attempts++;
              let result = tossCoin();
              console.log(`${result} was flipped`);
              if(result === "heads") {
                resolve (headsCount++);
              } else {
                reject (headsCount = 0);
              }
            }
            console.log(`It took ${attempts} tries to flip five 'heads'`);
        });
    }
    fiveHeads()
        .then( res => console.log(res) )
        .catch( err => console.log(err) );
    console.log( "We finished!" );
    
  return (
    <div className="App">
<h1>hello world</h1>
    </div>
  );
}

export default App;
