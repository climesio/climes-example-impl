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
        usecase : "calculated", // e.g : "calculated"
        data: {
          configs : {
          "cart": [
            {
                "product_id": "603e2e0816b04b63ea74f293",
                "quantity": 1
            },
            {
                "product_id": "603e2e0916b04b63ea74f297",
                "quantity": 2
            }
          ]
          }
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