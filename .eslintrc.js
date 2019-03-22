module.exports = {
    extends: ['standard', 'standard-react'],
    rules: {
        // specify the maximum length of a line in your program
        // https://eslint.org/docs/rules/max-len
        "no-console": "off",
        "no-debugger": "off",
        "no-unused-vars": "off",
        "semi": [2, "always"], //语句强制分号结尾
        "generator-star-spacing": "off", //生成器函数*的前后空格
        "eqeqeq": 0,
        "no-multi-spaces": 0, //不能用多余的空格
        "comma-dangle": [0, "ignore"], //对象字面量项尾不能有逗号
        "dot-location": 0, //对象访问符的位置，换行的时候在行首还是行尾
        "space-before-function-paren": [0, "always"], //函数定义时括号前面要不要有空格\
        "newline-after-var": 0, //变量声明后是否需要空一行
        "object-shorthand": 0, //强制对象字面量缩写语法
        "indent": [0, 4], //缩进风格
    }
}