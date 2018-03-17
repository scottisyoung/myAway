require('dotenv').config();
var express = require("express");
var bodyParser = require("body-parser");
var cors= require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../build`));

var visited = [];
var id = 0;

app.get('/api/visited', function(req, res){
    console.log(visited);
    res.json(visited)
})

app.post('/api/visited', function(req, res) {
    req.body.id = id;
    id++;
    visited.push(req.body)
    res.json(visited)
})

app.delete('/api/visited/:id', function(req,res){
 for(var i = 0; i < visited.length; i++){
     if(+req.params.id === +visited[i].id) {
         visited.splice(i,1); 
     }
 }    
 res.json(visited)   
});

const PORT = 3006;
app.listen(PORT, () => console.log(`listening on port:`, PORT));

// HOSTING

const path = require('path');

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'));
})

