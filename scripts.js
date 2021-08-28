let baseURL = 'http://ron-swanson-quotes.herokuapp.com/v2/quotes';

//! Global elements to target
let quoteContainer = document.querySelector('.quoteContainer');
let logo = document.getElementById('ronLogo');

//! Event Listener
logo.addEventListener('click', fetchQuote);

async function fetchQuote() {

    const response = await fetch(baseURL);
    const json = await response.json();
    displayQuote(json);

}

//! Displaying our Quote:
let displayQuote = data => {
    console.log(data);
    let logoContainer = document.getElementById('genQuote');

    //! Remove Logo
    logoContainer.firstElementChild != null ? 
    logoContainer.removeChild(logo) : 
    null;
    

    //! Set Elements:
    let quoteBy = document.createElement('p');
    quoteBy.className = 'quoteBy';
    quoteBy.innerText = '- Ron Swanson';
    quoteBy.style = 'font-size: 3rem; font-family: billionDreams; color: #3a2718;' 
    

    let quote = document.createElement('h1');
    quote.className = 'quote';
    quote.innerText = `${data[0]}`;
    console.log(data[0].length)
    quote.style = 'font-family: pinewood; color: #3a2718;';

    //! Font Conditional

    if(data[0].length >= 50 && data[0].length <= 150) {
        quote.style.fontsize = '5rem';
    } else if (data[0].length < 50){
        quote.style.fontsize = '7rem';
    } else {
        quote.style.fontsize = '3.5rem';
    }
        
    let img = document.createElement('img');
    img.src ='./assets/ron.png';
    img.alt = 'Ron Swanson'    
    img.style = 'height: 100px; width: auto;'

    //! Appending:
    quoteContainer.appendChild(quote);
    quoteContainer.appendChild(quoteBy);
    quoteContainer.appendChild(img);

    img.addEventListener('click', () => {
        quoteContainer.removeChild(quote);
        quoteContainer.removeChild(quoteBy);
        quoteContainer.removeChild(img);
        fetchQuote();

    })
}

