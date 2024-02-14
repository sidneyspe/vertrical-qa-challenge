# Vertrical -  Systems Quality Assurance Challenge

## 3 - Automation of back-end functionality

Create a collection of tests that validates the GET, POST, PUT, and DELETE of the API available at the endpoint below. http://jsonplaceholder.typicode.com/users Validate the JSON schema and http code of the responses.

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

### Postman Collection

If you want use the postman collection, you can import the files locale in: 

**Environment**: 📄 [postman/JSONPLACEHOLDER_ENVIRONMENT.postman_environment.json](postman/JSONPLACEHOLDER_ENVIRONMENT.postman_environment.json)

**Collection**: 📄 [postman/jsonplaceholder_vertrical_test.postman_collection.json](postman/jsonplaceholder_vertrical_test.postman_collection.json)