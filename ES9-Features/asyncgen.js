async function* load(){
     yield await Promise.resolve(1);
     yield await Promise.resolve(2);
     yield await Promise.resolve(3);
  }
 
  async function test(){
     for await (const val of load()){
        console.log(val)
     }
  }
  test();
  console.log('end of script') // end of script 1 2 3

  //ex2
  //iterable − Object whose iterable properties are to be iterated over.
async function f(){
     for await(const val of load()){
         console.log(val);
     }
 }
 f()
 //example iterates an array using the for await of loop.
 async function fntest(){
     for await (const val of [10,20,30,40]){
        console.log(val)
     }
  }
  fntest();
  console.log('end of script')