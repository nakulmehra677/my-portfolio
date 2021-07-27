import logo from './logo.svg';
import './styling/App.css';
import MyAppBar from "./components/myAppBar"
import Contact from './components/contact';
import MyFooter from './components/myFooter';
import Jobs from './components/jobs';
import About from './components/about';
import Skills from './components/skills';
import Home from './components/home';
import Contributions from './components/contributions';
import Qualifications from './components/qualifications';

function App() {
  return (
    <div>
      <MyAppBar />
      <Home />
      <About />
      <Qualifications />
      <Skills />
      <Jobs />
      {/*<Contributions />*/}
      <Contact /> 
      {/* <MyFooter /> */}
    </div>

  );
}

export default App;
