module.exports = {
   "env": {
      "browser": true,
      "es2021": true,
      "commonjs": true,
   },
   "extends": [
      "eslint:recommended",
      "plugin:react/recommended"
   ],
   "overrides": [
   ],
   "parserOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module"
   },
   "plugins": [
      "react"
   ],
   "rules": {
      "indent": [
         "error",
         3
      ],
      "linebreak-style": [
         "warning",
         "windows"
      ],
      "quotes": [
         "error",
         "double"
      ],
      "semi": [
         "error",
         "never"
      ],
      "noUnusedLocals": [
         "warn"
      ]
      // "react/react-in-jsx-scope": "off"
   }
}
