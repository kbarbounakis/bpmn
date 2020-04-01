const {mapName2HandlerName} = require('../../lib/handler');

function activity(activityName) {
    return function decorator(target, name, descriptor) {
        // extend target object
        Object.defineProperty(target, mapName2HandlerName(activityName), {
            value: descriptor.value
        });
        return descriptor;
    }
}

class MyProcess {
    @activity('First Task')
    executeFirstTask(data, done) {
        return done();
    }

    @activity('Task A')
    executeTaskA(data, done) {
        return done();
    }

    @activity('Task B')
    executeTaskB(data, done) {
        return done();
    }
}

function First_Task(data, done) {
    return done();
}

module.exports = new MyProcess();