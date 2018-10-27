<template>
    <div id="game">
        <main class="row">
            <div class="col-lg-2"></div>
            <div id="display" class="p-5 col-lg-8">
                <div v-for="d in display">
                    <div :class="d.type"
                         v-html="markdown(d.object.description)"
                    ></div>
                </div>
            </div>
            <div class="col-lg-2"></div>
        </main>
        <nav class="navbar fixed-bottom navbar-expand navbar-dark bg-dark">
            <div class="nav-item form-group my-2 w-100">
                <input class="form-control"
                       id="command-line"
                       type="text"
                       placeholder="What do you want to do?"
                       v-model="command"
                       @change="execute()"
                />
            </div>
        </nav>
    </div>
</template>

<script>
    import chapters from '../game/chapters';
    import verbs from '../game/character/verbs';
    import { mapState } from 'vuex';
    const MarkdownIt = require('markdown-it'),
        md = new MarkdownIt();

    export default {
        name: 'display',
        data: function () {
            return {
                command: null,
                chapters,
            }
        },
        computed: {
            display: function() {
                return this.story.reverse();
            },
            verbs() {
                return {
                        ...verbs,
                        ...this.character.verbs,
                        ...this.character.profession.verbs,
                        ...this.character.mutation.verbs,
                };
            },
            start() {
                return this.chapters[0];
            },
            ...mapState([
                'story',
                'progress',
                'character',
            ])
        },
        methods: {
            markdown(output) {
                return md.render(output);
            },
            execute() {
                this.parseCommand();
            },
            parseCommand() {
                let words = this.command.split(' '),
                        verb = words[0],
                        remainder = words.splice(1);

                if(this.validateVerb(verb)) {
                    this.verb = verb;
                }
                else {

                }
            },
            validateVerb(verb) {
                return typeof this.verbs[verb] === 'function';
            },

            // state saving
            saveStory(object) {
                this.$store.commit('story-add',object);
            },
            saveProgress(chapter_number){
                this.$store.commit('progress-update', chapter_number);
            },
        },
    };
</script>

<style lang="scss">
    #game {
        margin-top: 5rem;
        margin-bottom: 3rem;
        background: rgba(0,0,0,.5);
        color: #EC5800;
    }
    #command-line {
        background: rgba(0,0,0, .5);
        color: #EC5800;
        border: 1px solid transparent;
        border-bottom: 1px solid #EC5800;
    }

</style>