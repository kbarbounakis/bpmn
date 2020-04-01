const { 
    ProcessManager,
    createUnmanagedProcessFromXML, 
    createUnmanagedProcess
} = require('../lib/public');
const path = require('path');
const { promisify } = require('es6-promisify')
describe('ProcessManager', () => {
    it('should create instance', async () => {
        const processManager = new ProcessManager();
        expect(processManager).toBeTruthy();
    });
    it('should use createUnmanagedProcess', async () => {
        const createUnmanagedProcessAsync = promisify(createUnmanagedProcess);
        /**
         * @type {BPMNProcess}
         */
        let myProcess = await createUnmanagedProcessAsync(path.resolve(__dirname, './processes/diagram.bpmn'));
        expect(myProcess).toBeTruthy();
        // find start event
        const processDefinition = myProcess.getProcessDefinition();
        const startEvent = processDefinition.flowObjects.find( flowObject => {
            return flowObject.type === 'startEvent';
        });
        expect(startEvent).toBeTruthy();
    });

    it('should use createUnmanagedProcess to load process', async () => {
        const createUnmanagedProcessAsync = promisify(createUnmanagedProcess);
        /**
         * @type {BPMNProcess}
         */
        let myProcess = await createUnmanagedProcessAsync(path.resolve(__dirname, './processes/diagram2.bpmn'));
        expect(myProcess).toBeTruthy();
        // find start event
        const processDefinition = myProcess.getProcessDefinition();
        const startEvent = processDefinition.flowObjects.find( flowObject => {
            return flowObject.type === 'startEvent';
        });
        expect(startEvent).toBeTruthy();
    });

    it('should use createUnmanagedProcess to start process', async () => {
        const createUnmanagedProcessAsync = promisify(createUnmanagedProcess);
        /**
         * @type {BPMNProcess}
         */
        let myProcess = await createUnmanagedProcessAsync(path.resolve(__dirname, './processes/diagram.bpmn'));
        expect(myProcess).toBeTruthy();
        // find start event
        const processDefinition = myProcess.getProcessDefinition();
        const startEvent = processDefinition.flowObjects.find( flowObject => {
            return flowObject.type === 'startEvent';
        });
        expect(startEvent).toBeTruthy();
        myProcess.triggerEvent(startEvent.name);
    });
   

});