const colores = [
    "#801315",  // Color Guinda
    "#CAA100",  // Color Dorado
    "#010101",  // Color Negro
    "#F08080",  // Color Rosa
    "#9370DB",  // Color Morado Claro
    "#3CB371",  // Color Verde Menta
    "#87CEFA",  // Color Celeste Claro
    "#0000CD",  // Color Azul Oscuro
    "#FFA500",  // Color Anaranjado
    "#FF4B45",  // Color Rojizo
    "#FFC18F",  // Color Beige
];
    let indiceColor = 0;

    document.getElementById('colorButton').addEventListener('click', () => {
    indiceColor = (indiceColor + 1) % colores.length;
    document.body.style.backgroundColor = colores[indiceColor];
    });
