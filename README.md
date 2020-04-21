# Single Page Applications Sprint Challenge

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored **single page applications**. During this sprint, you studied **routing, forms, and testing in cypress**. In your challenge this week, you will demonstrate your mastery of these skills by creating **Lambda Eats form**.

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the sprint challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your TL if you need direction. 

_You have **three hours** to complete this challenge. Plan your time accordingly._


## Introduction

In this challenge you will be working from the `Lambda Eats` homepage to create a functional `Pizza?` button that leads to a build your own pizza custom form.

In meeting the minimum viable product (MVP) specifications listed below, your project should look like the solution examples below:

You may use the following wireframe (also in a folder above) as guidance as you design your site but it is not required that you do so.

**Form Wireframe:**
![Form Wireframe](https://i.imgur.com/ii7wc0u.png)

### Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your team lead as the evaluate your solution.

## Interview Questions

> List out the topics covered that students should study and review to be prepared for the questions asked in the TL interview. You can use the list of learning objectives that should be covered by the interview as a start.

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. You might prepare by writing down your own answers before hand.

1. Describe semantic HTML 

2. Understand when and how to use CSS reset

3. Understand the use of the command line interface (CLI)

4. Explain git commands and why git is valuable to a team of developers.

5. Define mobile-first design in your own words, and the difference in layout types.

You are expected to be able to answer questions in these areas. Your responses contribute to your Sprint Challenge grade. 

## Instructions

### Task 1: Project Set Up

> This section should include instruction for the sprint challenge. These should only cover things that are _not_ being evaluated by the challenge itself, e.g. environment/project setup, link to a starter project, etc. In general, this will be the following Git fork, clone, branch, commit, push, create pull request flow, though may need to be adapted for some specific challenges.

- [ ] Create a forked copy of this project
- [ ] Add your team lead as collaborator on Github
- [ ] Clone your OWN version of the repository (Not Lambda's by mistake!)
- [ ] Create a new branch: git checkout -b `<firstName-lastName>`.
- [ ] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly
- [ ] Push commits: git push origin `<firstName-lastName>`

### Task 2: Project Requirements

Your finished project must include all of the following requirements:

- [ ] A homepage that has a "/" route and links to your form (button, nav bar, or any other type of link is acceptable)
- [ ] A form with a "/pizza" route
- [ ] A name text input field
- [ ] Validation for name - name must be at least 2 characters
- [ ] Dropdown form component for pizza size
- [ ] Checklist form component for toppings - at least 4 (hint: name each separately!)
- [ ] Text input form component for special instructions
- [ ] An Add to Order button that submits form and returns a database record of name, pizza size, sauce, and special instructions

#### Testing MVP

Implement the following tests in Cypress:

- [ ] test that you can add text to the box
- [ ] test that you can select multiple toppings
- [ ] test that you can submit the form

In your solution, it is essential that you follow best practices and produce clean and professional results. You will be scored on your adherence to proper code style and good organization. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

### Task 3: Stretch Goals 

> Include stretch goals in this section. These are additional things the student can do go beyond basic proficiency, and push their scores on the challenge up to a 3. Be clear that these are *not* required. Completing all of the tasks in the required section must be sufficient to  demonstrate proficiency of all sprint objectives, and earn a score of '2. 

> Example stretch goals below:

After finishing your required elements, you can push your work further. These goals may or may not be things you have learned in this module but they build on the material you just studied. Time allowing, stretch your limits and see if you can deliver on the following optional goals:

- [ ] Toggle form component for gluten free crust
- [ ] Turn your form into a modal that pops up on the home page
- [ ] Turn form element sections into nested routes
- [ ] Create a `cart` page with additional form options like: delivery or pickup, the option to add utensils and straws, add a tip, etc.
- [ ] Test more of the application with Cypress
- [ ] Add functionality to your order button that it leads to a Congrats! Pizza is on it's way! page **and** returns a database record of the whole order

**"Pizza is on its Way" Wireframe:**

> Get the gif: https://giphy.com/gifs/happiness-9fuvOqZ8tbZOU

![Pizza](https://i.imgur.com/AkId0mo.gif)

## FAQs

**How do I return a database record of the order?**

One of your goals is to return a database record of the order - for this you'll need to write a post request. For more detailed steps, use the below:

1. Create a new state
2. Post to [reqres](https://reqres.in/) database with `axios`
3. Log data in console


## Submission format

Follow these steps for completing your project.

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo). **Please don't merge your own pull request**
- [ ] Add your team lead as a reviewer on the pull-request
- [ ] Your team lead will count the project as complete after receiving your pull-request


