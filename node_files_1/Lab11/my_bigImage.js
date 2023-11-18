

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const imgPath = 'Lab11/nature_elevation.jpg'; 
    const imgStream = fs.createReadStream(imgPath);

    res.writeHead(200, { 'Content-Type': 'image/jpeg' });
    imgStream.pipe(res);
});

const PORT = 3000; 
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
