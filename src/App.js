import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
function App() {
  let [cartValue,setCartValue]=useState(0);
  let [data,setdata]=useState([   
     {
      plan:"Fancy Product",
      price:"$40.00-$80.00",


    },
    {
      plan:'Special Item',
      price:"$18.00",
      star:<i class="fa-solid fa-star"style={{color:"#eedc11"}}></i>


      
    },
    {
      plan:'Sale Item',
      price:"$25.00"

      
    },
    {
      plan:'Product',
      price:"$40.00",
      star:<i class="fa-solid fa-star"style={{color:"#eedc11"}}></i>


      
    },
    {
      plan:'Product',
      price:"25.00$"
      
    },
    {
      plan:'Product',
      price:"$120.00-$280.00"

      
    },
    {
      plan:'Special Item',
      price:"$18.00",
      star:<i class="fa-solid fa-star"style={{color:"#eedc11"}}></i>


    },
    {
      plan:'Popular Item',
      price:"$40.00",
      star:<i class="fa-solid fa-star"style={{color:"#eedc11"}}></i>

      
    },
    
  ])


  return <div>
  <Navbar data={cartValue}/>
  <Header/>

  <section className="py-5">
  <div className="container px-4 px-lg-5 mt-5">
  <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

      <Card setCartValue={setCartValue} data={data[0]}/>
      <Card setCartValue={setCartValue} data={data[1]}/> 
      <Card setCartValue={setCartValue} data={data[2]}/>
      <Card setCartValue={setCartValue} data={data[3]}/>
      <Card setCartValue={setCartValue} data={data[4]}/>
      <Card setCartValue={setCartValue} data={data[5]}/>
      <Card setCartValue={setCartValue} data={data[6]}/>
      <Card setCartValue={setCartValue} data={data[7]}/>





  </div>
  </div>
  
</section>

  
</div>
    
}

export default App;

function Card({setCartValue,data}){
  let [Toggle,setToggle]=useState(true)

    return   <div className="col mb-5">
    <div className="card h-100">
        <div className="badge bg-dark text-white position-absolute"style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
        <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
        <div className="card-body p-4">
            <div className="text-center">
                <h5 className="fw-bolder">{data.plan}</h5>
                <span className="text-muted text-decoration-line-through"></span>
                  {data.price}
                  <div>{data.star}{data.star}{data.star}{data.star}{data.star}</div>
                {/* setCartValue(cartalue+1) */}
            </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              {
                Toggle?<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                  setCartValue(prev=>prev+1)
                  setToggle(prev=>!prev)
                 } }>
                  Add to cart
              </button>
            :
          <div className="text-center">
          <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                  setCartValue(prev=>prev-1)
                  setToggle(prev=>!prev)

                 } }>
                  Remove
              </button>
                  
              </div>
}</div>

              </div>

          </div>
    </div>

}