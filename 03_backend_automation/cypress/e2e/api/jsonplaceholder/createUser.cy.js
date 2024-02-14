import { faker } from '@faker-js/faker';


const options = { env: { snapshotOnly: true } };
// beforeEach(() => cy.api_deleteUsers());

describe('Create User', options, () => {

  let user = {
    username: faker.random.words(1),
    name: faker.random.words(3),
    email: `${faker.random.words(1)}@email.com`,
    phone: faker.random.words(3),
    website: `${faker.random.words(1)}.com`,
    address: {
      city: faker.random.words(3),
      street: faker.random.words(3),
      suite: faker.random.words(3),
      zipcode: faker.random.words(3),
      geo: {
        lat: faker.random.numeric(3),
        lng: faker.random.numeric(3),
      }
    },
    company: {
      bs: faker.random.words(3),
      catchPhrase: faker.random.words(3),
      name: faker.random.words(3)
    }
  }


  it('create user successfully', () => {
    cy.api_createUser(user).then((res) => {
      const { body } = res
      expect(res.status).to.equal(201);
    });
  })

  it('verify email pattern invalid', () => {
    let user_test = user;
    user_test.email = "invalid_email"
    cy.api_createUser(user_test).then((res) => {
      const { body } = res
      expect(res.status).to.equal(400);
    });
  })

  it('verify phone pattern invalid', () => {
    let user_test = user;
    user_test.phone = "invalid_phone"
    cy.api_createUser(user_test).then((res) => {
      const { body } = res
      expect(res.status).to.equal(400);
    });
  })

  it('verify website pattern invalid', () => {
    let user_test = user;
    user_test.website = "invalid_website"
    cy.api_createUser(user_test).then((res) => {
      const { body } = res
      expect(res.status).to.equal(400);
    });
  })

  it('verify zipcode pattern invalid', () => {
    let user_test = user;
    user_test.address.zipcode = "invalid_zipcode"
    cy.api_createUser(user_test).then((res) => {
      const { body } = res
      expect(res.status).to.equal(400);
    });
  })

  it('verify geo lat pattern invalid', () => {
    let user_test = user;
    user_test.address.geo.lat = "invalid_geo_lat"
    cy.api_createUser(user_test).then((res) => {
      const { body } = res
      expect(res.status).to.equal(400);
    });
  })

  it('verify geo lng pattern invalid', () => {
    let user_test = user;
    user_test.address.geo.lng = "invalid_geo_lng"
    cy.api_createUser(user_test).then((res) => {
      const { body } = res
      expect(res.status).to.equal(400);
    });
  })

});
