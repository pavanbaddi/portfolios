const projectSection = document.getElementById("projects");
const menuSectionTabContainer = document.querySelector(".menu-section .tab-container");
const contentContainer = document.querySelector(".content-container");

$(function () {
    let items = [
        {
            "selector": "#projects-carousel",
            "items": 3,
        },
        {
            "selector": "#portfolios-carousel",
            "items": 2,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                960: {
                    items: 2
                },
                1200: {
                    items: 2
                }
            },
        },
        {
            "selector": "#work-experience-carousel",
            "items": 2,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                960: {
                    items: 2
                },
                1200: {
                    items: 2
                }
            },
        }
    ]
    items.forEach((item) => {
        var owl = $(item.selector);
        owl.owlCarousel({
            margin: 10,
            loop: false,
            items: 3,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                960: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            },
            ...item
        });

        owl.on('mousewheel', '.owl-stage', function (e) {
            if (e.deltaY > 0) {
                owl.trigger('next.owl');
            } else {
                owl.trigger('prev.owl');
            }
            e.preventDefault();
        });
    })


    activateInitialSections();

});

function getActiveSection() {
    const section = contentContainer.querySelector("section.active");
    const tab = menuSectionTabContainer.querySelector(".tab.active");
    return { section, tab }
}

function activeSection(sectionId) {
    const section = contentContainer.querySelector(`#${sectionId}`);
    const tab = menuSectionTabContainer.querySelector(`#tab-${sectionId}`);

    section.classList.add("active");
    tab.classList.add("active");
}

function deactivateActiveSection() {
    const { section, tab } = getActiveSection();
    if (section) {
        section.classList.remove("active");
    }

    if (tab) {
        tab.classList.remove("active");
    }
}

function currentSection(sectionId) {
    deactivateActiveSection();
    activeSection(sectionId);

}

function activateInitialSections() {
    deactivateActiveSection();

    let width = window.innerWidth;
    let deviceType = null;

    if (width <= 600) {
        deviceType = "phone"
    } else if (width > 600 && width < 950) {
        deviceType = "tab"
    } else if (width >= 950) {
        deviceType = "desktop"
    }

    if (deviceType === "desktop") {
        currentSection("projects");
    } else {
        currentSection("about-me");
    }

}