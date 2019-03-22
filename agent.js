// agent.js
const path = require('path');
const chokidar = require('chokidar');

module.exports = agent => {
    // 在这里写你的初始化逻辑
    // 也可以通过 messenger 对象发送消息给 App Worker
    // 但需要等待 App Worker 启动成功后才能发送，不然很可能丢失
    agent.messenger.on('egg-ready', () => {
        agent.messenger.sendToApp('app_action', 'ready ok');
        const watcher = chokidar.watch(path.resolve(__dirname, './app/view/'));
        watcher.on('ready', function() {
            watcher.on('change', function(path, state) {
                if (/\.njk$/g.test(path)) {
                    agent.messenger.sendToApp('app_action', state);
                }
            });
            watcher.on('addDir', function(path, state) {
                if (/\.njk$/g.test(path)) {
                    agent.messenger.sendToApp('app_action', state);
                }
            });
            watcher.on('unlinkDir', function(path, state) {
                if (/\.njk$/g.test(path)) {
                    agent.messenger.sendToApp('app_action', state);
                }
            });
        });
    });
};
