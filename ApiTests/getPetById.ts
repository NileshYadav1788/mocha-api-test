import axios from 'axios';
import { expect } from 'chai';

describe('SuiteName: getPetById', function() {
  it('should fetch pet details by id', async function() {
    const endpoint = 'https://petstore.swagger.io/v2/pet/10';
    try {
      const response = await axios.get(endpoint);
      expect(response.status).to.equal(200);
      expect(response.data.id).to.equal(10);
      expect(response.data.name).to.equal('doggie');
    } catch (error) {
      console.error('Test failed:', error);
      throw error;
    }
  });
});
