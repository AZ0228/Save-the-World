function fetchEmissionsData(query, value) {
    // encode the query and value to ensure the URL is constructed properly
    const encodedValue = encodeURIComponent(countryName);
    const url = `/info/${encodedValue}`; // construct the URL with the encoded query and value

    fetch(url) // use fetch to send a GET request to the server
        .then(response => {
            // check if the response is ok (status code 200-299)
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json(); // parse the JSON in the response
        })
        .then(data => { // data processing, feel free to remove below, for testing purposes only
            console.log('Success:', data);
            const result = document.getElementById('qresult');
            result.innnerHTML = '';
            result.innerHTML += `<p>Result: ${data["result"]}, Time ${data["time"]}</p>`;
        })
        .catch(error => {
            console.error('Error:', error); // handle any errors that occurred during the fetch
        });
}
