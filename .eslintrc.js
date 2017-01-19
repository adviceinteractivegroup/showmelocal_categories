module.exports = {
  'env': {
    'browser': true,
    'node': true,
    'mocha': true,
    'jquery': true,
    'phantomjs': true,
    'es6': true
  },
  'parserOptions': {
    'ecmaVersion': 6
  },
  'rules': {
    'comma-dangle': [2, 'never'],
    'no-cond-assign': 2,
    'no-console': 0,
    'no-constant-condition': 2,
    'no-debugger': 2,
    'no-dupe-keys': 2,
    'no-dupe-args': 2,
    'no-empty': 2,
    'no-empty-character-class': 2,
    'no-ex-assign': 2,
    'no-extra-boolean-cast': 0,
    'no-extra-semi': 2,
    'no-func-assign': 2,
    'no-inner-declarations': [2, 'functions'],
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-negated-in-lhs': 2,
    'no-obj-calls': 2,
    'no-unreachable': 2,
    'use-isnan': 2,
    'valid-typeof': 2,
    'complexity': [2, 10],
    'consistent-return': 0,
    'curly': 2,
    'default-case': 2,
    'dot-notation': [2, {'allowPattern': '^[a-z]+(_[a-z]+)+$'}],
    'eqeqeq': 2,
    'guard-for-in': 2,
    'no-alert': 0,
    'no-caller': 2,
    'no-empty-label': 0,
    'no-eq-null': 0,
    'no-eval': 2,
    'no-extend-native': 0,
    'no-extra-bind': 0,
    'no-fallthrough': 0,
    'no-floating-decimal': 2,
    'no-implied-eval': 2,
    'no-iterator': 0,
    'no-labels': 2,
    'no-lone-blocks': 2,
    'no-loop-func': 0,
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'no-native-reassign': 2,
    'no-new': 0,
    'no-new-func': 2,
    'no-new-wrappers': 2,
    'no-octal': 0,
    'no-octal-escape': 0,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-return-assign': 2,
    'no-script-url': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-throw-literal': 2,
    'no-unused-expressions': 2,
    'no-void': 2,
    'no-with': 2,
    'radix': 2,
    'vars-on-top': 0,
    'wrap-iife': 2,
    'yoda': [2, 'never'],
    'strict': [2, 'global'],
    'no-catch-shadow': 2,
    'no-delete-var': 0,
    'no-label-var': 0,
    'no-shadow': 2,
    'no-shadow-restricted-names': 2,
    'no-undef': 2,
    'no-undef-init': 2,
    'no-unused-vars': [2, {'vars': 'all', 'args': 'after-used'}],
    'no-use-before-define': 2,
    'handle-callback-err': 2,
    'no-mixed-requires': [2, false],
    'no-new-require': 2,
    'no-path-concat': 2,
    'no-process-exit': 0,
    'indent': [2, 2, {'SwitchCase': 0}],
    'brace-style': [2, '1tbs'],
    'camelcase': 0,
    'comma-spacing': [2, {'before': false, 'after': true}],
    'comma-style': [2, 'last'],
    'consistent-this': [2, 'self'],
    'eol-last': 2,
    'func-names': 2,
    'func-style': [2, 'expression'],
    'key-spacing': [2, {'beforeColon': false, 'afterColon': true}],
    'max-nested-callbacks': [2, 5],
    'new-cap': 2,
    'new-parens': 2,
    'no-array-constructor': 2,
    'no-lonely-if': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-multiple-empty-lines': [2, {'max': 2}],
    'no-nested-ternary': 2,
    'no-new-object': 2,
    'semi-spacing': [2, {'before': false, 'after': true}],
    'no-spaced-func': 2,
    'no-trailing-spaces': 0,
    'no-underscore-dangle': 0,
    'no-extra-parens': 2,
    'padded-blocks': [2, 'never'],
    'quotes': [2, 'single', 'avoid-escape'],
    'semi': [2, 'always'],
    'space-before-blocks': [2, 'always'],
    'array-bracket-spacing': [2, 'never'],
    'space-infix-ops': 2,
    'space-unary-ops': [2, {'words': true, 'nonwords': false}],
    'no-var': 2,
    'max-depth': [2, 3],
    'max-len': [2, 140, 2],
    'max-params': [2, 4],
    'max-statements': [2, 30]
  // todo: add in multiple var declarations when the rule becomes available
  },
  'globals': {}
}
