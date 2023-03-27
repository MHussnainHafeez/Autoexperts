

import './App.css';
import Footer from './components/Footer'

import Navbar from './components/navbar'


import Value from './components/Value';


function App() {
  return (
<>
<div className='main_headings'>
  <div>
    <div className="layer">
<Navbar/></div></div>
</div>

<div className="services">
  <Value/>
</div>
    <Footer/>
</>
    );
}

export default App;
