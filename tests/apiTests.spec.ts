import { test, expect, request } from '@playwright/test';

const baseURL = 'https://petstore.swagger.io/v2';

test.describe('Petstore API - /pet endpoint', () => {

  test('Create a new pet [POST /pet]', async ({ request }) => {
    const newPet = {
      id: 123456789,
      name: "Tommy",
      category: { id: 1, name: "Dog" },
      photoUrls: ["https://example.com/photo.jpg"],
      tags: [{ id: 1, name: "cute" }],
      status: "available"
    };

    const response = await request.post(`${baseURL}/pet`, {
      data: newPet,
    });

    expect(response.ok()).toBeTruthy();
    const body = await response.json();
    expect(body.name).toBe("Tommy");
    expect(body.status).toBe("available");
  });

  test('Get a pet by ID [GET /pet/{petId}]', async ({ request }) => {
    const petId = 123456789;

    const response = await request.get(`${baseURL}/pet/${petId}`);
    expect(response.ok()).toBeTruthy();

    const body = await response.json();
    expect(body.id).toBe(petId);
    expect(body.name).toBe("Tommy");
  });

  test('Update pet status [PUT /pet]', async ({ request }) => {
    const updatedPet = {
      id: 123456789,
      name: "Tommy",
      category: { id: 1, name: "Dog" },
      photoUrls: ["https://example.com/photo.jpg"],
      tags: [{ id: 1, name: "cute" }],
      status: "sold"
    };

    const response = await request.put(`${baseURL}/pet`, {
      data: updatedPet,
    });

    expect(response.ok()).toBeTruthy();
    const body = await response.json();
    expect(body.status).toBe("sold");
  });

  test('Delete a pet [DELETE /pet/{petId}]', async ({ request }) => {
    const petId = 123456789;

    const response = await request.delete(`${baseURL}/pet/${petId}`);
    expect(response.status()).toBe(200);
  });

});
