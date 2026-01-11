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

### Run the Application

Start the development server on **port 3000**:

```bash
yarn dev
```

The application will automatically open in your browser at:

```
http://localhost:3000
```

Vite provides:
- ⚡ Lightning fast HMR (Hot Module Replacement)
- 🔥 Instant server start
- 📦 Optimized builds

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

## Build for Production

```bash
yarn build
```

The optimized files will be in the `dist/` folder.

## Development Workflow

### Quick Start (Recommended)

Run the development server with one command:

```bash
yarn dev
```

This will:
- Start Vite development server on port 3000
- Enable hot module replacement (instant updates)
- Open the app in your browser

### Manual Workflow

Build for production:

```bash
yarn build
```

## Author

Bartosz Kowal
