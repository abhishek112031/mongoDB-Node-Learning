const {MongoClient}=require('mongodb');
const url="mongodb://0.0.0.0:27017/";
const database='e-com';
const client =new MongoClient(url);



async function getData(){
  try{

    let result=await client.connect();
    // console.log('result-->',result);
    let db=result.db(database);
  
    let productsCollection=db.collection('products');
    let allProducts=await productsCollection.find().toArray();
  
    console.log('all products--->>>',allProducts);
  }
  catch(err){
    console.log('error==',err)
  }


  

}
getData()








