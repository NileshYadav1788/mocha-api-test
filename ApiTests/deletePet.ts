import axios from 'axios';
import { expect } from 'chai';

describe('SuiteName: delete pet', function() {
  it('should delete pet details by id', async function() {
    const endpoint = 'https://petstore.swagger.io/v2/pet/10';
    try {
      const response = await axios.delete(endpoint);
      expect(response.status).to.equal(200);
    } catch (error) {
      console.error('Test failed:', error);
      throw error;
    }
  });
});
