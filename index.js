const express = require("express")
const morgan = require("morgan")
const cors = require("cors")

const app = express()

app.use(morgan("dev"))
app.use(cors())
app.use(express.json())
// ------------------------------------------------------------------ //

app.get("/", (req, res) => {
    res.json({msg: 'hello!'})
   })


let counter = 0;

// Get Counter 
app.get("/counter", (req, res) => {
    res.json({ value: counter });
  });

// Post Counter Increments, vlaue counter increases.
app.post("/counter/increment", (req, res) => {
    counter++;
    res.json({ value: counter });
  });

// Post Counter Decrement, vlaue counter increases.
app.post("/counter/decrement", (req, res) => {
    counter--;
    res.json({ value: counter });
  });
// Post Counter Doubles Counter Increment. 
app.post("/counter/double", (req, res) => {
    counter = counter * 2;
    res.json({ value: counter });
  });
// Post Delete Increment 
app.delete("/counter", (req, res) => {
    counter = 0;
    res.json({ value: counter });
  });

//Start up our server
const port = 3030
app.listen(port, () => {
 console.log(`Server is running on http://localhost:${port}/`)
})
