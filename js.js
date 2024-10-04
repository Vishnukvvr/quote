const quoteBlock = document.querySelector('blockquote');
const authorSpan = document.querySelector('span');
const newQuoteBtn = document.getElementById('btn1');
const postQuoteBtn = document.getElementById('btn2');

const quotes = [
    { quote: "The best way to predict the future is to create it.", author: "Peter Drucker" },
    { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { quote: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { quote: "The road to success and the road to failure are almost exactly the same.", author: "Colin R. Davis" },
    { quote: "It is better to fail in originality than to succeed in imitation.", author: "Herman Melville" },
    { quote: "Opportunities don't happen, you create them.", author: "Chris Grosser" },
    { quote: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
    { quote: "Don't be afraid to give up the good to go for the great.", author: "John D. Rockefeller" },
    { quote: "I find that the harder I work, the more luck I seem to have.", author: "Thomas Jefferson" },
    { quote: "Success is not how high you have climbed, but how you make a positive difference to the world.", author: "Roy T. Bennett" },
    { quote: "Try not to become a man of success. Rather become a man of value.", author: "Albert Einstein" },
    { quote: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill" },
    { quote: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
    { quote: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { quote: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { quote: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
    { quote: "The only place where success comes before work is in the dictionary.", author: "Vidal Sassoon" },
    { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { quote: "Courage is resistance to fear, mastery of fear, not absence of fear.", author: "Mark Twain" }
];

function getNewQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];
    quoteBlock.textContent = `"${selectedQuote.quote}"`;
    authorSpan.textContent = `→${selectedQuote.author}`;
}

newQuoteBtn.addEventListener('click', getNewQuote);

function postOnTwitter() {
    const currentQuote = quoteBlock.textContent;
    const currentAuthor = authorSpan.textContent;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(currentQuote)} ${encodeURIComponent(currentAuthor)}`;
    window.open(twitterUrl, '_blank');
}

postQuoteBtn.addEventListener('click', postOnTwitter);

getNewQuote();

