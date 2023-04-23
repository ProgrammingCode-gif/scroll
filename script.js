class Scroll {
    constructor({element, top, unit}) {

        if (typeof element === 'string') {
            this.el = document.querySelector(element);

        } else if (element instanceof HTMLElement) {
            this.el = element;
        }

        this.unit = unit;
        this.range = top;

        this.el.style.position = 'fixed';
        this.el.style.top = this.range + 'px';

        window.addEventListener('scroll', () => this.move());
    }

    move() {

        if(this.range - scrollY > 0) {

            this.el.style.top = this.range - scrollY + 'px';
        } else {

            this.el.style.top = 0;
        }
    }

    scrollUnit() {

        if(this.unit === 'px') {
            return this.range >= 0 ? this.range : 0;

        } else if(this.unit === '%' || this.unit == undefined) {

        }
    }

    calc() {
        
    }
} 

const myScroll = new Scroll({
    element: '.header__nav',
    top: 50,
    unit: 'px'
});