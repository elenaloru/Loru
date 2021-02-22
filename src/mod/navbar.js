W.MOD.NAVBAR = (function(){

    // VARIABLES

        var currentSection = null;

    // FUNCTIONS

        var goToSection = function(section){
            if(section == W.UX.SECTIONS.home){
                window.scrollTo(0, 0);
            }
            else{
                section.scrollIntoView();
            }
        }    

    // EXPOSE

        return {
            goToSection: goToSection
        }

})();