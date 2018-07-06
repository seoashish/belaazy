const express = require('express');
const app = express();
app.use(express.static('public'));
app.use(express.static('views'));

app.set('views', './views');
app.set('view engine', 'twig');



 
app.listen(3000, () => console.log('app listening on port 3000!'))  