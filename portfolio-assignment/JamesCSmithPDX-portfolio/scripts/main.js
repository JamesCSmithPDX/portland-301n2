// var projects=[];

// Contructor for new portfolio project
function Project (post) {
  this.title = post.title; //name of project
  this.projectType = post.projectType; //project category
  this.contributor = post.contributor;
  this.contributorUrl = post.contributorUrl;
  this.postDate = post.postDate;
  this.imgSrc = post.imgSrc;
  this.imgAlt = post.imgAlt;
  this.projDescription = post.projDescription;
};

Project.all = [];

// build a blog post
Project.prototype.toHtml = function() {
  //get the template
  var portfolioScript = $('#portfolio-template').html();

  //compile the portfolio
  var thePortfolio = Handlebars.compile(portfolioScript);

  //calculate the posted days ago amount
  this.daysAgo = parseInt((new Date() - new Date(this.postDate))/60/60/24/1000);
  this.publishStatus = this.postDate ? 'published ' + this.daysAgo + ' days ago' : '(draft)';

//return post to toHtml function
  return thePortfolio(this);
};

//sort blog data, crereate array, append to page
Project.loadAll = function(projectData){
  projectData.sort(function(a,b) {
    return (new Date(b.postDate)) - (new Date(a.postDate));
  });  //sort by date

  projectData.forEach(function(el) {
    Project.all.push(new Project(el));
  });  //create array
};

Project.fetchAll = function(){
  if (localStorage.rawData) {
    Project.loadAll(
      JSON.parse(localStorage.getItem('rawData'))
      );
    projectView.initIndexPage(); //DONE: Change this fake method call to the correct one that will render the index page.
  } else {
    $.getJSON('data/portfolioProjects.json', function(rawData) {
      Project.loadAll(rawData);
      localStorage.setItem('rawData', JSON.stringify(rawData));
    });
    projectView.initIndexPage();
  }
};
