
var numberofdrumbuttons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberofdrumbuttons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
  var innerhtml = this.innerHTML;

      switch (innerhtml) {
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
          break;
          case "a":
              var audio = new Audio('sounds/tom-2.mp3');
              audio.play();
            break;
            case "s":
                var audio = new Audio('sounds/tom-3.mp3');
                audio.play();
              break;
              case "d":
                  var audio = new Audio('sounds/tom-4.mp3');
                  audio.play();
                break;
                case "j":
                    var audio = new Audio('sounds/snare.mp3');
                    audio.play();
                  break;
                  case "k":
                      var audio = new Audio('sounds/crash.mp3');
                      audio.play();
                    break;
                    case "l":
                        var audio = new Audio('sounds/kick-bass.mp3');
                        audio.play();
                      break;
        default:

      }

  });

}

var numberofdrumbutton = document.querySelectorAll(".drum").length;
//Detecting Button press
for (var i = 0; i < numberofdrumbutton; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){

    var buttoninnerhtml = this.innerHTML;

      makesound(buttoninnerhtml);

      Animationbutton(buttoninnerhtml);

  });

}

//Detecting keyboard pressed
document.addEventListener("keydown",function(event){
    makesound(event.key);
    Animationbutton(event.key)
});

function makesound(key){

  switch (key) {
    case "w":
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
      break;
      case "a":
          var audio = new Audio('sounds/tom-2.mp3');
          audio.play();
        break;
        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
          break;
          case "d":
              var audio = new Audio('sounds/tom-4.mp3');
              audio.play();
            break;
            case "j":
                var audio = new Audio('sounds/snare.mp3');
                audio.play();
              break;
              case "k":
                  var audio = new Audio('sounds/crash.mp3');
                  audio.play();
                break;
                case "l":
                    var audio = new Audio('sounds/kick-bass.mp3');
                    audio.play();
                  break;
    default: alert("Press only Define kays");

  }

}

//Animation to button

function Animationbutton(currentkey){
    var activebutton = document.querySelector("."+currentkey);
    activebutton.classList.add("pressed");
    setTimeout(function(){
      activebutton.classList.remove("pressed");
    }, 100 );
}
