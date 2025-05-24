const buttonAPI = document.getElementById('apiButton');
document.getElementById('apiButton').addEventListener('click', function () {
    const button = this;
    button.disabled = true;
    button.textContent = 'Loading...';
    fetch('https://api.ipify.org/')
        .then(response => {
              buttonAPI.style.color = 'white';
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(ip => {
            setTimeout(() => {
                button.textContent = ip;
                button.disabled = false;
            }, 1000);
        })
        .catch(error => {
            console.error('Error fetching IP:', error);
            button.textContent = 'Error getting IP';
            button.disabled = false;
        });
});