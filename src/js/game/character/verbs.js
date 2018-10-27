let verbs =  {
    help: function(words) {
        return 'You ask for help.'
    },

    look: function(words) {
        return 'You look around.'
    },
    l: function(words) {
        return verbs.look(words);
    },

    reset: function(words) {
        return 'You ask to reset the game but are denied.'
    },
    restart: function(words) {
        return verbs.reset(words);
    }
};

export default verbs;