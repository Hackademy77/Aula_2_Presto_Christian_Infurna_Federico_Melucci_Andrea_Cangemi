// NAVBAR CHE CAMBIA COLORE
let navbar = document.querySelector('.fixed-top');

window.addEventListener('scroll', () => {
    if(window.scrollY > 0) {
        navbar.innerHTML = `
        <nav class="navbar navbar-expand-lg w-100">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"><img src="./media/logo.jpeg" alt="" width="100px"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse d-flex justify-content-center" id="navbarSupportedContent">
                    <ul class="navbar-nav  mb-2 mb-lg-0 ">
                        <a class="nav-link dropdown hover-custom" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Tutti gli articoli
                        </a>
                        <ul class="dropdown-content">
                            <li><a class="dropdown-item hover-custom" href="#">Campagne</a></li>
                            <li><a class="dropdown-item hover-custom" href="#">Novità</a></li>
                            <li><a class="dropdown-item hover-custom" href="#">Ingredienti</a></li>
                        </ul>
                        <li>
                            <a class="nav-link hover-custom" href="./annunci.html">Annunci</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown hover-custom" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Acquista gli ultimi arrivi
                            </a>
                            <ul class="dropdown-content">
                            <li>
                                <a class="dropdown-item hover-custom" href="#">Domicilio</a>
                            </li>
                            <li>
                                <a class="dropdown-item hover-custom" href="#">Ritira in negozio</a>
                            </li>
                            </ul>
                        </li>
                    </ul>
                    </div>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2 form-custom" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn form-custom" type="submit">Search</button>
                    </form>
            </div>
        </nav>
        `
    }  else {
        navbar.innerHTML = `
        <nav class="navbar navbar-expand-lg d-flex align-items-center flex-column fs-5 fixed-top">
            <div class="row w-100 justify-content-between">
                <a class="col-6 col-lg-12 navbar-brand d-flex justify-content-lg-center" href="./index.html"><img src="./media/logo.jpeg" alt="" width="100px"></a>
                <button class="navbar-toggler col-6 bottom-custom mx-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
            <div class="row">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown hover-custom" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Tutti gli articoli
                            </a>
                            <ul class="dropdown-content">
                                <li><a class="dropdown-item hover-custom" href="#">Campagne</a></li>
                                <li><a class="dropdown-item hover-custom" href="#">Novità</a></li>
                                <li><a class="dropdown-item hover-custom" href="#">Ingredienti</a></li>
                            </ul>
                        </li>
                        <li>
                            <a class="nav-link hover-custom" href="./annunci.html">Annunci</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown hover-custom" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Acquista gli ultimi arrivi
                            </a>
                            <ul class="dropdown-content">
                            <li><a class="dropdown-item hover-custom" href="#">Domicilio</a></li>
                            <li><a class="dropdown-item hover-custom" href="#">Ritira in negozio</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        `
    }
})
// NAVBAR CHE CAMBIA COLORE

var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
});

// NUMERI INCREMENTALI
let number1 = document.querySelector('#number1')
let number2 = document.querySelector('#number2')
let number3 = document.querySelector('#number3')

function createInterval (finalN, element, frequency) {
    let counter = 0
    let interval = setInterval(() => {
        if (counter < finalN) {
            counter++
            element.innerHTML = counter
        } else {
            clearInterval(interval)
        }
    }, frequency)
}


let confirm = false 
let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting && confirm == false) {
            createInterval(1989, number1, 0.1)
            createInterval(33, number2, 70)
            createInterval(42, number3, 60)
            confirm = true
        }
    })
})
observer.observe(number1)
// FINE NUMERI INCREMENTALI

// SEZIONE DELLE CARD
let Cardwrapper = document.querySelector('#Cardwrapper')

let announcements = [
    {name: 'Magnum Nocciola Remix', category: 'Limited Edition', price: 2.50, url: 'https://assets.unileversolutions.com/v1/106449301.png?im=AspectCrop=(450,450);Resize=(450,450)'},
    {name: 'Magnum Intense Coffee', category: 'Gelati', price: 1.50, url: 'https://assets.unileversolutions.com/v1/100646136.png?im=AspectCrop=(450,450);Resize=(450,450)'},
    {name: 'Magnum Double Sunlover', category: 'Gelato Limited Edition Cocco', price: 3.00, url: 'https://assets.unileversolutions.com/v1/103865498.jpg?im=AspectCrop=(900,);Resize=(900,)'},
    {name: 'Magnum X Michelangelo', category: 'Estate 2023', price: 2.00, url: 'https://assets.unileversolutions.com/v1/74441754.jpg?im=Resize,width=650'},
    {name: 'Magnum Double Starchaser', category: 'Gelato Limited Edition Pop-Corn', price: 1.80, url: 'https://assets.unileversolutions.com/v1/103865499.jpg?im=AspectCrop=(900,);Resize=(900,)'},
];

announcements.forEach((announcement, index) => {
    if(index >= announcements.length -3) {
        let div = document.createElement('div')
        div.classList.add('col-12', 'col-md-3', 'my-3', 'd-flex', 'justify-content-center')
        div.innerHTML = `
        <div class="card" style="width: 18rem;" data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1500">
            <img src="${announcement.url}" class="card-img-top card-img-custom" alt="Immagine delle card">
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    NEW
                    <span class="visually-hidden">new product</span>
                </span>
            <div class="card-body">
                <h5 class="card-title">${announcement.name}</h5>
                <p class="card-title">${announcement.category}</p>
                <p class="card-text">€${announcement.price}</p>
            </div>
            <div class="container mb-4 d-flex justify-content-between align-items-center">
                <a href="./annunci.html" class="button-59 text-decoration-none hover-custom" id="carrello">Vai al Catalogo <i class="fa-solid fa-bag-shopping ms-1"></i></a>
                <i class="fa-regular fa-heart fs-3"></i>
            </div>
        </div>
        `
        Cardwrapper.appendChild(div)
    }
})


let iconHearts = document.querySelectorAll('.fa-heart')
let cardImgs = document.querySelectorAll('.card-img-top')

iconHearts.forEach((icon) => {
    icon.addEventListener('click', () => {
        icon.classList.toggle('fa-solid')
        icon.style.color = '#F54949'
    })
})

cardImgs.forEach((cardImg, index) => {
    cardImg.addEventListener('dblclick' , () => {
        iconHearts[index].classList.toggle('fa-solid')
        iconHearts[index].style.color = '#F54949'
    })
})
// FINE SEZIONE CARD



AOS.init();