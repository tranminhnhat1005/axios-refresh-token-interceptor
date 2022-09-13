const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

///API
app.get('/api/users', (req, res) => {
    return res.status(200).json({
        status: 'success',
        element: [
            {
                name: 'Nak',
                work: 'IT Developer'
            }, {
                name: 'Nhat Tran',
                work: 'CEO',
            }
        ]
    })
})

app.get('/api/login', (req, res) => {
    return res.status(200).json({
        status: 'success',
        element: {
            token: 'accessToken',
            timeExpired: Date.now() + (60 * 1000)
        }
    })
})

app.get('/api/refresh-token', (req, res) => {
    return res.status(200).json({
        status: 'success',
        element: {
            token: 'newAccessToken',
            timeExpired: Date.now() + (60 * 1000)
        }
    })
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})