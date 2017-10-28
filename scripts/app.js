$(() => {
    let toolbarRow = $('#toolbarRow');
    let sideBar = $('#sidebar');
    let menuButton = $('#menuButton');

    let didScroll = false;
    let lastScrollTop = 0;
    let toolbarHeight = toolbarRow.height();

    menuButton.click(() => {
        sidebar.toggleClass('hidden-xs');
    });

    // Handle showing/hiding the menu bar

    $(window).scroll(() => {
        didScroll = true;
    });

    setInterval(() => {
        if (!didScroll) return;
        didScroll = false;

        let tolerance = 30;
        let position = $(window).scrollTop();
        let delta =  position - lastScrollTop;
        lastScrollTop = position;

        if (delta < -tolerance) {
            toolbarRow.css('top', '0px');
        } else if (delta > tolerance) {
            toolbarRow.css('top', `-${toolbarHeight}px`);
        }
    }, 250);
})