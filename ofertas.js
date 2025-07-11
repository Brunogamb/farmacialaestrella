const ofertas = [
    {
        precio: "$3.419 C/U",
        nombre: "",
        descripcion: "35% de descuento - SiempreBien",
        imagen: "IMGOFERTAS/oferta (1).jpg"
    },
    {
        precio: "$6.809 C/U",
        nombre: "",
        descripcion: "35% de descuento - SiempreBien",
        imagen: "IMGOFERTAS/oferta (2).jpg"
    },
    {
        precio: "$20.814 C/U",
        nombre: "",
        descripcion: "35% de descuento - SiempreBien",
        imagen: "IMGOFERTAS/oferta (3).jpg"
    },
    {
        precio: "$2.839 C/U",
        nombre: "",
        descripcion: "20% de descuento - SiempreBien",
        imagen: "IMGOFERTAS/oferta (4).jpg"
    },
    {
        precio: "$14.304 C/U",
        nombre: "",
        descripcion: "30% de descuento - SiempreBien",
        imagen: "IMGOFERTAS/oferta (5).jpg"
    },
    {
        precio: "$6.599 C/U",
        nombre: "",
        descripcion: "45% de descuento - SiempreBien",
        imagen: "IMGOFERTAS/oferta (6).jpg"
    },
    {
        precio: "$31.069 C/U",
        nombre: "",
        descripcion: "25% de descuento - SiempreBien",
        imagen: "IMGOFERTAS/oferta (7).jpg"
    },
    {
        precio: "$14.254 C/U",
        nombre: "",
        descripcion: "20% de descuento - SiempreBien",
        imagen: "IMGOFERTAS/oferta (8).jpg"
    },
    {
        precio: "$4.574 C/U",
        nombre: "",
        descripcion: "50% de descuento - SiempreBien",
        imagen: "IMGOFERTAS/oferta (9).jpg"
    },
];

window.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".cards-container");

    ofertas.forEach(oferta => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${oferta.imagen}" alt="${oferta.nombre}" class="card-img" loading="lazy">
            <div class="card-content">
                <h3>${oferta.precio}</h3>
                <h3>${oferta.nombre}</h3>
                <p>${oferta.descripcion}</p>
            </div>
        `;
        container.appendChild(card);
    });
});