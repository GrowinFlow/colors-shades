import React, { useContext } from 'react';
import Colors from './Component/ColorsBox';
import Footer from './Layout/Footer';
import { ColorGenContext } from './context/ColorGenContext';
import Header from './Layout/Header';



function App() {
  const {color} = useContext(ColorGenContext)
  // const {color} = ColorGenValue

  console.log(color , "  __", "Online .. . . . ")
  return (
    <>
      <div className=" bg-slate-700 flex flex-col justify-center items-center transition-all ease-in duration-100	web-logo">
     <Header />
     <Colors />
     <Footer />
      </div>
    </>
  );
}

export default App;
