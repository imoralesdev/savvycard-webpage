import Component from "classes/Component"

export default class Quote extends Component {
  constructor() {
    super({
      element: ".quote-slider",
      elements: {
        quotes: ".quote-slider__list",
        quotesSlideLeft: "#quote_slider_left",
        quotesSlideRight: "#quote_slider_right",
        quotesCountNumber: ".quote-slider__active"
      }
    })

    this.slides = []
    this.slide = 0
    this.slidesCarousel()
  }

  slidesCarousel() {
    let _this = this
    this.slides = this.elements.quotes.childNodes

    setInterval(function () {
      _this.slides[_this.slide].classList.remove("quote-slider__slide-active")
      _this.slide++
      _this.elements.quotesCountNumber.innerHTML = _this.slide + 1

      if (_this.slide >= _this.slides.length) {
        _this.slide = 0
        _this.elements.quotesCountNumber.innerHTML = 1
      }

      _this.slides[_this.slide].classList.add("quote-slider__slide-active")
    }, 5000)
  }

  slidesMovement(event) {
    this.slides[this.slide].classList.remove("quote-slider__slide-active")

    switch (event.target.dataset.movement) {
      case "left":
        if (this.slide === 0) {
          this.elements.quotesCountNumber.innerHTML = this.slides.length
          this.slide = this.slides.length - 1
          this.slides[this.slide].classList.add("quote-slider__slide-active")
        } else {
          this.elements.quotesCountNumber.innerHTML = this.slide
          this.slide = this.slide - 1
          this.slides[this.slide].classList.add("quote-slider__slide-active")
        }
        break
      case "right":
        this.slide = this.slide + 1
        this.elements.quotesCountNumber.innerHTML = this.slide + 1

        if (this.slide >= this.slides.length) {
          this.elements.quotesCountNumber.innerHTML = 1
          this.slide = 0
        }

        this.slides[this.slide].classList.add("quote-slider__slide-active")
        break
      default:
        return null
    }
  }

  addEventListeners() {
    this.onClickSlidesArrow = this.slidesMovement.bind(this)
    this.elements.quotesSlideLeft.addEventListener(
      "click",
      this.onClickSlidesArrow
    )
    this.elements.quotesSlideRight.addEventListener(
      "click",
      this.onClickSlidesArrow
    )
  }
}
