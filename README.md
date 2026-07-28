# Python Learning Site

A small Vite/React site for teaching Python through short lesson modules, quizzes, runnable code exercises, and dataset challenges.

## Running The Site

Install dependencies once:

```sh
npm install
```

Start the local dev server:

```sh
npm run dev
```

## Deploying the site 

run the following locally

```sh
export NVM_DIR="$HOME/.nvm" && . "$NVM_DIR/nvm.sh" && nvm use v20.20.2
npm run build
npx gh-pages -d dist -b gh-pages --repo https://github.com/neuroinformatics-unit/osss-python-prep
```


## Where Content Lives

Course and lesson content is in `src/data/curriculum/`.

Each file is one module:

- `pythonFoundations.ts`
- `collectionsIndexing.ts`
- `functionsModules.ts`
- `controlFlow.ts`
- `packagesNumpy.ts`
- `pandasPlotting.ts`
- `errorsObjectsStructure.ts`
- `assignmentsSupport.ts`

The module order is controlled by `src/data/curriculum.ts`. That file imports each module and exports the final `courses` array used by the app.

Shared lesson helper functions live in `src/data/lessonBuilders.ts`. 

## Editing An Existing Lesson

Open the module file in `src/data/curriculum/` and edit the relevant lesson entry.

Most lessons use one of these helper functions:

```ts
read(id, title, summary, concepts, body)
workshop(id, title, summary, concepts, body)
quiz(id, title, summary, concepts, body, prompt, options, answer, explanation)
code(id, title, summary, concepts, body, prompt, starterCode, expectedOutputContains, expectedIncludes, packages)
dataset(id, title, summary, concepts, body, datasetPath, mission, starterCode, expectedOutputContains, packages, hints)
```

The `body` field is an array of paragraphs. Inline Markdown-style links and inline code are supported in lesson text.

Keep lesson `id` values stable once published. Progress and exercise history are keyed by lesson id.

## Adding A New Lesson

Add a new lesson object to the `lessons` array in the relevant module file.

Example read-only lesson:

```ts
read("reading-files", "Reading Files", "Use Python to open and inspect text files.", ["files", "open"], [
  "Python can read plain text files using `open()`.",
  "Use a `with` block so the file is closed automatically.",
])
```

Example code exercise:

```ts
code("average-two-values", "Practice: Average Two Values", "Calculate and print a mean.", ["operators", "print"], [
  "Store intermediate values with clear variable names.",
], "Calculate the average of `a` and `b`, then print it.", "a = 10\nb = 20\n\n# Calculate the average.\n", ["15"], ["print"])
```

For code exercises:

- `expectedOutputContains` checks for strings in the program output (case-insensitive).
- `expectedIncludes` checks that the submitted code includes important syntax or function names.
- `packages` lists Pyodide packages to load, such as `["numpy"]` or `["pandas", "matplotlib"]`.
- Use `expectedPlotCount` when the exercise should create plots.

## Adding A New Module

Create a new file in `src/data/curriculum/`:

```ts
import type { Course } from "../types";
import { code, read } from "../lessonBuilders";

export const fileHandling: Course = {
  id: "file-handling",
  number: 9,
  title: "File Handling",
  theme: "Files",
  description: "Reading and writing local files with Python.",
  accent: "#111111",
  lessons: [
    read("file-paths", "File Paths", "Files live at paths.", ["files", "paths"], [
      "A path tells Python where to find a file.",
    ]),
  ],
};
```

Then import it and add it to `courses` in `src/data/curriculum.ts`.

## Images And Data Files

Static files go in `public/`.

- Put lesson images under `public/images/...`.
- Put CSV/XLSX files under `public/data/...`.
- Refer to public files with root-relative paths, for example `/images/session1/slide09-01.png` or `/data/public_hospital_list.csv`.

To add images to a lesson, spread a `read()` lesson and add an `images` array:

```ts
{
  ...read("terminal-basics", "The Terminal", "Use commands to run tools.", ["terminal"], [
    "The terminal is a text interface for running commands.",
  ]),
  images: [
    {
      src: "/images/session1/slide09-01.png",
      alt: "Terminal command typed into a command line",
      caption: "Commands are typed directly into the terminal.",
    },
  ],
}
```

For dataset lessons, use `csvBase` from `lessonBuilders.ts`:

```ts
dataset("hospital-mission", "Public Hospitals", "Analyse a hospital CSV.", ["pandas"], [
  "Load the data and answer a question from it.",
], `${csvBase}/public_hospital_list.csv`, "Print the number of rows.", "import pandas as pd\npath = '/data/public_hospital_list.csv'\n", ["100"], ["pandas"], ["Use `pd.read_csv(path)`."])
```

## Code Examples

Longer display examples that appear inside lesson pages are kept in `src/data/codeExamples.ts`.

Use this when an example is reusable or too large to keep comfortably inside the lesson body. Match examples by lesson id.

## Content Checklist

Before finishing a content change:

1. Keep ids unique and descriptive.
2. Check that any linked image or dataset exists in `public/`.
3. For exercises, make the starter code valid Python.
4. For exercises, make expected output specific enough to catch mistakes.
5. Run `npm test`.
6. Run `npm run build` before deploying.
