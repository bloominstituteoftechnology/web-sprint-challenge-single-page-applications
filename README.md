# Single Page Applications Sprint Challenge

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored **single page applications**. During this sprint, you studied **routing, forms, and testing in cypress**. In your challenge this week, you will demonstrate your mastery of these skills by creating **Lambda Eats**, a website designed to bring food to hungry coders.

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the sprint challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your TL if you need direction.

_You have **three hours** to complete this challenge. Plan your time accordingly._

## Introduction

In this challenge you will be working from the `Lambda Eats` homepage to create a functional `Pizza?` button that leads to a build your own pizza custom form.

You may use the following wireframes (also in a folder above) as guidance as you design your site but it is not required that you do so.

[Form](https://tk-assets.lambdaschool.com/d43783ef-e6a8-4154-ba68-430e2275fddc_Form.png)

[Home Page](https://tk-assets.lambdaschool.com/ed737cf5-723e-428d-9b25-192143c8b71f_HomePage.png)

[Confirmation](https://tk-assets.lambdaschool.com/a0f43a34-9fab-4d2b-89f7-e23b22d32964_Pizza.gif)

### Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your team lead as the evaluate your solution.

## Interview Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions. Edit this document to include your answers after each question.

1. In 1-2 sentences, explain what React's `useRouteMatch` hook is used for.

> The hook useRouteMatch allows us to add nested routes to your application such that you can change a single parameter in the URL without having to change the whole thing. An example:

> website.com/about/item1/item-details URL and website.com/about/item2/item-details URL use only one specified route in the code.

2. How would you explain form validation to someone who has never programmed before?

> Form validation is when you validate the inputs or your form, and make sure that the entries meet the given requirements.

3. In 1-2 sentences, define end to end testing.

> End to end testing examines the entire user experience asking the question, "can a user perform a given action?" This is really important for improving user experience and also making sure your app performs the way you think it does.

## Instructions

### Task 1: Project Set Up

- [x] Create a forked copy of this project
- [x] Add your team lead as collaborator on Github
- [x] Clone your OWN version of the repository (Not Lambda's by mistake!)
- [x] Create a new branch: `git checkout -b <firstName-lastName>`
- [x] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly
- [x] Push commits: `git push origin <firstName-lastName>`

### Task 2: Project Requirements

Your finished project must include all of the following requirements:

- [x] A homepage that has a "/" route and links to your form (button, nav bar, or any other type of link is acceptable)
- [x] A form with a "/pizza" route
- [x] A name text input field
- [x] Validation for name - name must be at least 2 characters
- [x] A dropdown for pizza size
- [x] A checklist for toppings - at least 4 (hint: name each separately!)
- [x] Text input for special instructions
- [x] An Add to Order button that submits form and returns a database record of name, size, toppings and special instructions

#### Testing MVP

Implement the following tests in Cypress:

- [x] test that you can add text to the box
- [x] test that you can select multiple toppings
- [x] test that you can submit the form

In your solution, it is essential that you follow best practices and produce clean and professional results. You will be scored on your adherence to proper code style and good organization. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

### Task 3: Stretch Goals

After finishing your required elements, you can push your work further. These goals may or may not be things you have learned in this module but they build on the material you just studied. Time allowing, stretch your limits and see if you can deliver on the following optional goals:

- [x] Toggle form component for gluten free crust
- [x] Turn form element sections into nested routes
- [x] Test more of the application with Cypress
- [x] Build UI for the eventuality of a network error when POSTing the order
- [x] Add functionality to your order button that it leads to a Congrats! Pizza is on it's way! page **and** returns a database record of the whole order

## FAQs

**How do I return a database record of the order?**

One of your goals is to return a database record of the order - for this you'll need to write a post request. For more detailed steps, use the below:

- [x] 1. Create a new state
- [x] 2. Post to [reqres](https://reqres.in/) with `axios`
- [x] 3. Log data in console

## Submission format

Follow these steps for completing your project.

- [x] Submit a pull request to merge `<firstName-lastName>` branch into the `main` branch (student's repo). **Please don't merge your own pull request**
- [x] Add your team lead as a reviewer on the pull request
- [x] Your team lead will count the project as complete after receiving your pull request

