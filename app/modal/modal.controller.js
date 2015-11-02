'use strict';

angular.module('angularStrAPP')

.controller('ModalCtrl', function($modal){
  // Modal Template Demo
  this.hideModal = function(){
      reviewModal.$promise.then(reviewModal.hide);
  };

  this.content = "Hello Everyone"
  this.reviewIt = function(){
    self.panels.push({
      subject: self.subject,
      content: self.content
    })
    console.log(self.subject)
    $timeout(function(){
      self.hideModal();
    }, 100)
  }
})
