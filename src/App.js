import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav/Nav';
import Main from './Components/Main/Main';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div >
      <Nav></Nav>
      <Main></Main>
    </div>
  );
}

export default App;
