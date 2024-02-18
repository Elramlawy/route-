import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './component/layout/Layout';
import About from './component/About/About';
import PORTFOLIO from './component/PORTFOLIO/PORTFOLIO';
import CONTACT from './component/Contact/CONTACT';
import Notfound from './component/Notfound/Notfound';
let router= createBrowserRouter([
  {path:"", element:<Layout/> , children:[
    {index:true , element:<About/>},
    {path:"PORTFOLIO" , element:<PORTFOLIO/>},
    {path:"CONTACT" , element:<CONTACT/>},
    {path:"*"  , element:<Notfound/>}
  ]}
])
function App() {
  return <RouterProvider router={router}></RouterProvider>
 

  
   
}

export default App;
