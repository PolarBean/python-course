import type { Course } from "../types";
import { code, quiz, read } from "../lessonBuilders";

export const controlFlow: Course = {
  id: "control-flow",
  number: 4,
  title: "Loops and Control Flow",
  theme: "Control",
  description: "Loops, comparisons, booleans, conditionals, membership checks, list and dictionary comprehensions.",
  accent: "#111111",
  lessons: [
    {
      ...code("for-loops", "For Loops", "Use a `for` loop to iterate through a list.", ["for", "indentation"], [
        "A `for` loop is used for iterating through a list. For each item, the indented body runs once.",
        "Everything inside the loop is indented. The loop ends when the code unindents.",
        "The variable after `for` takes each value in turn — you can name it anything.",
        "Loops are useful when the same operation should happen to each item."
      ], "Print each animal on its own line.", "animals = ['dog', 'cat', 'llama']\n\n# Loop through animals and print each one.\n", ["dog", "cat", "llama"], ["for", "print"], [], 20),
    },
    code("loop-accumulator", "Loop Accumulator", "Use a loop to build a final value.", ["for", "accumulator"], [
      "A common pattern is to start with a total and update it inside the loop.",
      "Print inside the loop when debugging. Print after the loop when only the final result matters."
    ], "Use a loop to add each value in `numbers` into `total`, then print `total` after the loop.", "numbers = [1, 2, 3, 4]\ntotal = 0\n\n# Update total inside the loop, then print total after the loop.\nprint(total)\n", ["10"], ["for", "total", "print"], [], 20),
    {
      ...read("if-elif-else-example", "If, Elif, Else", "Run different code depending on a condition.", ["if", "elif", "else"], [
        "If statements take a Boolean value and run the indented code only when that value is `True`.",
        "Use `elif` to check a second condition if the first was false. Use `else` to run code when no condition matched.",
        "Use a colon after each condition and indent everything inside each branch.",
        "Python stops at the first true branch — later branches are skipped even if they are also true."
      ], 10),
    },
    code("if-elif-else", "Practice: If, Elif, Else", "Run different code depending on a condition.", ["if", "elif", "else"], [
      "Now solve a similar task yourself. The practice checks the output."
    ], "Use `if`, `elif`, and `else` to choose what to print from the value stored in `light`.", "light = 'green'\n\n# Choose the message that matches the current light.\n", ["move"], ["if", "print"], [], 20),
    read("logical-operators-example", "Logical Operators in conditionals", "Combine or flip Boolean values with `not`, `and`, and `or`.", ["not", "and", "or", "booleans"], [
      " Reminder: ",
      "`not` flips a Boolean value: `not True` becomes `False`, and `not False` becomes `True`.",
      "`and` returns `True` only when both sides are true.",
      "`or` returns `True` when at least one side is true.",
      "Logical operators are useful when one decision depends on more than one condition."
    ], 10),
    code("cb-sleep-in", "Practice: `sleep_in`", "Use `not` and `or` in a return value.", ["functions", "not", "or"], [
      "Write `sleep_in(weekday, vacation)` that returns `True` when we get to sleep in.",
      "We sleep in when it is not a weekday (`not weekday`), or when we are on vacation.",
      "Original CodingBat problem: [CodingBat](https://codingbat.com/prob/p173401)."
    ], "Define `sleep_in(weekday, vacation)` so it returns `True` whenever it is not a weekday or we are on vacation.", "def sleep_in(weekday, vacation):\n    # Return True when not a weekday or when on vacation.\n    pass\n\nprint([sleep_in(False, False), sleep_in(True, False), sleep_in(True, True)])\n", ["[True, False, True]"], ["def sleep_in", "return", "print"], [], 20),
    code("cb-in1to10", "Practice: `in1to10`", "Check a range with a mode flip.", ["functions", "and", "or", "not"], [
      "Write `in1to10(n, outside_mode)` that returns whether `n` is in the range 1 to 10 (inclusive).",
      "When `outside_mode` is `True`, flip the result — return `True` when `n` is outside that range.",
      "Original CodingBat problem: [CodingBat](https://codingbat.com/prob/p158497)."
    ], "Define `in1to10(n, outside_mode)` matching the description.", "def in1to10(n, outside_mode):\n    # Handle the normal case and the outside-mode case.\n    pass\n\nprint([in1to10(5, False), in1to10(11, False), in1to10(11, True), in1to10(5, True)])\n", ["[True, False, True, False]"], ["def in1to10", "return", "print"], [], 20),
    code("relu-exercise", "The `relu` Function", "Write a real-world function used in machine learning.", ["functions", "if", "return"], [
      "A rectified linear unit (relu) returns the input if it is positive, and `0` otherwise.",
      "This function is used as an activation function in neural networks.",
      "It is a good example of a function that takes one argument and returns one value."
    ], "Write `relu(x)` so it returns `x` when positive and `0` otherwise. Print `relu(5)`, `relu(0)`, and `relu(-3)`.", "def relu(x):\n    # Return x if positive, 0 otherwise.\n    pass\n\nprint(relu(5))\nprint(relu(0))\nprint(relu(-3))\n", ["5", "0", "0"], ["def", "return", "print"], [], 25),
    code("cb-sum-double", "Practice: `sum_double`", "Return a value that depends on a condition.", ["functions", "if", "return"], [
      "Normally `sum_double(a, b)` returns `a + b`.",
      "If the two values are equal, the function returns double their sum.",
      "Original CodingBat problem: [CodingBat](https://codingbat.com/prob/p141905)."
    ], "Define `sum_double(a, b)` so it returns `a + b`, but doubles the sum when `a == b`.", "def sum_double(a, b):\n    # Return a + b, but double the result if they are equal.\n    pass\n\nprint([sum_double(1, 2), sum_double(3, 2), sum_double(2, 2)])\n", ["[3, 5, 8]"], ["def sum_double", "return", "print"], [], 20),
    code("cb-diff21", "Practice: `diff21`", "Use `abs` and a conditional return.", ["functions", "abs", "if"], [
      "`diff21(n)` returns the absolute difference between `n` and `21`.",
      "If `n` is greater than `21`, the function returns double that difference.",
      "Original CodingBat problem: [CodingBat](https://codingbat.com/prob/p197466)."
    ], "Define `diff21(n)` so it returns `abs(n - 21)`, doubled when `n > 21`.", "def diff21(n):\n    # Return abs(n - 21), doubled when n > 21.\n    pass\n\nprint([diff21(19), diff21(10), diff21(21), diff21(25)])\n", ["[2, 11, 0, 8]"], ["def diff21", "return", "print"], [], 20),
    code("cb-same-first-last", "Practice: `same_first_last`", "Guard a length check before indexing.", ["functions", "lists", "len"], [
      "Write `same_first_last(nums)` that returns `True` when the list is non-empty and the first element equals the last.",
      "Check `len(nums) >= 1` first to avoid an IndexError on an empty list.",
      "Original CodingBat problem: [CodingBat](https://codingbat.com/prob/p179078)."
    ], "Define `same_first_last(nums)` matching the description.", "def same_first_last(nums):\n    # Return False for empty lists, otherwise compare first and last.\n    pass\n\nprint([same_first_last([1, 2, 3]), same_first_last([1, 2, 3, 1]), same_first_last([1]), same_first_last([])])\n", ["[False, True, True, False]"], ["def same_first_last", "return", "print"], [], 20),
    code("cb-common-end", "Practice: `common_end`", "Combine list indexing across two lists in a function.", ["functions", "lists", "indexing"], [
      "Write `common_end(a, b)` that returns `True` when `a` and `b` share the same first element, or the same last element.",
      "Both lists are guaranteed to have at least one element — check the two ends with separate `if` statements.",
      "Original CodingBat problem: [CodingBat](https://codingbat.com/prob/p147755)."
    ], "Define `common_end(a, b)` matching the description.", "def common_end(a, b):\n    # Compare the two possible matching ends.\n    pass\n\nprint([common_end([1, 2, 3], [7, 3]), common_end([1, 2, 3], [7, 3, 2]), common_end([1, 2], [1, 3])])\n", ["[True, False, True]"], ["def common_end", "return", "print"], [], 20),
  
    {
      ...read("membership-example", "The `in` Keyword", "Ask whether something is in something else.", ["in", "membership"], [
        "You can ask Python whether something is inside something else using the `in` keyword.",
        "`item in list` checks for a full item in a list and returns `True` or `False`.",
        "`text in string` checks for a substring in a string.",
        "This is useful in filters and simple text searches, and combines naturally with `if` statements."
      ], 10),
      images: [
        { src: "/images/session3/slide41-01.png", alt: "in keyword checking if a value is in a list, returning True", caption: "`in` checks membership in a list." },
        { src: "/images/session3/slide41-02.png", alt: "in keyword checking for a substring inside a string", caption: "`in` also checks for substrings inside strings." },
      ],
    },
    code("membership", "Practice: The `in` Keyword", "Ask whether something is in something else.", ["in", "membership"], [
      "Now solve a similar task yourself. The practice checks the output."
    ], "Print whether `'a'` is in `'cat'` and whether `'cat'` is in the list.", "animals = ['dog', 'cat', 'llama']\nword = 'cat'\n\n# Print both checks.\n", ["True", "True"], ["in", "print"], [], 20),
    code("range-and-enumerate", "`range()` and `enumerate()`", "Create indices for loops when you need them.", ["range", "enumerate"], [
      "`range()` creates a sequence of numbers.",
      "`enumerate()` gives both an index and a value while looping.",
      "Use indices only when the position matters."
    ], "Loop over `names`, printing each index with its matching name.", "names = ['Ada', 'Grace', 'Guido']\n\n# Include both the position and the value.\n", ["0 Ada", "1 Grace", "2 Guido"], ["enumerate", "for", "print"], [], 25),
    code("travel-exercise", "Control Flow Exercise", "Use comparisons and conditionals to choose an activity.", ["control flow"], [
      "The original exercise uses comparison operators and if statements to determine which country and activity we will engage in.",
      "This is the same logic pattern used in many decision trees."
    ], "Use `savings` to choose a destination and activity: above `2000` means Japan and skiing; otherwise choose Tasmania and swimming. Print the chosen values.", "savings = 2500\n\n# Choose the branch that matches the savings amount.\n", ["Japan", "Skiing"], ["if", "else", "print"], [], 25),
    code("cb-date-fashion", "Practice: `date_fashion`", "Return one of three values from nested conditions.", ["functions", "if", "elif"], [
      "You and your date each have a fashion rating between 0 and 10.",
      "If either rating is 2 or less, return 0 (stay home). If either is 8 or more, return 2 (great night). Otherwise return 1.",
      "Original CodingBat problem: [CodingBat](https://codingbat.com/prob/p129125)."
    ], "Define `date_fashion(you, date)` so it returns 0, 1, or 2 using the rules in the summary.", "def date_fashion(you, date):\n    # 0 if either <= 2, 2 if either >= 8, 1 otherwise.\n    pass\n\nprint([date_fashion(5, 10), date_fashion(5, 2), date_fashion(5, 5)])\n", ["[2, 0, 1]"], ["def date_fashion", "return", "print"], [], 20),
    code("cb-caught-speeding", "Practice: `caught_speeding`", "Pick a fine level from speed bands.", ["functions", "if", "elif"], [
      "Up to 60 mph is no ticket (0). 61–80 is a small ticket (1). 81 or more is a big ticket (2).",
      "On your birthday you get an extra 5 mph in each band.",
      "Original CodingBat problem: [CodingBat](https://codingbat.com/prob/p137202)."
    ], "Define `caught_speeding(speed, is_birthday)` so it returns 0, 1, or 2 using the speed bands above, with a 5 mph bonus on a birthday.", "def caught_speeding(speed, is_birthday):\n    # 0/1/2 ticket; +5 mph on birthday.\n    pass\n\nprint([caught_speeding(60, False), caught_speeding(65, False), caught_speeding(85, True), caught_speeding(85, False)])\n", ["[0, 1, 1, 2]"], ["def caught_speeding", "return", "print"], [], 20),
    {
      ...read("power-operator-example", "The Power Operator `**`", "Use `**` to raise a number to a power.", ["operators", "**"], [
        "In Python, `**` is the power operator: `2 ** 3` gives `8`.",
        "The power operator follows standard order of operations, so use brackets when the intent might be unclear."
      ], 10),
      images: [
        { src: "/images/session4/slide04-01.png", alt: "Power operator example: 2 ** 3 equals 8", caption: "`**` raises the left number to the power of the right." },
      ],
    },
    code("power-operator", "Practice: The Power Operator `**`", "Use `**` to raise a number to a power.", ["operators", "**"], [
      "Now solve a similar task yourself. The practice checks the output."
    ], "Calculate `2` to the power of `10`, then calculate `3` to the power of `4`. Print each calculated result.", "# Calculate both powers, then show the results.\n", ["1024", "81"], ["**", "print"], [], 20),
    code("list-comprehensions", "List Comprehensions", "A one-liner way to write some loops.", ["list comprehension"], [
      "List comprehensions are useful when every output item follows the same rule.",
      "To raise to a power, use `x ** 2`.",
      "Only use a comprehension when it remains readable."
    ], "Use a list comprehension to create the square numbers from `1` to `10`, store them in `squares`, and print `squares`.", "squares = []\n\n# Replace with a list comprehension, then print squares.\nprint(squares)\n", ["[1, 4, 9, 16, 25, 36, 49, 64, 81, 100]"], ["for", "**", "print"], [], 25),
    code("cb-alarm-clock", "Practice: `alarm_clock`", "Return one of three strings based on the day.", ["functions", "if", "strings"], [
      "Days are numbered 0 = Sunday through 6 = Saturday.",
      "Weekdays (1–5): return `'7:00'` normally, `'10:00'` on vacation. Weekends (0 and 6): return `'10:00'` normally, `'off'` on vacation.",
      "Original CodingBat problem: [CodingBat](https://codingbat.com/prob/p119867)."
    ], "Define `alarm_clock(day, vacation)` so it returns the right alarm time.", "def alarm_clock(day, vacation):\n    # Weekday: '7:00' or '10:00' on vacation.\n    # Weekend: '10:00' or 'off' on vacation.\n    pass\n\nprint([alarm_clock(1, False), alarm_clock(5, True), alarm_clock(0, False), alarm_clock(6, True)])\n", ["['7:00', '10:00', '10:00', 'off']"], ["def alarm_clock", "return", "print"], [], 20),
    code("cb-cigar-party", "Practice: `cigar_party`", "Combine a range check with a weekend override.", ["functions", "if", "and"], [
      "A successful cigar party needs at least 40 cigars.",
      "On a weekday there is also an upper limit of 60. On weekends there is no upper limit.",
      "Original CodingBat problem: [CodingBat](https://codingbat.com/prob/p195669)."
    ], "Define `cigar_party(cigars, is_weekend)` so it returns `True` when the count is at least 40, with the upper limit of 60 only applied on weekdays.", "def cigar_party(cigars, is_weekend):\n    # At least 40 cigars; upper limit 60 unless it is the weekend.\n    pass\n\nprint([cigar_party(30, False), cigar_party(50, False), cigar_party(70, True)])\n", ["[False, True, True]"], ["def cigar_party", "return", "print"], [], 20),
    code("dict-comprehensions", "Dictionary Comprehensions", "Build a dictionary from an existing one in one line.", ["dict comprehension", "items"], [
      "A dictionary comprehension builds a new dictionary by transforming key-value pairs.",
      "Use `dict.items()` to loop over both keys and values at the same time.",
      "The syntax is `{key: expression for key, value in original.items()}`."
    ], "Use a dictionary comprehension to double every value in `course_capacity`, store the result as `doubled`, and print `doubled`.", "course_capacity = {'intro': 12, 'further': 10, 'packaging': 15}\n\n# Build doubled using a dict comprehension, then print doubled.\nprint(doubled)\n", ["24", "20", "30"], ["{", "items", "print"], [], 25),
    code("combined-control-assignment", "Combined Control Flow Practice", "Use loops, `if`, `in`, and list methods together.", ["for", "if", "append"], [
      "This combines knowledge of if statements, for loops, the `in` keyword, and list methods.",
      "Complete code to append all names that include the letter `a`."
    ], "Loop through `names`, append names containing `a` or `A` to `matches`, and print `matches` after the loop.", "names = ['Ada', 'Guido', 'Grace', 'Linus']\nmatches = []\n\n# Append matching names, then print matches.\nprint(matches)\n", ["Ada", "Grace"], ["for", "if", "append", "print"], [], 25),
    quiz("control-flow-reading", "Read the Branches", "Predict which branch will run before executing code.", ["if", "elif"], [
      "Read conditionals from top to bottom.",
      "Python stops at the first true branch in an `if`/`elif` chain."
    ], "For `score = 82`, which label should print in `if score >= 85: High; elif score >= 70: Pass; else: Review`?", ["High", "Pass", "Review", "Both High and Pass"], "Pass", "`82 >= 85` is false, then `82 >= 70` is true."),
    code("cb-parrot-trouble", "Practice: `parrot_trouble`", "Combine `and` with a range check.", ["functions", "and", "or"], [
      "The parrot causes trouble when it is talking and the hour is before 7 or after 20.",
      "Write `parrot_trouble(talking, hour)` that returns `True` in those cases.",
      "Original CodingBat problem: [CodingBat](https://codingbat.com/prob/p166884)."
    ], "Define `parrot_trouble(talking, hour)` so it returns `True` when the parrot is talking and the hour is before 7 or after 20.", "def parrot_trouble(talking, hour):\n    # True when talking and (hour < 7 or hour > 20).\n    pass\n\nprint([parrot_trouble(True, 6), parrot_trouble(True, 7), parrot_trouble(False, 6), parrot_trouble(True, 21)])\n", ["[True, False, False, True]"], ["def parrot_trouble", "return", "print"], [], 20),
    code("cb-near-hundred", "Practice: `near_hundred`", "Check whether a value is close to 100 or 200.", ["functions", "abs", "or"], [
      "`near_hundred(n)` returns `True` when `n` is within 10 of either 100 or 200.",
      "Use `abs` and `or` to write it as a single expression.",
      "Original CodingBat problem: [CodingBat](https://codingbat.com/prob/p124676)."
    ], "Define `near_hundred(n)` so it returns `True` when `n` is within 10 of 100 or 200.", "def near_hundred(n):\n    # True when n is within 10 of 100 or 200.\n    pass\n\nprint([near_hundred(93), near_hundred(90), near_hundred(89), near_hundred(190), near_hundred(210)])\n", ["[True, True, False, True, True]"], ["def near_hundred", "return", "print"], [], 20),
    code("cb-love6", "Practice: `love6`", "Use `or` across several conditions.", ["functions", "or", "abs"], [
      "Two numbers love 6 if either of them is 6, or their sum is 6, or their absolute difference is 6.",
      "Use `abs` for the difference so the order of inputs does not matter.",
      "Original CodingBat problem: [CodingBat](https://codingbat.com/prob/p100958)."
    ], "Define `love6(a, b)` so it returns `True` when either value is 6, or `a + b == 6`, or `abs(a - b) == 6`.", "def love6(a, b):\n    # True when a or b is 6, or sum/abs(diff) is 6.\n    pass\n\nprint([love6(6, 4), love6(4, 5), love6(1, 5), love6(1, 7)])\n", ["[True, False, True, True]"], ["def love6", "return", "print"], [], 20),
  ],
};
