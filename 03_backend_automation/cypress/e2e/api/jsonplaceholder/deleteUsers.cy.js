const options = { env: { snapshotOnly: true } };

describe('Delete Users', options, () => {

  it('delete users successfully', () => {
    cy.api_deleteUsers()
  })

  it('delete user id 1 successfully', () => {
    let user_id = 1;
    cy.api_deleteUser(user_id).then((res) => {
      expect(res.status).to.equal(200);
    });
  })

});
