# nexline
nexline a web built for people to know about the brand and  for reporting bugs and requesting softwares from the nexliiine team

## what it does
1. let's users report bugs in the any nexline owned software to the team
2. let's users request free softwares from the team
3. also counts the number of users that have visited the site since it was launched

## screenshots




## How to run it locally
## BACKEND
1. clone the  backend repo and install the dependencies
     `git clone https://github.com/safo-kwesi/nexline-backend.git`
     `cd nexline-backend`
     `npm install`
2. copy the .env.example and fill in the values
3. start the server
    the backend will be running on prt 3000 default

## FRONTEND
1. clone the frontend repo
    `git clone https://github.com/safo-kwesi/nexline.git`
    `cd nexline`
2. Create a config.js file in the root with your local values:
    `const CONFIG = {API:'http://localhost:3000'}`
3. Open index.html in your browser 
         
         NOTE
The Backend only accepts request from the url set to the FRONTEND_ORIGIN in the bacjend's .env 
so you have to run your own instance of the backend locally for it to work for you.


## BUILT WITH
* HTML,CSS,JAVASCRIPT
* Express for backend and NeDB database

##  KNOWN LIMITATIONS
* Render free tier sleeps after some minutes of inactivity;
  for the backend to stay alive  a browser tab has to be open
* Admin JWT  Token is stored in sessionstorage-it expires in 8 hours and clears when the tab closes
## STATUS
* Live - reports and requests are all being passed properly

## Repo's
   * Backend Repo - https://github.com/safo-kwesi/nexline-backend.git
   * Frontend Repo - https://github.com/safo-kwesi/nexline.git

## Live Site
   https://nexline-ten.vercel.app

## Author
   Kwesi - github.com/safo-kwesi