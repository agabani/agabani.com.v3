$(document).ready(function() {
    // fix menu when passed
    $('.masthead')
        .visibility({
            once: false,
            onBottomPassed: function() {
                $('.fixed.menu').transition('fade in');
            },
            onBottomPassedReverse: function() {
                $('.fixed.menu').transition('fade out');
            }
        });

    // create sidebar and attach to menu open
    $('.ui.sidebar')
        .sidebar('attach events', '.toc.item');

    // initializing existing dropdowns
    $('.ui.dropdown')
        .dropdown();

    // Accordion is initialized on pre-existing markup
    $('.ui.accordion')
        .accordion();
});
