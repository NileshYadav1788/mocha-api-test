describe('hooks', function () {
    before('before hook', function () {
        console.log('🚀 before hook executed');
    });

    after('after hook', function () {
        console.log('✅ after hook executed');
    });

    beforeEach('before each test hook', function () {
        console.log('🔄 beforeEach hook executed');
    });

    afterEach('after each test hook', function () {
        console.log('🔁 afterEach hook executed');
    });

    it('TC1: should return a new Array', function () {
        console.log('🧪 test case executed');
    });

    it('TC2: should return a new Array', function () {
        console.log('🧪 test case executed');
    });
});
