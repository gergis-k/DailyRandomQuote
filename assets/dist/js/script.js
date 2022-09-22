// Quotes List
var Quotes = [];

// Fetch Quotes
const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://type.fit/api/quotes",
    "method": "GET"
}
$.ajax(settings).done(function (response) {
    Quotes = JSON.parse(response);
});

// Get elements from DOM
var quote = document.getElementById("quote");
var author = document.getElementById("author");

// Copy button
var copyBtn = document.getElementById("copyBtn");

// generateQuote function
function generateQuote() {
    var random;
    do {
        random = Math.floor(Math.random() * Quotes.length);
    } while (Quotes[random].author == null || Quotes[random].text == null);
    quote.innerHTML = `"${Quotes[random].text}"`;
    author.innerHTML = Quotes[random].author;
    disableCopyBtn();
}

// Copy to clipboard function
function copyToClipboard() {
    var _quote = document.getElementById("quote").innerHTML;
    var _author = document.getElementById("author").innerHTML;
    navigator.clipboard.writeText(`${_quote} -- ${_author}`)
        .then(() => {
            alert("Text copied to clipboard...")
        })
        .catch(err => {
            alert("Something went wrong ", err);
        });
}

// Disabel & Enable Copy button
function disableCopyBtn() {
    if (quote.innerText == "")
        copyBtn.disabled = true;
    else
        copyBtn.disabled = false;
}

// Main function (self-invoked function)
(function () {
    disableCopyBtn();
})()