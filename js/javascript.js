$(document).ready(function(){

//Display default grid.
  displayGrid(4);

    $('.square').mouseenter(function(){
      $(this).css("background","black");
    });

//On 'Clear' button click, clear grid.
    $('.clear').on('click', function(){
      displayGrid(4);
      $('.square').mouseenter(function(){
        $(this).css("background","white");
        });
    });

// Default button click.
    $('.default').on('click', function(){
      setGrid();
      $('.square').mouseenter(function(){
        $(this).css("background","white");
        });
    });

//Random color
$('.random').on('click', function(){
  setGrid();
  var color = getRandomColor;
  var newcolor = color;
  $('.square').mouseenter(function(){
    if (color === $(this).css("background",color)){
      getRandomColor();
      var newcolor= getRandomColor;
    }
     $(this).css("background",newcolor);
  });
});

//Opacity
$('.opacity').on('click', function(){
  setGrid();
  $('.square').css("background","red");
    $('.square').mouseenter(function(){
      decreaseOpacity($(this));
  });
});

//Trail click
$('.trail').on('click', function(){
  setGrid();
  $('.square').css("background","orange");
  $('.square').mouseenter(function(){
    $(this).css("Opacity","0");
    $(this).fadeTo('fast',1);
  });
});

});

function displayGrid(x){
    var gridsize= 960;
    var squaresize = (960 -  2 *x )/ x;
    var wrap = $('.squarescontainer').html("");
    for (var j = 0; j < x; j++) {
    		for (var i = 0; i < x; i++) {
    			wrap.append($("<div></div>").addClass("square").height(squaresize).width(squaresize));
    		}
    		wrap.append($("<div></div>").css("clear", "both"));
    	}
    };


function setGrid(){
    var dimensions = prompt("Please enter dimensions between 1 and 64.");
    if ((dimensions >= 1 ) && (dimensions <= 64)){
      displayGrid(dimensions);

    }
    else {
      alert("Sorry, that number is not between 1 and 50. Please try again.");
    }
};


function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};


function decreaseOpacity(elem) {
	var opacity = elem.css('opacity');
	var nextOpacity = opacity - 0.1
	if (nextOpacity > 0) { elem.css('opacity', nextOpacity); }
	else { elem.css('opacity', '0'); }
};
