International Space Station
Your task is to show the current position of the International Space Station.

To do this, you'll use the Open Notify ISS Location Now API.

The process will be:

Make the fetch request to the API
Wait for that request to come back
Wait for the request data to be turned from JSON into a JS object
Work with the data!
Use DOM Manipulation to add the latitude and longitude that is returned from the API to the page
Hint: I'd suggest setting up some HTML that JS then updates, rather than having to do lots of document.createElements.

Bonuses
Bonus One: Updating the current latitude and longitude
Instead of just showing the latitude and longitude when the page first loads, update them at a regular interval (for example, every second).

Hint: You'll have to make another API request, as well as use something like setTimeout or setInterval

Bonus Two: Showing the current position with Google Maps or Leaflet
When the page first loads, use the Google Maps API or the Leaflet API to show the current position of the ISS using a Marker (something that both Google Maps and Leaflet provide).

Bonus Three: Update the position with Google Maps or Leaflet
At regular intervals, update the position of that marker in your embedded Google Maps or Leaflet Map.

Bonus Four: Use a custom marker for ISS on Google Maps or Leaflet
Find out how to use a custom marker with the Google Maps API or the Leaflet API. Maybe use an image of the ISS?

Bonus Five: Make it pretty, plus whatever else you want
Now it is the time for you to add whatever you want! Make the page pretty, add some facts about the ISS, anything!

Resources
API Documentation
JavaScript functions/methods you'll likely need:
fetch and .json
setInterval or setTimeout
Google Maps
Documentation - Make sure you create an API key!
Leaflet
Documentation