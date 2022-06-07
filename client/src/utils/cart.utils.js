
export const saveCartItem=(cartItemArray)=>{
    const id= localStorage.getItem('user_id');
    const newCartItemArray= cartItemArray.map(item=> ({...item,qty:1}))
    localStorage.setItem("cart-items-"+id, JSON.stringify(newCartItemArray));
}

export const getCartItem=()=>{
    const id= localStorage.getItem('user_id');

   const oldData= JSON.parse(localStorage.getItem('cart-items-'+id));
   let AllCartItems=[];
   if(oldData){
    AllCartItems = [...new Map(oldData.map(item =>
    [item['product_id'], item])).values()];
   }

   return AllCartItems;
}