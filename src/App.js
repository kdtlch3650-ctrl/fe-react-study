import logo from './logo.svg';
import './App.css';
import Props01 from './components/Props01';
import NewsBlog from './newsBlog/NewsBlog'
import NewsBlog2 from './newsblogTe/NewsBlog'


function App() {

  return(
    <NewsBlog2 />
  );
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <p>아무내용이나 적어버리기</p>        
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
