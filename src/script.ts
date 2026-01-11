import { bubbleSort, quickSort, selectionSort } from "./algorithms";
import { generateNumbers } from "./utils";

type SortMethod = "bubble" | "selection" | "quick";

// ELEMENTS SELECTORS
const inputList = document.querySelector<HTMLInputElement>("#inputList")!;
const minValue = document.querySelector<HTMLInputElement>("#minValue")!;
const maxValue = document.querySelector<HTMLInputElement>("#maxValue")!;
const quantity = document.querySelector<HTMLInputElement>("#quantity")!;
const methods = document.querySelector<HTMLSelectElement>("#methods")!;
const generateBtn = document.querySelector<HTMLButtonElement>("#generateBtn")!;
const sortBtn = document.querySelector<HTMLButtonElement>("#sortBtn")!;
const result = document.querySelector<HTMLDivElement>(".result")!;
const sortedList = document.querySelector<HTMLSpanElement>("#sortedList")!;
const timeNeeded = document.querySelector<HTMLSpanElement>("#timeNeeded")!;

// STATE OF THE APPLICATION
let array: number[] = [];
let min: number | null = null;
let max: number | null = null;
let quant: number | null = null;
let method: SortMethod = "bubble";
let startTime: number;
let endTime: number;
let time: number;

// EVENTS HANDLING
inputList.addEventListener("change", (): void => {
  console.log(inputList.value);
  const inputText: string = inputList.value;

  const regex1: RegExp = /,+/g;
  const text: string = inputText.replace(regex1, ".");

  const regex2: RegExp = /(-|-\.|-,|\.|,)?\d+(,\d|\.\d)?(\d+)?/g;
  const matchArrays: RegExpMatchArray[] = [...text.matchAll(regex2)];

  array = [];
  for (let i = 0; i < matchArrays.length; i++) {
    array.push(parseFloat(matchArrays[i][0]));
  }

  let listOfNumbers = "";
  for (let i = 0; i < array.length; i++) {
    listOfNumbers += array[i] + " ";
  }

  inputList.value = listOfNumbers.slice(0, -1);
});

minValue.addEventListener("change", (): void => {
  min = parseInt(minValue.value);
  if (max === null) {
    max = min;
    maxValue.value = max.toString();
  }

  if (min > max) {
    minValue.value = max.toString();
    min = max;
  }
});

maxValue.addEventListener("change", (): void => {
  max = parseInt(maxValue.value);
  if (min === null) {
    min = max;
    minValue.value = min.toString();
  }

  if (min > max) {
    maxValue.value = min.toString();
    max = min;
  }
});

quantity.addEventListener("change", (): void => {
  quant = Math.floor(parseFloat(quantity.value));
  quantity.value = quant.toString();
});

methods.addEventListener("change", (): void => {
  method = methods.value as SortMethod;
});

generateBtn.addEventListener("click", (): void => {
  let listOfNumbers = "";

  if (min !== null && max !== null && quant !== null) {
    array = generateNumbers(min, max, quant);
    for (let i = 0; i < array.length; i++) {
      listOfNumbers += array[i] + " ";
    }
  } else {
    alert("Enter all data!");
  }

  inputList.value = listOfNumbers.slice(0, -1);
});

sortBtn.addEventListener("click", (): void => {
  if (array.length > 0) {
    switch (method) {
      case "bubble":
        startTime = new Date().getTime();
        bubbleSort(array);
        endTime = new Date().getTime();
        break;
      case "selection":
        startTime = new Date().getTime();
        selectionSort(array);
        endTime = new Date().getTime();
        break;
      case "quick":
        startTime = new Date().getTime();
        quickSort(array, 0, array.length - 1);
        endTime = new Date().getTime();
        break;
    }

    time = endTime - startTime;

    result.classList.add("show");
    timeNeeded.innerHTML = time.toString();
    sortedList.innerHTML = array.toString();
  } else {
    alert("There is no list to sort!");
  }
});
