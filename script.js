const countValue = document.querySelector('#counter');  // to fetch the value count from the html element we have used query selector.
// OR
// const countValue = document.getElementById('counter');

const increment = () => {
    // get the value from UI
    let value = parseInt(countValue.innerText);   // this will provide the data written inside in the form of a string, which will be converted to int using parseInt().
    // update value
    value = value + 1;
    // set the value onto the UI
    countValue.innerText = value;
};

// OR

// function increment() {
//     // get the value from UI
//     let value = parseInt(countValue.innerText);   // this will provide the data written inside in the form of a string, which will be converted to int using parseInt().
//     // update value
//     value = value + 1;
//     // set the value onto the UI
//     countValue.innerText = value;
// };

const decrement = () => {
    // get the value from UI
    let value = parseInt(countValue.innerText);   // this will provide the data written inside in the form of a string, which will be converted to int using parseInt().
    // update value
    value = value - 1;
    // set the value onto the UI
    countValue.innerText = value;
};