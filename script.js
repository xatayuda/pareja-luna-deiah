const colores = [
    "#801315",  // Color Guinda
    "#CAA100",  // Color Dorado
    "#010101",  // Color Negro
    "#F08080",  // Color Rosa
    "#9370DB",  // Color Morado Claro
    "#3CB371",  // Color Verde Menta
    "#0056D6",  // Color Celeste Claro
    "#0800A6",  // Color Azul Oscuro
    "#C75600",  // Color Anaranjado
    "#D61200",  // Color Rojizo
    "#BF8A54",  // Color Beige
];
    let indiceColor = 0;

    document.getElementById('colorButton').addEventListener('click', () => {
    indiceColor = (indiceColor + 1) % colores.length;
    document.body.style.backgroundColor = colores[indiceColor];
    });
