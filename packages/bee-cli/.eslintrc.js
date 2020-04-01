module.exports = {
  extends: [
    'alloy',
    'alloy/react',
    'alloy/typescript',
  ],
  rules: {
    // interface 名称必须以I开头
    "@typescript-eslint/interface-name-prefix": ['error', 'always'],
    "@typescript-eslint/consistent-type-definitions": 0
  },
}