
// //Task: 1

// function displayMessage() {
//     console.log("Display are after 5 second");
// }

// // Set a timeout to call the displayMessage function after 5000 milliseconds (5 seconds)
// setTimeout(displayMessage, 5000);

// function delayedGreeting(name, delayTime) {
//     // Use setTimeout to delay the execution of the greeting message
//     setTimeout(() => {
//         console.log(`Hello, ${name}!`);
//     }, delayTime);
// }

// // Example usage
// delayedGreeting('Alice', 2000);


// Task : 2

// function tellJoke() {
//     // Function to log the joke
//     const logJoke = () => {
//         console.log("Why don’t scientists trust atoms? Because they make up everything!");
//     };

//     // Start logging the joke every 2 seconds
//     const jokeInterval = setInterval(logJoke, 2000);

//     // Stop logging the joke after 10 seconds
//     setTimeout(() => {
//         clearInterval(jokeInterval);
//         console.log("That's enough jokes for now!");
//     }, 10000);
// }

// // Call the tellJoke function to see it in action
// tellJoke();

// Task : 3

async function fetchDataAndLog() {
    const apiUrl = 'https://v2.jokeapi.dev/joke/Programming?type=single'; // Example API URL

    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);

        // Check if the response is OK (status is in the range 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parse the response as JSON
        const data = await response.json();

        // Log a success message and the data
        console.log('Data fetched successfully:', data);
    } catch (error) {
        // Log an error message if something goes wrong
        console.error('Error fetching data:', error);
    }
}

// Call the function to fetch data and log the result
fetchDataAndLog();


