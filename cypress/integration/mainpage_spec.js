describe("Spacestagram Main Page", () => {
  beforeEach(() => {
    let apiKey = Cypress.env("CYPRESS_API_KEY")
    cy.intercept(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=20`, { fixture: "sampleApods.json" })
    cy.visit("localhost:3000")
  })

  it("Should display the app's logo and title", () => {
    cy.get("header").get("img")
      .get("header").get("h1").should("have.text", "Spacestagram")
  })

  it("Should display a tagline containing a link to NASA's APOD", () => {
    cy.get(".tagline").should("have.text", "Random Tidbits from  NASA's Astronomy Picture of the Day")
      .get("header").get("a").should("have.text", " NASA's Astronomy Picture of the Day")
      .should("have.attr", "href", "https://apod.nasa.gov/apod/")
  })

  it("Should display a loading message on page load", () => {
    cy.get(".load-msg").should("have.text", "Loading...")
  })

  it("Should contain card components containing APOD post details", () => {
    cy.get(".card-media").first()
    cy.get(".card-title").first().should("have.text", "M11: The Wild Duck Cluster")
    cy.get(".card-date").first().should("have.text", "Date Posted: 2003-01-22")
    cy.get(".card-desc").first().should("contain.text", "Many stars like our Sun were formed in open clusters.")
  })

  it("Should render a heart as a like button for each card", () => {
    cy.get(".btn-div").first().click()
      .get(".go2484888251")
      // .go2484888251 represents the "liked" heart from react-animated-heart
  })
})