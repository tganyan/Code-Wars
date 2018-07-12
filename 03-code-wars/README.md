Code Wars Challenge 03

This one was a bit more difficult. Our first attempt was overly complex and unstable, using multiple if statements inside of a for loop with mixed results. Our second attempt is much more elegant, and utilizes regular expressions to get the job done. Quick explanation below: 

String(num)                     --- Pass num arg into string object
.replace(                       --- Replace with the following logic
    /([13579])(?=[13579])/g,    --- Search the number string current postion for a match of 13579, also search next position for                                  same parameter and do so globally
    '$1-');                     --- If a match, add a dash to that number