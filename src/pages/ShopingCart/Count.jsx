import React from 'react'
import {useState} from 'react'
import "./count.css"
// const CountElement = ({productName,stock})=>{
  
//     const [count, setCount] = useState(2);
    
//     const Increment= ()=>{
//         if(count <= 10){
//             setCount(count + 1 );
//         }
//     }
//     const Decrement = ()=>{
//         if(count > 0){
//             setCount(count - 1 );
//         }
//     }
//   return (
//     <div>
//         <h1>{productName}</h1>
//         <h1>{count}/{stock}</h1>
//         <button onClick={Increment} disabled={count === 10} >Increment</button>
//         <button onClick={Decrement} disabled={count ===0} >Decrement</button>
//       {count >=10 && ( <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto molestias consequatur dolores vel voluptatum? Recusandae omnis magni porro dolore consequuntur sunt, iste ad. Vitae, nulla voluptates fugiat esse provident perferendis.</div>)}
//     </div>
//   )
// }
const productList = [
    {
        id:'p1',
        name:"keyboard",
        price:120,
        stock:20
    },
    {
        id:'p2',
        name:"Mouse",
        price:220,
        stock:50
    },
    {
        id:'p3',
        name:"Monitor",
        price:1200,
        stock:10
    },
    {
        id:'p4',
        name:"Laptop",
        price:13320,
        stock:20
    },
    {
        id:'p5',
        name:"RAM",
        price:120,
        stock:20
    },
    {
        id:'p6',
        name:"SSD",
        price:2320,
        stock:20
    },
]

const TableRow =({id,name,price,stock,quantity,total, increment,decrement})=>{
    return(
        <tr className='tablerow'>
            <td className='tablerow'>{id}</td>
            <td className='tablerow'>{name}</td>
            <td className='tablerow'>{price}</td>
            <td className='tablerow'>{stock}</td>
            <td className='tablerow'>{quantity}</td>
            <td className='tablerow'>{total}</td>
            <td>
                <button disabled={quantity === stock} onClick={()=>increment(id)} className='btn'>+</button>
                <button disabled ={quantity===0} onClick={()=> decrement(id)} className='btn' >-</button>
            </td>
        </tr>
    );

};
function Count() {
    const [products, setProducts] = useState(
        productList.map((item)=>{
           return{
            ...item,
            quantity: 0,
            total: 0,
           }
        })
    );

    const incermentQuantity =(id)=>{
        setProducts(
            products.map((product)=>{
                if(id===product.id && product.stock > product.quantity){
                    product.quantity++;
                    product.total= product.quantity * product.price;
                }
                return product
            })
        )
    }
    const decrementQuantity =(id)=>{
        setProducts(
            products.map((product)=>{
                if(id===product.id && product.quantity > 0){
                    product.quantity--;
                    product.total= product.quantity * product.price;
                }
                return product
            })
        )
    }

    const total =products.reduce((acc, cur)=> acc + cur.total, 0);
    return(
  <div className='container'>
    <h1 >Product List</h1>
    <table className='table'>
        <thead>
            <tr>
                <th className='tablerow'>ID</th>
                <th className='tablerow'>Name</th>
                <th  className='tablerow'>Price</th>
                <th  className='tablerow'>Stock</th>
                <th  className='tablerow'>Quantity</th>
                <th  className='tablerow'>Total</th>
                <th className='tablerow'>Actions</th>
            </tr>
        </thead>
        <tbody>
            {
                products.map((item)=>(
                    <TableRow 
                    key={item.id}
                    {...item}
                    increment={incermentQuantity}
                    decrement={decrementQuantity}
                    />
                ))
            }
        </tbody>
       
    </table>
    {
        total > 0 && <p className='total'> {total}</p>
    }
  </div>
    )
}

export default Count;
