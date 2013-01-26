//= require_tree .

function neckbeardFallback() {
  document.getElementsByTagName('html')[0].className += ' neckbeardFallback'
}

window.setTimeout(neckbeardFallback, 5000);