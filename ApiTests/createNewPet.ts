import axios from 'axios';
import { expect } from 'chai';

describe('SuiteName: create new pet', function () {
    it('should create new pet on pet store', async function () {
        // this.timeout(5000); // 5 seconds
        const endpoint = 'https://petstore.swagger.io/v2/pet';
        const payload = {
            "id": 0,
            "category": {
                "id": 0,
                "name": "string"
            },
            "name": "doggie",
            "photoUrls": [
                "string"
            ],
            "tags": [
                {
                    "id": 0,
                    "name": "string"
                }
            ],
            "status": "available"
        }
        try {
            // Add 2 second delay
            // await new Promise(resolve => setTimeout(resolve, 2000));
            const response = await axios.post(endpoint, payload);
            expect(response.status).to.equal(200);

            const petId = response.data.id;
            console.log('Created pet with ID:', petId);
        } catch (error) {
            console.error('Test failed:', error);
            throw error;
        }
    });
});
