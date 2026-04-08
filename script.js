const url1 = `https://api.rawg.io/api/games?key=713715bfecfd475486ed3f7ef8803ade&ordering=-added&page_size=40`
const carousel = document.getElementsByClassName('carousel-kid')
const carouselRating = document.getElementsByClassName('carouselRating')
const carouselName = document.getElementsByClassName('carouselName')


async function carouselApp() {
    let fetched = await fetch(url1)
    fetched = await fetched.json()
    fetched.results.sort((a,b)=> b.rating - a.rating  )


    carousel[0].style.backgroundImage = `url(${fetched.results[0].background_image})`
    carouselRating[0].textContent = `Rated ${fetched.results[0].rating} by ${fetched.results[0].ratings_count} gamers`
    carouselName[0].textContent = `${fetched.results[0].name} `
    for (i of fetched.results[0].genres){
  
        carousel[0].innerHTML += `<p style="display: inline-block;background-color: #4E00DF;font-family:'Inter',sans-serif ;margin:0px 5px;padding: 4px ;border-radius:5px;font-size:small;font-weight:bold">${i.name.toUpperCase()}</p>`

    }


    carousel[1].style.backgroundImage = `url(${fetched.results[1].background_image})`
    carouselRating[1].textContent = `Rated ${fetched.results[1].rating} by ${fetched.results[1].ratings_count} gamers`
    carouselName[1].textContent = `${fetched.results[1].name} `
    for (i of fetched.results[1].genres){
  
        carousel[1].innerHTML += `<p style="display: inline-block;background-color: #4E00DF;font-family:'Inter',sans-serif ;margin:0px 5px;padding: 4px ;border-radius:5px;font-size:small;font-weight:bold">${i.name.toUpperCase()}</p>`

    }
    


    carousel[2].style.backgroundImage = `url(${fetched.results[2].background_image})`
    carouselRating[2].textContent = `Rated ${fetched.results[2].rating} by ${fetched.results[2].ratings_count} gamers`
    carouselName[2].textContent = `${fetched.results[2].name} `
    for (i of fetched.results[2].genres){
  
        carousel[2].innerHTML += `<p style="display: inline-block;background-color: #4E00DF;font-family:'Inter',sans-serif ;margin:0px 5px;padding: 4px ;border-radius:5px;font-size:small;font-weight:bold">${i.name.toUpperCase()}</p>`

    }


    carousel[3].style.backgroundImage = `url(${fetched.results[3].background_image})`
    carouselRating[3].textContent = `Rated ${fetched.results[3].rating} by ${fetched.results[3].ratings_count} gamers`
    carouselName[3].textContent = `${fetched.results[3].name} `
   for (i of fetched.results[3].genres){
  
        carousel[3].innerHTML += `<p style="display: inline-block;background-color: #4E00DF;font-family:'Inter',sans-serif ;margin:0px 5px;padding: 4px ;border-radius:5px;font-size:small;font-weight:bold">${i.name.toUpperCase()}</p>`

    }


    carousel[4].style.backgroundImage = `url(${fetched.results[4].background_image})`
    carouselRating[4].textContent = `Rated ${fetched.results[4].rating} by ${fetched.results[0].ratings_count} gamers`
    carouselName[4].textContent = `${fetched.results[4].name} `
    for (i of fetched.results[4].genres){
  
        carousel[4].innerHTML += `<p style="display: inline-block;background-color: #4E00DF;font-family:'Inter',sans-serif ;margin:0px 5px;padding: 4px ;border-radius:5px;font-size:small;font-weight:bold">${i.name.toUpperCase()}</p>`

    }


    carousel[5].style.backgroundImage = `url(${fetched.results[5].background_image})`
    carouselRating[5].textContent = `Rated ${fetched.results[5].rating} by ${fetched.results[0].ratings_count} gamers`
    carouselName[5].textContent = `${fetched.results[5].name}`
    for (i of fetched.results[5].genres){
  
        carousel[5].innerHTML += `<p style="display: inline-block;background-color: #4E00DF;font-family:'Inter',sans-serif ;margin:0px 5px;padding: 4px ;border-radius:5px;font-size:small;font-weight:bold">${i.name.toUpperCase()}</p>`

    }







}

carouselApp()

const mostPopular = document.getElementById('most-popular')

async function mostPopularApp() {
    let fetched = await fetch('https://api.rawg.io/api/games?key=713715bfecfd475486ed3f7ef8803ade&ordering=-added&page_size=9')
    fetched = await fetched.json()

    for (i of fetched.results){
        mostPopular.innerHTML += `<div><h3>${i.name}</h3><img src=${i.background_image} ></div>`
    }


    console.log(fetched.results)

    
}
mostPopularApp()

const PCgames = document.getElementById('pc-games')

async function PCgamesApp() {
    let fetched = await fetch('https://api.rawg.io/api/games?key=713715bfecfd475486ed3f7ef8803ade&platforms=4')
    fetched = await fetched.json()
    let k = 0

    for (i of fetched.results){
        if (k >= 9 ){
            PCgames.innerHTML += `<div><h3>${i.name}</h3><img src=${i.background_image} ></div>`
        }
        k += 1
    }


    console.log(fetched.results)

    

}


const PS5games = document.getElementById('ps5-games')

async function PS5gamesApp() {
    let fetched = await fetch('https://api.rawg.io/api/games?key=713715bfecfd475486ed3f7ef8803ade&platforms=187')
    fetched = await fetched.json()
    let k = 0
    fetched.results.reverse()

    for (i of fetched.results){
        if (k !== 1 ){
            PS5games.innerHTML += `<div><h3>${i.name}</h3><img src=${i.background_image} ></div>`
        }
        k += 1
    }


    console.log(fetched.results)

    

}

const ACTIONgames = document.getElementById('action-games')

async function ACTIONgamesApp() {
    let fetched = await fetch('https://api.rawg.io/api/games?key=713715bfecfd475486ed3f7ef8803ade&platforms=4,187,186&genres=action')
    fetched = await fetched.json()
    let k = 0
    fetched.results.reverse()

    for (i of fetched.results){
        if (k !== 1 ){
            ACTIONgames.innerHTML += `<div><h3>${i.name}</h3><img src=${i.background_image} ></div>`
        }
        k += 1
    }


    console.log(fetched.results)

    

}
const ADVENTUREgames = document.getElementById('adventure-games')

async function ADVENTUREgamesApp() {
    let fetched = await fetch('https://api.rawg.io/api/games?key=713715bfecfd475486ed3f7ef8803ade&platforms=4,187,186&genres=adventure')
    fetched = await fetched.json()
    let k = 0
    fetched.results.reverse()

    for (i of fetched.results){
        if (k !== 1 ){
            ADVENTUREgames.innerHTML += `<div><h3>${i.name}</h3><img src=${i.background_image} ></div>`
        }
        k += 1
    }


    console.log(fetched.results)

    
}
const SearchInput = document.getElementById('search-input')
const SearchButton = document.getElementById('search-button')
async function SearchApp() {
    

    async function cb() {
        let fetched = await fetch(`https://api.rawg.io/api/games?key=713715bfecfd475486ed3f7ef8803ade&search=${SearchInput.value.replace(/\s+/g, "+")}`)
        fetched = await fetched.json()
        console.log(fetched) 
    }


    SearchButton.addEventListener("click",async () => {
        const query = SearchInput.value.trim()
        window.location.href = `searchOutput.html?search=${encodeURIComponent(query)}`
        

        
})
    
    
}
SearchApp()
mostPopularApp()
PCgamesApp()
PS5gamesApp()
ACTIONgamesApp()
ADVENTUREgamesApp()
// fetch(url)
// .then(x => x.json())
// .then(x => console.log(x.results[0].background_image))

