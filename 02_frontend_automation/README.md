# Vertrical -  Systems Quality Assurance Challenge

## 2 - Automation of front-end functionalities

On the website below, there are two functionalities to be tested.

In the first one, it is possible to render a hidden element. Create an automation that clicks on the “Start” button, waits for the element to load, and validates that the text “Hello World!” was presented. https://the-internet.herokuapp.com/dynamic_loading/1

In the second one, the selectors of the elements you use will be evaluated. Your challenge is to find good selectors for the elements. Create an automation that clicks on the three buttons presented on the screen and on all “edit” and “delete” in the grid. https://the-internet.herokuapp.com/challenging_dom

###  Install dependencies

`npm i`

### Running the specific test headless

`npm run cy:spec path-to-file`

### Running the Cypress GUI

`npm run cy:open`

### Running the Cypress headless mode
`npm run cy:headless`

### Running the all tests and create report
`npm run cy:all`

In this case, the report will be generate in: 📄 [cypress/results/output](cypress/results/output.html)
