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
                if(work.active == 1){
                    var portfolioImg = document.createElement("IMG");
                    portfolioImg.workID = orderedWorks[i][0];
                    portfolioImg.classList.add("portfolio-img");
                    portfolioImg.src = portfolioPicturesPath + work.cover;
                    W.UX.ELEMENTS.portfolioGallery.append(portfolioImg);
                }
            }
        }

        /**
         * OPEN WORK DETAIL
         * @param {json} e 
         */
        var openWorkDetail = function(e){
            if(e.target.workID){
                var work = W.DATA.WORKS[e.target.workID];
                loadWorkDetail(work);
                document.body.classList.add("no-scroll");
                W.UX.OVERLAYS.workDetail.classList.remove("overlay-off");
                W.UX.OVERLAYS.workDetail.classList.add("overlay-on");
                NAV.addNavigation("Work Detail", closeWorkDetail);
                W.UX.OVERLAYS.workDetail.scrollTop = 0;
            }
        }

        var loadWorkDetail = function(work){
            W.UX.ELEMENTS.workDetailTitle.innerText = work.title[W.MOD.LANG.language()];
            W.UX.ELEMENTS.workDetailDescription.innerText = work.description[W.MOD.LANG.language()];
            W.UX.ELEMENTS.workDetailPictures.innerHTML = "";
            for(var i=0; i<work.pictures.length; i++){
                var picture = document.createElement("IMG");
                picture.classList.add("work-picture");
                picture.src = portfolioPicturesPath + work.pictures[i];
                W.UX.ELEMENTS.workDetailPictures.append(picture);
            }
        }

        /**
         * CLOSE WORK DETAIL
         */
        var closeWorkDetail = function(){
            document.body.classList.remove("no-scroll");
            W.UX.OVERLAYS.workDetail.classList.remove("overlay-on");
            W.UX.OVERLAYS.workDetail.classList.add("overlay-off");          
        }

    // EVENT LISTENERS
    W.UX.ELEMENTS.portfolioGallery.addEventListener("click", openWorkDetail, false);

    // EXPOSE

        return {
            loadPortfolioGallery: loadPortfolioGallery,
            closeWorkDetail: closeWorkDetail
        }


})();