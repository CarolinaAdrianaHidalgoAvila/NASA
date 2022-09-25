const LEGACY_FILES = ["example/**"];
module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jasmine": true,
        "amd": true
    },
    "globals": {
        "_": "readonly"
    },
    "extends": [
    ],
    "parser": "vue-eslint-parser",
    "parserOptions": {
        "parser": "@babel/eslint-parser",
        "requireConfigFile": false,
        "allowImportExportEverywhere": true,
        "ecmaVersion": 2015,
        "ecmaFeatures": {
            "impliedStrict": true
        }
    },
    "rules": {
        "no-unused-vars": [
            "error",
            {
                "args": "all"
            }
        ]
    },
    "overrides": [
        {
            "files": LEGACY_FILES,
            "rules": {
                "no-unused-vars": [
                    "warn",
                    {
                        "args": "all",
                        "varsIgnorePattern": "controller"
                    }
                ],
                "no-nested-ternary": "off",
                "no-var": "off",
                "one-var": "off"
            }
        }
    ]
};
