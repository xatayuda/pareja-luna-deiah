const colores = [
    "#801315",  // Color Guinda
    "#CAA100",  // Color Dorado
    "#010101",  // Color Negro
];
    let indiceColor = 0;

    document.getElementById('colorButton').addEventListener('click', () => {
    indiceColor = (indiceColor + 1) % colores.length;
    document.body.style.backgroundColor = colores[indiceColor];
    });