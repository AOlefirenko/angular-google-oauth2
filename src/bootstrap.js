bootstrap.$inject=['$window', 'gapiAuth2Credentials', '$rootScope']

export default   function bootstrap($window, gapiAuth2Credentials, $rootScope) {
  $window.gapi.load('auth2', ()=> {
    var auth2 = gapi.auth2.init({
      client_id: gapiAuth2Credentials.client_id,
      scope: 'profile'
    });
    auth2.isSignedIn.listen(val=> {
      $rootScope.$broadcast('google:oauth2:signed-in', val);
    });
    var firstCheck = true;
    auth2.currentUser.listen((user)=> {
      if (!user.isSignedIn()) {
        return firstCheck && $rootScope.$broadcast('google:oauth2:signed-in', false),firstCheck=false;
      }
      var profile = user.getBasicProfile();
      if (!profile) return console.error('profile is undefinded');
      var id_token = user.getAuthResponse().id_token;
      var userPic = profile.getImageUrl();
      var name = profile.getName();
      var id = profile.getId();
      var email = profile.getEmail();
      $rootScope.$broadcast('google:oauth2:token', id_token);
      $rootScope.$broadcast('google:oauth2:profile', {id, email, name, userPic});
    });
  });
}
