import {Routes,Route} from 'react-router-dom';
// import About from './Components/About';
// import Home from './Components/Home';
// import Contact from './Components/Contact';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';

// import Product from './Components/Product';


function App() {


  return (
    <>

   
<Header />

<Routes>
<Route path='/' element={<Home />} /> 

</Routes>
<Footer />

    </>
  )
}

export default App
