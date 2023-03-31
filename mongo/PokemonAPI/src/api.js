const { app, port } = require('./resources/express');
const { urlGet, urlPost, urlPut, urlDelete } = require('./resources/url');
const get = require('./controllers/getPokemon');
const post = require('./controllers/postPokemon');
const del = require('./controllers/deletePokemon');
const put = require('./controllers/putPokemon');

app.get(urlGet, get);

app.post(urlPost, post);

app.put(urlPut, put);

app.delete(urlDelete, del);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}.`);
});
