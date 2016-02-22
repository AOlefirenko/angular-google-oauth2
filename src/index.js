import angular from 'angular';
import signInBtn from './google-sign-in'
import gapiAuth2 from './gapi-auth2'
import bootstrap from './bootstrap'
import credentials from './credentials'

export default angular.module('googleOAuth2', [])
  .directive('googleSignIn', signInBtn)
  .factory('gapiAuth2Credentials', credentials)
  .service('gapiAuth2', gapiAuth2)
  .run(bootstrap)
  .name;
