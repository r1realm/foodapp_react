import React from 'react';
import Menu from '../images/image 2menu.png';
import mainHeader from './mainHeader';

function menu() {
  return (
    <div>
      <div>
        <mainHeader />
      </div>
      <section className="top_menu">
        <h3>Cordoba restaurant</h3>
        <h5> Our menu</h5>
        <img src={Menu} alt="image_menu" />
      </section>
      <section>
        <div>
          <p>Popular Curries</p>
        </div>
      </section>
    </div>
  );
}

export default menu;
