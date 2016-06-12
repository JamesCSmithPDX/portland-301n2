# Announcements - Sun Jun 12th

### 20th Class - Lecture 13 Deployment / Lab 13 Deployment

### Get your reviews in

### Make Up Class

* Sat Jun 18th Class Makeup - no class on Sun Jun 19th (NodePDX)

### Assignments for this Week

* ?????

	
### For those following along
`git checkout -b sandbox`

Remember to add and commit any changes into your sandbox. This will avoid future headaches and merge conflicts.

# Review

### Git Hints

Before checking in or creating a new branch, you should perform the following:

```
git pull origin master
git pull upstream master
git push origin master
```

This will sync your master with the class's master repo and help avoid conflicts.

# Learning Objectives

Deployment:

* Be able to push a dev site to production, so the world can see it. 
* Understand the difference between a static page and a dynamically generated app page



# Lecture

* Dev vs Production environment
* What we look for in production env
* What to do with the GitHub token?
* How to deploy to Heroku (step by step)

Deployment-workshop directory: 

* Walk through an application deployment



# Demo

Walk thru this [tutorial](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction):

### Add a new application

1. Create Heroku Login
2. Download and install toolbelt
3. Login in via command line `heroku login`
4. Clone `git clone https://github.com/heroku/node-js-getting-started.git`
5. `cd node-js-getting-started`
6. Create the hroku app `heroku create kbrumer-cf-001`. Note both the URL and the git repo:
	* `https://kbrumer-cf-001.herokuapp.com/`
	* `https://git.heroku.com/kbrumer-cf-001.git`
7. Deploy `git push heroku master`
8. Check dynamos `heroku ps:scale web=1`
9. Tail the logs `heroku logs --tail`. `Ctrl+C` to stop.
10. Check your `Procfile`. [source](https://devcenter.heroku.com/articles/procfile)
11. Scale the app `heroku ps`
12. Undertand the role of `package.json`. This is not only just for Heroku, but for all `node` apps.
13. Run it locally `heroku local web`. This may need an `npm install`
14. Push local changes 
15. Set a config variable `heroku config:set TIMES=2`


### Add an existing application
1. `cd /Work/github.com/kbrumer` 
2. `mkdir heroku-demo`
3. `cd heroku-demo`
4. `git init`
5. `git add .`
6. `git commit -a "First Commit."`
7. Create a new repo in GitHub `https://github.com/kbrumer/heroku-demo-completed`
8. `git remote add origin git@github.com:kbrumer/heroku-demo-completed.git`
9. `git push -u origin master`
10. `heroku create kbrumer-cf-003`. Note the url and git repo
	* `https://kbrumer-cf-003.herokuapp.com/`
	* `https://git.heroku.com/kbrumer-cf-003.git`
11. `git remote -v`
12. `git push heroku master`
13. `heroku open`
14. `Procfile` anyone? 




# Pair Programming
```
git checkout -b class-20
cd class-20-production-deployment
cd pair-programming
unzip starter-code.zip // password is 'proxy'
mv starter-code ken-cesar

// before pull requests
git pull origin master
git pull upstream master
```


# Questions?





  






