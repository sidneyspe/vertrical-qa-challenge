const options = { env: { snapshotOnly: true } };

describe('Edit Users', options, () => {
  let user = {}
  
  it('get user successfully', () => {
    cy.api_getAllUsers().then((res) => {
      const { body } = res
      user = body[0]
      expect(res.status).to.equal(200);
    });
  })

  it('edit user with all object successfully', () => {
    user.name = "sidney"
   
    cy.api_editUser(user).then((res) => {
      let user_response = res.body.user

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

  it('edit user with only 1 attr successfully', () => {
    let new_user = {
      id: 1,
      name: "teste"
    }
    cy.api_editUser(new_user).then((res) => {
      let user_response = res.body.user

      expect(new_user.name).to.equal(user_response.name);
      

      expect(res.status).to.equal(200);
    });
  })

  it('edit user not found', () => {
    let new_user = {
      id: 11,
      name: "teste"
    }
    cy.api_editUser(new_user).then((res) => {
      expect(res.status).to.equal(400);
    });
  })

  it('edit user invalid email pattern', () => {
    let new_user = {
      id: 1,
      email: "invalid_email"
    }
    cy.api_editUser(new_user).then((res) => {
      expect(res.status).to.equal(400);
    });
  })

  it('edit user invalid phone pattern', () => {
    let new_user = {
      id: 1,
      phone: "invalid_phone"
    }
    cy.api_editUser(new_user).then((res) => {
      expect(res.status).to.equal(400);
    });
  })

  it('edit user invalid website pattern', () => {
    let new_user = {
      id: 1,
      website: "invalid_website"
    }
    cy.api_editUser(new_user).then((res) => {
      expect(res.status).to.equal(400);
    });
  })

  it('edit user invalid zipcode pattern', () => {
    let new_user = {
      id: 1,
      address: {
        zipcode: "invalid_zipcode"
      }
    }
    cy.api_editUser(new_user).then((res) => {
      expect(res.status).to.equal(400);
    });
  })

  it('edit user invalid geo lat pattern', () => {
    let new_user = {
      id: 1,
      address: {
        geo: {
          lat: "invalid_geo_lat"
        }
      }
    }
    cy.api_editUser(new_user).then((res) => {
      expect(res.status).to.equal(400);
    });
  })
  
  it('edit user invalid geo lng pattern', () => {
    let new_user = {
      id: 1,
      address: {
        geo: {
          lng: "invalid_geo_lng"
        }
      }
    }
    cy.api_editUser(new_user).then((res) => {
      expect(res.status).to.equal(400);
    });
  })
  


});
