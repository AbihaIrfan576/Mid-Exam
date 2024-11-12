
      $(document).ready(function(){
        $('#exploreAirBtn').on('click', function(event) {
            var target = $('.mission-section'); 
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top - $('.navbar').outerHeight() 
                }, 1000); 
            }
        });
       
         
    });
    function scrollToCampusNews() {
       
        document.getElementById("campusNews").scrollIntoView({ behavior: "smooth" });
    }
    

    
document.getElementById("moreAboutBtn").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
 // JavaScript code to display a random quote
const quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "In the middle of every difficulty lies opportunity. – Albert Einstein",
    "Life is what happens when you’re busy making other plans. – John Lennon",
    "The best time to plant a tree was 20 years ago. The second best time is now. – Chinese Proverb"
  ];
  
  function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
  
    // Select the quote container and update it with the random quote
    document.getElementById('quoteContainer').innerHTML = `<p>${quote}</p>`;
  }
  
  // Call the function to display the quote when the page loads
  window.onload = displayRandomQuote;
  