const express = require('express');
const mongoose=require('mongoose');
const { resolve } = require('path');

const dotenv =require('dotenv');

dotenv.config();


const app = express();
app.use(express.json());

const MONGO_URI=process.env.MONGO_URI
const PORT = process.env.PORT

mongoose.connect(MONGO_URI, {
  useNewUrlParser:true,
  useUnifiedTopology:true
})

.then(()=>{
  console.log('connected to MongoDB');
})

.catch((err)=>{
  console.log(`Error connecting to MongoDB: ${err}`);

});


app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
