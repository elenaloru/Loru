W.MOD.PORTFOLIO = (function(){
    // VARIABLES
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
            
        }

    // EXPOSE

        return {
            loadPortfolioGallery: loadPortfolioGallery
        }


})();