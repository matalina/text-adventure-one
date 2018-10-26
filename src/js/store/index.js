import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

import character from '../game/character/character';

export default new Vuex.Store({
    plugins: [createPersistedState()],
    state: {
        story: [],
        character,
        progress: 0,
    },
    mutations: {
        'story-add': function(state, object) {
            state.story.push(object);
        },
        'progress-update': function(state, progress) {
            state.progress = progress;
        },
    }
});