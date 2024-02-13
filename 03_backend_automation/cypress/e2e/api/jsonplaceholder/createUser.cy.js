import { faker } from '@faker-js/faker';


const options = { env: { snapshotOnly: true } };
beforeEach(() => cy.api_deleteUsers());

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
      console.log("🚀 ~ cy.api_createUser ~ body:", body)
      expect(res.status).to.equal(201);
    });
  })


});
