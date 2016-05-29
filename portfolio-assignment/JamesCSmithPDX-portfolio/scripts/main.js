(function (module) {
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

    Project.all = projectData.map(function(el) {
      return new Project(el);
    });  //create array
  };

  //check etag json file
  Project.fetchAll = function(callback) {
    $.ajax({
      method: 'GET',
      url: 'data/portfolioProjects.json',
      success: function(data, message, xhr) {
        var etagNew = xhr.getResponseHeader('ETag');
        var etagOld = localStorage.getItem('etag');
        if (!localStorage.rawData) {
          // no local storage get from server
          Project.fetchServer(callback);
        } else if (etagNew === etagOld ) {
        //load from local
          Project.fetchLocal(callback);
        } else {
        // load from server
          Project.fetchServer(callback);
        }
        //set etag
        localStorage.setItem('etag', etagNew);
      }
    });
  };

// load json from local
  Project.fetchLocal = function(callback) {
    Project.loadAll(JSON.parse(localStorage.getItem('rawData')));
    callback();
  };


  //load json from server
  Project.fetchServer = function(callback){
    $.getJSON('data/portfolioProjects.json', function(rawData) {
      Project.loadAll(rawData);
      localStorage.setItem('rawData', JSON.stringify(rawData));
      callback();
    });
  };

  var anagram = {};

  anagram.create = function() {
    
    var name = 'JAMES SMITH';  //scramble my name
    name = name.split(''); // split name into letters
    console.log(name);
    anagram.fisherYates(name); //run the ranomd shuffle function
    console.log(name);
    // use reduce to join the random letters
    var myAnagram = name.reduce(function(prev, next, index) {
      return prev + next;
    });
    console.log(myAnagram);

    //get anagram template

    var source = $('#anagram-template').html();

    //compile the anagram
    var template = Handlebars.compile(source);
    console.log(myAnagram);
    var context = {
      hbAnagram: myAnagram
    };
    $('#anagram').append(template(context));
  };

//scrambled name function with reduce

  anagram.fisherYates = function(name) {
    var i = name.length, j, tempi, tempj;
    if ( i === 0 ) return false;
    while ( --i ) {
      j = Math.floor( Math.random() * ( i + 1 ) );
      tempi = name[i];
      tempj = name[j];
      name[i] = tempj;
      name[j] = tempi;
      console.log('fisheryates:' + name);
      return name;
    }
  };

  module.anagram = anagram; module.Project = Project;
})(window);
