var swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  direction: getDirection(),
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    resize: function () {
      swiper.changeDirection(getDirection());
    },
  },
});

function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

  return direction;
}

function changeAlignmentjustifyContent(alignValue) {
  var box = document.getElementById('FlexContainer');
  box.style.justifyContent = alignValue;
      // Удаление класса active у всех кнопок
      var buttons = document.querySelectorAll('.helper__link-inner');
      buttons.forEach(function(btn) {
        btn.classList.remove('active');
      });
      // Добавление класса active к нажатой кнопке
      event.target.classList.add('active');
    }
    function toggleAccordion(element) {
      const linkBlock = element.nextElementSibling;
      linkBlock.classList.toggle("show");
    
      const firstButton = linkBlock.querySelector('.helper__link-inner');
      const activeButton = linkBlock.querySelector('.helper__link-inner.active');
    
      if (linkBlock.classList.contains('show') && !activeButton) {
        firstButton.classList.add('active');
      } else {
        firstButton.classList.remove('active');
      }     
    }
    
    function changeAlignmentFlex(alignValue) {
      var box = document.getElementById('FlexContainerDisplay');
      box.style.display = alignValue;
      var buttons = document.querySelectorAll('.helper__link-inner-display');
      buttons.forEach(function(btn) {
        btn.classList.remove('active');
      });
      // Добавление класса active к нажатой кнопке
      event.target.classList.add('active');
    }  
    function toggleAccordionDisplay(element) {
      const linkBlock = element.nextElementSibling;
      linkBlock.classList.toggle("showDisplay");

      const firstButton = linkBlock.querySelector('.helper__link-inner-display');
      const activeButton = linkBlock.querySelector('.helper__link-inner-display.active');
    
      if (linkBlock.classList.contains('showDisplay') && !activeButton) {
        firstButton.classList.add('active');
      } else {
        firstButton.classList.remove('active');
    }
  }


  function changeAlignmentWrap(alignValue) {
    var box = document.getElementById('FlexContainerWrap');
    box.style.flexWrap = alignValue;
    var buttons = document.querySelectorAll('.helper__link-inner-wrap');
    buttons.forEach(function(btn) {
      btn.classList.remove('active');
    });
    // Добавление класса active к нажатой кнопке
    event.target.classList.add('active');
  }  
  function toggleAccordionWrap(element) {
    const linkBlock = element.nextElementSibling;
    linkBlock.classList.toggle("showWrap");

    const firstButton = linkBlock.querySelector('.helper__link-inner-wrap');
    const activeButton = linkBlock.querySelector('.helper__link-inner-wrap.active');
    
    if (linkBlock.classList.contains('showWrap') && !activeButton) {
      firstButton.classList.add('active');
    } else {
      firstButton.classList.remove('active');
  }
}

function changeAlignmentDirection(alignValue) {
  var box = document.getElementById('FlexContainerDirection');
  box.style.flexDirection = alignValue;
  var buttons = document.querySelectorAll('.helper__link-inner-direction');
  buttons.forEach(function(btn) {
    btn.classList.remove('active');
  });
  // Добавление класса active к нажатой кнопке
  event.target.classList.add('active');
}  
function toggleAccordionDirection(element) {
  const linkBlock = element.nextElementSibling;
  linkBlock.classList.toggle("showDirection");

  const firstButton = linkBlock.querySelector('.helper__link-inner-direction');
  const activeButton = linkBlock.querySelector('.helper__link-inner-direction.active');
    
  if (linkBlock.classList.contains('showDirection') && !activeButton) {
    firstButton.classList.add('active');
  } else {
    firstButton.classList.remove('active');
}
}

function changeAlignmentAlignItems(alignValue) {
  var box = document.getElementById('FlexContainerAlignItems');
  box.style.alignItems = alignValue;
  var buttons = document.querySelectorAll('.helper__link-inner-alignitems');
  buttons.forEach(function(btn) {
    btn.classList.remove('active');
  });
  // Добавление класса active к нажатой кнопке
  event.target.classList.add('active');
}  
function toggleAccordionAlignItems(element) {
  const linkBlock = element.nextElementSibling;
  linkBlock.classList.toggle("showAlignItems");

  const firstButton = linkBlock.querySelector('.helper__link-inner-alignitems');
  const activeButton = linkBlock.querySelector('.helper__link-inner-alignitems.active');
    
  if (linkBlock.classList.contains('showAlignItems') && !activeButton) {
    firstButton.classList.add('active');
  } else {
    firstButton.classList.remove('active');
}
}

function toggleAccordionOrder(element) {
  const linkBlock = element.nextElementSibling;
  linkBlock.classList.toggle("showOrder");

  const firstButton = linkBlock.querySelector('.helper__link-inner-order');
  const activeButton = linkBlock.querySelector('.helper__link-inner-order.active');

  if (linkBlock.classList.contains('showOrder') && !activeButton) {
    firstButton.classList.add('active');
  } else if (!linkBlock.classList.contains('showOrder')) {
    firstButton.classList.remove('active');
  }
}
function changeOrderValuesOrder(button) {
  var flexContainer = document.getElementById('FlexContainerOrder');
  var numbers = flexContainer.getElementsByClassName('helper__link-flexblock-container-number-order');

  // Удаляем класс "active" у всех кнопок
  var buttons = document.querySelectorAll('.helper__link-inner-order');
  buttons.forEach(function(btn) {
    btn.classList.remove('active');
  });

  // Получаем значение класса, которое нужно добавить
  var newClass = '';
  if (button.textContent === 'default') {
    newClass = 'order-class-1';
  } else if (button.textContent === '4 3 2 1') {
    newClass = 'order-class-2';
  } else if (button.textContent === '2 1 4 3') {
    newClass = 'order-class-3';
  }

  // Добавляем новый класс и удаляем старые
  for (var i = 0; i < numbers.length; i++) {
    numbers[i].classList.remove('order-class-1', 'order-class-2', 'order-class-3');
    numbers[i].classList.add(newClass);
  }

  // Делаем текущую кнопку активной
  button.classList.toggle('active');
}


function toggleAccordionAlignSelf(element) {
  const linkBlock = element.nextElementSibling;
  linkBlock.classList.toggle("showAlignSelf");

  const firstButton = linkBlock.querySelector('.helper__link-inner-alignself');
  const activeButton = linkBlock.querySelector('.helper__link-inner-alignself.active');

  if (linkBlock.classList.contains('showAlignSelf') && !activeButton) {
    firstButton.classList.add('active');
  } else if (!linkBlock.classList.contains('showAlignSelf')) {
    firstButton.classList.remove('active');
  }
}
function changeOrderValuesAlignSelf(button) {
  var flexContainer = document.getElementById('FlexContainerAlignSelf');
  var numbers = flexContainer.getElementsByClassName('helper__link-flexblock-container-number-alignself');

    // Удаляем класс "active" у всех кнопок
    var buttons = document.querySelectorAll('.helper__link-inner-alignself');
    buttons.forEach(function(btn) {
      btn.classList.remove('active');
    });
  // Получаем значение класса, которое нужно добавить
  var newClass = '';
  if (button.textContent === 'auto') {
    newClass = 'additional-class-1';
  } else if (button.textContent === 'flex-start') {
    newClass = 'additional-class-2';
  } else if (button.textContent === 'flex-end') {
    newClass = 'additional-class-3';
  } else if (button.textContent === 'center') {
    newClass = 'additional-class-4';
  }

  // Добавляем новый класс и удаляем старые
  for (var i = 0; i < numbers.length; i++) {
    numbers[i].classList.remove('additional-class-1', 'additional-class-2', 'additional-class-3', 'additional-class-4');
    numbers[i].classList.add(newClass);
  }
  button.classList.toggle('active');
}

function toggleAccordionBasis(element) {
  const linkBlock = element.nextElementSibling;
  linkBlock.classList.toggle("showBasis");

  const firstButton = linkBlock.querySelector('.helper__link-inner-basis');
  const activeButton = linkBlock.querySelector('.helper__link-inner-basis.active');

  if (linkBlock.classList.contains('showBasis') && !activeButton) {
    firstButton.classList.add('active');
  } else if (!linkBlock.classList.contains('showBasis')) {
    firstButton.classList.remove('active');
  }
}
function changeOrderValuesBasis(button) {
  var flexContainer = document.getElementById('FlexContainerBasis');
  var numbers = flexContainer.getElementsByClassName('helper__link-flexblock-container-number-basis');

    // Удаляем класс "active" у всех кнопок
    var buttons = document.querySelectorAll('.helper__link-inner-basis');
    buttons.forEach(function(btn) {
      btn.classList.remove('active');
    });
  // Получаем значение класса, которое нужно добавить
  var newClass = '';
  if (button.textContent === 'auto') {
    newClass = 'basis-class-1';
  } else if (button.textContent === 'Значение в пикселях') {
    newClass = 'basis-class-2';
  } else if (button.textContent === 'Значение в процентах') {
    newClass = 'basis-class-3';
  }

  // Добавляем новый класс и удаляем старые
  for (var i = 0; i < numbers.length; i++) {
    numbers[i].classList.remove('basis-class-1', 'basis-class-2', 'basis-class-3');
    numbers[i].classList.add(newClass);
  }
  button.classList.toggle('active');
}

function toggleAccordionGrow(element) {
  const linkBlock = element.nextElementSibling;
  linkBlock.classList.toggle("showGrow");

  const firstButton = linkBlock.querySelector('.helper__link-inner-grow');
  const activeButton = linkBlock.querySelector('.helper__link-inner-grow.active');

  if (linkBlock.classList.contains('showGrow') && !activeButton) {
    firstButton.classList.add('active');
  } else if (!linkBlock.classList.contains('showGrow')) {
    firstButton.classList.remove('active');
  }
}
function changeOrderValuesGrow(button) {
  var flexContainer = document.getElementById('FlexContainerGrow');
  var numbers = flexContainer.getElementsByClassName('helper__link-flexblock-container-number-grow');

    // Удаляем класс "active" у всех кнопок
    var buttons = document.querySelectorAll('.helper__link-inner-grow');
    buttons.forEach(function(btn) {
      btn.classList.remove('active');
    });
  // Получаем значение класса, которое нужно добавить
  var newClass = '';
  if (button.textContent === 'Запрещено(default)') {
    newClass = 'grow-class-1';
  } else if (button.textContent === 'Разрешено') {
    newClass = 'grow-class-2';
  }

  // Добавляем новый класс и удаляем старые
  for (var i = 0; i < numbers.length; i++) {
    numbers[i].classList.remove('grow-class-1', 'grow-class-2');
    numbers[i].classList.add(newClass);
  }
  button.classList.toggle('active');
}

function toggleAccordionShrink(element) {
  const linkBlock = element.nextElementSibling;
  linkBlock.classList.toggle("showShrink");

  const firstButton = linkBlock.querySelector('.helper__link-inner-shrink');
  const activeButton = linkBlock.querySelector('.helper__link-inner-shrink.active');

  if (linkBlock.classList.contains('showShrink') && !activeButton) {
    firstButton.classList.add('active');
  } else if (!linkBlock.classList.contains('showShrink')) {
    firstButton.classList.remove('active');
  }
}
function changeOrderValuesShrink(button) {
  var flexContainer = document.getElementById('FlexContainerShrink');
  var numbers = flexContainer.getElementsByClassName('helper__link-flexblock-container-number-shrink');

    // Удаляем класс "active" у всех кнопок
    var buttons = document.querySelectorAll('.helper__link-inner-shrink');
    buttons.forEach(function(btn) {
      btn.classList.remove('active');
    });
  // Получаем значение класса, которое нужно добавить
  var newClass = '';
  if (button.textContent === 'Разрешено(default)') {
    newClass = 'shrink-class-1';
  } else if (button.textContent === 'Запрещено') {
    newClass = 'shrink-class-2';
  }

  // Добавляем новый класс и удаляем старые
  for (var i = 0; i < numbers.length; i++) {
    numbers[i].classList.remove('shrink-class-1', 'shrink-class-2');
    numbers[i].classList.add(newClass);
  }
  button.classList.toggle('active');
}

function toggleAccordionFlex(element) {
  const linkBlock = element.nextElementSibling;
  linkBlock.classList.toggle("showFlex");

  const firstButton = linkBlock.querySelector('.helper__link-inner-flex');
  const activeButton = linkBlock.querySelector('.helper__link-inner-flex.active');

  if (linkBlock.classList.contains('showFlex') && !activeButton) {
    firstButton.classList.add('active');
  } else if (!linkBlock.classList.contains('showFlex')) {
    firstButton.classList.remove('active');
  }
}
function changeOrderValuesFlex(button) {
  var flexContainer = document.getElementById('FlexContainerFlex');
  var numbers = flexContainer.getElementsByClassName('helper__link-flexblock-container-number-flex');

    // Удаляем класс "active" у всех кнопок
    var buttons = document.querySelectorAll('.helper__link-inner-flex');
    buttons.forEach(function(btn) {
      btn.classList.remove('active');
    });
  // Получаем значение класса, которое нужно добавить
  var newClass = '';
  if (button.textContent === 'flex: 0 1 auto') {
    newClass = 'flex-class-1';
  } else if (button.textContent === 'flex: 1 1 auto') {
    newClass = 'flex-class-2';
  } else if (button.textContent === 'flex: 0 0 200px') {
    newClass = 'flex-class-3';
  } else if (button.textContent === 'flex: 1 0 50%') {
    newClass = 'flex-class-4';
  }

  // Добавляем новый класс и удаляем старые
  for (var i = 0; i < numbers.length; i++) {
    numbers[i].classList.remove('flex-class-1', 'flex-class-2', 'flex-class-3', 'flex-class-4');
    numbers[i].classList.add(newClass);
  }
  button.classList.toggle('active');
}