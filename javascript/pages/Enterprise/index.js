import Page from "classes/Page"

export default class Enterprise extends Page {
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
    console.log("Enterprise Page")
  }
}