import Hello from "./components/Hello";
import makersLogo from "./assets/Makers-Logo.png";
import "./App.css";
import Profile from './components/Profile'
import Product from './components/Product'


function App() {
  return (
    <>
      <Hello name="World" />
      <img className="logo" src={makersLogo}></img>
      <Profile name='Ledia' job ='Software Engineer!!' year='1997' />
      <Product name='TV' description='A TV duh!' price='One Peanut' />
      <Product name='Ice Cream Machine' description='Creamy goodness' price='£1' />

    </>
  );
}

export default App;
