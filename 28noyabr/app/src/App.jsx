import React, { useEffect, useState } from 'react'

function App() {
  const [products, setProducts] = useState([])
  const [whislist, setWhislist] = useState([])
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
  
 
  return (
    <div>

      <div className="wish-list">
      {whislist.map(x=><ul className='display-wishlist'>
          <img src={x.image} alt="" />
          <li>{x.id}</li>
          <li>{x.name}</li>
          <li>{x.description.slice(0,52)}</li>
          <div>{x.catagory}</div>
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