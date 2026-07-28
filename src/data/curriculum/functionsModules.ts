import type { Course } from "../types";
import { code, quiz, read, workshop } from "../lessonBuilders";

export const functionsModules: Course = {
  id: "functions-modules",
  number: 3,
  title: "Functions and Modules",
  theme: "Functions",
  description: "Functions, arguments, return values, imports, standard libraries, comments, and docstrings.",
  accent: "#111111",
  lessons: [
    {
      ...read("function-concepts", "Functions", "A function is a block of code assigned to a name.", ["functions"], [
        "A function runs on specified arguments and may or may not return a value.",
        "When we create a function, we \"define\" it. When we run it, we \"call\" it.",
        "Functions help avoid repeating the same code and make programs easier to read."
      ]),
      images: [
        { src: "/images/session2/slide31-01.png", alt: "Diagram showing a function taking inputs and producing an output", caption: "A function takes arguments and optionally returns a value." },
        { src: "/images/session2/slide32-01.png", alt: "Example of a built-in function being called with an argument", caption: "Calling a function runs its body with the arguments you provide." },
      ],
    },
    {
      ...read("basic-function-example", "Define and Call a Function", "Use the `def` keyword, arguments, and a function body.", ["def", "arguments"], [
        "Functions are defined using `def` followed by the function name.",
        "Brackets then provide arguments. The body must be [indented](https://en.wikipedia.org/wiki/Indentation_(typesetting)) — the function ends when you stop indenting.",
        "Indentation should consist of four spaces (In rare cases, it might be a \"tab\" or a different number of spaces. You can't mix and match these though!).",
        "The function can be named anything, much like a variable.",
      ], 10),
      images: [
        { src: "/images/session2/slide33-01.png", alt: "Code showing a def statement with function name, brackets, colon, and indented body", caption: "`def` keyword, then the name, then arguments in brackets, then an indented body." },
      ],
    },
    code("basic-function", "Practice: Define and Call a Function", "Use `def`, arguments, and a function body.", ["def", "arguments"], [
      "Now solve a similar task yourself. The practice checks the output."
    ], "Create a function that takes a name and prints `Hello ` to that person. in the example below the function should print 'Hello Ada' .", "def hello(name):\n    # Print a greeting.\n    pass\n\nhello('Ada')\n", ["Hello Ada"], ["def", "print"], [], 20),
    code("cb-make-abba", "Practice: `make_abba`", "Concatenate (\"Chain together\") strings inside a function.", ["functions", "strings", "concatenation"], [
      "Write `make_abba(front, back)` that takes two strings and returns `front + back + back + front`.",
      "String concatenation with `+` works inside a function just as it does anywhere else.",
      "Original CodingBat problem: [CodingBat](https://codingbat.com/prob/p182144)."
    ], "Define `make_abba(front, back)` so it returns the four-part string.", "def make_abba(front, back):\n    # Return front + back + back + front.\n    pass\n\nprint([make_abba('Hi', 'Bye'), make_abba('x', 'y'), make_abba('ab', 'c')])\n", ["['HiByeByeHi', 'xyyx', 'abccab']"], ["def make_abba", "return", "print"], [], 20),
    {
      ...read("arguments-defaults-example", "Arguments and Defaults", "Functions can have multiple arguments and optional defaults.", ["arguments", "defaults"], [
        "Functions can have multiple arguments separated by commas.",
        "Arguments without default values must be specified every time you call the function.",
        "Arguments with default values are optional — if the caller omits them, the default is used. Default arguments must follow non-default ones."
      ], 10),
      images: [
        { src: "/images/session2/slide35-01.png", alt: "Function with two arguments shown being called", caption: "Functions can take more than one argument." },
        { src: "/images/session2/slide36-01.png", alt: "Function definition with a default argument value", caption: "A default value makes an argument optional." },
        { src: "/images/session2/slide37-01.png", alt: "Calling a function using the default argument", caption: "If you omit an optional argument, Python uses the default." },
      ],
    },
    code("arguments-defaults", "Practice: Arguments and Defaults", "Functions can have multiple arguments and optional defaults.", ["arguments", "defaults"], [
      "Now solve a similar task yourself. The practice checks the output."
    ], "Write `repeat_text` so it returns `text` repeated `repeats` times, with `repeats` defaulting to `2`. Use the provided function call to print the returned value.", "def repeat_text(text, repeats=2):\n    pass\n\nprint(repeat_text('ha'))\n", ["haha"], ["def", "return"], [], 25),
    code("cb-string-times", "Practice: `string_times`", "Use arguments and the `*` operator on a string.", ["functions", "arguments", "strings"], [
      "Write `string_times(s, n)` that returns the string `s` repeated `n` times.",
      "The `*` operator works on strings as well as numbers: `'Hi' * 3` gives `'HiHiHi'`.",
      "Original CodingBat problem: [CodingBat](https://codingbat.com/prob/p193507)."
    ], "Define `string_times(s, n)` so it returns `s` repeated `n` times.", "def string_times(s, n):\n    # Return s repeated n times.\n    pass\n\nprint([string_times('Hi', 2), string_times('Hi', 3), string_times('Code', 1)])\n", ["['HiHi', 'HiHiHi', 'Code']"], ["def string_times", "return", "print"], [], 20),
    {
      ...read("return-values-example", "Return Values", "Use `return` when a function should give a value back.", ["return"], [
        "Printing displays a value to the screen. Returning gives a value back to the caller so it can be used in further calculations.",
        "Functions can return one value or multiple values. Multiple return values are packed as a tuple.",
        "If a function has no `return` statement it returns `None`."
      ], 10),
      images: [
        { src: "/images/session2/slide39-01.png", alt: "Function with a return statement giving a value back to the caller", caption: "`return` sends a value back to wherever the function was called." },
        { src: "/images/session2/slide40-01.png", alt: "Function returning two values at once", caption: "You can return multiple values — they come back as a tuple." },
      ],
    },
    code("return-values", "Practice: Return Values", "Use `return` when a function should give a value back.", ["return"], [
      "Now solve a similar task yourself. The practice checks the output."
    ], "Return the sum and product of `3` and `4`, then print both.", "def sum_and_product(a, b):\n    pass\n\ns, p = sum_and_product(3, 4)\nprint(s)\nprint(p)\n", ["7", "12"], ["return", "print"], [], 25),
    code("cb-make-pi", "Practice: `make_pi`", "Return a fixed list literal from a function.", ["functions", "lists", "return"], [
      "Write `make_pi()` that returns the list `[3, 1, 4]`.",
      "A function does not need to take arguments — it can just return a value.",
      "Original CodingBat problem: [CodingBat](https://codingbat.com/prob/p113659)."
    ], "Define `make_pi()` so it returns the list `[3, 1, 4]`.", "def make_pi():\n    # Return the list [3, 1, 4].\n    pass\n\nprint(make_pi())\n", ["[3, 1, 4]"], ["def make_pi", "return", "print"], [], 15),
    code("cb-monkey-trouble", "Practice: `monkey_trouble`", "Compare two booleans for equality.", ["functions", "booleans", "=="], [
      "Two monkeys are in trouble when their smile states are the same — both smiling or neither smiling.",
      "When two booleans are equal, the expression `a == b` returns `True` without needing extra keywords.",
      "Original CodingBat problem: [CodingBat](https://codingbat.com/prob/p120546)."
    ], "Define `monkey_trouble(a_smile, b_smile)` so it returns `True` when both monkeys smile or neither smiles.", "def monkey_trouble(a_smile, b_smile):\n    # Return True when the two smile values are equal.\n    pass\n\nprint([monkey_trouble(True, True), monkey_trouble(False, False), monkey_trouble(True, False)])\n", ["[True, True, False]"], ["def monkey_trouble", "return", "print"], [], 20),
    code("scope-practice", "Function Scope", "Values created inside a function are local to that function.", ["scope", "functions"], [
      "A function can read arguments passed into it.",
      "Variables created inside a function normally stay inside it.",
      "Return values when later code needs to use the result."
    ], "Write `add_bonus(score)` so the returned value can be printed as `85`.", "def add_bonus(score):\n    bonus = 5\n    # Return the adjusted score.\n\nfinal_score = add_bonus(80)\nprint(final_score)\n", ["85"], ["return", "print"], [], 25),
    {
      ...quiz("calling-functions", "Function arguments", "Arguments can be positional or keyword arguments.", ["positional", "keyword"], [
        "Positional arguments use order — the first value goes to the first parameter.",
        "Keyword arguments use the parameter name: `func(b=2)` passes `2` to the `b` parameter regardless of order.",
        "When mixing them, positional arguments must come first."
      ], "Which call mixes arguments correctly?", ["my_func(1, b=2)", "my_func(a=1, 2)", "my_func(b=2, 1)", "my_func(, 1)"], "my_func(1, b=2)", "The positional argument comes before the keyword argument."),
      images: [
        { src: "/images/session2/slide42-01.png", alt: "Calling a function with positional arguments in order", caption: "Positional arguments are matched by their position in the call." },
        { src: "/images/session2/slide43-01.png", alt: "Calling a function with keyword arguments using names", caption: "Keyword arguments use the parameter name so order doesn't matter." },
        { src: "/images/session2/slide44-01.png", alt: "Calling a function mixing positional and keyword arguments", caption: "You can mix both — positional first, keyword after." },
      ],
    },
    code("compare-len-exercise", "Practice: Function Arguments", "Write a function combining positional and keyword arguments.", ["arguments", "defaults", "len"], [
      "A function can have one positional argument and one keyword argument with a default.",
      "Keyword arguments can be passed in any order.",
      "Returning the result lets the caller use it rather than being forced to print it."
    ], "Write `compare_len(a, b='default')` that returns the longer of the two strings. Print `lion` for `compare_len('dog', b='lion')`.", "def compare_len(a, b='default'):\n    # Return the longer string using len().\n    pass\n\nprint(compare_len('dog', b='lion'))\n", ["lion"], ["def", "len", "return", "print"], [], 25),
    code("cb-missing-char", "Practice: `missing_char`", "Use slicing inside a function to remove one character.", ["functions", "slicing", "strings"], [
      "`missing_char(s, n)` returns the string `s` with the character at index `n` removed.",
      "Use slicing to take everything before index `n` and everything after it.",
      "Original CodingBat problem: [CodingBat](https://codingbat.com/prob/p149524)."
    ], "Define `missing_char(s, n)` so it returns `s` without the character at index `n`.", "def missing_char(s, n):\n    # Return s with the character at index n removed.\n    pass\n\nprint([missing_char('kitten', 1), missing_char('kitten', 0), missing_char('kitten', 4)])\n", ["['ktten', 'itten', 'kittn']"], ["def missing_char", "return", "print"], [], 20),
    code("cb-first-two", "Practice: `first_two`", "Combine slicing with a function.", ["functions", "slicing", "strings"], [
      "Write `first_two(s)` that returns the first two characters of `s`.",
      "If `s` is shorter than two characters, return the whole string.",
      "Original CodingBat problem: [CodingBat](https://codingbat.com/prob/p184816)."
    ], "Define `first_two(s)` so it returns the first two characters of `s`.", "def first_two(s):\n    # Return the first 2 characters, or the whole string if shorter.\n    pass\n\nprint([first_two('Hello'), first_two('ab'), first_two('a')])\n", ["['He', 'ab', 'a']"], ["def first_two", "return", "print"], [], 20),
    code("cb-extra-end", "Practice: `extra_end`", "Repeat the last two characters of a string.", ["functions", "slicing", "strings"], [
      "Write `extra_end(s)` that returns the last two characters of `s`, repeated three times.",
      "`s[-2:]` gives the last two characters; use `*` to repeat a string.",
      "Original CodingBat problem: [CodingBat](https://codingbat.com/prob/p148853)."
    ], "Define `extra_end(s)` so it returns the last two characters repeated three times.", "def extra_end(s):\n    # Return the last 2 characters repeated 3 times.\n    pass\n\nprint([extra_end('Hello'), extra_end('ab'), extra_end('Hi')])\n", ["['lololo', 'ababab', 'HiHiHi']"], ["def extra_end", "return", "print"], [], 20),
    code("cb-without-end", "Practice: `without_end`", "Wrap slicing in a function.", ["functions", "slicing", "strings"], [
      "Write `without_end(s)` that returns `s` without its first and last character.",
      "Slicing with `[1:-1]` is a clean way to do this.",
      "Original CodingBat problem: [CodingBat](https://codingbat.com/prob/p138533)."
    ], "Define `without_end(s)` so it returns `s` without its first and last character.", "def without_end(s):\n    # Return s without the first and last character.\n    pass\n\nprint([without_end('Hello'), without_end('ab'), without_end('Hi')])\n", ["['ell', '', '']"], ["def without_end", "return", "print"], [], 20),
    {
      ...read("imports-libraries", "Imports and Libraries", "You can import functions from files and libraries.", ["import", "from"], [
        "If you put functions in a Python file, you can import them from another file using `import filename`.",
        "The file can be named anything and can have as many functions as you want.",
        "If you do not want to import an entire library, use `from library import function` to bring in just what you need.",
        "A Python library is a collection of prewritten code, often including functions you can use directly."
      ]),
      images: [
        { src: "/images/session2/slide46-01.png", alt: "import statement syntax and a from-import statement side by side", caption: "`import` brings in a whole library; `from ... import` brings in one function." },
        { src: "/images/session2/slide47-01.png", alt: "Using the from keyword to import a specific function", caption: "`from library import function` lets you call the function without the library prefix." },
      ],
    },
    {
      ...read("standard-libraries-example", "Standard Libraries", "Use `statistics`, `math`, and `random`.", ["statistics", "math", "random"], [
        "Python comes with many built-in libraries that you can import without installing anything.",
        "The `statistics` library can calculate mean, median, and mode.",
        "The `math` library contains functions such as `sqrt`."
      ], 10),
      images: [
        { src: "/images/session3/slide08-01.png", alt: "statistics library used to calculate the mean of a list", caption: "`statistics.mean()` is built in — no install needed." },
      ],
    },
    code("standard-libraries", "Practice: Standard Libraries", "Use `statistics`, `math`, and `random`.", ["statistics", "math", "random"], [
      "Now solve a similar task yourself. The practice checks the output."
    ], "Print the mean of the provided list and the square root of `9409`.", "import statistics\nimport math\nvalues = [1, 2, 2, 3, 4]\n\n# Use the imported libraries to calculate both results.\n", ["2.4", "97.0"], ["statistics", "math", "print"], [], 25),
    {
      ...read("comments-docstrings-example", "Comments and Docstrings", "Use comments and docstrings to explain code.", ["comments", "docstrings"], [
        "Comments begin with `#` and do not affect the code. They explain *why* something is done.",
        "Docstrings use triple quotation marks at the beginning of a function and describe what it does, its parameters, and its return value.",
        "A good docstring names the function's purpose, describes its parameters, and states what it returns."
      ], 10),
      images: [
        { src: "/images/session3/slide04-01.png", alt: "Code with a # comment on a line, showing the comment is greyed out", caption: "Comments start with `#` — Python ignores them when running the code." },
        { src: "/images/session3/slide06-01.png", alt: "Function with a docstring using triple quotes at the top", caption: "Docstrings sit inside the function and describe what it does." },
      ],
    },
    code("comments-docstrings", "Practice: Comments and Docstrings", "Use comments and docstrings to explain code.", ["comments", "docstrings"], [
      "Now solve a similar task yourself. The practice checks the output."
    ], "Write a function `double` with a numpydoc-style docstring listing the parameter and the return value. The function should return (not just print) `14` for input `7`. Print the result after calling it.", "def double(value):\n    \"\"\"\n    Double a number.\n\n    Parameters\n    ----------\n    value : int or float\n        # Describe the parameter here.\n\n    Returns\n    -------\n    int or float\n        # Describe the return value here.\n    \"\"\"\n    pass\n\nprint(double(7))\n", ["14"], ["\"\"\"", "Parameters", "Returns", "return", "print"], [], 25),
    workshop("function-design", "Function Design", "Keep functions small enough to test.", ["functions", "design"], [
      "A useful function usually does one job.",
      "Give it inputs as arguments, return a result, and test it with a small example.",
      "If a function is hard to name, it may be trying to do too many things."
    ]),
    code("cb-first-last6", "Practice: `first_last6`", "Check the first and last list element inside a function.", ["functions", "lists", "indexing"], [
      "Write `first_last6(nums)` that returns `True` when the first or last element of the list is `6`.",
      "Use `nums[0]` and `nums[-1]` — check them with two separate `if` statements.",
      "Original CodingBat problem: [CodingBat](https://codingbat.com/prob/p181624)."
      ], "Define `first_last6(nums)` so it returns `True` when the first or last element is `6`.", "def first_last6(nums):\n    # Check both ends of the list.\n    pass\n\nprint([first_last6([1, 2, 6]), first_last6([6, 1, 2, 3]), first_last6([1, 2, 3])])\n", ["[True, True, False]"], ["def first_last6", "return", "print"], [], 20),
  ],
};
