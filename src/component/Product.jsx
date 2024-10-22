import { connect } from 'react-redux'
function Products({productReducer:{allproducts,cartItems},dispatch}) {
    return (
      <div className='container'>
      <h1>Product</h1>
      <div className='d-flex flex-wrap'>
      {
        allproducts.map((c)=>{
        return(
      <div className="card m-2" style={{width: "10rem"}}>
      <img src={c.image}  className="card-img-top w-75" style={{height:"100px"}}alt="..."/>
      <div className="card-body w-">
        <h5 className="card-title">item name:{c.title.slice(0,15)}</h5>
        <h4>Price:{c.price}</h4>
         {
          cartItems.some(function(kitem){
            if(kitem.id===c.id){return true}
            else{return false}
          })?<button className="btn btn-success">go to cart</button>:<button className="btn btn-primary" onClick={()=>{dispatch({type:'ADD_TO_CART',payload:c})}}>add to cart</button>
        }
      </div>
    </div>
    )
      })
    }
    </div>
    </div>
  )
}
export default connect(store=>store) (Products)
