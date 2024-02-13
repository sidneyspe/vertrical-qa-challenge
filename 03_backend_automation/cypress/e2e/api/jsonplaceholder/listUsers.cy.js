const options = { env: { snapshotOnly: true } };

describe('List Users', options, () => {
  let user = {}
  
  it('list all successfully', () => {
    cy.api_getAllUsers().then((res) => {
      const { body } = res
      user = body[1]
      expect(res.status).to.equal(200);
    });
  })

  it('get user by Username successfully', () => {
    cy.api_getUserByUsername(user.username).then((res) => {
      let user_response = res.body[0]

      expect(user.id).to.equal(user_response.id);
      expect(user.username).to.equal(user_response.username);
      expect(user.name).to.equal(user_response.name);
      expect(user.email).to.equal(user_response.email);
      expect(user.phone).to.equal(user_response.phone);
      expect(user.website).to.equal(user_response.website);
      expect(user.address.city).to.equal(user_response.address.city);
      expect(user.address.street).to.equal(user_response.address.street);
      expect(user.address.suite).to.equal(user_response.address.suite);
      expect(user.address.zipcode).to.equal(user_response.address.zipcode);
      expect(user.address.geo.lat).to.equal(user_response.address.geo.lat);
      expect(user.address.geo.lng).to.equal(user_response.address.geo.lng);
      expect(user.company.bs).to.equal(user_response.company.bs);
      expect(user.company.catchPhrase).to.equal(user_response.company.catchPhrase);
      expect(user.company.name).to.equal(user_response.company.name);

      expect(res.status).to.equal(200);
    });
  })

  it('get user by Name successfully', () => {
    cy.api_getUserByName(user.name).then((res) => {
      let user_response = res.body[0]

      expect(user.id).to.equal(user_response.id);
      expect(user.username).to.equal(user_response.username);
      expect(user.name).to.equal(user_response.name);
      expect(user.email).to.equal(user_response.email);
      expect(user.phone).to.equal(user_response.phone);
      expect(user.website).to.equal(user_response.website);
      expect(user.address.city).to.equal(user_response.address.city);
      expect(user.address.street).to.equal(user_response.address.street);
      expect(user.address.suite).to.equal(user_response.address.suite);
      expect(user.address.zipcode).to.equal(user_response.address.zipcode);
      expect(user.address.geo.lat).to.equal(user_response.address.geo.lat);
      expect(user.address.geo.lng).to.equal(user_response.address.geo.lng);
      expect(user.company.bs).to.equal(user_response.company.bs);
      expect(user.company.catchPhrase).to.equal(user_response.company.catchPhrase);
      expect(user.company.name).to.equal(user_response.company.name);

      expect(res.status).to.equal(200);
    });
  })

  it('get user by Username not found', () => {
    let username = "test"
    cy.api_getUserByUsername(username).then((res) => {
      let { body } = res

      expect(body).to.length(0);
      expect(res.status).to.equal(200);
    });
  })

  it('get user by name not found', () => {
    let name = "test"
    cy.api_getUserByName(name).then((res) => {
      let { body } = res

      expect(body).to.length(0);
      expect(res.status).to.equal(200);
    });
  })

});
