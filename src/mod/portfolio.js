W.MOD.PORTFOLIO = (function(){
    // VARIABLES

        const PORTFOLIO_GALLERY_PAGE_SIZE = 12;
        
        var porftolioGalleryPage = 1;
        var portfolioPicturesPath = "assets/pictures/";

    // FUNCTIONS

        /**
         * LOAD PORTFOLIO GALLERY
         */
        var loadPortfolioGallery = function(){
            var orderedWorks = [];
            for (var w in W.DATA.WORKS) {
                orderedWorks.push([w, W.DATA.WORKS[w].position]);
            }
            orderedWorks = orderedWorks.sort(function(a,b){return a[1] - b[1]});

            for(var i= 0; i<orderedWorks.length; i++){
                var work = W.DATA.WORKS[orderedWorks[i][0]];
                var portfolioImg = document.createElement("IMG");
                portfolioImg.classList.add("portfolio-img");
                portfolioImg.src = portfolioPicturesPath + work.cover;

                W.UX.ELEMENTS.portfolioGallery.append(portfolioImg);

            }
            
        }

    // EXPOSE

        return {
            loadPortfolioGallery: loadPortfolioGallery
        }


})();