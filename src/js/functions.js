const store = new Store();
//ex
store.add(new Milk('M0001','Milk','Tnuva',6.93, 3));
store.add(new Chocolate('C0001','Alpen gold','Alpen Gold ind.',15, 'black'));
store.add(new Wine('W0001','Bon urea','Bon and Sons inc.',35, 5.8));
function navigate(e){
        switch (e.target.id){
            case "getProducts":{

                dom.divs.productsBox.classList.add('active');
                dom.divs.productsBox.classList.remove('hidden');
                dom.divs.addingBox.classList.remove("active");
                dom.divs.addingBox.classList.add("hidden");
                renderProducts(store.getAll());
                break;
            }
            case "addProduct":{
                dom.divs.productsBox.classList.add('hidden');
                dom.divs.productsBox.classList.remove('active');
                dom.divs.addingBox.classList.remove("hidden");
                dom.divs.addingBox.classList.add("active");
                break;
            }
        }
}
function renderProducts(products){
    dom.divs.pList.innerHTML = `${products.map(p=>
        `    <div class="card">
            <h2>${p.constructor.name}</h2>
            <h3 class="title">${p.title}</h3>
            <h3 class="sub-title">${p.manufacture}</h3>
            <h4 class="price">Price: ${p.price}₪</h4>
            ${getOwnField(p)}
            </div>`).join('')}`
}
function getOwnField(p){
    switch (p.constructor.name){
        case 'Milk':{return `<h4>Fat: ${p.fat}%</h4>`;}
        case 'Chocolate':{return `<h4>Kind: ${p.kind}</h4>`;}
        case 'Wine':{return `<h4>Alcohol: ${p.alc}%</h4>`;}
    }
}
function switcher(e){
    switch (e.target.value){
        case 'milk': {
            dom.divs.special.innerHTML =
                `<input class="input" required type="number" placeholder="Type fat%..." min="0" step="0.1" name="fatty">`;
            break;
        }
        case 'wine': {
            dom.divs.special.innerHTML =
                `<input class="input" required type="number" placeholder="Type alcohol%..." min="0" step="0.1" name = "alco">`;
            break;
        }
        case 'choco': {
            dom.divs.special.innerHTML =
                `<input class="input" required type="text" placeholder="Type kind..." name = "kindy">`;
            break;
        }
    }
}

function submiter(e){
    let message;
    switch (e.target.extendedType.value){
        case "milk":{
            message = store.add(new Milk("M" + dom.labels.genId.value, e.target.title.value, e.target.manufact.value, e.target.pri.value, e.target.fatty.value));
            break;
        }
        case "wine":{
            message = store.add(new Wine("W" +dom.labels.genId.value, e.target.title.value, e.target.manufact.value, e.target.pri.value, e.target.alco.value));
            break;
        }
        case "choco":{
            message = store.add(new Chocolate( "C" +dom.labels.genId.value, e.target.title.value, e.target.manufact.value, e.target.pri.value, e.target.kindy.value));
            break;
        }
    }

    let resMessage = message ? "Product has added successfully" : "Product already exist!"
    alert(resMessage);
    if(message) dom.forms.form.reset();
}

function listener(e) {
    renderProducts(store.getByType(e.target.getAttribute("data-name")));
}

function generate(e){
    e.target.textContent = String(Math.floor((Math.random()*1000)));
}
function search(e){
    renderProducts(store.getByTitle(e.target.value));
}

renderProducts(store.getAll());