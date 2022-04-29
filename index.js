const express = require("express")
const bodyParser = require("body-parser")
const errorHandler = require("errorhandler")
const logger = require("morgan")
const methodOverride = require("method-override")

const port = process.env.PORT || 8080
const path = require("path")
const app = express()

app.use(logger("dev"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(methodOverride())
app.use(errorHandler())

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "pug")
app.use(express.static(path.join(__dirname, "/public/")))

app.get("/", (req, res) => {
  res.render("pages/home", {
    template: "home",
    title: "SavvyCard – The Lead Development Platform"
  })
})

app.get("/savvycard-for-real-estate", (req, res) => {
  res.render("pages/real-estate", {
    template: "real_estate",
    title:
      "SavvyCard for Real Estate™ – Generate Leads Quickly and Inexpensively"
  })
})

app.get("/savvycard-for-automotive", (req, res) => {
  res.render("pages/automotive", {
    template: "automotive",
    title:
      "SavvyCard for Real Estate™ – Generate Leads Quickly and Inexpensively"
  })
})

app.get("/savvycard-for-business", (req, res) => {
  res.render("pages/business", {
    template: "business",
    title:
      "SavvyCard for Real Estate™ – Generate Leads Quickly and Inexpensively"
  })
})

app.get("/savvycard-for-enterprise", (req, res) => {
  res.render("pages/enterprise", {
    template: "enterprise",
    title:
      "SavvyCard for Real Estate™ – Generate Leads Quickly and Inexpensively"
  })
})

app.listen(port, () =>
  console.log(`Dev server running at http://localhost:${port}`)
)
