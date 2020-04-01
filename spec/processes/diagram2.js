const {BPMNProcessClient} = require('../../lib/client');
class MyProcess extends BPMNProcessClient {
    constructor(process) {
        super(process);
    }
    First_Task(data, done) {
        return done();
    }
}

module.exports = new MyProcess();