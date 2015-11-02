angular.module('angularStrAPP', ['ngAnimate','mgcrea.ngStrap'])

.controller('MainCtrl', function($modal){
  var self = this;
  this.name = "AngularStrap"


  this.modal = $modal({title: 'Hello', content: 'Whats Up?!', show: false});

  this.showModal = function() {
    self.modal.show()
  };
})
