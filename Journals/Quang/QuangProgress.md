# CMPE 172 Team Project - Quang Progress

All commits: https://github.com/nguyensjsu/fa21-172-team-10/commits?author=qnguyensjsu

## Week Nov 10 - Nov 16

- Discussion Points:
  - Project Requirements
  - Project Store Selection (Selected AirBnb)

## Week Nov 17 - Nov 22
- Researched Okta. Unable to get Okta to work.
- Implemented JWT authentication service at airbnb-backend following a Youtube tutorial.
- Added MySQL database to Authentication service

## Week Nov 23 - Nov 30
- Realized we underestimated AirBnb's complex business logic (inputting dates, checking availability, location management, etc)
- Stripped the requirements down to basic Starbucks app business logic (get item catalog, order item)

## Week Dec 1 - Dec 6

### Dec 1 - 3
- Resolved a bug related to authentication. Authentication will error out if the User model isn't given an empty constructor
- Added docker-compose build for authentication
- Researched Kong deployment

### Dec 4 - 6
- Deployed authentication service and test-deployed unfinished frontend behind Kong gateway

- Struggled with CORS when testing React frontend locally with deployed endpoints, but CORS goes away when both frontend and services are deployed behind the same API gateway.

- Struggled with fixing environmental variables between production version and development version. Ended up just changing them manually when I deploy.

- Wasted a lot of time because of a bug in react-scriptsv3.4.1 when deployed to Docker

- Deployed microservices done by other team members.

- Fixed a few remaining bugs in various services when deployed


