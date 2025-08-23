import axios from 'axios';
import { expect } from 'chai';

describe('SuiteName: update pet', function () {
    it('should update pet on pet store', async function () {
        const endpoint = 'https://petstore.swagger.io/v2/pet';
        const payload = {
            "id": 10,
            "category": {
                "id": 0,
                "name": "string"
            },
            "name": "dog2",
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
            const response = await axios.put(endpoint, payload);
            expect(response.status).to.equal(200);
            expect(response.data.name).to.equal('dog1');
            expect(response.data.id).to.equal(10);
        } catch (error) {
            console.error('Test failed:', error);
            throw error;
        }
    });
});
