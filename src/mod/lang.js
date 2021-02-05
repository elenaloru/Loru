W.MOD.LANG = (function(){
    // VARIABLES

        var availableLanguages = ["es", "en"]
        var language = "";

    // FUNCTIONS

        /**
         * LOAD LANGUAGE
         * @param {string} lang 
         */
        var loadLanguage = function(lang){
            // Check if the language is supported, if not, default to English
            if(!availableLanguages.includes(lang)){
                lang = "en";
            }
            // Substitute all UI strings so that they appear in the correct language
            var uiStrings = W.UX.COLLECTIONS.uiTranslate;
            for(var i=0; i<uiStrings.length; i++){
                var SID = uiStrings[i].dataset.stringId;
                if(SID){
                    uiStrings[i].innerText = W.I18N[SID][lang];
                }
            }
            // Save language
            language = lang;      
        }

    // EXPOSE
    
        return {
            loadLanguage: loadLanguage,
            language: function(){return language}
        }

})();