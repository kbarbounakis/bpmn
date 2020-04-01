module.exports = function (api) {
    api.cache(false);
    return {
        "sourceMaps": "both",
        "retainLines": true,
        "presets": [
            [
                "@babel/preset-env",
                {
                    "targets": {
                        "node": "current"
                    }
                }
            ]
        ],
        "ignore": [
          "./node_modules/"
        ],
        "plugins": [
            [
                "@babel/plugin-proposal-decorators",
                {
                    "legacy": true
                }
            ]
        ]
    };
};