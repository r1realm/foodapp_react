import React from 'react';
import Search from '../images/search.png';
import Filter from '../images/filter.png';
import Basket from '../images/shopping-cart.png';
import Setting from '../images/setting.png';

function footer() {
  return (
    <div>
      <footer className="footer">
        
          <img src={Search} alt="searchicon" className="search_icon" />
       
          <img src={Filter} alt="searchicon" className="filter_icon" />
        
          <img src={Basket} alt="searchicon" className="basket_icon" />
      
          <img src={Setting} alt="searchicon" className="setting_icon" />
        
      </footer>
    </div>
  );
}

export default footer;

