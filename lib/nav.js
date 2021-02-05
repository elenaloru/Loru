var NAV = (function(){

    // VARIABLES

        var navigationControl = [];

    // FUNCTIONS

        /**
         * ADD NAVIGATION
         * @param {*} newState 
         * @param {*} stateBackEvent
         */
        var addNavigation = function(newState, stateBackEvent){
            history.pushState(newState, null, window.location.pathname);
            navigationControl.push(stateBackEvent);
        }

        var handleNavigationChange = function(e){
            console.log(e);
            navigationControl[navigationControl.length - 1]();
            navigationControl.splice(navigationControl.length - 1, 1);
        }

    // EVENT LISTENERS

        window.addEventListener('popstate', handleNavigationChange, false);

    // EXPOSE

        return {
            addNavigation: addNavigation
        }

})();