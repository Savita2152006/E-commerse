// src/App.jsx
import React from 'react';
import './App.css'; // Optional
//import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Head from './components/Head/Head';
import SearchBar from "./components/SearchBar";
import ScrollableCategories from "./components/ScrollableCategories";
import ProductCard from './components/ProductCard';
import pogo from './assets/pogo.png';
import bob from './assets/bob.png';
import onee from './assets/onee.png';
import twoo from './assets/twoo.png';
import threee from './assets/threee.png';


function App() {
  return (
    <div className="app-container">
     
      <Head/>
      <Sidebar />
       <SearchBar />
       <div>
       <ScrollableCategories />
       </div>
      <div className="app-containe">
      
      <div className="products-grid">
        <div className='pro'>
          <h1 className="product-heading">PRODUCT</h1>
        <ProductCard
          image={onee}
          title="Men Casual Jacket"
          price="85"
          oldPrice="120"
        /> 
        </div>
        <div className='pro'>
          <h1 className="product-heading">PRODUCT</h1>
        <ProductCard
          image={twoo}
          title="Men Leather Jacket"
          price="345"
        />
        </div>
        <div className='pro'>
            <h1 className="product-heading">PRODUCT</h1>
        <ProductCard
          image={threee}
          title="Men Premium Jacket"
          price="122"
        />
        </div>
        <div>
            <h1 className="product-heading">PRODUCT</h1>
        <ProductCard
          image={pogo}
          title="Men Jeans Jacket"
          price="433"
          oldPrice="543"
        />
        </div>
        <div>
            <h1 className="product-heading">PRODUCT</h1>
        <ProductCard
          image={onee}
          title="Men Jeans Jacket"
          price="433"
          oldPrice="543"
        />
        </div>
        <div>
            <h1 className="product-heading">PRODUCT</h1>
        <ProductCard
          image={twoo}
          title="Men Jeans Jacket"
          price="433"
          oldPrice="543"
        />
        </div>
      </div>
      <div className='stud'>
       <ScrollableCategories />
       </div>
       <div className="products-gridd">
        <div className='pro'>
          
        <ProductCard
          image={pogo}
          title="Men Casual Jacket"
          price="85"
          oldPrice="120"
        /> 
        </div>
        <div className='pro'>
         
        <ProductCard
          image={threee}
          title="Men Leather Jacket"
          price="345"
        />
        </div>
        <div className='pro'>
           
        <ProductCard
          image={twoo}
          title="Men Premium Jacket"
          price="122"
        />
        </div>
        <div>
          
        <ProductCard
          image={bob}
          title="Men Jeans Jacket"
          price="433"
          oldPrice="543"
        />
        </div>
        <div>
         
        <ProductCard
          image={onee}
          title="Men Jeans Jacket"
          price="433"
          oldPrice="543"
        />
        </div>
        <div>
          
        <ProductCard
          image={pogo}
          title="Men Jeans Jacket"
          price="433"
          oldPrice="543"
        />
        </div>
      </div>
      
    </div>
    </div>
  );
}

export default App;
