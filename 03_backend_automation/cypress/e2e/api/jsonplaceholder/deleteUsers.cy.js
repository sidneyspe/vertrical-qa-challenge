const options = { env: { snapshotOnly: true } };

describe('Delete Users', options, () => {

  it('delete users successfully', () => {
    cy.api_deleteUsers()
  })

});
