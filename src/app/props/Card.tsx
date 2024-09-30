import React from "react"


interface Tprops{
  name: string;
  age: number;
  rollNo: number;
  day: string;
}

const Card = (props:Tprops) => {
    return (
        <div>  
          <h1>Name: {props.name}</h1>
          <h1>Age: {props.age}</h1>
          <h1>RollNo: {props.rollNo}</h1>
          <h1>Day: Monday</h1>
        </div>
    )
}

export default Card;



{/* <img src={props.img} alt={props.name} />
<h2>{props.name}</h2>
<p>{props.description}</p>
<button onClick={props.handleClick}>Add to Cart</button>
<p>Price: {props.price}</p>
<p>Quantity: {props.quantity}</p>
<p>Total Price: {props.price * props.quantity}</p>
<button onClick={props.handleRemove}>Remove from Cart</button>
<hr /> */}