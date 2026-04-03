const url1 = `https://api.rawg.io/api/games?key=713715bfecfd475486ed3f7ef8803ade&ordering=-added&page_size=40`
const carousel = document.getElementsByClassName('carousel-kid')
const carouselRating = document.getElementsByClassName('carouselRating')

async function carouselApp() {
    let fetched = await fetch(url1)
    fetched = await fetched.json()
    fetched.results.sort((a,b)=> b.rating - a.rating  )


    carousel[0].style.backgroundImage = `url(${fetched.results[0].background_image})`
    carouselRating[0].textContent = `- Rated ${fetched.results[0].rating} by ${fetched.results[0].ratings_count} gamers`

    carousel[1].style.backgroundImage = `url(${fetched.results[1].background_image})`
    carouselRating[1].textContent = `- Rated ${fetched.results[1].rating} by ${fetched.results[1].ratings_count} gamers`

    carousel[2].style.backgroundImage = `url(${fetched.results[2].background_image})`
    carouselRating[2].textContent = `- Rated ${fetched.results[2].rating} by ${fetched.results[2].ratings_count} gamers`

    carousel[3].style.backgroundImage = `url(${fetched.results[3].background_image})`
    carouselRating[3].textContent = `- Rated ${fetched.results[3].rating} by ${fetched.results[3].ratings_count} gamers`

    carousel[4].style.backgroundImage = `url(${fetched.results[4].background_image})`
    carouselRating[4].textContent = `- Rated ${fetched.results[4].rating} by ${fetched.results[0].ratings_count} gamers`

    carousel[5].style.backgroundImage = `url(${fetched.results[5].background_image})`
    carouselRating[5].textContent = `- Rated ${fetched.results[5].rating} by ${fetched.results[0].ratings_count} gamers`






    console.log(carouselRating)
}

carouselApp()

// fetch(url)
// .then(x => x.json())
// .then(x => console.log(x.results[0].background_image))

