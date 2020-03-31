const {ProcessManager, createUnmanagedProcessFromXML} = require('../lib/public');
describe('ProcessManager', () => {
    it('should create instance', async () => {
        const processManager = new ProcessManager();
        expect(processManager).toBeTruthy();
    });
});