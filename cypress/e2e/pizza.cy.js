

describe("Pizza Order Form", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/pizza");
    })

    const nameInput = () => cy.get("input[name=name]")
    const sizeInput = () => cy.get("select[name=size]")
    const sauceInput = () => cy.get("select[name=sauce")
    const garlicCheck = () => cy.get("input[name=garlic]");
    const pepperCheck = () => cy.get("input[name=green_pepper]");
    const oliveCheck = () => cy.get("input[name=olives]");
    const onionCheck = () => cy.get("input[name=onions]");
    const pineappleCheck = () => cy.get("input[name=pineapple]");
    const specialInput = () => cy.get("input[name=special]");

    const submitBtn = () => cy.get("button[id=submit-button]");

    it("testing if cypress is set up", () => {
        nameInput().type("Sawyer Welter");
        sizeInput().select("small");
        garlicCheck().click();
        pepperCheck().click();
        oliveCheck().click();
        onionCheck().click();
        pineappleCheck().click();
        specialInput().type("None pizza with left beef")
        submitBtn().click();
    })

    it("select multiple toppings", () => {
        
    })


})