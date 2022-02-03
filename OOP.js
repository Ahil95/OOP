function hex(r, g, b) {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

}

function rgb(r, g, b) {

    return `rgb(${r}, ${b}, ${g})`
}
hex(56, 37, 420)

// function makecolor(r, g, b) {
//     const color = {};
//     color.r = r;
//     color.g = g;
//     color.b = b;
//     color.rgb = function () {
//         return `rgb(${r}, ${g}, ${bg})`
//     }
//     return color
// }
// const firstColor = makecolor(56, 97, 255)
// firstColor.rgb();

function color(r, g, b) {

    this.r = r;
    this.g = g;
    this.b = b;
}
color.prototype.rgb = function () {
    const { r, g, b } = this;
    return `rgb ${r},${g}, ${b}`
};

const color1 = new color(35, 95, 155);

class Color {
    constructor(r, g, b) {
        console.log(r, g, b);
    }
    rgb() {
        return `rgb ${r}, ${g}, ${b}`
    }
}

const paint = new Color(241, 200, 132)