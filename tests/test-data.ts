//Currently it is not integrated 

export const validPassword = 'Test1234!';

export const generateUniqueEmail = () => `user_${Date.now()}@test.com`;

export const defaultUser = {
  firstName: 'John',
  lastName: 'Doe',
  email: generateUniqueEmail(),
  password: validPassword,
};

export const guestUser = {
  firstName: 'Jane',
  lastName: 'Smith',
  email: generateUniqueEmail(),
  address: {
    countryValue: '1', // First value - USA
    city: 'New York',
    street: '123 Main St',
    zip: '10001',
    phone: '1234567890',
  },
};

export const searchTerms = {
  books: 'book',
  healthBook: 'Health Book',
};

export const invalidUser = {
  email: 'wrong@example.com',
  password: 'wrongpass',
};

// For integration in the tests - 
// import { defaultUser, invalidUser, guestUser, generateUniqueEmail } from './test-data';
// than the current global variable will not be needed
