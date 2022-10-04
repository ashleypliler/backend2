const express = require('express')
const cors = require('cors');
const { getHouses, deleteHouse, createHouse, updateHouse} = require('./ controller')

const app = express()


app.use(express.json()) 
app.use(cors());

app.get('/127.0.0.1:5501/index.html', getHouses);
app.post('/index.html', createHouse);
app.put('/index.html/:id', updateHouse);
app.delete('/index.html/:id', deleteHouse);

app.listen(3001, () => console.log('Server is running on port 3001'))