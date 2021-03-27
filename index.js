const server = require('./src/server');
const port = process.env.PORT || 3000;

server.listen(3000, console.log(`Server is running on ${port}`));
