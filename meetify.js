(function() {
    if (window.location.search.includes('&authuser=1')) return;
    window.location.href += (window.location.search.includes('?') ? '&pli=1&authuser=1' : '?pli=1&authuser=1');
})()
