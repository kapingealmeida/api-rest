const express = require('express');
const app = express();

// criar rota padrão ou raiz

app.get('/', (req, res) => {
    const x = {
        "name": 'Kapinge Almeida',
        "idade": 20,
        "email": 'kapinge@almeida.com',
        "endereco": {
            "rua": '16',
            "bairro": 'Zona verde 3',
            "cidade": 'Luanda',
            "Pais": 'Angola'
        }
    }
    res.send(x)
})


