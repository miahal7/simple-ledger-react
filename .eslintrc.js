// module.exports = {
//     "env": {
//         "browser": true,
//         "commonjs": true,
//         "es6": true
//     },
//     "extends": "airbnb",
//     "installedESLint": true,
//     "plugins": [
//         "react",
//         "jsx-a11y",
//         "import"
//     ],
//     "parserOptions": {
//         "sourceType": "module"
//     },
//     "rules": {
//         // "indent": [
//         //     "warn",
//         //     2,
//         //     { "SwitchCase": 1 }
//         // ],
//         "linebreak-style": [
//             "warn",
//             "unix"
//         ],
//         // "quotes": [
//         //     1,
//         //     "single"
//         // ],
//         "semi": [
//             "warn",
//             "always"
//         ],
//         "space-after-keywords": [
//             0,
//             "always"
//         ],
//         "space-return-throw-case": [
//             0,
//             "always"
//         ],
//         "func-names": [
//             0,
//             "always"
//         ],
//         "space-before-function-paren": [
//             2,
//             { "anonymous": "always", "named": "never" }
//         ],
//         // "no-use-before-define": [
//         //     0
//         // ],
//         "comma-dangle": [
//           0
//         ],
//         "no-console": [
//           "error", { allow: ["warn", "error"] }
//       ],
//       "import/no-unresolved": 0,
//       "import/extensions": 0,
//       "object-shorthand": 0,
//       "import/no-extraneous-dependencies": [
//           0,
//           {
//               "devDependencies": false,
//               "optionalDependencies": false,
//               "peerDependencies": false
//           }
//       ]
//     }
// };

module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint-config-airbnb",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "warn",
            2,
            { "SwitchCase": 1 }
        ],
        "linebreak-style": [
            "warn",
            "unix"
        ],
        "quotes": [
            0,
            "single"
        ],
        "semi": [
            "warn",
            "always"
        ],
        "space-after-keywords": [
            0,
            "always"
        ],
        "space-return-throw-case": [
            0,
            "always"
        ],
        "func-names": [
            0,
            "always"
        ],
        "space-before-function-paren": [
            2,
            { "anonymous": "always", "named": "never" }
        ],
        "no-use-before-define": [
            0
        ],
        "comma-dangle": [
          0
        ],
        "no-underscore-dangle": [
            0
        ],
        "no-undef": [ 0 ],
        "prefer-arrow-callback": [ 0 ],
        "object-shorthand": [ 0 ],
        "arrow-body-style": [ 0 ],
        "no-console": [
          "error", { allow: ["warn", "error"] }
        ],
        "import/extensions": [
            0
        ],
        "import/no-extraneous-dependencies": [
            0
        ],
        "import/no-unresolved": [
            0
        ],
        "import/no-absolute-path": [
            0
        ],
        "class-methods-use-this": [ 0 ]
    }
};
