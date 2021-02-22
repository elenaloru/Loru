W.UX = (function(){
    // EXPOSE

        return {

            COLLECTIONS: {
                uiTranslate: document.getElementsByClassName("ui-translate")
            },

            ELEMENTS: {
                portfolioGallery: document.getElementById("portfolio-gallery"),
                workDetailTitle: document.getElementById("work-detail-title"),
                workDetailDescription: document.getElementById("work-detail-description"),
                workDetailPictures: document.getElementById("work-detail-pictures")
            },

            SECTIONS: {
                about: document.getElementById("about-section"),
                home: document.getElementById("home-section"),
                portfolio: document.getElementById("portfolio-section"),
                contact: document.getElementById("contact-section")
            },

            OVERLAYS: {
                workDetail: document.getElementById("work-detail-overlay")
            }

        }

})();