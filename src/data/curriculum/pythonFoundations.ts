import type { Course } from "../types";
import { code, quiz, read } from "../lessonBuilders";

export const pythonFoundations: Course = {
  id: "python-foundations",
  number: 1,
  title: "Python Foundations",
  theme: "Basics",
  description: "What Python is, variables, values, data types, and the basic run/check loop.",
  accent: "#111111",
  lessons: [
    read("what-is-programming", "What Is Programming?", "Programming means giving a computer precise instructions it can run.", ["programming", "instructions"], [
      "A computer follows instructions exactly. Programming is the process of writing those instructions.",
      "A program can take input, store information, make decisions, repeat steps, and produce output.",
      "The main skill is breaking a task into small steps that are clear enough for a computer to follow."
    ], 10),
    read("programming-languages", "Why Are There Different Programming Languages?", "Different languages make different trade-offs for different jobs.", ["languages", "abstraction"], [
      "Programming languages exist at different levels of abstraction. That means they give the programmer different amounts of direct control.",
      "Languages also reflect different opinions about how code should be written and different purposes they were designed for.",
      "Python was developed as a scripting language. Java focuses strongly on compatibility between operating systems. JavaScript was built for web development."
    ], 10),
    read("why-python", "Why Python?", "", ["Python", "programming"], [
      "Python is used because it is beginner friendly and abstracts away many difficult concepts.",
      "There are many packages, examples, and answers available online.",
      "Built on top of these is a scientific Python \"ecosystem\" of packages with a large community.",
      "Python is free and open source, so you can continue using it after the course.",
      "In this website, the important loop is: read the task, write a small amount of code, run it, inspect the output, and adjust it."
    ], 20),
    {
      ...read("gui-vs-cli", "GUI vs CLI", "Programs can be controlled by clicking graphical controls or by typing commands.", ["GUI", "CLI", "interface"], [
        "A GUI is a Graphical User Interface: buttons, menus, icons, file windows, and other things you click.",
        "A CLI is a Command Line Interface: a text-based place where you type commands.",
        "Many tools have both. For example, you might click buttons to open or save files, or type commands to do the same thing.",
        "Python itself is mostly used through text: a terminal, an IDE, or a notebook."
      ]),
      images: [
        { src: "/images/session1/gui-window.png", alt: "GUI mock program with buttons for opening, saving, creating, and deleting files", caption: "GUI: click buttons, menus, and windows to control a program." },
        { src: "/images/session1/slide09-01.png", alt: "Opening a file using a typed CLI command", caption: "CLI: type a command to ask a program to do something." },
        { src: "/images/session1/slide09-02.png", alt: "Deleting a file using a typed CLI command", caption: "The command line is text based: you write the instruction directly." },
      ],
    },
    {
      ...read("terminal-basics", "The Terminal and IDEs", "The terminal and an IDE are two key tools for working with Python.", ["terminal", "IDE", "GUI", "CLI"], [
        "The terminal — also called the command prompt or, when using conda, the conda prompt — is the CLI for your operating system.",
        "Basic terminal commands: `cd folder` changes directory, `ls` (Mac/Linux) or `dir` (Windows) lists files, `cd ..` goes up one level.",
        "An IDE (Integrated Development Environment) holds your hand while you write code. It provides autocomplete, red underlines on mistakes, and a button to run your file.",
        "The two most popular IDEs for Python are VS Code and PyCharm. Both are free to download.",
        "Python itself has no GUI. You interact with it through a terminal, an IDE, or a notebook."
      ]),
      images: [
        { src: "/images/session1/slide09-01.png", alt: "Terminal command typed into a CLI", caption: "The terminal is a CLI where you type commands." },
        { src: "/images/session1/slide23-01.png", alt: "VS Code IDE with a Python file open", caption: "VS Code — an IDE that provides an editor, project files, and a run button." },
        { src: "/images/session1/slide13-02.png", alt: "Running a Python script from the terminal", caption: "Typing `python script_name.py` in the terminal runs a script." },
      ],
    },
    read("calculator-print-example", "Calculations and `print()`", "Use Python like a calculator, then make the result visible.", ["operators", "print"], [
      "Python can add, subtract, multiply, divide, and raise to a power using `+`, `-`, `*`, `/`, and `**`.",
      "In a script, Python will not necessarily show the result of a calculation unless you ask it to.",
      "Use `print()` when you want to see a value. This is also one of the simplest ways of checking for code problems (\"debugging\")."
    ], 10),
    code("calculator-print", "Practice: Calculations and `print()`", "Use the same idea with different values.", ["operators", "print"], [
      "Now solve a similar task yourself. The practice checks the output."
    ], "Add the two existing numbers, store the result, and print it.", "first_number = 12\nsecond_number = 8\n\n# Calculate the total.\n# Show the result.\n", ["20"], ["result", "print"], [], 20),
    read("operator-precedence-example", "Order of Operations", "Use brackets when the intended calculation is not obvious.", ["operators", "precedence"], [
      "Python follows mathematical order of operations.",
      "Brackets make the order explicit and make code easier to check.",
      "When a result is surprising, split the calculation into named steps."
    ], 10),
    code("operator-precedence", "Practice: Order of Operations", "Use brackets when the intended calculation is not obvious.", ["operators", "precedence"], [
      "Now solve a similar task yourself. The practice checks the output."
    ], "Add the two existing numbers, multiply that sum by `3`, store it as `total`, and print `total`. Use brackets so the addition happens before multiplication.", "first_number = 12\nsecond_number = 8\n\n# Make the intended order explicit.\n# Show the calculated total.\n", ["60"], ["total", "(", ")", "print"], [], 20),
    read("variables-example", "Variables", "A variable is a name assigned to a value.", ["variables", "assignment"], [
      "For example, `a = 5` assigns the value `5` to `a`.",
      "Variables make multi-step calculations easier to read and reuse.",
      "A good variable name should describe the thing it stores."
    ], 10),
    code("variables", "Practice: Variables", "A variable is a name assigned to a value.", ["variables", "assignment"], [
      "Now solve a similar task yourself. The practice checks the output."
    ], "Use the existing `a` and `b` values to create `c`, where `c` is their sum. Print `c`.", "a = 5\nb = 6\n\n# Create the missing variable.\n# Show its value.\n", ["11"], ["=", "print"], [], 20),
    read("types-overview", "Data Types", "Python has different built-in \"data types\" (sometimes referred to as just \"types\"). These include strings, integers, floats, and booleans. Python treats each of them differently.", ["strings", "integers", "floats", "booleans"], [
      "A string is text, and has to be surrounded by quotation marks.",
      "An integer is a whole number. A float is a number with a decimal place.",
      "A Boolean is either `True` or `False`.",
      "A lot of beginner errors are caused by using the right-looking value with the wrong type."
    ]),
    code("strings-and-casting", "Strings, Numbers, and Casting", "Convert between text and numbers when needed.", ["strings", "casting"], [
      "Python treats `'20'` as text and `20` as a number.",
      "Built-in functions such as `str()`, `int()`, `float()`, and `bool()` convert between types.",
      "Casting should be deliberate: first inspect what you have, then convert if needed."
    ], "Use the existing text value as a number, subtract `2`, store the calculation in a variable, and print that result.", "value = '20'\n\n# Work in two steps: convert, then calculate.\n", ["18"], ["int", "print"], [], 20),
    quiz("type-question", "Type question", "Check whether a value is text or a number.", ["type"], [
      "Quotation marks make a value a string, even if the characters look like a number.",
      "Multiplying a string repeats it: `'ha' * 2` gives `'haha'`."
    ], "What happens when Python evaluates `'20' * 2`?", ["40", "2020", "An import error", "A boolean"], "2020", "The value is a string, so multiplication repeats it."),
    code("type-inspection", "Inspecting Types", "Use `type()` to check what Python thinks a value is.", ["type"], [
      "When code behaves strangely, inspect the type of the value.",
      "This is especially useful when values come from files, forms, or copied text."
    ], "Print the type of each existing variable.", "number_value = 100\nword_value = 'Dog'\nflag_value = False\n\n# Inspect each variable.\n", ["int", "str", "bool"], ["type", "print"], [], 20),
    {
      ...read("comparisons-booleans", "Comparisons and Booleans", "Comparisons produce `True` or `False`.", ["comparison", "Boolean"], [
        "In Python we can compare different variables. Comparisons should generally be done on numbers.",
        "Comparison operators include `<` (less than), `>` (greater than), `==` (equal), `!=` (not equal), `<=`, and `>=`.",
        "A comparison returns a Boolean value: `True` or `False`.",
        "These Boolean results are commonly used in `if` statements to decide which code to run."
      ]),
      images: [
        { src: "/images/session3/slide29-01.png", alt: "Comparison operators listed with examples", caption: "Comparison operators compare two values and return True or False." },
        { src: "/images/session3/slide31-01.png", alt: "Less than comparison: 3 < 5 returns True", caption: "`<` returns `True` when the left side is smaller." },
        { src: "/images/session3/slide32-01.png", alt: "Greater than comparison: 5 > 3 returns True", caption: "`>` returns `True` when the left side is larger." },
        { src: "/images/session3/slide33-01.png", alt: "Equality comparison: 5 == 5 returns True", caption: "`==` checks equality — note the double equals, not a single one." },
      ],
    },
    read("simple-logical-operators-intro", "Logical Operators", "Combine or flip Boolean values with `not`, `and`, and `or`.", ["not", "and", "or", "booleans"], [
      "`not` flips a Boolean value: `not True` becomes `False`, and `not False` becomes `True`.",
      "`and` returns `True` only when both sides are true.",
      "`or` returns `True` when at least one side is true.",
      "Logical operators are useful when one decision depends on more than one condition."
    ], 10),
    code("debug-with-print", "Debug with `print()`", "Print intermediate values to check your assumptions.", ["debugging", "print"], [
      "Printing is not only for final answers.",
      "A useful debugging habit is to print a value before and after a calculation.",
      "Once the code works, remove prints that were only there for investigation."
    ], "Fix the calculation by using `amount` as a number, adding `bonus`, and printing the calculated total.", "amount = '10'\nbonus = 1\n\n# Check the type before you fix the calculation.\n", ["11"], ["int", "print"], [], 20),
    read("working-loop", "The Working Loop", "Write a small piece, run it, inspect it, then change one thing.", ["debugging", "practice"], [
      "The useful habit is not memorising every command. It is learning how to test small pieces of code.",
      "Run code often. Print intermediate values. Read error messages before changing things at random.",
      "This website keeps the code runner in the page so you can practise that loop without leaving the browser."
    ]),
  ],
};
