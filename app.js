// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
//Seach and Select elements
const searchButton = document.getElementById("submitSearch");
const searchInput = document.getElementById ("searchWord");
const gifImage = document.querySelector ("#imageContainer > img");
const feedbackPara = document.getElementById ("feedback");
const apiKey = 'jZn2kVSIkqUYwaw6fy4Z3XKMHPIwpjSo';
console.log(searchButton)
// Exercise 2 Section
console.log("EXERCISE 2 & 3:\n==========\n");
searchButton.addEventListener("click",() => {//select the form not the searchButton
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=${searchInput.value}`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        gifImage.src = data.data.images.original.url;
        //Reset the value inside the text box
        searchInput.value = "";
        // Make sure the error message is cleared
        feedbackPara.textContent = "";
    })
    .catch((err) => {
      console.error(err);
      console.log(err.message);
      feedbackPara.textContent = err.message;
    })
});

console.log("EXERCISE 4 update DOM:\n==========\n");

//Exercise 4









/*
// .trim about via MDN Web Docs
const searchTerm = searchInput.value.trim();
fetch('https://api.example.com/data')
  .then(response => response.json()) // response  as JSON
  .then(data => {
    console.log(data); // Log JSON data
  })
  .catch(error => {
    console.error('Error:', error); // Log any errors that occur during the request
  });
})
console.log (apiUrl)


https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={48cc5fdd38a73a41ab463ef78ef9415b} 


//Hunters JS fetch request example

/*
fetch('https://api.openweathermap.org/data/2.5/weather?q=Vancouver&appid=48cc5fdd38a73a41ab463ef78ef9415b&units=imperial')
//consume the promise
.then((response) => {
//if no errors happen, then this will happen
//at this point, the promise has finished so we can open itup and look at the response object
console.log(response);
//.json() returns another promise
return response.json();
})
.then((data) => {
    // we unwrap the second promise to access the data
    //that was inside of the Response object
    console.log(data);
})
.catch((err) => {
    //if an error occured, then do this
    console.error(err);
})*/
