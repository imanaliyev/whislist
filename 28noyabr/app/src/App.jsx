import React, { useEffect, useState } from 'react'
import './hook/useLocalStorage'
import useLocalStorage from './hook/useLocalStorage';

function App() {
  const [products, setProducts] = useState([])
  const [whislist, setWhislist] = useLocalStorage("key",[])

  console.log(whislist);





  const getFetch =()=>{
    fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data=>{
      setProducts(data)

    })
  }
  useEffect(() => {
    getFetch()
    
  
    
  }, [])  
  
  const addWishLisht=(item)=>{
   const filtered = whislist.find(x=> x.id === item.id)
   if (filtered) {
    setWhislist(whislist.filter(x=> x.id !== item.id))
   }else{
    setWhislist([...whislist,item])
   }

  }

  const removeItem =(item)=>{
    setWhislist(whislist.filter(x=> x.id !== item.id))
  }
  
 const wishlist = document.querySelector(".display-wishlist")
  const handleTheme=()=>{
    document.body.classList.toggle("dark")
    wishlist.classList.toggle(".dark")
   
    
   
  }

  
 
  return (
    <div>
      <button className='theme' onClick={handleTheme}>theme</button>

      <div className="wish-list">

      {whislist.map(x=><ul className='display-wishlist'>
          <img src={x.image} alt="" />
          <li>{x.id}</li>
          <li>{x.name}</li>
          <li>{x.description.slice(0,52)}</li>
          <div>{x.catagory}</div>
          <button onClick={()=>removeItem(x)}>remove</button>
        </ul>)}
        


      </div>
      <div className="products">

        {products.map(x=><ul>
          <div onClick={()=>addWishLisht(x)} className='urek'><i class="fa-solid fa-heart"></i></div>
          <img src={x.image} alt="" />
          <li>{x.id}</li>
          <li>{x.name}</li>
          <li>{x.description.slice(0,52)}</li>
          <div>{x.catagory}</div>
        </ul>)}
      </div>





    </div>
  )
}

export default App