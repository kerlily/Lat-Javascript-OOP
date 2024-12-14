

class Color {
    constructor(r,g,b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
        // console.log(`hi, ini adalah proses constructro`)
        // console.log(`${r}`) 
    }

    colorName(){
        console.log(`the color name is ` + this.name);
    }

    rgb() {
        const { r, g, b } = this;
        return `rgb(${r}, ${g}, ${b})`;
    }

    rgba(a = 1.0) {
        const { r, g, b } = this;
        return `rgb(${r}, ${g}, ${b}, ${a} )`;
    }

    hex() {
        const { r, g, b } = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
}

new Color()