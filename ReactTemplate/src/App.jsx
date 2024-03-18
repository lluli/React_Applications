import Hello from "./components/Hello";
import makersLogo from "./assets/Makers-Logo.png";
import "./App.css";
import Profile from './components/Profile'
import Gig from './components/Gig'


function App() {
  return (
    <>
      <Hello name="World" />
      <img className="logo" src={makersLogo}></img>
      <Profile />
      <Gig />

    </>
  );
}

export default App;
