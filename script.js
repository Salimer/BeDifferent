const productsOFmen = [
    {
        name: 'T shirt',
        description: 'long sleeves',
        cost: 400,
        img: './Items photo/Men/T one .jpg',
        size: ['S', 'M', 'L']
    },
    {
        name: 'T shirt',
        description: 'long sleeves',
        cost: 450,
        img: './Items photo/Men/T two.jpg',
        size: ['S', 'M', 'L']
    },
    {
        name: 'T shirt',
        description: 'long sleeves',
        cost: 530,
        img: './Items photo/Men/T three.jpg',
        size: ['S', 'M', 'L']
    },
    {
        name: 'T shirt',
        description: 'long sleeves',
        cost: 49,
        img: './Items photo/Men/T four.jpg',
        size: ['S', 'M', 'L']
    },
    {
        name: 'Trouser',
        description: 'long sleeves',
        cost: 350,
        img: './Items photo/Men/Tro one.jpg',
        size: ['S', 'M', 'L']
    },
    {
        name: 'Trouser',
        description: 'long sleeves',
        cost: 430,
        img: './Items photo/Men/Tro Two.jpg',
        size: ['S', 'M', 'L']
    },
    {
        name: 'Shoes',
        description: 'long sleeves',
        cost: 600,
        img: './Items photo/Men/Shoes/shoes one.jpg',
        size: ['S', 'M', 'L']
    },
    {
        name: 'Shoes',
        description: 'long sleeves',
        cost: 49,
        img: './Items photo/Men/Shoes/shoes two.jpg',
        size: ['S', 'M', 'L']
    },
];

const productsOFwomen = [
    {
        name: 'Bag',
        description: 'long sleeves',
        cost: 430,
        img: './Items photo/Women/bag one.jpg',
        size: ['S', 'M', 'L']
    },
    {
        name: 'Bag',
        description: 'long sleeves',
        cost: 350,
        img: './Items photo/Women/bag two .jpg',
        size: ['S', 'M', 'L']
    },
    {
        name: 'Bag',
        description: 'long sleeves',
        cost: 270,
        img: './Items photo/Women/bag three.jpg',
        size: ['S', 'M', 'L']
    },
    {
        name: 'Dress',
        description: 'long sleeves',
        cost: 760,
        img: './Items photo/Women/dress one .jpg',
        size: ['S', 'M', 'L']
    },
    {
        name: 'Dress',
        description: 'long sleeves',
        cost: 230,
        img: './Items photo/Women/dress two.jpg',
        size: ['S', 'M', 'L']
    },
    {
        name: 'Dress',
        description: 'long sleeves',
        cost: 650,
        img: './Items photo/Women/dress three.jpg',
        size: ['S', 'M', 'L']
    },
    {
        name: 'Shoes',
        description: 'long sleeves',
        cost: 260,
        img: './Items photo/Women/Shoes/shoes one .jpg',
        size: ['S', 'M', 'L']
    },
    {
        name: 'Shoes',
        description: 'long sleeves',
        cost: 380,
        img: './Items photo/Women/Shoes/shoes two .jpg',
        size: ['S', 'M', 'L']
    },

];

const productsOFkids = [
    {
        name: 'Clothes',
        description: 'long sleeves',
        cost: 380,
        img: '/Items photo/Kids/Clothes/janko-ferlic-1pMtg_ezuvw-unsplash.jpg',
        size: ['S', 'M', 'L']
    },
    {
        name: 'Clothes',
        description: 'long sleeves',
        cost: 540,
        img: '/Items photo/Kids/Clothes/jonathan-borba-UdhvRvpaBP0-unsplash.jpg',
        size: ['S', 'M', 'L']
    },

    {
        name: 'Clothes',
        description: 'long sleeves',
        cost: 340,
        img: '/Items photo/Kids/Clothes/senjuti-kundu-GCI8dqi4uWM-unsplash.jpg',
        size: ['S', 'M', 'L']
    },

    {
        name: 'Clothes',
        description: 'long sleeves',
        cost: 580,
        img: '/Items photo/Kids/Clothes/terricks-noah-n9R0MN3XGvY-unsplash.jpg',
        size: ['S', 'M', 'L']
    },

    {
        name: 'Hat',
        description: 'long sleeves',
        cost: 230,
        img: '/Items photo/Kids/Hat/nathan-dumlao-CG2abGS0FwI-unsplash.jpg',
        size: ['S', 'M', 'L']
    },

    {
        name: 'Hat',
        description: 'long sleeves',
        cost: 310,
        img: '/Items photo/Kids/Hat/yang-deng-2loKxdi6Hmo-unsplash.jpg',
        size: ['S', 'M', 'L']
    },

    {
        name: 'Shoes',
        description: 'long sleeves',
        cost: 240,
        img: '/Items photo/Kids/Shoes/zan-qx3chaqqhtQ-unsplash.jpg',
        size: ['S', 'M', 'L']
    },
];




let cart = [];
const containerMen = document.querySelector('.men-section');

productsOFmen.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <div class="img"><img src="${item.img}" alt=""> </div>
    <div class="desc">NEW</div>
    <div class="title">${item.name}</div>
    <div class="box">
        <div class="price">$${item.cost}</div>
        <button class="btn men-btns">Buy Now</button>
    </div>
    `;

    containerMen.appendChild(div);
})

const buttonsMen = document.querySelectorAll('.men-btns');
buttonsMen.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        cart.push(productsOFmen[index]);
        console.log(cart);
        sessionStorage.setItem('cart', JSON.stringify(cart));
        alert('Item added to cart');
    })
})







const containerWomen = document.querySelector('.women-section');

productsOFwomen.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <div class="img"><img src="${item.img}" alt=""> </div>
    <div class="desc">NEW</div>
    <div class="title">${item.name}</div>
    <div class="box">
        <div class="price">$${item.cost}</div>
        <button class="btn women-btns">Buy Now</button>
    </div>
    `;

    containerWomen.appendChild(div);
})

const buttonsWomen = document.querySelectorAll('.women-btns');
buttonsWomen.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        cart.push(productsOFwomen[index]);
        console.log(cart);
        sessionStorage.setItem('cart', JSON.stringify(cart));
        alert('Item added to cart');
    })
})








const containerKids = document.querySelector('.kids-section');
productsOFkids.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <div class="img"><img src="${item.img}" alt=""> </div>
    <div class="desc">NEW</div>
    <div class="title">${item.name}</div>
    <div class="box">
        <div class="price">$${item.cost}</div>
        <button class="btn kids-btns">Buy Now</button>
    </div>
    `;

    containerKids.appendChild(div);
})

const buttonsKids = document.querySelectorAll('.kids-btns');
buttonsKids.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        cart.push(productsOFkids[index]);
        console.log(cart);
        sessionStorage.setItem('cart', JSON.stringify(cart));
        alert('Item added to cart');
    })
})


