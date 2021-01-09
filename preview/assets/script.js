document.addEventListener('DOMContentLoaded', () => {
  const $body = document.querySelector('body');
  const $icons = document.getElementsByClassName('si');
  const $backgroundModeButton = document.querySelector('.background-mode');
  const $iconsColorButton = document.querySelector('.icons-color');

  // Background dark/light mode toggler
  $backgroundModeButton.addEventListener('click', () => {
    if ($body.classList.contains('dark')) {
      $backgroundModeButton.innerText = 'Dark background';
    } else {
      $backgroundModeButton.innerText = 'Light background';
    }
    $body.classList.toggle('dark');
  });

  // Icons black/colored toggle
  $iconsColorButton.addEventListener('click', () => {
    if ($icons[0].classList.contains('si--color')) {
      $iconsColorButton.innerText = 'Colored icons';
    } else {
      $iconsColorButton.innerText = 'Colorless icons';
    }

    for (let i = 0; i < $icons.length; i++) {
      $icons[i].classList.toggle('si--color');
    }
  });
});
