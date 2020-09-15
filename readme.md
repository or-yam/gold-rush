# Mortal Kombat Rush 🐱‍👤

#### A web game for 2 players.

To win each player needs to collect as many dragon-coins 🐲 as he can, and avoid getting in walls 🧱

The thought of creating this game was to implement the idea of matrix data structure in a fun way.

---

#### ⌨ Movement Keys: [UP, DOWN, LEFT, RIGHT]

Player 1: `W`, `S`, `A`, `D`<br>
Player 2: `I`, `K`, `J`, `L`

---

## How to Use

(assuming you have [nodejs](https://nodejs.org/en/) installed)

1. clone the repo

2. run `npm install` in your terminal

3. run `node server.js`

4. open `http://localhost:3300` in your browser.
5. choose the size of the board matrix (rows and columns)
6. Enjoy 🕹🙂

### Screenshots

## <p align="center"><img src="https://res.cloudinary.com/dnrxmm7a0/image/upload/v1600170599/projects/mk3_rusaah.jpg" width="300" /> <img src="https://res.cloudinary.com/dnrxmm7a0/image/upload/v1600170599/projects/mk1_s5ieym.jpg" width="300"> </p>

### Tools and Libraries

- Client-Side: jQuery, Handlebars.
- Server: NodeJs with Express
- Images from [Mortal Kombat wiki](https://mortalkombat.fandom.com/wiki/Mortal_Kombat_II/Gallery)

---

### To Do

- validation to wall generation that makes sure walls aren't blocking a coin/a path to the other side of the board.
- choosing player name and image
- enable remote playing (socket io)