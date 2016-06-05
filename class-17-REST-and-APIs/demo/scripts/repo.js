(function(module){
  var repos = {};

  repos.all = [];


  repos.requestRepos = function(callback){
    var request = $.ajax({
      url: 'https://api.github.com/user/repos',
      type: 'GET',
      headers: {
        'Authorization': 'token ' + githubToken
      },
      success: function(data, message, xhr){
        repos.all = data;
      },
      error: function(xhr, status, error){
        console.log('inside fetchAll ajax error');
        console.log('ajax error', {xhr: xhr, status: status, error: error});
      }
    });
    request.then(callback);
  };

  module.repos = repos;
})(window);
