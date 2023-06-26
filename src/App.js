import { useEffect, useState } from "react"
import './App.css';

function App() {

  const a = () => {
    let text = document.querySelector('#pixiv').value;
    console.log(text);
    const newText = text.replace(/(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/g, function (arg1, arg2, arg3, arg4) {
      console.log(arg1);
      window.location.assign(arg1);
    });
    // const newOne=
    // console.log(newText);
  }
  // (http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?
  return (
    <div className="App">
      <header className="App-header">
        <textarea id='pixiv' rows="5" cols="50" onChange={() => a()}></textarea>
      </header>
    </div>
  );
}

export default App;
