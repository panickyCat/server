const http = require('http');

// импорт обработчика маршрутов
const routeHandler = require('./routes/router');

// создание HTTP сервера
const server = http.createServer(routeHandler);

//запуск сервера
const PORT = 3000;
server.listen(PORT, () => {
	console.log(`Run server on port ${PORT}`);
});