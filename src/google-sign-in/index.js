var btnId = 'g-signin2'

export default ['$window',function($window){
  return {
    restrict:'E',
    template:`<div id="${btnId}"></div>`,
    replace:false,
    link:function(scope,el,attrs){
      $window.gapi.signin2.render(btnId, {
        'width': attrs.width || 250,
        'height': attrs.height || 50,
        'longtitle': attrs.longtitle==='false'?false:true,
        'theme': attrs.theme || 'light'
      });
    }
  }
}]
