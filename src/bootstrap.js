bootstrap.$inject=['$window', 'gapiAuth2Credentials', '$rootScope']

export default   function bootstrap($window, gapiAuth2Credentials, $rootScope) {
  $window.gapi.load('auth2', ()=> {
    var auth2 = gapi.auth2.init({
      client_id: gapiAuth2Credentials.client_id,
      scope: 'profile'
    });
    $rootScope.$broadcast('google:oauth2:signed-in', auth2.isSignedIn.get());
    auth2.isSignedIn.listen(val=> {
      $rootScope.$broadcast('google:oauth2:signed-in', val);
    });
    auth2.currentUser.listen((user)=> {
      if (!user.isSignedIn()) return;
      var profile = user.getBasicProfile();
      if (!profile) return console.error('profile is undefinded');
      ;
      var userPic = profile.getImageUrl();
      var name = profile.getName();
      var id = profile.getId();
      var email = profile.getEmail();
      $rootScope.$broadcast('google:oauth2:profile', {id, email, name, userPic});
    });
  });
}
