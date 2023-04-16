document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('.nav');
    const trigger = document.querySelector('.trigger');
    const container = document.querySelectorAll('.container');
    let over = 0;
    if (window.innerWidth < window.innerHeight) {
        container.forEach(function(each) {
            each.setAttribute('class', 'portrait');
            });
        };
    window.addEventListener('resize', function() {
        if (window.innerWidth < window.innerHeight) {
            container.forEach(function(each) {
                each.setAttribute('class', 'portrait');
            });
        };
        if (window.innerWidth > window.innerHeight) {
            container.forEach(function(each) {
                each.setAttribute('class', 'landscape');
            });
        };
    });
    document.querySelectorAll('.nav-link').forEach(function(each) {
       const check = each.getAttribute('href');
       const page = document.URL;
       if (page.includes(check)) {
           each.setAttribute('class', 'nav-link active disabled');
           each.setAttribute('aria-current', 'page');
           document.title = `${each.innerHTML}`;
    };
    });
    trigger.addEventListener('mouseenter', function() {
        trigger.setAttribute('class', 'trigger sticky-bottom curser')
    });
    trigger.addEventListener('mouseleave', function() {
        trigger.setAttribute('class', 'trigger sticky-bottom')
    });
    trigger.addEventListener('mouseenter', function() {
        setTimeout(function() {
            if (trigger.getAttribute('class').includes('curser') == true) {
                nav.setAttribute('class', 'nav justify-content-center')
            };
          }, 500);
    });
    nav.addEventListener('mouseleave', function() {
        setTimeout(function() {
            if (trigger.getAttribute('class') == 'trigger sticky-bottom') {
                nav.setAttribute('class', 'nav justify-content-center hidden')
            }
          }, 1000);
    });
});