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

## <p align="center"><img src="https://lh3.googleusercontent.com/p_kbQ0QIvzqURg1i02p2GeV6mFq4w8Knqde0q5UAvT-o9oR3dHG9s1W-0S2iFIvUKdw-7vHbDCR0EGbN2c754sIiuCPZeZfrOA8VPdgI2m1ao985Rs8NhA0RYbSbC6mdnvzBIarPLMdhQjKRWIgjM2nLCHLQoScBDbQMWIaOpzrNVQErzhTnlC5mbpu5nzhtj34Xx0BOOoZB4GhB_oHQz-L-RbwyvqJUJpn3i_2MO3IxjmX3U3ZwmMqof507tjGMZAyEvp1gECf9SuZH0PEIgKJr5-1wWIVZ40HP0sn9Na6W0sb1ap8AJbWv2WQ4MXPPkBrB6Ky5VPCUiHyzBdj_BsHBw8_01HnJH8GeTPouahVE1o_l5VHUq8JlP-kYXKvVfH1gAEkb_b_5xLngbDBaeht0USeEQIjNiHlvmR5LK8YCRvWha-y12rq2MTSILOil9UHS71ExK0VgJX4n-eyTKvqbBshWHxvsHbBuuJyk4FbV7qdYWoHIKy2LaI0KCMkmBqIWoU7tOEbqVt7CT3pOpldPI2B58nezxJJ3NeAOVyW40Qd9brWIA4jBkIQl4muZJLen7CimOl9EOeiFy4JlkYETWZqCuDXlotUcUoLxQlwhZTppIfZ9Ok712Jhj0Ri7N5YlSDdzGZFvrREgsSFIXT61-A-XEp1We6p3y7_mIa9CKA5GyorE1xzZmWHxce4=w1307-h697-no?authuser=0" width="300" /> <img src="https://lh3.googleusercontent.com/YvQUTuHPkmyTHNIj3Z7Tb6GcRKqoamnN64VBuQG0yfztiL4FgLtSlb0kioz_lQdCq6OKHYEOIOkzRfI3jSW2zON-z5QP956QnQc7HCMht_wCm12Zqg7jFqcC4T6bRbDg_ggGjM05tmxa5UqY2YI8FphNI6icdqN2i71p4-e86FixMeOn_4v7n8P7ES9yXSmRfTLcbu-NbpS2Z7wGbv6gdSu9dQJ0EiTFTPQO8wKigKNOuqEiBNzT2Dh2BITDPqrpKC8VsOEi0V500otBob4MVg8DqdcN-JyTjJo42hsjgm5Ysjs_63QQkNV7bz5lwboQ0ZqVazvuN3717hAkY2MBS5gjEYcraLsdxxynZEedcs7ZLoR2ATAPXIfcfXR0mOXXNYSgjoBXJQtsqiM-r9vthACWJOl_7AanZGdplXS9akhsXO0zV8lqHsfq6OBFCPxjzM0uY3TB2QjzMgyfdDz6CixmcRaduhwU5mkYiImmjKQkUg3bNUw6OhxNsgCMLM6c-H4aSXOZbLhpQhCEgCq4-Nj6yQ4412njMM5Lti0d48TVLK65wZwXmCR-gSXYff8MZB1D-TZrU9Dy43-0me1Z_DgvkZTfqCGcyw1gBgqjT-bkQFvnlkMYgCZRUJv7OJcj_2VWv6u7zmXu0Uha3Z68RGeQRVk_IreR584t_Qyg1Bap_-Z4EqQFBA2pg466iBI=w1652-h934-no?authuser=0" width="300"> </p>

### Tools and Libraries

1. jQuery, Handlebars.
2. Node.js
3. images from [Mortal Kombat wiki](https://mortalkombat.fandom.com/wiki/Mortal_Kombat_II/Gallery)

---

### To Do

- validation to wall generation that makes sure walls aren't blocking a coin/a path to the other side of the board.
- choosing player name and image
- enable remote playing (socket io)
- better css 
- add sounds