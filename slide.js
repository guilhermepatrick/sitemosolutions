class SlideReceitas {
    constructor(id) {
        this.slide = document.querySelector(`[data-slide="${id}"]`);
        this.init()
        this.active = 0
    }
    activeSlide(index) {
        this.active = index;
        this.itens.forEach(item => item.classList.remove('active'))
        this.itens[index].classList.add('active')
        this.thumbItens.forEach(item => item.classList.remove('active'))
        this.thumbItens[index].classList.add('active')
    }

    prev() {

        if (this.active > 0) {
            this.activeSlide(this.active - 1)
        } else {
            this.activeSlide(this.itens.length - 1)
        }

    }
    next() {
        if (this.active < this.itens.length - 1) {
            this.activeSlide(this.active + 1)
        } else {
            this.activeSlide(0)
        }

    }
    zoom() {
        var modal = document.getElementById("myModal")
        var btn = document.querySelector('.slideZoom')
        var span = document.getElementsByClassName("close")[0]

        btn.onclick = function() {
            modal.style.display = "block";
        }

        span.onclick = function() {
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

    }
    addNavigation() {
        const nextBtn = this.slide.querySelector('.slideNext')
        const prevBtn = this.slide.querySelector('.slidePrev')
        const zoomBtn = this.slide.querySelector('.slideZoom')
        prevBtn.addEventListener('click', this.prev)
        nextBtn.addEventListener('click', this.next)
        zoomBtn.addEventListener('click', this.zoom)

    }

    addThumbItens() {
        this.itens.forEach(() => (this.thumb.innerHTML += '<span> </span>'))
        this.thumbItens = Array.from(this.thumb.children)
        console.log(this.thumbItens)

    }
    init() {

        this.next = this.next.bind(this)
        this.prev = this.prev.bind(this)
        this.zoom = this.zoom.bind(this)
        this.itens = this.slide.querySelectorAll('.slideItens > *')
        this.thumb = this.slide.querySelector('.slideThumb')
        this.addThumbItens()
        this.activeSlide(0)
        this.addNavigation()

    }
}
new SlideReceitas('slide')