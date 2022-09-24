let productDB = [
    {
        id: 1,
        title: "Face Oil",
        description:'Lorem, ipsum dolor sit amet consectetur',
        size: 'large',
        imgUrl: "images/oil.jpeg",
        qty: 1
    },
    {
        id: 2,
        title: "Hair Oil",
        description:'Lorem, ipsum dolor sit amet consectetur',
        size: 'small',
        imgUrl: "images/Hair-Oils.jpg",
        qty: 1
    },
    {
        id: 3,
        title: "Leg Oil",
        description:'Lorem, ipsum dolor sit amet consectetur',
        size: 'large',
        imgUrl: "images/EllaSophie_BeautyProductPhotography-006.webp",
        qty: 1
    },
    {
        id: 4,
        title: "Body Oil",
        description:'Lorem, ipsum dolor sit amet consectetur',
        size: 'large',
        imgUrl: "images/TanyaZouev_Alkira_skincare_01.jpg",
        qty: 1
    }
]
localStorage.setItem('products', JSON.stringify(productDB))