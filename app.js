const express = require('express');
const app = express();
const ClimesSdk = require('@climes/server-sdk');
app.get("/",async function (req,res){
  try{
      const instance = new ClimesSdk({
        api_key : "YOUR_API_KEY", 
        environment : "staging"
      })
      console.log('%c 🍬 instance: ', 'font-size:20px;background-color: #3F7CFF;color:#fff;', instance);
      const payload ={
        usecase : "YOUR_USE_CASE", // e.g : "calculated"
        configs: {
            product_id: "INTERNAL_PRODUCT_ID" // for "calculated"
        }
      }
      const response = await instance.truecost.getTruecost(payload)
      console.log('%c 🍐 resp: ', 'font-size:20px;background-color: #E41A6A;color:#fff;', response);
      return res.json(response)
    }
    catch(error){
      console.log('%c 🍦 error: ', 'font-size:20px;background-color: #42b983;color:#fff;', error);
      res.status(error.statusCode).json(error)
    }
})

app.listen(4000,()=> {
  console.log("Server is running on PORT 4000");
})

//See docs here : https://www.npmjs.com/package/@climes/server-sdk
//for further implementation