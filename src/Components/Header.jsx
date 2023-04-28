import { useState } from 'react';
import '../style/Header.scss';
import {FaBars} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'


const Header = () => {
  const [toggle,settoggle] = useState(false);
  return (
    <div className='header'>

    <div className="logo">
   <h1>Ram Tech</h1>
    </div>

    <main className={toggle? `active` : `navitem`}>

           <a onClick={() =>settoggle(!toggle)} href='#home'>Home</a>
           <a onClick={() =>settoggle(!toggle)} href='#about'>About</a>
           <a onClick={() =>settoggle(!toggle)} href='#brands'>Brands</a>
           <a onClick={() =>settoggle(!toggle)} href='#contact'>Contact</a>

           
        
   </main>
   <div className="manue" onClick={() =>settoggle(!toggle)}>
   {

         toggle? <AiOutlineClose /> : <FaBars />
   }
           </div>
   
    </div>
  )
}

export default Header
