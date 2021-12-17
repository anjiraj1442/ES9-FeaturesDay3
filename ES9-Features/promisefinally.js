
const zomato = new Promise ((resolve,reject)=>{
     setTimeout(()=>{
         console.log("inside zomato")
         resolve({order:'biriyani'})
     },1000)
 })
 
 const swiggy = new Promise ((resolve,reject)=>{
     setTimeout(()=>{
         console.log("inside swiggy")
         resolve({item:'pizzaaa'})
     },2000)
 })
 
 Promise.all([zomato,swiggy])
 .then((result)=>{
   console.log(result)
 }).catch((err) => {
     console.error(err);
   })
   .finally(() => {
     console.log('Actions completed');
   });
