import React from 'react';
import Colors from './Component/Colors';
import Footer from './Layout/Footer';


function App() {
  return (
    <>

      <div className=" bg-slate-700 flex flex-col justify-center items-center transition-all ease-in duration-100	web-logo">
     <Colors />
     <Footer />
      </div>
    </>
  );
}

export default App;
