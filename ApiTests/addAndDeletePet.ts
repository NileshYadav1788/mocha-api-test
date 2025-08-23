import axios from 'axios';
import { expect } from 'chai';

describe('End-to-End Pet Store API Test Suite', function () {
    let createdPetId: number;

    it('should create a new pet', async function () {
        const endpoint = 'https://petstore.swagger.io/v2/pet';
        const payload = {
            "id": 16,
            "category": {
                "id": 1,
                "name": "dogs"
            },
            "name": "Max",
            "photoUrls": [
                "https://example.com/dog.jpg"
            ],
            "tags": [
                {
                    "id": 1,
                    "name": "friendly"
                }
            ],
            "status": "available"
        }
        
        try {
            const response = await axios.post(endpoint, payload);
            expect(response.status).to.equal(200);
            expect(response.data.name).to.equal('Max');
            createdPetId = response.data.id;
            console.log('Created pet with ID:', createdPetId);
        } catch (error) {
            console.error('Create pet test failed:', error);
            throw error;
        }
    });

    it('should get the created pet by ID', async function () {
        await new Promise(resolve => setTimeout(resolve, 20000));
        const endpoint = `https://petstore.swagger.io/v2/pet/${createdPetId}`;
        try {
            const response = await axios.get(endpoint);
            expect(response.status).to.equal(200);
            expect(response.data.id).to.equal(createdPetId);
            expect(response.data.name).to.equal('Max');
            expect(response.data.category.name).to.equal('dogs');
        } catch (error) {
            console.error('Get pet test failed:', error);
            throw error;
        }
    });

    it('should update the pet information', async function () {
        const endpoint = 'https://petstore.swagger.io/v2/pet';
        const payload = {
            "id": createdPetId,
            "category": {
                "id": 1,
                "name": "dogs"
            },
            "name": "Max Updated",
            "photoUrls": [
                "https://example.com/dog-updated.jpg"
            ],
            "tags": [
                {
                    "id": 1,
                    "name": "friendly"
                },
                {
                    "id": 2,
                    "name": "trained"
                }
            ],
            "status": "pending"
        }
        
        try {
            const response = await axios.put(endpoint, payload);
            expect(response.status).to.equal(200);
            expect(response.data.name).to.equal('Max Updated');
            expect(response.data.status).to.equal('pending');
        } catch (error) {
            console.error('Update pet test failed:', error);
            throw error;
        }
    });

    it('should delete the pet and verify deletion', async function () {
        const deleteEndpoint = `https://petstore.swagger.io/v2/pet/${createdPetId}`;
        try {
            // Delete the pet
            const deleteResponse = await axios.delete(deleteEndpoint);
            expect(deleteResponse.status).to.equal(200);

            await new Promise(resolve => setTimeout(resolve, 40000));
            // Try to get the deleted pet (should fail)
            try {
                await axios.get(deleteEndpoint);
                throw new Error('Pet was not deleted successfully');
            } catch (error: any) {
                if (!error.response || !error.response.status) {
                    throw new Error('Unexpected error response format');
                }
                expect(error.response.status).to.equal(404);
            }
        } catch (error) {
            console.error('Delete pet test failed:', error);
            throw error;
        }
    });
});
