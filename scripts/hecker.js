const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let intervals = [];

document.querySelectorAll("li").forEach(li => {
  let interval = null;

  li.addEventListener("mouseover", event => {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return event.target.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= event.target.dataset.value.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 50);
  });

  intervals.push(interval);
});


$('.card-text-wrapper').click(function() {
  clickToExapndCards($(this));
});

function clickToExapndCards($obj){
  var clickedElement = $obj;
  if (clickedElement.hasClass('expanded')) {
    clickedElement.find('.card-text').hide('slow');
    clickedElement.removeClass('expanded');
  } else {
     clickedElement.find('.card-text').show('slow');
    clickedElement.addClass('expanded');
  }
  
};

  
