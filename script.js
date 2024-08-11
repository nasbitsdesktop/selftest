document.addEventListener("DOMContentLoaded", function() {
    // Device type detection
    const deviceType = /Mobi/.test(navigator.userAgent) ? "Mobile" : "Desktop";
    document.getElementById("device-type").textContent = deviceType;
    
    // User agent
    document.getElementById("user-agent").textContent = navigator.userAgent;
    
    // IP address retrieval using a public API
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            document.getElementById("ip-address").textContent = data.ip;
        })
        .catch(error => {
            document.getElementById("ip-address").textContent = "Unable to retrieve IP address";
            console.error('Error fetching IP address:', error);
        });
});
