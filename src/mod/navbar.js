W.MOD.NAVBAR = (function(){

    // VARIABLES

        var currentSection = null;

    // FUNCTIONS

        var goToSection = function(section){
            console.log(section.getClientRects()[0].y);
            if(section != currentSection){
                currentSection = section;
                window.scrollTo({top: section.getClientRects()[0].y - 54, behavior: 'smooth'});
            }
        }    

    // EXPOSE

        return {
            goToSection: goToSection
        }

})();