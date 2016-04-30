gapiAuth2.$inject = ['$window', '$q'];

export default function gapiAuth2($window, $q) {
  var svc = this;
  var deferred = $q.defer();
  var auth2Promise = deferred.promise;
  
  $window.gapi.load('auth2', () => {
    deferred.resolve($window.gapi.auth2)
  });


  svc.getAuthInstance = function() {
    var deferred = $q.defer();
    auth2Promise.then((auth2) => {
      deferred.resolve({
        instance: auth2.getAuthInstance()
      });
    });
    return deferred.promise;
  }

  svc.logout = function() {
    var deferred = $q.defer();
    svc.getAuthInstance().then((res) => {
      res.instance.signOut().then(function() {
        deferred.resolve();
      });
    })
    return deferred.promise;
  }

  svc.isSignedIn = function() {
    var deferred = $q.defer();
    svc.getAuthInstance().then(x => {
      var inst =  x.instance;
      if (inst.currentUser) {
        return deferred.resolve(inst.currentUser.get().isSignedIn());
      } else {
        inst.currentUser.listen(user => {
          return deferred.resolve(user.isSignedIn())
        });
      }
    });
    return deferred.promise;
  };
}
