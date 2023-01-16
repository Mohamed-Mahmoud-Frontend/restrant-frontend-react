import React ,{
  useState ,useEffect
} from 'react';
import About from './section/About'


import './App.css';
import Headertop from './componets/Header';
import  BounceLoader  from 'react-spinners/BounceLoader';
import { BrowserRouter ,Route , Routes } from 'react-router-dom';
import Footer from './componets/Footer';
import Navigitionbar from './componets/Navbar';
function App() { 
const [ Loding , setLoding]= useState(false);
useEffect(()=>{
  setLoding(true);
  setTimeout(()=>{
    setLoding(false);
  },1000);
},[])

  return (
    <BrowserRouter>
    {
      Loding?
      <div className='Loding_page'>
              <BounceLoader className='Loding'
      color="#ff0066"
      cssOverride={{}}
      loading
      margin={10}
      size={200}
      height={100}
      
    />
      </div>   
:
      <div>  
      <Navigitionbar/>

      <Routes>
      <Route  path='/' element={<Headertop/>}/>

        </Routes> 
       
        <About/>
         <Footer/>
      </div>
    }


    

    </BrowserRouter>
  );
}

export default App;
