
var app = angular.module('example', ['googleOAuth2']);


app.config(function (gapiAuth2CredentialsProvider) {
  gapiAuth2CredentialsProvider.client_id = '<YOUR_CLIENT_ID>';
})

app.controller('exampleCtrl', function ($rootScope,gapiAuth2) {

  $rootScope.logout = function(){
    gapiAuth2.logout().then(function(){
      console.log('log out');
    })
  }

  gapiAuth2.getAuthInstance().then(function(res){
    console.log('isSignedIn',res.instance.isSignedIn.get())
  });

  $rootScope.$on('google:oauth2:profile', function (e,profile) {
    console.log('got profile', profile)
  })

  $rootScope.$on('google:oauth2:signed-in', function (e,val) {
    console.log('is signed in', val)
  })


});
