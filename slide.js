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
        this.autoSlide();
    }

    prev() {

        if (this.active > 0) {

            this.activeSlide(this.active - 1)
            this.autoSlide();
        } else {
            this.activeSlide(this.itens.length - 1)
            this.autoSlide();
        }

    }
    next() {
        if (this.active < this.itens.length - 1) {
            this.autoSlide();
            this.activeSlide(this.active + 1)
        } else {
            this.autoSlide();
            this.activeSlide(0)
        }

    }
    zoom() {
        var modal = document.getElementById("myModal")
        var btn = document.querySelector('.slideZoom')
        var modalImagem = document.getElementById("imagemModal")
        var modalLegenda = document.getElementById("legendaModal")
        var imgAtiva = document.getElementById("imagem" + Number(this.active))
        modalImagem.src = imgAtiva.src
        modalLegenda.innerHTML = imgAtiva.alt


        btn.onclick = function() {
            modal.style.display = "flex";
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
        this.itens.forEach(() => (this.thumb.innerHTML += `<span></span>`))
        this.thumbItens = Array.from(this.thumb.children)
        console.log(this.thumbItens)

    }
    autoSlide() {
        setTimeout(this.next, 5000)
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