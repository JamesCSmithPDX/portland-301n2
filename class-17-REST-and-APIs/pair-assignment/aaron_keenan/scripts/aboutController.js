(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    // REVIEW: Look at this method chaning. What is being accomplished here?
    $('#about').show().siblings().hide();
<<<<<<< HEAD

=======
>>>>>>> 03e87effd900d8eafbc21e7225b273e2ccbc29c2
    // DONE: Call a function to 'request' our repo data.
    // Pass in a view function as a callback, so our repos will render after the data is loaded.
    repos.requestRepos(repoView.index);
  };

  aboutController.followers = function(){
    $('#about').show().siblings().hide();
    followers.requestFollowers(followersView.init);
  };

  module.aboutController = aboutController;
})(window);
