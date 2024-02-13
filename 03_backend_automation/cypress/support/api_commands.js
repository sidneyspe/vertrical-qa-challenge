const accessToken = 'test' //`Bearer ${Cypress.env('gitlab_access_token')}`;

Cypress.Commands.add('api_createUser', (user) => {
  cy.request({
    method: 'POST',
    url: `/users/`,
    body: {
      user
    },
    headers: { Authorization: accessToken },
  });
});

Cypress.Commands.add('api_getAllUsers', () => {
  cy.request({
    method: 'GET',
    url: '/users',
    headers: { Authorization: accessToken },
  });
});

Cypress.Commands.add('api_getUser', (user) => {
  console.log(user.company)
  cy.request({
    method: 'GET',
    url: '/users',
    qs: {
      "name": user.name
   },
    headers: { Authorization: accessToken },
  });
});

Cypress.Commands.add('api_getUserByUsername', (param) => {
  cy.request({
    method: 'GET',
    url: '/users',
    qs: {
      'username': param
   },
    headers: { Authorization: accessToken },
  });
});

Cypress.Commands.add('api_getUserByName', (param) => {
  cy.request({
    method: 'GET',
    url: '/users',
    qs: {
      'name': param
   },
    headers: { Authorization: accessToken },
  });
});

Cypress.Commands.add('api_deleteUsers', () => {
  cy.api_getAllUsers().then((res) =>
    res.body.forEach((user) =>
      cy.request({
        method: 'DELETE',
        url: `/users/${user.id}`,
        headers: { Authorization: accessToken },
      })
    )
  );
});