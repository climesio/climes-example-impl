# climes-example-impl

This repo hosts example implementations of how to setup the climes/server-sdk and client side sample code for React and React Native.

Detailed documentation of the server-sdk and further implementation instructions are available here : [https://www.npmjs.com/package/@climes/server-sdk](https://www.npmjs.com/package/@climes/server-sdk)  

The server-sdk is a wrapped around the climes-api and climes-truecost-api. It requires an api key that we will provide for `staging` and `prod` environments 
based on request.  

These api-keys should not be publicly exposed - excessive polling of our endpoints do trigger alarms internally.

The `RNComponent` folder has sample code for a React Native app
The `react-component` folder has sample code for a React app
Similar patterns for the same can be followed for the implementation.

For further questions please contact : product@climes.io
