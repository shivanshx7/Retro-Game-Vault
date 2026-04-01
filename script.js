const url = `https://api.rawg.io/api/games?key=713715bfecfd475486ed3f7ef8803ade&page=1&page_size=6`
const carosel = document.getElementsByClassName('carousel-kid')
console.log(carosel);


fetch(url)
.then(x => x.json())
// .then(console.log)

