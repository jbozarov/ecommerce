import React, { useState, useEffect } from 'react'
import { Breadcrumb, Card, Button } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'
import { BsArrow90DegLeft } from 'react-icons/bs'
import './Products.css'
import { useSelector, connect } from 'react-redux'

const Products = (props) => {
   const [ localData, setLocalData ] = useState([])
   // const data = useSelector(state => state)
   useEffect(() => {
      setLocalData(props.data)
   }, [])
   console.log("14 ", localData)
   return (
      <div>
         <div className='breadcrumb-box' >
            <Breadcrumb>
               <Breadcrumb.Item href="#"><BsArrow90DegLeft></BsArrow90DegLeft> Back</Breadcrumb.Item>
               <Breadcrumb.Item href="#">HOME</Breadcrumb.Item>
               <Breadcrumb.Item href="#">MENS</Breadcrumb.Item>
               <Breadcrumb.Item active>T-SHIRTS</Breadcrumb.Item>
            </Breadcrumb>
         </div>

         <div className='product-container'  >
         {localData.length>1 && localData.map((item, i) => (
            <div key={i} className="product-container-box" >
               <Card style={{ width: '25rem', height: '40rem', border: 'none' }}>
                  { /*<Card.Img variant="top" src={item.images[0]} className="card-image" /> */}
                  <img src={item.images[0]} className="card-image" />
                     <div className='card-body' >
                        <Card.Text> {item.name} </Card.Text>
                        <p>Price: <b>${item.price}</b></p>
                        <div className={item.quantity>10 ? "card-quantity-green" : "card-quantity-red"} > {item.quantity} left in stock </div>
                        <Link to={`/products/${item.id}`} style={{width: '100%'}} > <Button variant="outline-success" className="card-btn" >  SEE DETAILS</Button>{' '} </Link>
                     </div>
                
               </Card>
            </div> 
         ))}  
         </div>
         
        {/* <div className='product-container'  >
         {data.map((item, i) => (
            <div key={i} className="product-container-box1" >
               <img src={item.images[0]} style={{width: '80%', height: '300px'}} />
               <p> {item.name} </p>
            </div> 
         ))}  
         </div> */}
      </div>
   )
}

function mapStateToProps(state) {
   return {
      data: state.dataReducer
   }
}


export default connect(mapStateToProps, {})(withRouter(Products)); 