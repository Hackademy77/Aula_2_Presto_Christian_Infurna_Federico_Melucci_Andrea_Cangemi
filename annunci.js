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

fetch('./annunci.json')
.then((response) => response.json())
.then((data) => {  
    let categoriesWrapper = document.querySelector('#categoriesWrapper');
    let cardWrapper = document.querySelector('#Cardwrapper');
    // console.log(categoriesWrapper);
    // console.log(cardWrapper);

    function showCard(array){
        cardWrapper.innerHTML ='';
        array.forEach((element) => {
        let div = document.createElement('div')
        div.classList.add('col-12', 'col-md-3', 'my-3', 'd-flex', 'justify-content-center')
        div.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="https://media.istockphoto.com/id/1147544807/it/vettoriale/la-commissione-per-la-immagine-di-anteprima-grafica-vettoriale.jpg?s=612x612&w=0&k=20&c=gsxHNYV71DzPuhyg-btvo-QhhTwWY0z4SGCSe44rvg4=" class="card-img-top card-img-custom" alt="Immagine delle card">
            <div class="card-body">
                <h5 class="card-title">${element.name}</h5>
                <p class="card-title">${element.category}</p>
                <p class="card-text">€${element.price}</p>
                </div>
                <div class="container mb-4 d-flex justify-content-between align-items-center">
                    <a href="./annunci.html" class="button-59 text-decoration-none hover-custom" id="carrello">Aggiungi al carrello <i class="fa-solid fa-bag-shopping ms-1"></i></a>
                    <i class="fa-regular fa-heart fs-3"></i>
                </div>
        </div>
        `
        cardWrapper.appendChild(div)
        })
    }
    showCard(data)

    function setCategoryNorepeat() {
        let categories = data.map((element) => element.category);
        let realcategories = [];

        categories.forEach((category) => {
            if(!realcategories.includes(category)){
                realcategories.push(category)
            }
        })
        
        realcategories.forEach((realcategory) => {
            let div = document.createElement('div');
            div.classList.add('form-check');
            div.innerHTML = `
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="${realcategory}">
            <label class="form-check-label" for="${realcategory}">
            ${realcategory}
            </label>
            `
            categoriesWrapper.appendChild(div)
        })   
    }
    setCategoryNorepeat()

    let inputCategory = document.querySelectorAll('.form-check-input');

    function filteredCategory(array) {
        let inputArray = Array.from(inputCategory)
        let check = inputArray.find((element) => element.checked)
        let filtered = array.filter((element) => element.category == check.id)
        console.log(filtered);


        if(check.id != 'All'){
            return filtered
        } else {
            return data
        }
    }
    
    let priceInput = document.querySelector('#priceInput');
    let formLabel = document.querySelector('.form-label');

    function foundMaxprice(){
        let prices = data.map((element) => +element.price)
        let maxPrice = Math.ceil(Math.max(...prices))
        let minPrice = Math.min(...prices)

        priceInput.max = maxPrice;
        priceInput.min = minPrice;
        priceInput.value = maxPrice;
    }

    foundMaxprice()

    function filterByPrice(array){
        let filtered = array.filter((element) => +element.price <= +priceInput.value).sort((a, b) => a.price - b.price) 
        return filtered
        
    }

    let wordInput = document.querySelector('#wordInput');
    console.log(wordInput);

    function filterByWord(array){
        let inputValue = wordInput.value;
        let filtered = array.filter((element) => element.name.toLowerCase().includes(inputValue.toLowerCase()))
        return filtered
    }

    function globalFilter(){
        let filteredByCategory = filteredCategory(data);
        let filteredByPrice = filterByPrice(filteredByCategory);
        let filteredByWord = filterByWord(filteredByPrice);

        showCard(filteredByWord)
    }

    inputCategory.forEach((input) => {
        input.addEventListener('click' , () => {
            globalFilter()
        })
    })

    priceInput.addEventListener('input', ()=> {
        formLabel.innerHTML = '$' + priceInput.value;
        globalFilter()
    } )

    wordInput.addEventListener('input' , () => {
        globalFilter()
    })
})

AOS.init();
