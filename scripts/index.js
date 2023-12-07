const auth = "Xrtl8nVXXX7AmZGwD3BgpmVQHfCF9oR6AkraPQaoeDx8KIe9oeeBPzdr";
const endpoint = "https://api.pexels.com/v1/";
// const searchPoint = "https://api.pexels.com/v1/search";


// new URLSearchParams

function searchPexels(searchParam) {
    const searchPoint = "https://api.pexels.com/v1/search";
    const random = Math.round(Math.random()*10)

    fetch(`${searchPoint}?query=${searchParam}&page=${random}&per_page=9`, {headers: {
        Authorization: auth
    }}).then(response => response.json()).then(a => {generateCards(a); console.log(a)});

}

function generateCards(imgData) {
    const containers = document.querySelectorAll('.col-md-4')
    const images = imgData.photos

    for (i=0; i < images.length; i++) {
        let image = images[i]
        let card = containers[i]
        const cardHTML = `
        <div class="card" style="width: 18rem;">
        <div class=".imgContainer">
        <a href="detail.html?artist=${image.photographer}&page=${image.photographer_url}&image=${image.src.original}">
        <img src="${image.src.original}" class="card-img-top" alt="${image.alt}"></a>
        </div>
        <div class="card-body">
          <h5 class="card-title">${image.alt}</h5>
          <p class="card-text">${image.id}</p>
          <a href="#" class="btn btn-primary">Hide</a>
        </div>
        </div>
        `;

        card.innerHTML = cardHTML
        card.querySelector('.btn-primary').addEventListener('click', hideCard)

  
    }
  
}

function hideCard() {
    this.closest('.card').style.display = 'none'
}

const searchBar = document.querySelector('.form-inline')
searchBar.addEventListener('submit', (e) => {
    e.preventDefault()
    const searchText = document.querySelector('[type=search]')
    searchPexels(searchText.value)
})

const buttonContainer = document.getElementById('imageLoaders')
buttonContainer.children[0].addEventListener('click', () => searchPexels('duck'))
buttonContainer.children[1].addEventListener('click', () => searchPexels('flamingo'))


searchPexels('swans')