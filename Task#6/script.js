const buttonAPI = document.getElementById('apiButton');
document.getElementById('apiButton').addEventListener('click', function () {

    fetch('https://api.ipify.org/')
        .then(response => {
            buttonAPI.style.color = 'white';
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(ip => {
            console.log('Your IP address is:', ip);
        })
        .catch(error => {
            console.error('Error fetching IP:', error);
        });
});