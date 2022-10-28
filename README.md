# Single Page Applications Sprint Challenge

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**
**READ ALL INSTRUCTIONS BEFORE REACHING OUT TO ASK A QUESTION!!**
(that above part was because the FAQs section answers 75% of questions)

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored **single page applications**. During this sprint, you studied **routing, forms, and testing in cypress**. In your challenge this sprint, you will demonstrate your mastery of these skills by creating **Bloomtech Eats**, a website designed to bring food to hungry coders.

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the sprint challenge.

## Introduction

In this challenge you will be working from the `Bloomtech Eats` homepage to create a functional button that leads to a build your own pizza custom form.

You may use the following wireframes as guidance as you design your site but it is not required that you do so.

[Form](https://github.com/bloominstituteoftechnology/web-sprint-challenge-single-page-applications/blob/main/Assets/Form.png)

[Home Page](https://github.com/bloominstituteoftechnology/web-sprint-challenge-single-page-applications/blob/main/Assets/Homepage.png)

[Confirmation](https://github.com/bloominstituteoftechnology/web-sprint-challenge-single-page-applications/blob/main/Assets/Confirmation.png)

### Commits

Commit your code regularly and meaningfully. This helps you in case you ever need to return to old code for any number of reasons.

## Instructions

### Task 1: Project Set Up

- [ ] Create a forked copy of this project
- [ ] Clone your OWN version of the repository (Not BloomTech's by mistake!)
- [ ] Implement the project on the main branch, committing changes regularly
- [ ] Push commits: `git push origin main`

### Task 2: Project Requirements

Your finished project must include all of the following requirements:

- [ ] A homepage that has a "/" route and links to your form (button, nav bar, or any other type of link is acceptable but must have an id of "order-pizza")
- [ ] A order form that has a "/pizza" route and shows the form
- [ ] A form with an id of "pizza-form"
- [ ] A name text input field with an id of "name-input"
- [ ] Validation for name and the error message is "name must be at least 2 characters" (Use this exact error message to make sure tests pass) ::: VERY IMPORTANT TO USE THAT EXACT ERROR MESSAGE (casing included!)
- [ ] A dropdown for pizza size with an id of "size-dropdown"
- [ ] A checklist for toppings - at least 4 (hint: name each separately!)
- [ ] Text input for special instructions with an id of "special-text"
- [ ] An Add to Order button that has an id of "order-button" and that submits the form and returns a database record of name, size, toppings and special instructions

Data should look something like
```
{
    name: string,
    size: string,
    topping1: bool,
    topping2: bool,
    special: string,
}
```
Note - your payload should look similar to the above data

#### Testing MVP

Implement the following tests in Cypress:

- [ ] test that you can add text to the box
- [ ] test that you can select multiple toppings
- [ ] test that you can submit the form

In your solution, it is essential that you follow best practices and produce clean and professional results. You will be scored on your adherence to proper code style and good organization. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

Remember for cypress setup to run `npx cypress open`. That will open up a dialogue that has a `Welcome to Cypress 10!` banner and a button below that says `Continue to Cypress 10`. Click that button, then scroll down to the bottom of the next screen and click the three `migrate` buttons one after the other (after clicking one the next section will expand and allow you to click the next migrate selection). On the next screen select the `e2e` option, then select a browser of your choice and click the `Start E2E Testing` button.

From there in your newly created `cypress` folder in VSCode, navigate to the `e2e` folder and create a new file called `pizza.cy.js` and you're all set to write your tests!

## Submission format

Follow these steps for completing your project.

Set up your fork on Github to codegrade following the instructions [here](https://bloomtech-1.wistia.com/medias/mpf3xru99v), pushing commits to your main branch. At this point you should be complete with your sprint challenge requirements!  

### Task 3: Stretch Goals

After finishing your required elements, you can push your work further. These goals may or may not be things you have learned in this module but they build on the material you just studied. Time allowing, stretch your limits and see if you can deliver on the following optional goals:

- [ ] Toggle form component for gluten free crust
- [ ] Turn form element sections into nested routes
- [ ] Test more of the application with Cypress
- [ ] Build UI for the eventuality of a network error when POSTing the order
- [ ] Add functionality to your order button that it leads to a Congrats! Pizza is on it's way! page **and** returns a database record of the whole order

## Stretch Interview Questions

Demonstrate your understanding of this sprint's concepts by answering the following free-form questions. Edit this document to include your answers after each question.

1. In 1-2 sentences, explain what React's `useRouteMatch` hook is used for.
1. How would you explain form validation to someone who has never programmed before?
1. In 1-2 sentences, define end to end testing.

## FAQs

**How do I return a database record of the order?**

One of your goals is to return a database record of the order - for this you'll need to write a post request. For more detailed steps, use the below:

1. Create a new state variable + hook
2. Post to [reqres](https://reqres.in/) with `axios` (the link you should use is step 4)
3. Log data in console
4. The URL you should use is `https://reqres.in/api/orders`. The tests are based on this URL.
