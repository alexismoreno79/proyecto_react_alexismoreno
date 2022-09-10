// Dentro de NavBar.js
// import './NavBar.css';
// import CartWidget from '../CartWidget/CartWidget';
// import { Link } from 'react-router-dom';
// 
// const NavBar = () => {
// 
//     // Lógica
// 
//     return (
//         <>
//             <nav className="NavBar">
//                 <div>
//                     <img className="Img" src='images/logo.png' alt='Logo Materiales Moreno'/>
//                     <Link to='/'>
//                         Materiales Moreno
//                     </Link>
//                 </div>
//                 <div className="Categories">
//                     <Link to='/category/caneriaAgua' className="Option" color='red'>Cañería agua fusión</Link>
//                     <Link to='/category/caneriaDesague' className="Option" color='blue'>Cañería desague PVC</Link>
//                   <Link to='/category/hierros' className="Option" color='green'>Hierros</Link>
//                </div>
//                <CartWidget />
//            </nav>
//        </>    
//    )
//}
//
//export default NavBar


import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {


  return (
      <nav className="NavBar" >
        <div className="Ecomerce">
            <img className="Img" src='images/logo.png' alt='Logo Materiales Moreno'/>
            <Link to='/'>
            <h3>Materiales Moreno</h3>
            </Link>
        </div>     
        <div className="Categories">
            <NavLink to='/category/caneriaAgua' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Cañería agua fusión</NavLink>
            <NavLink to='/category/caneriaDesague' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Cañería desague PVC</NavLink>
            <NavLink to='/category/hierros' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Hierros</NavLink>
        </div>
        <CartWidget />
      </nav>
  )
}

export default NavBar