const express = require('express');
const uploadRoute = require('./routes/upload.router');
const app = express();
app.set("view engine","ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine","ejs");
app.get("/api",(req,res)=>{
    res.render("upload");
})
app.use('/api', uploadRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});