(function(module){
<<<<<<< HEAD
  var followers = {};
  followers.all = [];
=======
  var followers = {}
  followers.all = []
>>>>>>> 03e87effd900d8eafbc21e7225b273e2ccbc29c2

  followers.requestFollowers = function(callback){
    $.ajax({
      url: 'https://api.github.com/users/pauwlsky/followers',
      type: 'GET',
      headers: {
        'Authorization' : 'token ' + githubToken
      },
      success: function(data, message, xhr){
<<<<<<< HEAD
        console.log('success');
        followers.all = data;
        console.log(repos.followers);
=======
        console.log('success')
        followers.all = data;
        console.log(repos.followers)
>>>>>>> 03e87effd900d8eafbc21e7225b273e2ccbc29c2
      },
      error: function(error){
        console.log('error');
      }
    }).then(callback);
<<<<<<< HEAD
  };
=======
  }
>>>>>>> 03e87effd900d8eafbc21e7225b273e2ccbc29c2

  module.followers = followers;

})(window);
