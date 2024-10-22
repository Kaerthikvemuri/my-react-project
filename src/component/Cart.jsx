import React from 'react'
import { connect } from 'react-redux'
function Cart({productReducer:{cartItems},dispatch}) {
  return (
    <div className='container'>
      cartk
      <table className='table table-striped'>
        <thead>
            <tr>
                <th>title</th>
                <th>price</th>
                <th>volume</th>
                <th>total</th>
            </tr>
        </thead>
        <tbody>
            {
                cartItems.map((ci)=>{
                    return <tr>
                        <td>{ci.title}</td>
                        <td>{ci.price}</td>
                        <td>
                            <button className='btn btn-success'>-</button>
                            <b>{ci.count}</b>
                            <button className='btn btn-primary' onClick={()=>{dispatch({type:'INC_CART_ITEM_COUNT',payload:ci.id})}}>+</button>
                            </td>
                            <td>{ci.price*ci.count}</td>
                    </tr>
                })
            }
        </tbody>
        <tfoot>
            <tr>
                <td>{cartItems.reduce((a,b)=>{return a+b.price*b.count},0)}</td>
            </tr>
            </tfoot>
      </table>
    </div>
  )
}

export default connect(store=>store) (Cart)
