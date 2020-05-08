import { Card, Cards } from '@card-triage/interfaces';

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const fs = require('fs');
const path = require('path');

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

let cards: Cards = JSON.parse(fs.readFileSync(path.join(__dirname, './assets/cards.json')));

// Add custom routes before JSON Server router
server.get('/cards', (req, res) => {
    res.jsonp(cards);
});

server.put('/cards/:id/status/:status', (req, res) => {
    let updatedCard: Card;

    cards = cards.map((card: Card) => {
        if (card.id.toString() !== req.params.id) {
            return card;
        }

        updatedCard = { ...card, status: req.params.status };
        return updatedCard;
    });

    res.jsonp(updatedCard);
});

server.use(jsonServer.bodyParser);

// Use default router
server.use(router);
server.listen(3000, () => {
    console.log('JSON Server is running on http://localhost:3000');
});
