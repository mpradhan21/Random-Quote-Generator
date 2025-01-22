const express = require('express');
const app = express();
const quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Success is not the key to happiness. Happiness is the key to success. – Albert Schweitzer",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "Your time is limited, so don't waste it living someone else's life. – Steve Jobs",
    "Do what you can, with what you have, where you are. – Theodore Roosevelt"

];
app.get('/quote', (req,res)=>{
    const randomIndex =
    Math.floor(Math.random()* quotes.length);
    res.json({quote:
        quotes[randomIndex]});
});
const PORT= 3008;
app.listen(PORT, () => {
   console.log(`Server running on http://localhost:${PORT}`
   );
});
