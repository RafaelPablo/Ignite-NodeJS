const express = require('express');

const app = express();

app.get('/', (request, response) => {

return response.send('Teste get');

});

app.listen(3333);