# wAPIs

[![Build Status](https://travis-ci.org/AhmedAbdraboh/wAPIs.svg?branch=master)](https://travis-ci.org/AhmedAbdraboh/wAPIs)



**This is a part of carrier app (RESTFUL API) that allows search in a list of tasks by any of the following:**

* Driver Name
* Courrier
* status

**It also allows to sort the list of tasks by any of the following:**

* Delivery Date
* Status
* Courier
* Task Start Date

And all of that is done in the front-end basis.

**It also allows to update the pending tasks status by make it as completed or failed and click any task to see the delivery path on the map**


## Requirements

* Install Docker <https://docs.docker.com/engine/installation/>
* Install Docker <https://docs.docker.com/compose/install/>


## Instructions

* clone Repository then `cd ./wAPIs`

* run docker compose

      docker-compose up --build

* to test the application: `docker run -it wapis_wimo npm test`

* or to run it without docker

* run

      npm install 
* then install front-end packages to be able to test them
      cd client && npm install
* then go back to the app folder by cd .. then:

      npm start

* to test the application without docker: `npm test`

Now open from your browser <http://localhost:3000>