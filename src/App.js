import logo from './logo.svg';
import './App.css';
import theme from "./theme";
import MyAppBar from "./components/myAppBar"
import Contact from './components/contact';
import MyFooter from './components/myFooter';
import Jobs from './components/jobs';
import About from './components/about';
import Skills from './components/skills';
import Home from './components/home';
import { Button, ThemeProvider,Container } from '@material-ui/core';
import Contributions from './components/contributions';
import Qualifications from './components/qualifications';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MyAppBar />
        <Home />
        <About />
        <Qualifications />
        <Skills />
        <Contributions />
        <Jobs />
        <Contact />
      <MyFooter />
    </ThemeProvider>
  );
}

export default App;
