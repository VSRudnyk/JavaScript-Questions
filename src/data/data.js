export const data = [
  {
    id: '1',
    question: 'Каким будет вывод?',
    codeExample: `
    <pre class="hljs" style="display: block; overflow-x: auto; padding: 0.5em; color: rgb(0, 0, 0); background: rgb(248, 248, 255);"><span class="hljs-function"><span class="hljs-keyword" style="color: rgb(149, 65, 33);">function</span> <span class="hljs-title" style="color: rgb(68, 85, 136); font-weight: 700;">sayHi</span>(<span class="hljs-params" style="color: rgb(0, 0, 255);"></span>) </span>{
  <span class="hljs-built_in" style="color: rgb(0, 134, 179);">console</span>.log(name)
  <span class="hljs-built_in" style="color: rgb(0, 134, 179);">console</span>.log(age)
  <span class="hljs-keyword" style="color: rgb(149, 65, 33);">var</span> name = <span class="hljs-string" style="color: rgb(33, 145, 97);">"John"</span>
  <span class="hljs-keyword" style="color: rgb(149, 65, 33);">let</span> age = <span class="hljs-number" style="color: rgb(64, 160, 112);">30</span>
}

sayHi()</pre>
    `,
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
    codeExample: `
    <pre class="hljs" style="display: block; overflow-x: auto; padding: 0.5em; color: rgb(0, 0, 0); background: rgb(248, 248, 255);"><span class="hljs-keyword" style="color: rgb(149, 65, 33);">for</span> (var i = <span class="hljs-number" style="color: rgb(64, 160, 112);">0</span>; i &lt; <span class="hljs-number" style="color: rgb(64, 160, 112);">3</span>; i++) {
  setTimeout(<span class="hljs-function"><span class="hljs-params" style="color: rgb(0, 0, 255);">()</span> =&gt;</span> <span class="hljs-built_in" style="color: rgb(0, 134, 179);">console</span>.log(i), <span class="hljs-number" style="color: rgb(64, 160, 112);">1</span>)
}

<span class="hljs-keyword" style="color: rgb(149, 65, 33);">for</span> (let i = <span class="hljs-number" style="color: rgb(64, 160, 112);">0</span>; i &lt; <span class="hljs-number" style="color: rgb(64, 160, 112);">3</span>; i++) {
  setTimeout(<span class="hljs-function"><span class="hljs-params" style="color: rgb(0, 0, 255);">()</span> =&gt;</span> <span class="hljs-built_in" style="color: rgb(0, 134, 179);">console</span>.log(i), <span class="hljs-number" style="color: rgb(64, 160, 112);">1</span>)
}</pre>
    `,
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
    codeExample: `
    <pre class="hljs" style="display: block; overflow-x: auto; padding: 0.5em; color: rgb(0, 0, 0); background: rgb(248, 248, 255);"><span class="hljs-keyword" style="color: rgb(149, 65, 33);">const</span> <span class="hljs-built_in" style="color: rgb(0, 134, 179);">shape</span> = {
  radius: <span class="hljs-number" style="color: rgb(64, 160, 112);">10</span>,
  diameter() {
    <span class="hljs-keyword" style="color: rgb(149, 65, 33);">return</span> <span class="hljs-keyword" style="color: rgb(149, 65, 33);">this</span>.radius * <span class="hljs-number" style="color: rgb(64, 160, 112);">2</span>
  },
  perimeter: () =&gt; <span class="hljs-number" style="color: rgb(64, 160, 112);">2</span> * Math.<span class="hljs-literal" style="color: rgb(149, 65, 33);">PI</span> * <span class="hljs-keyword" style="color: rgb(149, 65, 33);">this</span>.radius
}
  
console.<span class="hljs-built_in" style="color: rgb(0, 134, 179);">log</span>(<span class="hljs-built_in" style="color: rgb(0, 134, 179);">shape</span>.diameter())
console.<span class="hljs-built_in" style="color: rgb(0, 134, 179);">log</span>(<span class="hljs-built_in" style="color: rgb(0, 134, 179);">shape</span>.perimeter())</pre>
    `,
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
    codeExample: `
    <pre class="hljs" style="display: block; overflow-x: auto; padding: 0.5em; color: rgb(0, 0, 0); background: rgb(248, 248, 255);">console.<span class="hljs-built_in" style="color: rgb(0, 134, 179);">log</span>(+<span class="hljs-literal" style="color: rgb(149, 65, 33);">true</span>)
console.<span class="hljs-built_in" style="color: rgb(0, 134, 179);">log</span>(!<span class="hljs-string" style="color: rgb(33, 145, 97);">"John"</span>)</pre>
    `,
    possiblAnswer: ['1 и false', '0 и true', 'false и NaN', 'false и false'],
    correctAnswer: '1 и false',
  },
  {
    id: '5',
    question: 'Каким будет вывод?',
    codeExample: `
    <pre class="hljs" style="display: block; overflow-x: auto; padding: 0.5em; color: rgb(0, 0, 0); background: rgb(248, 248, 255);"><span class="hljs-keyword" style="color: rgb(149, 65, 33);">let</span> <span class="hljs-built_in" style="color: rgb(0, 134, 179);">c</span> = { greeting: <span class="hljs-string" style="color: rgb(33, 145, 97);">"Hey!"</span> }
<span class="hljs-keyword" style="color: rgb(149, 65, 33);">let</span> d

d = <span class="hljs-built_in" style="color: rgb(0, 134, 179);">c</span>
<span class="hljs-built_in" style="color: rgb(0, 134, 179);">c</span>.greeting = <span class="hljs-string" style="color: rgb(33, 145, 97);">"Hello!"</span>
console.log(d.greeting)</pre>
    `,
    possiblAnswer: ['Hello!', 'Hey!', 'undefined', 'ошибка'],
    correctAnswer: 'Hello!',
  },
  {
    id: '6',
    question: 'Каким будет вывод?',
    codeExample: `
    <pre class="hljs" style="display: block; overflow-x: auto; padding: 0.5em; color: rgb(0, 0, 0); background: rgb(248, 248, 255);"><span class="hljs-keyword" style="color: rgb(149, 65, 33);">let</span> <span class="hljs-attr">a</span> = <span class="hljs-number" style="color: rgb(64, 160, 112);">3</span>
<span class="hljs-keyword" style="color: rgb(149, 65, 33);">let</span> <span class="hljs-attr">b</span> = new Number(<span class="hljs-number" style="color: rgb(64, 160, 112);">3</span>)
<span class="hljs-keyword" style="color: rgb(149, 65, 33);">let</span> <span class="hljs-attr">c</span> = <span class="hljs-number" style="color: rgb(64, 160, 112);">3</span>

console.log(<span class="hljs-attr">a</span> == b)
console.log(<span class="hljs-attr">a</span> === b)
console.log(<span class="hljs-attr">b</span> === c)</pre>
    `,
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
    codeExample: `
    <pre class="hljs" style="display: block; overflow-x: auto; padding: 0.5em; color: rgb(0, 0, 0); background: rgb(248, 248, 255);"><span class="hljs-keyword" style="color: rgb(149, 65, 33);">class</span> Chameleon <span class="hljs-comment" style="color: rgb(64, 128, 128); font-style: italic;">{
  static colorChange(newColor) {
    this.newColor = newColor
    return this.newColor
  }</span>

  <span class="hljs-function"><span class="hljs-keyword" style="color: rgb(149, 65, 33);">constructor</span><span class="hljs-params" style="color: rgb(0, 0, 255);">({ newColor = "green" } = {})</span> <span class="hljs-comment" style="color: rgb(64, 128, 128); font-style: italic;">{
    this.newColor = newColor
  }</span>
}

<span class="hljs-title" style="color: rgb(68, 85, 136); font-weight: 700;">const</span> <span class="hljs-title" style="color: rgb(68, 85, 136); font-weight: 700;">freddie</span> = <span class="hljs-title" style="color: rgb(68, 85, 136); font-weight: 700;">new</span> <span class="hljs-title" style="color: rgb(68, 85, 136); font-weight: 700;">Chameleon</span><span class="hljs-params" style="color: rgb(0, 0, 255);">({ newColor: "pink" })</span>
<span class="hljs-title" style="color: rgb(68, 85, 136); font-weight: 700;">freddie</span>.<span class="hljs-title" style="color: rgb(68, 85, 136); font-weight: 700;">colorChange</span><span class="hljs-params" style="color: rgb(0, 0, 255);">("orange")</span></span></pre>
    `,
    possiblAnswer: ['orange', 'pink', 'green', 'ошибка'],
    correctAnswer: 'ошибка',
  },
  {
    id: '8',
    question: 'Каким будет вывод?',
    codeExample: `
    <pre class="hljs" style="display: block; overflow-x: auto; padding: 0.5em; color: rgb(0, 0, 0); background: rgb(248, 248, 255);"><span class="hljs-comment" style="color: rgb(64, 128, 128); font-style: italic;">// обратите внимание: код выполняется в нестрогом режиме</span>
<span class="hljs-built_in" style="color: rgb(0, 134, 179);">let</span> greeting
greetign = {} <span class="hljs-comment" style="color: rgb(64, 128, 128); font-style: italic;">// опечатка!</span>
console.<span class="hljs-built_in" style="color: rgb(0, 134, 179);">log</span>(greetign)</pre>
    `,
    possiblAnswer: ['{}', 'ошибка', 'undefined', '" "'],
    correctAnswer: '{}',
  },
  {
    id: '9',
    question: 'Каким будет вывод?',
    codeExample: `
    <pre class="hljs" style="display: block; overflow-x: auto; padding: 0.5em; color: rgb(0, 0, 0); background: rgb(248, 248, 255);"><span class="hljs-function"><span class="hljs-keyword" style="color: rgb(149, 65, 33);">function</span> <span class="hljs-title" style="color: rgb(68, 85, 136); font-weight: 700;">bark</span><span class="hljs-params" style="color: rgb(0, 0, 255);">()</span> {</span>
  console.<span class="hljs-built_in" style="color: rgb(0, 134, 179);">log</span>(<span class="hljs-string" style="color: rgb(33, 145, 97);">"Woof!"</span>)
}

bark.animal = <span class="hljs-string" style="color: rgb(33, 145, 97);">"dog"</span>

console.<span class="hljs-built_in" style="color: rgb(0, 134, 179);">log</span>(bark.animal)</pre>
    `,
    possiblAnswer: ['dog', 'ошибка', 'undefined', '" "'],
    correctAnswer: 'dog',
  },
  {
    id: '10',
    question: 'Каким будет вывод?',
    codeExample: `
<pre class="hljs" style="display: block; overflow-x: auto; padding: 0.5em; color: rgb(0, 0, 0); background: rgb(248, 248, 255);"><span class="hljs-function"><span class="hljs-keyword" style="color: rgb(149, 65, 33);">function</span> <span class="hljs-title" style="color: rgb(68, 85, 136); font-weight: 700;">Person</span>(<span class="hljs-params" style="color: rgb(0, 0, 255);">firstName, lastName</span>) </span>{
  <span class="hljs-keyword" style="color: rgb(149, 65, 33);">this</span>.firstName = firstName
  <span class="hljs-keyword" style="color: rgb(149, 65, 33);">this</span>.lastName = lastName
}

<span class="hljs-keyword" style="color: rgb(149, 65, 33);">const</span> person = <span class="hljs-keyword" style="color: rgb(149, 65, 33);">new</span> Person(<span class="hljs-string" style="color: rgb(33, 145, 97);">"John"</span>, <span class="hljs-string" style="color: rgb(33, 145, 97);">"Smith"</span>)
Person.getFullName = <span class="hljs-function"><span class="hljs-keyword" style="color: rgb(149, 65, 33);">function</span> (<span class="hljs-params" style="color: rgb(0, 0, 255);"></span>) </span>{
  <span class="hljs-keyword" style="color: rgb(149, 65, 33);">return</span> <span class="hljs-string" style="color: rgb(33, 145, 97);">&apos;<span class="hljs-subst" style="color: rgb(149, 65, 33);">&dollar;{this.firstName}</span> <span class="hljs-subst" style="color: rgb(149, 65, 33);">&dollar;{this.lastName}</span>&apos;</span>
}

<span class="hljs-built_in" style="color: rgb(0, 134, 179);">console</span>.log(person.getFullName())</pre>
    `,
    possiblAnswer: ['ошибка', '" "', 'John Smith', 'undefined undefined'],
    correctAnswer: 'ошибка',
  },
  {
    id: '11',
    question: 'Каким будет вывод?',
    codeExample: `
<pre class="hljs" style="display: block; overflow-x: auto; padding: 0.5em; color: rgb(0, 0, 0); background: rgb(248, 248, 255);"><span class="hljs-function"><span class="hljs-keyword" style="color: rgb(149, 65, 33);">function</span> <span class="hljs-title" style="color: rgb(68, 85, 136); font-weight: 700;">Person</span>(<span class="hljs-params" style="color: rgb(0, 0, 255);">firstName, lastName</span>) </span>{
  <span class="hljs-keyword" style="color: rgb(149, 65, 33);">this</span>.firstName = firstName
  <span class="hljs-keyword" style="color: rgb(149, 65, 33);">this</span>.lastName = lastName
}

<span class="hljs-keyword" style="color: rgb(149, 65, 33);">const</span> john = <span class="hljs-keyword" style="color: rgb(149, 65, 33);">new</span> Person(<span class="hljs-string" style="color: rgb(33, 145, 97);">"John"</span>, <span class="hljs-string" style="color: rgb(33, 145, 97);">"Smith"</span>)
<span class="hljs-keyword" style="color: rgb(149, 65, 33);">const</span> jane = Person(<span class="hljs-string" style="color: rgb(33, 145, 97);">"Jane"</span>, <span class="hljs-string" style="color: rgb(33, 145, 97);">"Air"</span>)

<span class="hljs-built_in" style="color: rgb(0, 134, 179);">console</span>.log(john)
<span class="hljs-built_in" style="color: rgb(0, 134, 179);">console</span>.log(jane)</pre>
    `,
    possiblAnswer: [
      'Person {firstName: "John", lastName: "Smith"} и undefined',
      'Person {firstName: "John", lastName: "Smith"} и Person {firstName: "Jane", lastName: "Air"}',
      'Person {firstName: "John", lastName: "Smith"} и {}',
      'Person {firstName: "Smith", lastName: "Smith"} и ошибка',
    ],
    correctAnswer: 'Person {firstName: "John", lastName: "Smith"} и undefined',
  },
  {
    id: '12',
    question: 'Каким будет вывод?',
    codeExample: `
    <pre class="hljs" style="display: block; overflow-x: auto; padding: 0.5em; color: rgb(0, 0, 0); background: rgb(248, 248, 255);"><span class="hljs-function"><span class="hljs-keyword" style="color: rgb(149, 65, 33);">function</span> <span class="hljs-title" style="color: rgb(68, 85, 136); font-weight: 700;">sum</span>(<span class="hljs-title" style="color: rgb(68, 85, 136); font-weight: 700;">a</span>, <span class="hljs-title" style="color: rgb(68, 85, 136); font-weight: 700;">b</span>) {</span>
  <span class="hljs-literal" style="color: rgb(149, 65, 33);">return</span> <span class="hljs-keyword" style="color: rgb(149, 65, 33);">a</span> + b
}

console.<span class="hljs-built_in" style="color: rgb(0, 134, 179);">log</span>(<span class="hljs-built_in" style="color: rgb(0, 134, 179);">sum</span>(<span class="hljs-number" style="color: rgb(64, 160, 112);">1</span>, <span class="hljs-string" style="color: rgb(33, 145, 97);">"2"</span>))</pre>
    `,
    possiblAnswer: ['NaN', 'ошибка', '"12"', '3'],
    correctAnswer: '"12"',
  },
  {
    id: '13',
    question: 'Каким будет вывод?',
    codeExample: `
    <pre class="hljs" style="display: block; overflow-x: auto; padding: 0.5em; color: rgb(0, 0, 0); background: rgb(248, 248, 255);"><span class="hljs-keyword" style="color: rgb(149, 65, 33);">let</span> <span class="hljs-built_in" style="color: rgb(0, 134, 179);">number</span> = <span class="hljs-number" style="color: rgb(64, 160, 112);">0</span>
<span class="hljs-built_in" style="color: rgb(0, 134, 179);">console</span>.log(<span class="hljs-built_in" style="color: rgb(0, 134, 179);">number</span>++)
<span class="hljs-built_in" style="color: rgb(0, 134, 179);">console</span>.log(++<span class="hljs-built_in" style="color: rgb(0, 134, 179);">number</span>)
<span class="hljs-built_in" style="color: rgb(0, 134, 179);">console</span>.log(<span class="hljs-built_in" style="color: rgb(0, 134, 179);">number</span>)</pre>
    `,
    possiblAnswer: ['1 1 2', '1 2 2', '0 2 2', '0 1 2'],
    correctAnswer: '0 2 2',
  },
  {
    id: '14',
    question: 'Каким будет вывод?',
    codeExample: `
    <pre class="hljs" style="display: block; overflow-x: auto; padding: 0.5em; color: rgb(0, 0, 0); background: rgb(248, 248, 255);">function getPersonInfo(<span class="hljs-keyword" style="color: rgb(149, 65, 33);">one</span>, <span class="hljs-keyword" style="color: rgb(149, 65, 33);">two</span>, three) {
  console.<span class="hljs-built_in" style="color: rgb(0, 134, 179);">log</span>(<span class="hljs-keyword" style="color: rgb(149, 65, 33);">one</span>)
  console.<span class="hljs-built_in" style="color: rgb(0, 134, 179);">log</span>(<span class="hljs-keyword" style="color: rgb(149, 65, 33);">two</span>)
  console.<span class="hljs-built_in" style="color: rgb(0, 134, 179);">log</span>(three)
}

<span class="hljs-keyword" style="color: rgb(149, 65, 33);">const</span> person = <span class="hljs-string" style="color: rgb(33, 145, 97);">"John"</span>
<span class="hljs-keyword" style="color: rgb(149, 65, 33);">const</span> age = 30

getPersonInfo&apos;<span class="hljs-variable" style="color: teal;">&dollar;{person}</span> is <span class="hljs-variable" style="color: teal;">&dollar;{age}</span> years old&apos;</pre>
    `,
    possiblAnswer: [
      'John 30 ["", " is ", " years old"]',
      '["", " is ", " years old"] John 30',
      'John ["", " is ", " years old"] 30',
      'undefined',
    ],
    correctAnswer: '["", " is ", " years old"] John 30',
  },
  {
    id: '15',
    question: 'Каким будет вывод?',
    codeExample: `
    <pre class="hljs" style="display: block; overflow-x: auto; padding: 0.5em; color: rgb(0, 0, 0); background: rgb(248, 248, 255);"><span class="hljs-function"><span class="hljs-keyword" style="color: rgb(149, 65, 33);">function</span> <span class="hljs-title" style="color: rgb(68, 85, 136); font-weight: 700;">checkAge</span><span class="hljs-params" style="color: rgb(0, 0, 255);">(data)</span> {</span>
  <span class="hljs-keyword" style="color: rgb(149, 65, 33);">if</span> (data === { age: <span class="hljs-number" style="color: rgb(64, 160, 112);">18</span> }) {
    console.<span class="hljs-built_in" style="color: rgb(0, 134, 179);">log</span>(<span class="hljs-string" style="color: rgb(33, 145, 97);">"Ты взрослый!"</span>)
  } <span class="hljs-keyword" style="color: rgb(149, 65, 33);">else</span> <span class="hljs-keyword" style="color: rgb(149, 65, 33);">if</span> (data == { age: <span class="hljs-number" style="color: rgb(64, 160, 112);">18</span> }) {
    console.<span class="hljs-built_in" style="color: rgb(0, 134, 179);">log</span>(<span class="hljs-string" style="color: rgb(33, 145, 97);">"Ты по-прежнему взрослый."</span>)
  } <span class="hljs-keyword" style="color: rgb(149, 65, 33);">else</span> {
    console.<span class="hljs-built_in" style="color: rgb(0, 134, 179);">log</span>(<span class="hljs-string" style="color: rgb(33, 145, 97);">"Хм... У тебя что, нет возраста?"</span>)
  }
}

checkAge({ age: <span class="hljs-number" style="color: rgb(64, 160, 112);">18</span> })</pre>
    `,
    possiblAnswer: [
      'Ты взрослый!',
      'Ты по-прежнему взрослый.',
      'Хм... У тебя что, нет возраста?',
      'undefined',
    ],
    correctAnswer: 'Хм... У тебя что, нет возраста?',
  },
  {
    id: '16',
    question: 'Каким будет вывод?',
    codeExample: `
    <pre class="hljs" style="display: block; overflow-x: auto; padding: 0.5em; color: rgb(0, 0, 0); background: rgb(248, 248, 255);"><span class="hljs-function"><span class="hljs-keyword" style="color: rgb(149, 65, 33);">function</span> <span class="hljs-title" style="color: rgb(68, 85, 136); font-weight: 700;">getAge</span><span class="hljs-params" style="color: rgb(0, 0, 255);">(<span class="hljs-rest_arg">...args</span>)</span> </span>{
  console.log(<span class="hljs-keyword" style="color: rgb(149, 65, 33);">typeof</span> args)
}

getAge(<span class="hljs-number" style="color: rgb(64, 160, 112);">30</span>)</pre>
    `,
    possiblAnswer: ['number', 'array', 'object', 'NaN'],
    correctAnswer: 'object',
  },
  {
    id: '17',
    question: 'Каким будет вывод?',
    codeExample: `
    <pre class="hljs" style="display: block; overflow-x: auto; padding: 0.5em; color: rgb(0, 0, 0); background: rgb(248, 248, 255);"><span class="hljs-function"><span class="hljs-keyword" style="color: rgb(149, 65, 33);">function</span> <span class="hljs-title" style="color: rgb(68, 85, 136); font-weight: 700;">getAge</span>(<span class="hljs-params" style="color: rgb(0, 0, 255);"></span>) </span>{
<span class="hljs-meta" style="font-weight: 700; color: rgb(153, 153, 153);">  "use strict"</span>
  age = <span class="hljs-number" style="color: rgb(64, 160, 112);">30</span>
  <span class="hljs-built_in" style="color: rgb(0, 134, 179);">console</span>.log(age)
}

getAge()</pre>
    `,
    possiblAnswer: ['30', 'undefined', 'ошибка', 'NaN'],
    correctAnswer: 'ошибка',
  },
  {
    id: '18',
    question: 'Каким будет вывод?',
    codeExample: `
    <pre class="hljs" style="display: block; overflow-x: auto; padding: 0.5em; color: rgb(0, 0, 0); background: rgb(248, 248, 255);"><span class="hljs-keyword" style="color: rgb(149, 65, 33);">const</span> <span class="hljs-keyword" style="color: rgb(149, 65, 33);">sum</span> = eval(<span class="hljs-string" style="color: rgb(33, 145, 97);">"10*10+5"</span>)

console.<span class="hljs-built_in" style="color: rgb(0, 134, 179);">log</span>(<span class="hljs-keyword" style="color: rgb(149, 65, 33);">sum</span>)</pre>
    `,
    possiblAnswer: ['105', '"105"', 'ошибка', '"10*10+5"'],
    correctAnswer: '105',
  },
  {
    id: '19',
    question: 'Каким будет вывод?',
    codeExample: `
    <pre class="hljs" style="display: block; overflow-x: auto; padding: 0.5em; color: rgb(0, 0, 0); background: rgb(248, 248, 255);"><span class="hljs-built_in" style="color: rgb(0, 134, 179);">var</span> <span class="hljs-built_in" style="color: rgb(0, 134, 179);">num</span> = <span class="hljs-number" style="color: rgb(64, 160, 112);">8</span>
<span class="hljs-built_in" style="color: rgb(0, 134, 179);">var</span> <span class="hljs-built_in" style="color: rgb(0, 134, 179);">num</span> = <span class="hljs-number" style="color: rgb(64, 160, 112);">10</span>

console.<span class="hljs-built_in" style="color: rgb(0, 134, 179);">log</span>(<span class="hljs-built_in" style="color: rgb(0, 134, 179);">num</span>)</pre>
    `,
    possiblAnswer: ['8', '10', 'undefined', 'ошибка'],
    correctAnswer: '10',
  },
  {
    id: '20',
    question: 'Каким будет вывод?',
    codeExample: `
    <pre class="hljs" style="display: block; overflow-x: auto; padding: 0.5em; color: rgb(0, 0, 0); background: rgb(248, 248, 255);"><span class="hljs-keyword" style="color: rgb(149, 65, 33);">const</span> obj = { <span class="hljs-number" style="color: rgb(64, 160, 112);">1</span>: <span class="hljs-string" style="color: rgb(33, 145, 97);">"a"</span>, <span class="hljs-number" style="color: rgb(64, 160, 112);">2</span>: <span class="hljs-string" style="color: rgb(33, 145, 97);">"b"</span>, <span class="hljs-number" style="color: rgb(64, 160, 112);">3</span>: <span class="hljs-string" style="color: rgb(33, 145, 97);">"c"</span> }
<span class="hljs-keyword" style="color: rgb(149, 65, 33);">const</span> <span class="hljs-keyword" style="color: rgb(149, 65, 33);">set</span> = <span class="hljs-keyword" style="color: rgb(149, 65, 33);">new</span> <span class="hljs-keyword" style="color: rgb(149, 65, 33);">Set</span>([<span class="hljs-number" style="color: rgb(64, 160, 112);">1</span>, <span class="hljs-number" style="color: rgb(64, 160, 112);">2</span>, <span class="hljs-number" style="color: rgb(64, 160, 112);">3</span>, <span class="hljs-number" style="color: rgb(64, 160, 112);">4</span>, <span class="hljs-number" style="color: rgb(64, 160, 112);">5</span>])

console.<span class="hljs-built_in" style="color: rgb(0, 134, 179);">log</span>(obj.hasOwnProperty(<span class="hljs-string" style="color: rgb(33, 145, 97);">"1"</span>))
console.<span class="hljs-built_in" style="color: rgb(0, 134, 179);">log</span>(obj.hasOwnProperty(<span class="hljs-number" style="color: rgb(64, 160, 112);">1</span>))
console.<span class="hljs-built_in" style="color: rgb(0, 134, 179);">log</span>(<span class="hljs-keyword" style="color: rgb(149, 65, 33);">set</span>.has(<span class="hljs-string" style="color: rgb(33, 145, 97);">"1"</span>))
console.<span class="hljs-built_in" style="color: rgb(0, 134, 179);">log</span>(<span class="hljs-keyword" style="color: rgb(149, 65, 33);">set</span>.has(<span class="hljs-number" style="color: rgb(64, 160, 112);">1</span>))</pre>
    `,
    possiblAnswer: [
      'false true false true',
      'false true true true',
      'true true false true',
      'true true true true',
    ],
    correctAnswer: 'true true false true',
  },
  {
    id: '21',
    question: 'Каким будет вывод?',
    codeExample: `
    <pre class="hljs" style="display: block; overflow-x: auto; padding: 0.5em; color: rgb(0, 0, 0); background: rgb(248, 248, 255);">const obj = { <span class="hljs-selector-tag" style="color: rgb(149, 65, 33);">a</span>: <span class="hljs-string" style="color: rgb(33, 145, 97);">"one"</span>, <span class="hljs-selector-tag" style="color: rgb(149, 65, 33);">b</span>: <span class="hljs-string" style="color: rgb(33, 145, 97);">"two"</span>, <span class="hljs-selector-tag" style="color: rgb(149, 65, 33);">a</span>: <span class="hljs-string" style="color: rgb(33, 145, 97);">"three"</span> }
console.log(obj)</pre>
    `,
    possiblAnswer: [
      '{ a: "one", b: "two" }',
      '{ b: "two", a: "three" }',
      '{ a: "three", b: "two" }',
      'ошибка',
    ],
    correctAnswer: '{ a: "three", b: "two" }',
  },
  {
    id: '22',
    question: 'Каким будет вывод?',
    codeExample: `
    <pre class="hljs" style="display: block; overflow-x: auto; padding: 0.5em; color: rgb(0, 0, 0); background: rgb(248, 248, 255);"><span class="hljs-keyword" style="color: rgb(149, 65, 33);">for</span> (<span class="hljs-keyword" style="color: rgb(149, 65, 33);">let</span> i = <span class="hljs-number" style="color: rgb(64, 160, 112);">1</span>; i &lt; <span class="hljs-number" style="color: rgb(64, 160, 112);">5</span>; i++) {
  <span class="hljs-keyword" style="color: rgb(149, 65, 33);">if</span> (i === <span class="hljs-number" style="color: rgb(64, 160, 112);">3</span>) <span class="hljs-keyword" style="color: rgb(149, 65, 33);">continue</span>
  console.<span class="hljs-built_in" style="color: rgb(0, 134, 179);">log</span>(i)
}</pre>
    `,
    possiblAnswer: ['1 2', '1 2 3', '1 2 4', '1 3 4'],
    correctAnswer: '1 2 4',
  },
  {
    id: '23',
    question: 'Каким будет вывод?',
    codeExample: `
    <pre class="hljs" style="display: block; overflow-x: auto; padding: 0.5em; color: rgb(0, 0, 0); background: rgb(248, 248, 255);">String.prototype.giveMePizza = <span class="hljs-function"><span class="hljs-params" style="color: rgb(0, 0, 255);">()</span> =&gt;</span> {
  <span class="hljs-keyword" style="color: rgb(149, 65, 33);">return</span> <span class="hljs-string" style="color: rgb(33, 145, 97);">"Give me pizza!"</span>
}

const name = <span class="hljs-string" style="color: rgb(33, 145, 97);">"John"</span>

<span class="hljs-built_in" style="color: rgb(0, 134, 179);">console</span>.log(name.giveMePizza())</pre>
    `,
    possiblAnswer: ['Give me pizza!', 'ошибка', '" "', 'undefined'],
    correctAnswer: 'Give me pizza!',
  },
  {
    id: '24',
    question: 'Каким будет вывод?',
    codeExample: `
    <pre class="hljs" style="display: block; overflow-x: auto; padding: 0.5em; color: rgb(0, 0, 0); background: rgb(248, 248, 255);">const <span class="hljs-selector-tag" style="color: rgb(149, 65, 33);">a</span> = {}
const <span class="hljs-selector-tag" style="color: rgb(149, 65, 33);">b</span> = { key: <span class="hljs-string" style="color: rgb(33, 145, 97);">"b"</span> }
const c = { key: <span class="hljs-string" style="color: rgb(33, 145, 97);">"c"</span> }

<span class="hljs-selector-tag" style="color: rgb(149, 65, 33);">a</span>[b] = <span class="hljs-number" style="color: rgb(64, 160, 112);">123</span>
<span class="hljs-selector-tag" style="color: rgb(149, 65, 33);">a</span>[c] = <span class="hljs-number" style="color: rgb(64, 160, 112);">456</span>

console.log(<span class="hljs-selector-tag" style="color: rgb(149, 65, 33);">a</span>[b])</pre>
    `,
    possiblAnswer: ['123', '456', 'undefined', 'ошибка'],
    correctAnswer: '456',
  },
  {
    id: '25',
    question: 'Каким будет вывод?',
    codeExample: `
    <pre class="hljs" style="display: block; overflow-x: auto; padding: 0.5em; color: rgb(0, 0, 0); background: rgb(248, 248, 255);">const foo = <span class="hljs-function"><span class="hljs-params" style="color: rgb(0, 0, 255);">()</span> =&gt;</span> <span class="hljs-built_in" style="color: rgb(0, 134, 179);">console</span>.log(<span class="hljs-string" style="color: rgb(33, 145, 97);">"first"</span>)
const bar = <span class="hljs-function"><span class="hljs-params" style="color: rgb(0, 0, 255);">()</span> =&gt;</span> setTimeout(<span class="hljs-function"><span class="hljs-params" style="color: rgb(0, 0, 255);">()</span> =&gt;</span> <span class="hljs-built_in" style="color: rgb(0, 134, 179);">console</span>.log(<span class="hljs-string" style="color: rgb(33, 145, 97);">"second"</span>))
const baz = <span class="hljs-function"><span class="hljs-params" style="color: rgb(0, 0, 255);">()</span> =&gt;</span> <span class="hljs-built_in" style="color: rgb(0, 134, 179);">console</span>.log(<span class="hljs-string" style="color: rgb(33, 145, 97);">"third"</span>)

bar()
foo()
baz()</pre>
    `,
    possiblAnswer: [
      'first second third',
      'first third second',
      'second first third',
      'second third first',
    ],
    correctAnswer: 'first third second',
  },
  {
    id: '26',
    question: 'Каким будет вывод?',
    codeExample: `
    <pre class="hljs" style="display: block; overflow-x: auto; padding: 0.5em; color: rgb(0, 0, 0); background: rgb(248, 248, 255);"><span class="xml"><span class="hljs-tag" style="color: navy; font-weight: 400;">&lt;<span class="hljs-name" style="color: navy; font-weight: 400;">div</span> <span class="hljs-attr">onclick</span>=<span class="hljs-string" style="color: rgb(33, 145, 97);">"console.log('div')"</span>&gt;</span>
  <span class="hljs-tag" style="color: navy; font-weight: 400;">&lt;<span class="hljs-name" style="color: navy; font-weight: 400;">p</span> <span class="hljs-attr">onclick</span>=<span class="hljs-string" style="color: rgb(33, 145, 97);">"console.log('p')"</span>&gt;</span>
    Нажми меня!
  <span class="hljs-tag" style="color: navy; font-weight: 400;">&lt;/<span class="hljs-name" style="color: navy; font-weight: 400;">p</span>&gt;</span>
<span class="hljs-tag" style="color: navy; font-weight: 400;">&lt;/<span class="hljs-name" style="color: navy; font-weight: 400;">div</span>&gt;</span></span></pre>
    `,
    possiblAnswer: ['p div', 'div p', 'p', 'div'],
    correctAnswer: 'p div',
  },
  {
    id: '27',
    question: 'Каким будет вывод?',
    codeExample: `
    <pre class="hljs" style="display: block; overflow-x: auto; padding: 0.5em; color: rgb(0, 0, 0); background: rgb(248, 248, 255);"><span class="hljs-keyword" style="color: rgb(149, 65, 33);">const</span> person = { name: <span class="hljs-string" style="color: rgb(33, 145, 97);">"John"</span> }

<span class="hljs-function"><span class="hljs-keyword" style="color: rgb(149, 65, 33);">function</span> <span class="hljs-title" style="color: rgb(68, 85, 136); font-weight: 700;">sayHi</span>(<span class="hljs-params" style="color: rgb(0, 0, 255);">age</span>) </span>{
  <span class="hljs-built_in" style="color: rgb(0, 134, 179);">console</span>.log(<span class="hljs-string" style="color: rgb(33, 145, 97);">&apos;<span class="hljs-subst" style="color: rgb(149, 65, 33);">&dollar;{this.name}</span> is <span class="hljs-subst" style="color: rgb(149, 65, 33);">&dollar;{age}</span>&apos;</span>)
}

sayHi.call(person, <span class="hljs-number" style="color: rgb(64, 160, 112);">30</span>)
sayHi.bind(person, <span class="hljs-number" style="color: rgb(64, 160, 112);">30</span>)</pre>
    `,
    possiblAnswer: [
      'undefined is 30 и John is 30',
      'function и function',
      'John is 30 и John is 30',
      'John is 30 и function',
    ],
    correctAnswer: 'John is 30 и function',
  },
  {
    id: '28',
    question: 'Каким будет вывод?',
    codeExample: `
    <pre class="hljs" style="display: block; overflow-x: auto; padding: 0.5em; color: rgb(0, 0, 0); background: rgb(248, 248, 255);">function sayHi() {
  <span class="hljs-keyword" style="color: rgb(149, 65, 33);">return</span> (<span class="hljs-function"><span class="hljs-params" style="color: rgb(0, 0, 255);">()</span> =&gt;</span> <span class="hljs-number" style="color: rgb(64, 160, 112);">0</span>)()
}

<span class="hljs-built_in" style="color: rgb(0, 134, 179);">console</span>.log(<span class="hljs-keyword" style="color: rgb(149, 65, 33);">typeof</span> sayHi())</pre>
    `,
    possiblAnswer: ['object', 'number', 'function', 'undefined'],
    correctAnswer: 'number',
  },
  {
    id: '29',
    question: 'Каким будет вывод?',
    codeExample: `
    <pre class="hljs" style="display: block; overflow-x: auto; padding: 0.5em; color: rgb(0, 0, 0); background: rgb(248, 248, 255);">console.<span class="hljs-built_in" style="color: rgb(0, 134, 179);">log</span>(<span class="hljs-built_in" style="color: rgb(0, 134, 179);">typeof</span> <span class="hljs-built_in" style="color: rgb(0, 134, 179);">typeof</span> <span class="hljs-number" style="color: rgb(64, 160, 112);">1</span>)</pre>
    `,
    possiblAnswer: ['number', 'string', 'object', 'undefined'],
    correctAnswer: 'string',
  },
  {
    id: '30',
    question: 'Каким будет вывод?',
    codeExample: `
    <pre class="hljs" style="display: block; overflow-x: auto; padding: 0.5em; color: rgb(0, 0, 0); background: rgb(248, 248, 255);"><span class="hljs-keyword" style="color: rgb(149, 65, 33);">const</span> numbers = [<span class="hljs-number" style="color: rgb(64, 160, 112);">1</span>, <span class="hljs-number" style="color: rgb(64, 160, 112);">2</span>, <span class="hljs-number" style="color: rgb(64, 160, 112);">3</span>]
numbers[<span class="hljs-number" style="color: rgb(64, 160, 112);">10</span>] = <span class="hljs-number" style="color: rgb(64, 160, 112);">11</span>
console.<span class="hljs-built_in" style="color: rgb(0, 134, 179);">log</span>(numbers)</pre>
    `,
    possiblAnswer: [
      '[1, 2, 3, 7 x null, 11]',
      '[1, 2, 3, 11]',
      '[1, 2, 3, 7 x empty, 11]',
      'ошибка',
    ],
    correctAnswer: '[1, 2, 3, 7 x empty, 11]',
  },
  {
    id: '31',
    question: 'Каким будет вывод?',
    codeExample: `
    <pre class="hljs" style="display: block; overflow-x: auto; padding: 0.5em; color: rgb(0, 0, 0); background: rgb(248, 248, 255);">(() =&gt; {
  let x, y
  try {
    throw new Error()
  } catch (<span class="hljs-name" style="color: navy; font-weight: 400;">x</span>) {
    (<span class="hljs-name" style="color: navy; font-weight: 400;">x</span> = <span class="hljs-number" style="color: rgb(64, 160, 112);">1</span>), (<span class="hljs-name" style="color: navy; font-weight: 400;">y</span> = <span class="hljs-number" style="color: rgb(64, 160, 112);">2</span>)
    console.log(<span class="hljs-name" style="color: navy; font-weight: 400;">x</span>)
  }
  console.log(<span class="hljs-name" style="color: navy; font-weight: 400;">x</span>)
  console.log(<span class="hljs-name" style="color: navy; font-weight: 400;">y</span>)
})()</pre>
    `,
    possiblAnswer: [
      '1 undefined 2',
      'undefined undefined undefined',
      '1 1 2',
      '1 undefined undefined',
    ],
    correctAnswer: '1 undefined 2',
  },
  {
    id: '32',
    question: 'Каким будет вывод?',
    codeExample: `
    <pre class="hljs" style="display: block; overflow-x: auto; padding: 0.5em; color: rgb(0, 0, 0); background: rgb(248, 248, 255);">const result =
  <span class="hljs-string" style="color: rgb(33, 145, 97);">[[0, 1], [2, 3]]</span>.reduce(
    (acc, cur) =&gt; {
      <span class="hljs-keyword" style="color: rgb(149, 65, 33);">return</span> acc.concat(cur)
    },
    [<span class="hljs-number" style="color: rgb(64, 160, 112);">1</span>, <span class="hljs-number" style="color: rgb(64, 160, 112);">2</span>]
  )
  
console.log(result)</pre>
    `,
    possiblAnswer: [
      '[0, 1, 2, 3, 1, 2]',
      '[6, 1, 2]',
      '[1, 2, 0, 1, 2, 3]',
      '[1, 2, 6]',
    ],
    correctAnswer: '[1, 2, 0, 1, 2, 3]',
  },
  // {
  //   id: '33',
  //   question: 'Каким будет вывод?',
  //   codeExample: `

  //   `,
  //   possiblAnswer: ['', '', '', ''],
  //   correctAnswer: '',
  // },
];
