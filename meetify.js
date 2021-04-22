(function() {
    const accountNumber = localStorage['MEETIFY_AUTHUSER'] || '1';
    if (window.location.search.includes(`authuser=${accountNumber}`)) return;

    window.location.href += (window.location.search.includes('?') ? `&authuser=${accountNumber}` : `?authuser=${accountNumber}`);
})()
