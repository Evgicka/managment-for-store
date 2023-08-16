class Product
{
    #id;
    #title;
    #price;
    #manufacture;

    constructor(id, title, manuf, price) {

        this.#id = id;
        this.#title = title;
        this.#price = price;
        this.#manufacture = manuf;
    }

    get id()
    {
        return this.#id;
    }
    setId(id)
    {
            this.#id = id;
    }
    get title()
    {
        return this.#title;
    }
    set title(value)
    {
        if (value)
            this.#title = value;
    }
    get price()
    {
        return this.#price;
    }
    set price(value)
    {
        if (value && value > 0)
            this.#price = value;
    }
    get manufacture()
    {
        return this.#manufacture;
    }
    set manufacture(value)
    {
        if(value)
            this.#manufacture = value;
    }
}

class Milk extends Product
{
    #fat;

    constructor(id,title,manuf,price,fat)
    {
        super(id,title,manuf,price);
        this.#fat = fat;
    }

    get fat()
    {
        return this.#fat;
    }
    set fat(value)
    {
        this.#fat = value;
    }
}

class Chocolate extends Product
{
    #kind

    constructor(id,title,manuf,price,kind)
    {
        super(id,title,manuf,price);
        this.#kind = kind;
    }

    get kind()
    {
        return this.#kind;
    }
    set kind(value)
    {
        this.#kind = value;
    }
}
class Wine extends Product
{
    #alc;

    constructor(id,title,manuf,price,alc)
    {
        super(id,title,manuf,price);
        this.#alc = alc;
    }

    get alc()
    {
        return this.#alc;
    }
    set alc(value)
    {
        this.#alc = value;
    }
}

class Store
{
    #products;

    constructor()
    {
        this.#products = [];
    }

    add(product)
    {
        let tmp = this.#products.some(p => p.id === product.id);

        if(!tmp)
        {
            this.#products.push(product);
            return true;
        }
        return false;
    }

    getAll()
    {
        // return [...this.#products];
        return this.#products.slice();
    }

    getByType(type)
    {
        if(!type)
            return [...this.#products];

        type = type.toLowerCase();
        return this.#products.filter(p => p.constructor.name.toLowerCase() === type);
    }

    getByTitle(title)
    {
        return this.#products.filter(p => p.title.includes(title));
    }
}
