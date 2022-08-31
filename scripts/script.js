var body = document.body;
document.getElementById('toggler').addEventListener('change', (event) => {
  console.log(toggler);
  event.target.checked ? body.setAttribute('data-theme', 'dark') : body.setAttribute('data-theme', 'light');
});

document.getElementById('cake-button').addEventListener('click', () => {
    document.getElementById('cake').innerHTML += "<img src='/images/cake.png' alt='cake' height='200px' width='200px'>";
    document.getElementById('clear-button').style.display = "inline";
    const cakeText = document.getElementById('cake-text');
    const cakeNumber = document.getElementById('cake-number');
    cakeNumber.innerHTML = parseInt(cakeNumber.innerHTML) + 1;
    if (cakeNumber.innerHTML == 1) {
        const str = cakeText.innerHTML;
        cakeText.innerHTML = str.substring(0, str.length - 2) + "!";
    } else if (cakeNumber.innerHTML == 2) {
        const str = cakeText.innerHTML;
        cakeText.innerHTML = str.substring(0, str.length - 1) + "s!";
    } 
    if (cakeNumber.innerHTML == 5) {
        document.getElementById('cake-text-sub').innerHTML = '...feeling hungry, are we?';
    } else if (cakeNumber.innerHTML == 10) {
        document.getElementById('cake-text-sub').innerHTML = '...is this all for yourself?';
    } else if (cakeNumber.innerHTML == 15) {
        document.getElementById('cake-text-sub').innerHTML = '...by god, that\'s a lot of cakes!';
    } else if (cakeNumber.innerHTML == 20) {
        document.getElementById('cake-text-sub').innerHTML = '...that\'s it, I\'ve had enough!';
    } else if (cakeNumber.innerHTML == 25) {
        document.getElementById('cake-text-sub').innerHTML = '...';
    }
    if (cakeText.style.display == "") {
        cakeText.style.display = "block";
    } 
});

document.getElementById('clear-button').addEventListener('click', () => {
    const cakeText = document.getElementById('cake-text');
    const cakeNumber = document.getElementById('cake-number');
    if (cakeNumber.innerHTML == 1) {
        const str = cakeText.innerHTML;
        cakeText.innerHTML = str.substring(0, str.length - 1) + "s!";
    } 

    document.getElementById('cake').innerHTML = "";
    document.getElementById('cake-text-sub').innerHTML = "";
    document.getElementById('cake-number').innerHTML = 0;
});