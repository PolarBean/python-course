import type { LessonCodeExample } from "./types";

const example = (code: string, caption: string, packages: string[] = [], insertAfter?: number): LessonCodeExample => ({
  code,
  caption,
  packages,
  insertAfter,
});

export function getCodeExamplesForLesson(lessonId: string): LessonCodeExample[] {
  switch (lessonId) {
    case "terminal-basics":
      return [];
    case "calculator-print-example":
      return [
        example(`apples = 7
oranges = 5
total_fruit = apples + oranges
print(total_fruit)`, "Add two values, store the answer, and print it."),
      ];
    case "operator-precedence-example":
      return [
        example(`answer = (4 + 6) * 2
print(answer)`, "Use brackets to control order of operations."),
      ];
    case "variables-example":
      return [
        example(`base_score = 7
bonus_score = 4
final_score = base_score + bonus_score
print(final_score)`, "Variables store values for later use."),
      ];
    case "collections":
      return [
        example(`my_first_list = [1, 2, 3, 'a', 'b', 'c']
print(my_first_list)`, "Lists keep values in order."),
        example(`food_prices = {
    'apples': 2.8,
    'oranges': 3,
    'bananas': 1.5
}
print(food_prices)`, "Dictionaries map keys to values."),
        example(`print({1, 3, 2, 1, 1})`, "Sets keep only unique values."),
      ];
    case "indexing":
      return [
        example(`example_list = ['apple', 'pineapple', 'lychee']
print(example_list[0])`, "Lists use zero-based indexing."),
        example(`food_prices = {'tomato': 5, 9: 'apple'}
print(food_prices['tomato'])
print(food_prices[9])`, "Dictionaries use keys, not positions."),
      ];
    case "slicing-example":
      return [
        example(`letters = ['a', 'b', 'c', 'd', 'e']
print(letters[:])`, "A full slice returns the whole list."),
        example(`letters = ['a', 'b', 'c', 'd', 'e']
print(letters[2:])`, "Start at index 2 and go to the end."),
        example(`letters = ['a', 'b', 'c', 'd', 'e']
print(letters[:3])`, "Stop before index 3."),
        example(`letters = ['a', 'b', 'c', 'd', 'e']
print(letters[1:4])`, "Take a range from 1 up to 4."),
      ];
    case "collection-conversion-example":
      return [
        example(`scores = (8, 9, 10)
print(list(scores))`, "Convert a tuple to a list."),
        example(`colours = ['red', 'green', 'blue']
print(tuple(colours))`, "Convert a list to a tuple."),
        example(`data = ['red', 'blue', 'red', 'green']
print(set(data))`, "Convert to a set to remove duplicates."),
      ];
    case "len-practice-example":
      return [
        example(`print(len('Notebook'))
print(len(['red', 'green', 'blue', 'yellow']))
print(len({'name': 'Ada', 'score': 91, 'group': 'A'}))`, "`len()` works on strings, lists, and dictionaries."),
      ];
    case "tuple-unpacking-example":
      return [
        example(`person = ('Ada', 36)
name, age = person

print(name)
print(age)`, "Unpacking assigns each tuple value to a name."),
        example(`point = (10, 20, 30)
x, y, z = point

print(x)
print(y)
print(z)`, "The number of names must match the number of values."),
        example(`values = (10, 20, 30, 40, 50)
first, *middle, last = values

print(first)
print(middle)
print(last)`, "Starred unpacking collects the extra middle values into a list."),
      ];
    case "dictionary-lists-example":
      return [
        example(`weather = {'day': ['Mon', 'Tue'], 'temp': [21, 24]}
print(weather['day'][0])
print(weather['temp'][1])`, "A dictionary can hold list values."),
      ];
    case "function-concepts":
      return [
        example(`def add(a, b):
    return a + b
print(add(5, 3))`, "A function can return a result."),
        example(`print(max([3, 1, 4, 1, 5]))
print(min([3, 1, 4, 1, 5]))`, "Python provides some built-in functions like `min` and `max`"),
      ];
    case "basic-function-example":
      return [
        example(`def double(x):
    return x * 2
print(double(5))`, "A function with one argument."),
        example(`def greet(name):
    return f'Hello, {name}'
print(greet('Sam'))`, "A function can build and return text."),
      ];
    case "arguments-defaults-example":
      return [
        example(`def cheer(word, repeats=3):
    return word * repeats
print(cheer('Go'))
print(cheer('Go', 2))`, "A default argument makes a parameter optional."),
        example(`def full_name(first, last='Lovelace'):
    return f'{first} {last}'
print(full_name('Grace'))`, "A second argument can fall back to a default."),
      ];
    case "return-values-example":
      return [
        example(`def min_and_max(values):
    return min(values), max(values)
low, high = min_and_max([4, 9, 2])
print(low, high)`, "A function can return multiple values."),
        example(`def no_return():
    print('Done')
x = no_return()
print(x)`, "A function with no return statement gives None."),
      ];
    case "calling-functions":
      return [
        example(`def my_func(a, b, c):
    return a + b + c
print(my_func(1, 2, 3))`, "Positional arguments follow the order of parameters."),
        example(`def my_func(a, b, c):
    return a + b + c
print(my_func(c=3, a=1, b=2))`, "Keyword arguments can be passed in any order."),
        example(`def my_func(a, b, c):
    return a + b + c
print(my_func(1, b=2, c=3))`, "Positional arguments come before keyword arguments."),
      ];
    case "imports-libraries":
      return [
        example(`import math
print(math.sqrt(9))`, "Import the whole module and use its name."),
        example(`from math import sqrt
print(sqrt(16))`, "Import one function directly."),
      ];
    case "standard-libraries-example":
      return [
        example(`import statistics
values = [10, 12, 12, 14]
print(statistics.mean(values))`, "The statistics module is built in."),
        example(`import math
print(math.sqrt(144))`, "The math module is also built in."),
      ];
    case "glob-docs-example":
      return [
        example(`import glob
files = glob.glob('/data/*.xlsx')
print(len(files))`, "glob returns the matching file list."),
      ];
    case "comments-docstrings-example":
      return [
        example(`# This is a comment explaining why
def calculate_average(nums):
    '''Returns the average of numbers.'''
    return sum(nums) / len(nums)

print(calculate_average([1, 2, 3]))`, "Comments and docstrings document intent."),
      ];
    case "for-loops":
      return [
        example(`animals = ['dog', 'cat', 'llama']

for animal in animals:
    print(animal)`, "The loop variable takes each value in turn."),
        example(`numbers = [1, 2, 3, 4]
total = 0

for number in numbers:
    total = total + number

print(total)`, "A loop can build up a result across all items."),
        example(`animals = ['dog', 'cat', 'llama']

for animal in animals:
    if animal == 'cat':
        print('Found cat')
    else:
        print(animal)`, "You can combine loops with other logic inside the body."),
      ];
    case "comparisons-booleans":
      return [
        example(`print(3 < 5)
print(5 > 3)
print(5 == 5)
print(5 != 3)`, "Comparisons return True or False."),
      ];
    case "if-elif-else-example":
      return [
        example(`light = 'green'

if light == 'red':
    print('stop')
elif light == 'amber':
    print('wait')
else:
    print('move')`, "Use if, elif, and else to choose one branch."),
        example(`score = 92

if score >= 90:
    print('Excellent')
elif score >= 50:
    print('Pass')
else:
    print('Review')`, "Python stops at the first matching branch, even if a later condition would also be true."),
      ];
    case "logical-operators-example":
      return [
        example(`weekday = False

print(not weekday)`, "`not` flips True to False, or False to True."),
        example(`weekday = True
vacation = True

if (not weekday) or vacation:
    print('sleep in')
else:
    print('alarm')`, "`or` is true when at least one side is true."),
        example(`age = 12
has_ticket = True

if age >= 10 and has_ticket:
    print('enter')
else:
    print('wait')`, "`and` is true only when both sides are true."),
      ];
    case "simple-logical-operators-intro":
      return [
        example(`weekday = False
print(not weekday)`, "`not` flips True to False, or False to True."),
        example(`weekday = False
weekend = True
print(weekend or weekday)`, "`or` is True if one or both of the variables are True."),
        example(`weekday = False
weekend = True
print(weekend and weekday)`, "`and` is True when both variables are True."),
      ];
    case "membership-example":
      return [
        example(`tools = ['terminal', 'editor', 'notebook']
if 'editor' in tools:
    print('Found editor')`, "Use in to check list membership."),
        example(`word = 'python'
if 'y' in word:
    print('y is in python')`, "Use in to check substrings too."),
      ];
    case "power-operator-example":
      return [
        example(`print(5 ** 2)
print(4 ** 3)`, "The power operator raises a number to a power."),
      ];
    case "import-aliases":
      return [
        example(`import numpy as np
arr = np.array([1, 2, 3])
print(arr)`, "Use as to give a module a shorter name.", ["numpy"]),
        example(`import pandas as pd
df = pd.DataFrame({'name': ['Ada'], 'score': [91]})
print(df)`, "pandas commonly uses pd.", ["pandas"]),
        example(`import matplotlib.pyplot as plt
plt.plot([1, 2, 3], [1, 4, 9])
plt.show()`, "matplotlib commonly uses plt.", ["matplotlib"]),
      ];
    case "numpy-max-argmax-example":
      return [
        example(`import numpy as np
values = np.array([4, 12, 7, 1])
print(np.max(values))
print(np.argmax(values))`, "Use NumPy to find the max and its index.", ["numpy"]),
        example(`import numpy as np
values = np.array([4, 12, 7, 1])
print(values.shape)
print(values.dtype)`, "Arrays have attributes such as shape and dtype.", ["numpy"]),
      ];
    case "array-operations-example":
      return [
        example(`import numpy as np
arr = np.array([2, 4, 6, 8])
scaled = arr * 3 + 1
print(scaled)`, "Array math runs element-wise.", ["numpy"]),
        example(`import numpy as np
a = np.array([2, 4, 6])
b = np.array([1, 3, 5])
print(a + b)`, "Two arrays of the same shape can be added together.", ["numpy"]),
      ];
    case "shape-and-indexing-example":
      return [
        example(`import numpy as np
grid = np.array([[10, 20, 30], [40, 50, 60]])
print(grid.shape)`, "A 2D array reports rows and columns.", ["numpy"]),
        example(`import numpy as np
grid = np.array([[10, 20, 30], [40, 50, 60]])
print(grid[0, 1])
print(grid[1, 0])`, "Use row and column positions to index a grid.", ["numpy"]),
      ];
    case "array-range-indexing-example":
      return [
        example(`import numpy as np
grid = np.array([[10, 20, 30, 40], [50, 60, 70, 80], [90, 100, 110, 120]])
print(grid[0, :])
print(grid[:, 1])
print(grid[1:, 2:])`, "Slice rows and columns in a 2D array.", ["numpy"]),
      ];
    case "masks-example":
      return [
        example(`import numpy as np
temps = np.array([12, 28, 33, 17, 24])
mask = temps > 24
print(temps[mask])`, "A comparison creates a boolean mask.", ["numpy"]),
        example(`import numpy as np
temps = np.array([12, 28, 33, 17, 24])
print(temps[temps > 24])`, "You can apply the mask inline.", ["numpy"]),
      ];
    case "dataframes-example":
      return [
        example(`import pandas as pd
data = {'city': ['Sydney', 'Perth'], 'rain_mm': [12, 4], 'season': ['summer', 'winter']}
df = pd.DataFrame(data)
print(df)`, "Build a DataFrame from a dictionary.", ["pandas"]),
      ];
    case "column-selection-example":
      return [
        example(`import pandas as pd
df = pd.DataFrame({'city': ['Sydney', 'Perth'], 'rain_mm': [12, 4], 'season': ['summer', 'winter']})
print(df['city'])`, "Select one column as a Series.", ["pandas"]),
        example(`import pandas as pd
df = pd.DataFrame({'city': ['Sydney', 'Perth'], 'rain_mm': [12, 4], 'season': ['summer', 'winter']})
print(df[['city', 'rain_mm']])`, "Select multiple columns as a DataFrame.", ["pandas"]),
        example(`import pandas as pd
df = pd.DataFrame({'city': ['Sydney', 'Perth'], 'rain_mm': [12, 4], 'season': ['summer', 'winter']})
print(df['rain_mm'].mean())`, "Columns can be used in calculations.", ["pandas"]),
      ];
    case "iloc-indexing-example":
      return [
        example(`import pandas as pd
df = pd.DataFrame({'city': ['Sydney', 'Perth', 'Darwin'], 'rain_mm': [12, 4, 18]})
print("the first two rows of the dataframe")
print(df.iloc[:2])
`, "Use iloc for position-based indexing.", ["pandas"]),
      ];
    case "dataframe-masking-example":
      return [
        example(`import pandas as pd
df = pd.DataFrame({'city': ['Sydney', 'Perth', 'Darwin'], 'rain_mm': [12, 4, 18]})
mask = df['rain_mm'] >= 10
print(df[mask])`, "A DataFrame can be filtered with a boolean mask.", ["pandas"]),
        example(`import pandas as pd
df = pd.DataFrame({'city': ['Sydney', 'Perth', 'Darwin'], 'rain_mm': [12, 4, 18]})
print(df[df['rain_mm'] >= 10])`, "The mask can also be written inline.", ["pandas"]),
      ];
    case "plot-labels-example":
      return [
        example(`import matplotlib.pyplot as plt
months = [1, 2, 3]
rainfall = [80, 65, 90]
plt.plot(months, rainfall)
plt.xlabel('Month')
plt.ylabel('Rainfall (mm)')
plt.title('Monthly Rainfall')
plt.show()`, "Labels make a plot readable.", ["matplotlib"]),
      ];
    case "random-scatter-example":
      return [
        example(`import numpy as np
import matplotlib.pyplot as plt
x = np.random.randint(10, 60, 12)
y = np.random.randint(20, 80, 12)
plt.scatter(x, y)
plt.show()
print(len(x))`, "Generate and plot random points.", ["numpy", "matplotlib"]),
      ];
    case "methods-example":
      return [
        example(`word = 'notebook'
print(word.upper())
print(word.replace('n', 'N'))`, "String methods return a modified string."),
        example(`tools = ['terminal']
tools.append('editor')
print(tools)`, "List methods can change the list in place."),
        example(`s = '  hello world  '
print(s.strip().upper())`, "Methods can be chained together."),
      ];
    default:
      return [];
  }
}
