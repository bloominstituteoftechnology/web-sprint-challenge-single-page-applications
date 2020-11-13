
describe("User-OnBoarding app", () =>{
    beforeEach(() => {
        cy.visit("http://localhost:3000/order-form");
    })

    const nameInput = () => cy.get('input[name=name]');
    const submitBtn = () => cy.get('button');
    const onionsCheckbox = () => cy.get("input[name=onions]")
    // const checkBox = () => cy.get('input[type="checkbox"]')

    it("sanity test to make sure tests work", () => {
        // 'expect' is an assertion
        // there can be many assertions per test
        // assertions live inside the 'it' statement
        // assertions should be logically grouped together
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5);
    });
    it("Name test", () => {
        nameInput().should('exist')
        nameInput().type('Scott Buttocolla');
        nameInput().should('have.value', 'Scott Buttocolla')
    })
    it('Checking onions', () => {
        onionsCheckbox().should('exist')
        onionsCheckbox().click();
    })

    // it("Check box tests", () => {
    //     checkBox()
    //         .should('exist')
    //         .click();
    // })
    it("Button test", () => {
        submitBtn().should('exist');
        submitBtn().should('be.disabled');
    })
})

// describe("User-Onboarding app", () => {
//     beforeEach(() => {
//         // arbitrary code you want running before your tests start: setup
//         cy.visit("http://localhost:3000/");
//     });

