# Sorting Algorithms Comparison

A web application for comparing sorting algorithms (Bubble Sort, Selection Sort, Quick Sort) written in TypeScript.

## Requirements

- Node.js (v14 or newer)
- Yarn (this project uses Yarn as package manager)

## Installation

```bash
yarn install
```

> **Note:** This project uses `yarn` as the package manager. Dependencies are tracked in `yarn.lock`.

## Development

### Build TypeScript

Compile the TypeScript project to JavaScript:

```bash
yarn build
```

Or in watch mode (automatic compilation on changes):

```bash
yarn watch
```

### Run the Application

Start the development server on **port 3000**:

```bash
yarn start
```

The application will automatically open in your browser at:

```
http://localhost:3000
```

### Development Mode

Run both TypeScript compiler (watch mode) and development server simultaneously on **port 3000**:

```bash
yarn dev
```

## Project Structure

```
.
├── src/
│   ├── algorithms/          # Sorting algorithms
│   │   ├── bubbleSort.ts    # Bubble Sort implementation
│   │   ├── selectionSort.ts # Selection Sort implementation
│   │   ├── quickSort.ts     # Quick Sort implementation
│   │   └── index.ts         # Algorithms barrel export
│   ├── utils/               # Utility functions
│   │   ├── helpers.ts       # Helper functions (swap, generateNumbers)
│   │   └── index.ts         # Utils barrel export
│   └── script.ts            # Main application script
├── dist/                    # Compiled JavaScript
│   ├── algorithms/
│   ├── utils/
│   └── script.js
├── index.html               # HTML page
├── styles.css               # CSS styles
├── package.json             # Package configuration
├── yarn.lock                # Yarn dependency lock file
├── tsconfig.json            # TypeScript configuration
└── .gitignore               # Git ignored files
```

## Features

- Generate random list of numbers
- Manual input of number list
- Choose sorting algorithm (Bubble Sort, Selection Sort, Quick Sort)
- Execution time measurement
- Display sorted list

## Usage

1. Install dependencies: `yarn install`
2. Run development mode: `yarn dev`
3. The app will open in your browser on `http://localhost:3000`

## Development Workflow

### Quick Start (Recommended)

Run everything with one command:

```bash
yarn dev
```

This will:

- Compile TypeScript in watch mode (auto-recompile on changes)
- Start the development server on port 3000
- Open the app in your browser

### Manual Workflow

Alternatively, run commands in separate terminals:

```bash
# Terminal 1 - Watch and compile TypeScript
yarn watch

# Terminal 2 - Run the development server
yarn start
```

## Author

Bartosz Kowal
