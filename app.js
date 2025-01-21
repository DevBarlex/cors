const http = require('node:http');
const express = require('express')
const axios = require('axios')
const cors = require('cors')
const  app = express()

app.use(cors())

//OBTENER TODOS LOS PERSONAJES
app.get('/characters', async (req, res) =>{    //Funcion para llamar a la api          
    const url = `https://rickandmortyapi.com/api/character/`
    try {
        const response = await axios.get(url)
        res.json(response.data.results)
    } catch (ERROR) {
        res.status(404).json({error: 'personajes no encontrados'})
    }
})

//OBTENER PERSONAJE POR NOMBRE
app.get('/characters/:name', async (req, res) => {
    const { name } = req.params;
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${name}`);
      if (response.data.results && response.data.results.length > 0) {
        res.json(response.data.results[0]); // Devuelve el primer personaje encontrado
      } else {
        res.status(404).json({ message: 'personaje no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ message: 'error al obtener la respuesta del fetch' });
    }
  });



app.listen(3000, () =>{
    console.log('expres esta escucahando http://localhost:3000')
})