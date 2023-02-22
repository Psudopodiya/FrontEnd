import './App.css';
import React, { useState } from 'react';
import Menu from './components/Menu';
import Categories from './components/Categories';
import items from './components/Data';


function App() {

  const[menuItems,setMenu] = useState(items);
  const[categories,setCategories] = useState([]);


  const filterItems=(categories)=>{
    const newItems = items.filter((item)=>{
      if(categories==='all'){
        return item;
      }else{
        return item.category === categories;
      }
    })
    setMenu(newItems);  
  }

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline'></div>
        </div>
        <Categories filterItems={filterItems}></Categories>
        <Menu items={menuItems}></Menu>
      </section>
    </main>
  );
}

export default App;
