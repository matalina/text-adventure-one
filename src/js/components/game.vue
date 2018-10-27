<template>
    <div id="game">
        <main class="row">
            <div id="display" class="pb-5">
                <div v-for="d in display">
                    <div :class="d.type"
                         v-html="markdown(d.object.description)"
                    ></div>
                </div>
            </div>
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
    html, body{
        height: 100%;
    }
    body {
        margin: 0;
        height: 100%;
        background: url(http://www.aliciawilkerson.com/images/metalwall.jpg) #000 no-repeat center center fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    }
    .title {
        font-size: 5rem;
        font-weight: normal;
        margin: 0;
        padding: 0;
        color: #EC5800;
        display: block;
        text-shadow: 0 0 5px #EC5800, 0 0 6px #EC5800, 0 0 7px #EC5800, 0 0 15px #EC5800;
        position: relative;
    }
    .tag-line {
        font-size: 2rem;
        margin: 0;
        padding: 0 20px 0 0;
        display: block;
        color: #EC5800;
    }
    .f1 {
        font-family: 'Advent Pro', sans-serif;
        line-height: 1.9rem;
    }
    .f2 {font-family: 'Share Tech', sans-serif;}
    .f9 {font-family: 'Megrim', cursive;}
    .coming-soon {
        background: url(http://aliciawilkerson.com/images/cyberpunk.png)no-repeat center center fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        height: 100%;
        text-align: center;
    }

    .blurb {
        max-width: 800px;
        background: #fff;
        padding: 20px;
        font-size: 18pt;
        margin: auto;
        margin-top: 20px;
    }
    .border1 {
        border: 15px solid transparent;
        -webkit-border-image: url('http://aliciawilkerson.com/images/orangecircuit.png') 20 20 round;
        margin-bottom: 100px;
    }

    #command-line {
        background: rgba(0,0,0, .5);
        color: #EC5800;
        border: 1px solid transparent;
        border-bottom: 1px solid #EC5800;
    }

</style>