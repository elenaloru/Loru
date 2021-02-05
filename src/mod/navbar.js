W.MOD.NAVBAR = (function(){

    // VARIABLES

        var currentSection = null;

    // FUNCTIONS

        var goToSection = function(section){
            section.scrollIntoView();
        }    

    // EXPOSE

        return {
            goToSection: goToSection
        }

})();