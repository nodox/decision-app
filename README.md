


## Design Choices


### Server
- Nodejs. Later on typescript.

### Primary data store
- Mongodb. Not sure if this would be the best choice when it comes to full text search, or performing analytics to gain insights into decision making processes.

## Search engine
- Use Elasticsearch as the document store




## Messaging Example
https://www.zeolearn.com/magazine/background-processing-in-node-js


## Expired Decisions Flow
Ideal scenario: When a decision expires we send an email, we need some type of trigger

- cron runs every day at 3am
- cron sends a message to check for expired messages
- expired-decisions-retriever recieves message from cron to look for expried decisions
- (EDR) gets all expired decisions starting from the last record extracted 
  - can keep track of the last retireved decisions in redis cache
- 
https://breadcrumbscollector.tech/what-is-celery-beat-and-how-to-use-it/
https://github.com/Enforcer/celery-beat-example
https://github.com/Automattic/kue#delayed-jobs




### Setup project
Backend: MONGO_DATABASE_URL=mongodb://localhost:27017/decision_app npm run develop