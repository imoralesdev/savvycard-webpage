import Page from "classes/Page"

export default class Business extends Page {
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
    console.log("Business Page")
  }
}
