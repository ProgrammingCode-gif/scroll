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
        this.el.style.top = this.scrollUnit() + 'px';

        window.addEventListener('scroll', () => this.move());
        window.addEventListener('resize', () => this.move());
    }

    move() {

        this.scrollValue = this.scrollUnit();

        if(this.scrollValue - scrollY > 0) {

            this.el.style.top = this.scrollValue - scrollY + 'px';
        } else {

            this.el.style.top = 0;
        }
    }

    scrollUnit() {

        if(this.unit === 'px') {
            return this.range >= 0 ? this.range : 0;

        } else if(this.unit === '%' || this.unit == undefined) {
            return this.calc(window.innerHeight, this.range) - this.el.clientHeight;

        }
    }

    calc(height, range) {

        return height / 100 * range;
    }
}

class Hover {
    constructor(block) {

        this.item = document.querySelector(block);
        this.item.addEventListener('mouseover', () => this.move())
    }

    move() {

        this.item.style.position = 'absolute';
        this.item.style.top = this.random(window.innerHeight - this.item.clientHeight * 2, 0) + 'px';
        this.item.style.left = this.random(window.innerWidth - this.item.clientWidth * 2, 0) + 'px';

    }

    random(windowHeigth, element) {
        return Math.floor(Math.random() * (windowHeigth - element) + element);
    }
}

const myScroll = new Scroll({
    element: '.header__nav',
    top: 100,
    unit: '%'
});

const hover = new Hover('.header__content');