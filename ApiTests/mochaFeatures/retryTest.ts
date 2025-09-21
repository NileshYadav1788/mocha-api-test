describe('Retry Tests Demo', function () {
    // this.retries(1);
    it('should retry on failure', function () {
        // this.retries(1);  // This test will retry n times

        const randomNumber = Math.random();
        console.log('Attempt with random number:', randomNumber);

        if (randomNumber > 0.1) {
            console.log('Test failed, retrying...');
            throw new Error('Random failure');
        }
    });
});
