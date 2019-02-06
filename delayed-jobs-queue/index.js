const kue = require('kue')
const queue =  kue.createQueue({
  redis: {
    port: 6379,
    host: '127.0.0.1',
  }
});

const data =  {
  title: 'Account renewal required', 
  to: 'tj@learnboost.com',
  template: 'renewal-email',
} 

var email = queue.create('email', data).delay(10000)
.priority('high')
.save();

kue.app.listen(7000);
