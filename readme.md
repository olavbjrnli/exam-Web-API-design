<h3>Pokemon rater<h3>

 * Run yarn install and yarn dev to start the test server to check out the site. 
 
 pokemon rater is a site where you can sign up, log in and get a list of pokemons that are registrer on the site.
With great help from lesson 8 on Andrea's github, i have set up an express server on http://localhost:8080/.
By using and creating an restful API, which we use to post new users, and get users. This handles the authorization and authentication of the site, which are session-based via
cookies                                                                                                              

on the client side you can get information about individual pokemon, delete the pokemon you dont want on your list, and get more details about them on another site.
Here we have created an API that makes it possible to get the list of pokemons and delete them. 
Its a single page application that uses react router to navigate through the different pages. By using a headerbar, you can access every page on every different page on the site. 
I have here used GET and DELETE with JSON as data transfer format, to get the pokemons and delete them from list, but have not managed to use POST og PUT. 


When it comes to the filter function, i think i spent 10 hours trying to get something to work. It first i wanted to use the API, and make a request for all pokemons with the type i wanted. When i didnt get this to work, i started to sort() the map, but this also was something i coundt get done. Since this was something we MUST have, i made an really easy way to solve this, by rendering different tables based on a radio button value. 

Since i had trouble with filter, i did not have time to implement a rating system for the site, and therefor not able to give the userprofile any other features either. There is an option where you can change the state of the rating on the detail page, but if you press enter, it takes you to a site where the ID of the pokemon is unspecified(bug).
The site does also not have a chat function, and can not comment on anything. 

Requirements:
1. When the application starts, you must have some existing fake/test data representing valid users and items.
 Done!
 
2. Should be possible to register new users.
 Done!
3. On homepage, display all the items, with info summaries, and links to detail page. 
Items should be sorted by average number of stars.

    Done! withoute rating
4. If a user is logged in, then display a welcome message. 

    Done!
5. Homepage MUST have a filter system in which a user can filter out items based on
their category (e.g., either show all items, or only the items for a specific category).

    Done! In a really wierd and bad way.
6. In the item detail page, a logged-in user should be able to give/update his/her star rank and possibly leave one single comment (which can be updated). All comments from other users should be visible (regardless of current user being logged in). Should show on how many voters the rank was computed (e.g., “average 4.7 based
on 11 users”).
    
    Not done.
7. User account details: besides showing basic info like name and surname, also show
how many votes the user has casted.

    Not done.
8. Should have a live-chat (using WebSockets) for all the logged in users.
    
    Not done. 

Testcoverage:

File              |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
------------------|----------|----------|----------|----------|-------------------|
All files         |    31.12 |    18.18 |    26.03 |    31.12 |                   |
 client           |    21.74 |       25 |    31.91 |    21.74 |                   |
  PokemonList.jsx |    15.79 |       25 |    16.67 |    15.79 |... 54,163,188,193 |
  app.jsx         |    44.44 |      100 |     37.5 |    44.44 |    21,26,45,49,57 |
  details.jsx     |    33.33 |       20 |       50 |    33.33 |... 49,54,71,72,74 |
  headerbar.jsx   |    33.33 |    33.33 |       60 |    33.33 |... 24,27,28,32,69 |
  home.jsx        |       75 |       50 |       75 |       75 |          20,48,53 |
  index.jsx       |        0 |      100 |      100 |        0 |           1,2,3,5 |
  login.jsx       |        0 |        0 |        0 |        0 |... 62,66,67,68,75 |
  pokemon.jsx     |       75 |       50 |    66.67 |       75 |                20 |
  signup.jsx      |        0 |        0 |        0 |        0 |... 78,85,86,87,90 |
 server           |     43.2 |     3.57 |    15.38 |     43.2 |                   |
  app.js          |    63.89 |    16.67 |        0 |    63.89 |... 69,71,72,74,87 |
  repository.js   |    54.84 |        0 |       30 |    54.84 |... ,93,96,101,102 |
  routes.js       |    31.11 |        0 |       10 |    31.11 |... 12,113,116,118 |
  server.js       |        0 |        0 |        0 |        0 |... 13,14,17,18,21 |
------------------|----------|----------|----------|----------|-------------------|

 I feel that with the requirements i have finished, and the test coverage i have, this assignment meets the requirements  for an D grade. I have gotten a better grasp over a lot of the core concepts of react, webdevelopment and with managing and creating restufl API's. 
 