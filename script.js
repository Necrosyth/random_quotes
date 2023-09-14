const btn= document.getElementById("btn")
const output=document.querySelector(".output")
const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
    "The only thing necessary for the triumph of evil is for good men to do nothing. - Edmund Burke",
    "Life is really simple, but we insist on making it complicated. - Confucius",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The only true wisdom is in knowing you know nothing. - Socrates",
    "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr.",
    "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
    "The journey of a thousand miles begins with a single step. - Lao Tzu",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. - Maya Angelou",
    "If you want to lift yourself up, lift up someone else. - Booker T. Washington",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment. - Buddha",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "The best revenge is massive success. - Frank Sinatra",
    "I have not failed. I've just found 10,000 ways that won't work. - Thomas A. Edison",
    "It is during our darkest moments that we must focus to see the light. - Aristotle Onassis",
    "Don't count the days, make the days count. - Muhammad Ali",
    "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it. - Jordan Belfort",
    "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
    "If you want to achieve greatness stop asking for permission. - Anonymous",
    "The harder I work, the luckier I get. - Samuel Goldwyn",
    "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
    "Don't be afraid to give up the good to go for the great. - John D. Rockefeller",
    "I find that the harder I work, the more luck I seem to have. - Thomas Jefferson",
    "The only thing that stands between you and your dream is the will to try and the belief that it is actually possible. - Joel Brown",
    "The road to success and the road to failure are almost exactly the same. - Colin R. Davis",
    "Success is walking from failure to failure with no loss of enthusiasm. - Winston S. Churchill",
    "Success is not just about making money. It's about making a difference. - Unknown",
    "I never dreamed about success. I worked for it. - Estee Lauder",
    "Success is not in what you have, but who you are. - Bo Bennett",
    "Success is the sum of small efforts, repeated day in and day out. - Robert Collier",
    "Success is not how high you have climbed, but how you make a positive difference to the world. - Roy T. Bennett",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Success is a state of mind. If you want success, start thinking of yourself as a success. - Dr. Joyce Brothers",
    "The successful warrior is the average man, with laser-like focus. - Bruce Lee",
    "Success is simple. Do what's right, the right way, at the right time. - Arnold H. Glasow",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs"
  ];
  
  

btn.addEventListener("click",()=>{
    const random=Math.floor(Math.random()*quotes.length)
    // console.log(random)

output.textContent=quotes[random]
    // console.log("clicked")

})