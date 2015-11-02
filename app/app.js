angular.module('angularStrAPP', ['ngAnimate','mgcrea.ngStrap'])

.controller('MainCtrl', function($modal, $timeout, $alert){
  var self = this;
  this.name = "AngularStrap"

  // Modal Demo
  this.modal = $modal({title: 'Hello', content: 'Whats Up?!', show: false});

  this.showModal = function() {
    self.modal.show()
  };
  // END Modal Demo
  // Modal Template Demo
  this.reviewIt = function(){
    this.panels.push({
      subject: self.subject,
      content: self.content
    })
    self.myAlert.$promise.then(function() {self.myAlert.show();});


    self.subject = "";
    self.content = "";
  }
  // END Modal Template Demo
  // Alert Demo
  this.myAlert = $alert({title: 'Holy guacamole!', content: 'Best check yo self, you\'re not looking too good.', placement: 'top-right', type: 'info', show: false, duration: 2});
  // END Alert Demo


  // Collapse Panels
  this.panels = [
    {
      subject: "Excellent Robot",
      content: "The 1x Robot is so useful in so many ways! It can count and sort your change, fix your satellite on the roof, and even clean out the litterbox",
    },
    {
      subject: "So Terrible, And Scary",
      content: "The 1x Robot is scary because hes better at everything than me",
    },
  ];

  // defaults to none starting as active
  this.panels.activePanel = -1;
  // END Collapse Panels
})
