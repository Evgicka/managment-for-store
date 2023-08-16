const dom = {
    buttons:{
        add : document.querySelector("#set")
    },
    lists:{
        itemsList : document.querySelector("#items-list")

    },
    divs:{
        navigation : document.querySelector(".nav"),
        list : document.querySelector(".list"),
        pList : document.querySelector(".pList"),
        productsBox : document.querySelector("#get"),
        addingBox : document.querySelector("#add"),
        special : document.querySelector("#special")
    },
    inputs:{
        search : document.querySelector(".nav input"),
        productType : document.querySelector("#productType"),
        manufactureType : document.querySelector("#manufactureType"),
        pricing : document.querySelector("#pricing")

    },
    forms:{
        form : document.querySelector("form")
    },
    labels:{
        genId : document.querySelector("#genId")
    },
    selectors:{
        select : document.querySelector("#extProdType")
    }
};

//listeners
dom.divs.navigation.addEventListener("click", (e)=>{
    navigate(e);
});
dom.divs.list.addEventListener("click",(e)=>{
    listener(e);
})
dom.forms.form.onchange = e => {
    switcher(e);
}
dom.forms.form.onsubmit = e => {
    e.preventDefault();
    submiter(e);
}
dom.inputs.search.onchange = e => {
    search(e);
}
dom.labels.genId.onclick = e =>{
    e.target.textContent = '';
    generate(e);
}

