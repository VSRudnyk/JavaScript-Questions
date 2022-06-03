export const data = [
  {
    id: '1',
    question: 'Каким будет вывод?',
    codeExample:
      'function sayHi() {\n  console.log(name)\n  console.log(age)\n  var name = "John"\n  let age = 30\n}\n\nsayHi()',
    possiblAnswer: [
      'John и undefined',
      'John и ошибка',
      'ошибка',
      'undefined и ошибка',
    ],
    correctAnswer: 'undefined и ошибка',
  },
  {
    id: '2',
    question: 'Каким будет вывод?',
    codeExample:
      'for (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 1)\n}\n\nfor (let i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 1)\n}',
    possiblAnswer: [
      '0 1 2 и 0 1 2',
      '0 1 2 и 3 3 3',
      '3 3 3 и 0 1 2',
      '3 3 3 и 3 3 3',
    ],
    correctAnswer: '3 3 3 и 0 1 2',
  },
  {
    id: '3',
    question: 'Каким будет вывод?',
    codeExample:
      'const shape = {\n  radius: 10,\n  diameter() {\n    return this.radius * 2\n  },\n  perimeter: () => 2 * Math.PI * this.radius\n}\n\nconsole.log(shape.diameter())\nconsole.log(shape.perimeter())',
    possiblAnswer: [
      '20 и 62.83185307179586',
      '20 и NaN',
      '20 и 63',
      'NaN и 63',
    ],
    correctAnswer: '20 и NaN',
  },
  {
    id: '4',
    question: 'Каким будет вывод?',
    codeExample: 'console.log(+true)\nconsole.log(!"John")',
    possiblAnswer: ['1 и false', '0 и true', 'false и NaN', 'false и false'],
    correctAnswer: '1 и false',
  },
  {
    id: '5',
    question: 'Каким будет вывод?',
    codeExample:
      'let c = { greeting: "Hey!" }\nlet d\n\nd = c\nc.greeting = "Hello!"\nconsole.log(d.greeting)',
    possiblAnswer: ['Hello!', 'Hey!', 'undefined', 'ошибка'],
    correctAnswer: 'Hello!',
  },
  {
    id: '6',
    question: 'Каким будет вывод?',
    codeExample:
      'let a = 3\nlet b = new Number(3)\nlet c = 3\n\nconsole.log(a == b)\nconsole.log(a === b)\nconsole.log(b === c)',
    possiblAnswer: [
      'true false true',
      'false false true',
      'true false false',
      'false true true',
    ],
    correctAnswer: 'true false false',
  },
  {
    id: '7',
    question: 'Каким будет вывод?',
    codeExample:
      'class Chameleon {\n  static colorChange(newColor) {\n    this.newColor = newColor\n    return this.newColor\n  }\n\n  constructor({ newColor = "green" } = {}) {\n    this.newColor = newColor\n  }\n}\n\nconst freddie = new Chameleon({ newColor: "pink" })\nfreddie.colorChange("orange")',
    possiblAnswer: ['orange', 'pink', 'green', 'ошибка'],
    correctAnswer: 'ошибка',
  },
  {
    id: '8',
    question: 'Каким будет вывод?',
    codeExample: `// обратите внимание: код выполняется в нестрогом режиме
      let greeting
      greetign = {} // опечатка!
      console.log(greetign)`,
    possiblAnswer: ['{}', 'ошибка', 'undefined', '""'],
    correctAnswer: '{}',
  },
  {
    id: '9',
    question: 'Каким будет вывод?',
    codeExample: '',
    possiblAnswer: ['', '', '', ''],
    correctAnswer: '',
  },
  {
    id: '10',
    question: 'Каким будет вывод?',
    codeExample: '',
    possiblAnswer: ['', '', '', ''],
    correctAnswer: '',
  },
  {
    id: '11',
    question: 'Каким будет вывод?',
    codeExample: '',
    possiblAnswer: ['', '', '', ''],
    correctAnswer: '',
  },
  {
    id: '12',
    question: 'Каким будет вывод?',
    codeExample: '',
    possiblAnswer: ['', '', '', ''],
    correctAnswer: '',
  },
  {
    id: '13',
    question: 'Каким будет вывод?',
    codeExample: '',
    possiblAnswer: ['', '', '', ''],
    correctAnswer: '',
  },
  {
    id: '14',
    question: 'Каким будет вывод?',
    codeExample: '',
    possiblAnswer: ['', '', '', ''],
    correctAnswer: '',
  },
  {
    id: '15',
    question: 'Каким будет вывод?',
    codeExample: '',
    possiblAnswer: ['', '', '', ''],
    correctAnswer: '',
  },
  {
    id: '16',
    question: 'Каким будет вывод?',
    codeExample: '',
    possiblAnswer: ['', '', '', ''],
    correctAnswer: '',
  },
  {
    id: '17',
    question: 'Каким будет вывод?',
    codeExample: '',
    possiblAnswer: ['', '', '', ''],
    correctAnswer: '',
  },
  {
    id: '18',
    question: 'Каким будет вывод?',
    codeExample: '',
    possiblAnswer: ['', '', '', ''],
    correctAnswer: '',
  },
  {
    id: '19',
    question: 'Каким будет вывод?',
    codeExample: '',
    possiblAnswer: ['', '', '', ''],
    correctAnswer: '',
  },
];
