
const http = require('http');

http.createServer( (requ, res) => {

    //res.writeHead(200, {'Content-Type': 'application/json'});
    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    res.writeHead(200, {'Content-Type': 'application/csv'});

    res.write('id, nombre\n');
    res.write('1, Marco\n');
    res.write('2, Luciano\n');
    res.write('3, Islas\n');
    res.write('4, Olavarrieta\n');
    res.end();
})
.listen(8080);

console.log('Escuchasndo en el puerto', 8080);
