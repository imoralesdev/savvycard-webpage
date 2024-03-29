import Page from "classes/Page"
import Quote from "components/Quote"

export default class Home extends Page {
  constructor() {
    super({
      id: "home",
      element: ".home",
      elements: {
        homeBtn: "#home_btn"
      }
    })
  }

  create() {
    super.create()
    this.createQuote()
  }

  createQuote() {
    this.quote = new Quote()
  }
}
