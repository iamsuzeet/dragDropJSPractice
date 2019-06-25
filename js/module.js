

//UI controller

var UIController = (function(){
  var DOMstrings = {
    fill: '.fill',
    empties: '.empty'
  };

  return{
  getDOMStrings: function(){
    return DOMstrings;
  },
  dragStarting: function(self){
   self.className += ' hold';
    setTimeout(() => {
      self.className = 'invisible';
    }, 0);
  },

  dragEnding: function(self){
    // console.log(self);
    self.className = 'fill';
  },

  dragOver(e){
    e.preventDefault();
     
  },
  
  dragEnter(e,self){
    e.preventDefault();
    self.className += ' hovered';
  },
  
  dragLeave(self){
    self.className = 'empty';
  },
  
  dragDrop(self){
    self.className = 'empty';
    self.append(document.querySelector(DOMstrings.fill));
  }
};

})();


// Global app controller
var controller = (function(UICtrl){
  var DOM = UICtrl.getDOMStrings();
  var setUpEventListeners = function(){
    
    document.querySelector(DOM.fill).addEventListener('dragstart', dragStart);
    document.querySelector(DOM.fill).addEventListener('dragend',dragEnd);
   
  };
  // loop througn empty array
  var loopEmpty = function(){
  var empties = Array.from(document.querySelectorAll(DOM.empties));
  Array.from(empties).forEach(empty => {
    empty.addEventListener('dragover',dragOver);
    empty.addEventListener('dragenter',dragEnter);
    empty.addEventListener('dragleave',dragLeave);
    empty.addEventListener('drop',dragDrop);
  });
  };

  var dragStart = function(){
    
    //drag start 
    UICtrl.dragStarting();
  };

  var dragEnd = function(){
    //
  
    UICtrl.dragEnding();
  };
  
  var dragOver = function(e){
    //drag start 
    
    UICtrl.dragOver(e);
  };
  var dragEnter = function(e){
    //drag start 
    var self = this;
    UICtrl.dragEnter(e,self);
  };
  var dragLeave = function(){
    //drag start 
    var self = this;
    UICtrl.dragLeave(self);
  }; 
  var dragDrop = function(){
    //drag start 
    var self = this;
    UICtrl.dragDrop(self);
  };
  
  return{
    init: function(){
      console.log('application has started');
      setUpEventListeners();
      loopEmpty();
    }
  }

})(UIController);

controller.init();
