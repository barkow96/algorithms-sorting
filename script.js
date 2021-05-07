//ELEMENTS SELECTORS
const inputList = document.querySelector("#inputList");
const minValue = document.querySelector("#minValue");
const maxValue = document.querySelector("#maxValue");
const quantity = document.querySelector("#quantity");
const methods = document.querySelector("#methods");
const generateBtn = document.querySelector("#generateBtn");
const sortBtn = document.querySelector("#sortBtn");
const result = document.querySelector(".result");
const sortedList = document.querySelector("#sortedList");
const timeNeeded = document.querySelector("#timeNeeded");

//STATE OF THE APPLICATION
let array = [];
let min = null;
let max = null;
let quant = null;
let method = "bubble";
let startTime;
let endTime;
let time;

//FUNCTION THAT GENERATES "N" RANDOM NUMBERS BETWEEN "MIN" AND "MAX"
const generateNumbers = (min, max, N) => {
    let array = new Array(N);
    const range = max-min;

    for (let i=0; i<N; i++) array[i] = (Math.floor(min)+Math.floor(Math.random()*(range+1)));

    return array;
}

//FUNCTION THAT SWAPS ELEMENTS WITH INDICES "IND1" AND "IND2" IN ARRAY "ARR"
const swap = (arr, ind1, ind2) => {
    const buffer = arr[ind2];
    arr[ind2] = arr[ind1];
    arr[ind1] = buffer;
}

//IMPLEMENTATION OF BUBBLE SORT ALGORITHM
const bubbleSort = (arr) => {
    let length = arr.length;
    let finish = length==1 ? true : false; 

    while (!finish) {
        finish = true;
        for (let i=0; i<length; i++) {
            if ((i+1)<=(length-1)) {
                if (arr[i+1] < arr[i]) {
                    swap(arr, i, i+1);
                    finish = false;
                }
            }
        }

        length--;
    }

    return arr;
}

//IMPLEMENTATION OF SELECTION SORT ALGORITHM
const selectionSort = (arr) => {
    let currMin;
    let currMinIndex;
    let startIndex = 0;
    let length = arr.length;
    let finish = length==1 ? true : false; 

    while (!finish) {
        currMin = arr[startIndex];
        currMinIndex = startIndex;

        for (let i=startIndex; i<length; i++) {
            if (arr[i] < currMin) {
                currMin = arr[i];
                currMinIndex = i;
            }
        }

        if (startIndex != currMinIndex) swap(arr, startIndex, currMinIndex);
   
        startIndex++;
        if (startIndex == length-1) finish = true;
    }

    return arr;
}

//IMPLEMENTATION OF QUICK SORT ALGORITHM
const quickSort = (arr, leftIndex, rightIndex) => {
    const partition = (arr, leftIndex, rightIndex) => {
        const middleElement = arr[Math.floor((rightIndex+leftIndex)/2)];
        let i = leftIndex;
        let j = rightIndex;

        while (i <= j) {
            while (arr[i] < middleElement) i++;
            while (arr[j] > middleElement) j--;

            if (i <= j) {
                swap(arr, i, j);
                i++;
                j--;
            }
        }
        return i;
    }

    let index;
    if (arr.length > 1) {
        index = partition(arr, leftIndex, rightIndex);
        if (leftIndex < index-1) quickSort(arr, leftIndex, index-1);
        if (index < rightIndex) quickSort(arr, index, rightIndex); 
    }
    return arr;
}

//EVENTS HANDLING
inputList.addEventListener("change", () => {
    console.log(inputList.value);
    const inputText = inputList.value;

    const regex1 = /,+/g;
    const text = inputText.replace(regex1, ".");

    const regex2 = /(-|-\.|-,|\.|,)?\d+(,\d|\.\d)?(\d+)?/g;
    const matchArrays = [...text.matchAll(regex2)];

    array = [];
    for (let i=0; i<matchArrays.length; i++) array.push(parseFloat(matchArrays[i][0]));

    let listOfNumbers = "";
    for (let i=0; i<array.length; i++) listOfNumbers += (array[i] + " ");

    inputList.value = listOfNumbers.slice(0, -1);
})

minValue.addEventListener("change", () => {
    min = parseInt(minValue.value);
    if (max == null) {max = min; maxValue.value = max;}

    if (min > max) {minValue.value = max; min = max;}
});

maxValue.addEventListener("change", () => {
    max = parseInt(maxValue.value);
    if (min == null) {min = max; minValue.value = min;}

    if (min > max) {maxValue.value = min; max = min;}
});

quantity.addEventListener("change", () => {
    quant = Math.floor(quantity.value);
    quantity.value = quant;
});

methods.addEventListener("change", () => {
    method = methods.value;
});

generateBtn.addEventListener("click", () => {
    let listOfNumbers = "";

    if (min != null && max != null && quant != null) {
        array = generateNumbers(min, max, quant);
        for (let i=0; i<array.length; i++) listOfNumbers += (array[i] + " ");
    } else alert("Enter all data!");

    inputList.value = listOfNumbers.slice(0, -1);
});

sortBtn.addEventListener("click", () => {
    if (array.length>0) {
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
                quickSort(array, 0, array.length-1);
                endTime = new Date().getTime();
                break;
        }

        time = endTime-startTime;

        result.classList.add("show");
        timeNeeded.innerHTML = time;
        sortedList.innerHTML = array;
    } else alert("There is no list to sort!");
});