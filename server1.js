const express= require("express");


let app = express();


let r1= express.Router();


app.use('/r1',r1);


r1.get('/get/:a/:b',(req,res)=>{
    res.send(req.params);
    res.end()
})

app.use((req, res, next) => {
    res.status(404);
    res.send("notdddddot");
    res.end()
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});