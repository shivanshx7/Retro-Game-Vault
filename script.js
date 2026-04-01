fetch('https://api.rawg.io/api/games?key=713715bfecfd475486ed3f7ef8803ade&page=2&page_size=5')
.then(x => x.json())
.then(console.log)