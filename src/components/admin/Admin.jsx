import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { editItem, deleteItem } from '../../redux/reducers/dataReducer'
import Modal from "react-modal";
import './Admin.css'


const modalStyle = {
   content: {
     width: "450px",
     height: "350px",
     margin: "auto",
     display: "flex",
     flexDirection: "column",
     justifyContent: "space-around",
     alignItems: "center"
   }
 };


const Admin = () => {
   const data = useSelector(state => state.dataReducer)
   console.log('data is ', data)
   const dispatch = useDispatch(); 
   const [tId, setID] = useState(0)
   const [tPrice, setPrice] = useState(0)
   const [tQuantity, setQuantity] = useState(0)
   const [ isOpen, setIsOpen ] = useState(false)

   const handleEdit = ind => {
      let temp = data[ind]
      setID(temp.id)
      setPrice(temp.price)
      setQuantity(temp.quantity)
      setIsOpen(true)
   }

   const handlePrice = e => setPrice(e.target.value)
   const handleQuantity = e => setQuantity(e.target.value)
   const submit = () => {
      dispatch(editItem([tId, tPrice, tQuantity]))
      setID(0)
      setPrice(0)
      setQuantity(0)
      setIsOpen(false)
   }

   const handleDelete = ind => {
      let id = data[ind].id
      // console.log(temp.id)
      dispatch(deleteItem(id))
   }
   return (
      <div className='admin-component'>

      <Modal isOpen={isOpen} style={modalStyle}>
         <p>Change Price  <input type='number' placeholder="enter price" onChange={e => handlePrice(e)} /></p>
         <p>Change Quantity<input type='number' placeholder="enter quantity" onChange={e => handleQuantity(e)}  /></p>
         <p>
         <Button variant="outline-dark" size="lg" onClick={submit} >SUBMIT</Button>{' '}
         <Button variant="outline-dark" size="lg" onClick={() => setIsOpen(false)} >CANCEL</Button>{' '}
         </p>
             
      </Modal>


         <table className='table-one' >
            <thead><td colSpan="9">INVENTORY</td></thead>
               <tr>
                  <th>ID</th>
                  <th>Product Name</th>
                  <th>Serial#</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Manufacturer</th>
                  <th>Image</th>
                  <th>Edit</th>
                  <th>Edit</th>
               </tr>
         {data.length>1 && data.map((item, i) => (
            <tr key={i} className="" >
               <td>{item.id}</td>
               <td>{item.name}</td>
               <td>{item.serial}</td>
               <td>{item.price}</td>
               <td>{item.quantity}</td>
               <td>{item.manufacturer}</td>
               <td><img src={item.images[0]} className="admin-cart-image" /></td>
               <td><Button variant="outline-success" className="admin-card-btn" onClick={() => handleEdit(i)} >Edit</Button></td>
               <td><Button variant="outline-success" className="admin-card-btn" onClick={() => handleDelete(i)} >Delete</Button></td>
            </tr> 
            ))}  
            <tfoot><td colSpan='9'></td></tfoot>
         </table>
      </div>
   )
}



export default Admin; 