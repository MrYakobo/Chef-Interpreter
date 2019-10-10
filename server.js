#!/usr/bin/env node

var express = require('express');
var fs = require('fs')
var exec = require('child_process').exec;
var Handlebars = require('handlebars');
var app = express();
var recipes = fs.readdirSync('recipes');
recipes = recipes.map((x)=>{
    return x.split('.')[0];
})

app.get('/', (req, res) => {
    fs.readFile('index.html', (err, data)=>{
        if(err) throw err;
        res.send(Handlebars.compile(data.toString())({recipes: recipes}));
    })
})

app.use('/bower_components', express.static('bower_components'));
app.use('/recipes', express.static('recipes'));

app.get('/code', (req, res) => {
    //filename
    var tmp = 'tmp/' + Date.now() + ".chef";
    fs.writeFile(tmp, req.query.code, () => {
        exec('chef ' + tmp, (err, stdout, stderr) => {
            if (err) {
                res.send(JSON.stringify({ type: 'err', msg: sanitize(err.message) }));
            }
            else if (stderr) {
                res.send(JSON.stringify({ type: 'err', msg: sanitize(stderr.message)}));
            }
            else {
                res.send(JSON.stringify({ type: 'msg', msg: stdout }))
            }
            fs.unlink(tmp, (a) => {
                //remove tmp file
            })
        })

    })
})

function sanitize(err){
    return typeof(err) == 'undefined' ? "" : err.split('.chef')[1].split('at /')[0];
}

var port = process.env.PORT || 8080
//var port = process.platform == 'win32' || (process.getuid && process.getuid() === 0) ? 80 : 8080

app.listen(port, (req, res) => {
    console.log(`Listening on port ${port}!`);
})
