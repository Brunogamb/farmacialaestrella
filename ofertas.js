const ofertas = [
    {
        precio: "$4.749 C/U",
        nombre: "Nivea, Crema Corporal Milk Nutritiva 5 en 1/ Piel Extra-Seca x250ml",
        descripcion: "40% de descuento - SiempreBien",
        imagen: "IMGOFERTAS/oferta (1).webp"
    },
    {
        precio: "$6.459 C/U",
        nombre: "Nivea, Crema Corporal Soft Milk 5 en 1 para piel seca x400ml",
        descripcion: "40% de descuento - SiempreBien",
        imagen: "IMGOFERTAS/oferta (2).webp"
    },
    {
        precio: "$8.389 C/U",
        nombre: "Jergens, Creama Humectante Vainilla Suavizante x400ml",
        descripcion: "40% de descuento - SiempreBien",
        imagen: "IMGOFERTAS/oferta (3).webp"
    },
    {
        precio: "$3.529 C/U",
        nombre: "Huggies, Toallitas Húmedas Triple Protección óleo x48u",
        descripcion: "35% de descuento - SiempreBien",
        imagen: "IMGOFERTAS/oferta (4).webp"
    },
    {
        precio: "$1.324 C/U",
        nombre: "Dove, Jabón en Barra Baby Humectación Enriquecida x75g",
        descripcion: "30% de descuento - SiempreBien",
        imagen: "IMGOFERTAS/oferta (5).webp"
    },
    {
        precio: "$4.069 C/U",
        nombre: "Dove, Jabón Líquido Corporal Baby Humect. Enriq. / Sens. x200ml",
        descripcion: "30% de descuento - SiempreBien",
        imagen: "IMGOFERTAS/oferta (6).webp"
    },
    {
        precio: "$17.219 C/U",
        nombre: "Dermaglós, Crema Facial Ultra Hidratación x50gr",
        descripcion: "35% de descuento - SiempreBien",
        imagen: "IMGOFERTAS/oferta (7).webp"
    },
    {
        precio: "$9.029 C/U",
        nombre: "Dermaglós, Desmaquillante Bifaz Ojos y Labios x100ml",
        descripcion: "30% de descuento - SiempreBien",
        imagen: "IMGOFERTAS/oferta (8).webp"
    },
    {
        precio: "$2.079 C/U",
        nombre: "Toddler, Toallitas Húmedas Sin Perfume / Aloe Vera x48u",
        descripcion: "25% de descuento - SiempreBien",
        imagen: "IMGOFERTAS/oferta (9).webp"
    },
    {
        precio: "$10.819 C/U",
        nombre: "Jonhsons, Jabón Líquido /Creama hidrat. Derma Protect x200ml",
        descripcion: "20% de descuento - SiempreBien",
        imagen: "IMGOFERTAS/oferta (10).webp"
    },
    {
        precio: "$2.099 C/U",
        nombre: "Babysec, Toallas húmedas Ultra Fresh x50u",
        descripcion: "50% de descuento - SiempreBien",
        imagen: "IMGOFERTAS/oferta (11).webp"
    },
    {
        precio: "$2.059 C/U",
        nombre: "Colgate, Pasta Dental Sensitive Pro Alivio Inmediato Original x60gr",
        descripcion: "45% de descuento - SiempreBien",
        imagen: "IMGOFERTAS/oferta (12).webp"
    },
    {
        precio: "$3.564 C/U",
        nombre: "Alta Moda, Máscara Hidra Save x300ml",
        descripcion: "45% de descuento - SiempreBien",
        imagen: "IMGOFERTAS/oferta (13).webp"
    },
    {
        precio: "$2.809 C/U",
        nombre: "Alta Moda, Shampoo/Acond. Hidra Save x300ml",
        descripcion: "45% de descuento - SiempreBien",
        imagen: "IMGOFERTAS/oferta (14).webp"
    },
    {
        precio: "$6.594 C/U",
        nombre: "Capilatis, Shampoo/ Acond. Ortiga Mujer x350ml",
        descripcion: "45% de descuento - SiempreBien",
        imagen: "IMGOFERTAS/oferta (15).webp"
    },
    {
        precio: "",
        nombre: "Especial Día del Niño, ¡Sus personajes favoritos con las mejores ofertas!",
        descripcion: "Hasta 50% de descuento - SiempreBien",
        imagen: "IMGOFERTAS/oferta (16).webp"
    },
    {
        precio: "",
        nombre: "Natuliv, Magnesio 400 x30comp, Citrato de Magnesio x30cap, Citrato de Magnesio Limonada polvo x105g",
        descripcion: "20% de descuento - SiempreBien",
        imagen: "IMGOFERTAS/oferta (17).webp"
    },
    {
        precio: "",
        nombre: "Incaico, Citrato de Magnesio 400 x30cap, Salubiotics, Probiótico Lactobacillus Rhamnosus SP1 x30cap",
        descripcion: "25% de descuento - SiempreBien",
        imagen: "IMGOFERTAS/oferta (18).webp"
    },
    {
        precio: "",
        nombre: "Gravitón, Multivitamínico y Multimineral x30comp, x60comp, x120comp",
        descripcion: "25% de descuento - SiempreBien",
        imagen: "IMGOFERTAS/oferta (19).webp"
    },
];

window.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".cards-container");

    ofertas.forEach(oferta => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <div class="card-img-container">
                <img src="${oferta.imagen}" alt="${oferta.nombre}" class="card-img" loading="lazy">
            </div>
            <div class="card-content">
                <h3>${oferta.precio}</h3>
                <h3>${oferta.nombre}</h3>
                <p>${oferta.descripcion}</p>
            </div>
        `;
        container.appendChild(card);
    });
});