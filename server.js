const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => res.sendFile(path.join(__dirname+'/views/index.html')));
router.put('/api/task', (req, res) => res.send({status: 'ok'}));
router.post('/api/task', (req, res) => res.send({status: 'ok'}));
router.post('/api/start', (req, res) => res.send({status: 'ok'}));
router.post('/api/stop/', (req, res) => res.send({status: 'ok'}));
router.get('/api/tasks', (req, res) => {
    res.send([
        {
            isOnline: false,
            title: 'Shine diamond',
            count: {
                buy: 10,
                sell: 2
            },
            price: {
                min: 200,
                sell: 210,
                current: 198
            }
        }, {
            isOnline: false,
            title: 'Rock wood',
            count: {
                buy: 15,
                sell: 13
            },
            price: {
                min: 52,
                sell: 60,
                current: 51
            }
        }, {
            isOnline: true,
            title: 'Яркий самоцвет симбиотов',
            count: {
                buy: 12,
                sell: 12
            },
            price: {
                min: 45,
                sell: 65,
                current: 32
            }
        }, {
            isOnline: true,
            title: 'Аксесуар "расписная ширма"',
            count: {
                buy: 0,
                sell: 0
            },
            price: {
                min: 120,
                sell: 250,
                current: 58
            }
        }
    ]);
});

app.use('/', router);

app.listen(4000, () => {
    console.log('App listening on port 4000!');
});