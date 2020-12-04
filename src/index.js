const customExpress = require('./config/custom-express');
const cors   = require('cors');

const app = customExpress();
app.use(cors())

require('./controllers/index')(app);

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));