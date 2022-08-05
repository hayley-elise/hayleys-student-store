import "./Sidebar.css"
import * as React from "react"


export default function Sidebar ({isOpen, shoppingCart = [], products = [], checkoutForm, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm, handleOnToggle, receipt, success, error}) {
  let open = isOpen ? " open" : ""

  return (
    <section className = {"sidebar" + open}>
      <button className = "toggle-button" onClick = {handleOnToggle}> Button </button>
      {isOpen ? 
        <div>
          <ShoppingCart
              isOpen = {isOpen}
              products = {products}
              shoppingCart = {shoppingCart}
          />
          <CheckoutForm 
              isOpen = {isOpen}
              shoppingCart = {shoppingCart}
              checkoutForm = {checkoutForm}
              handleOnCheckoutFormChange = {handleOnCheckoutFormChange}
              handleOnSubmitCheckoutForm = {handleOnSubmitCheckoutForm}
          />
          <Receipt receipt = {receipt}/>
        </div> : null}
    </section>
  )
}

function Receipt ({receipt}) {
  return (
    <div className = "receipt">
      <p> Showing the purchase details for {receipt.user.name}: </p>
      <ul>
        {receipt.items.map((item)=> {
          return (
            <li key = {item.name}> {item.name} (${item.price} each) ~ X{item.quantity} = Total: ${item.totalPrice} </li>
          )
        })}
      </ul>
      <p> Receipt sent to: {receipt.user.email}: </p>
    </div>
  )
}