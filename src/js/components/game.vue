<template>
    <div id="game">
        <main class="row">
            <div id="display" class="pb-5">

            </div>
        </main>
        <nav class="navbar fixed-bottom navbar-expand navbar-dark bg-dark">
            <div class="nav-item form-group my-2 w-100">
                <input class="form-control"
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

    export default {
        name: 'display',
        data: function () {
            return {
                command: null,
                chapters,
            }
        },
        computed: {
            verbs() {
                return {
                        ...verbs,
                        ...this.character.verbs,
                        ...this.character.profession.verbs,
                        ...this.character.mutation.verbs,
                };
            },
            ...mapState([
                'story',
                'progress',
                'character',
            ])
        },
        methods: {
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
        mounted() {
            if(this.story === []) {
                this.saveStory({
                    type: 'chapter',
                    object: this.chapters[0],
                });
            }

        }
    };
</script>

<style scoped lang="scss">
    #display {
        height: 100%;
        overflow: hidden;

        #story {
            height: 100%;
            overflow-y: scroll;
            overflow-x: hidden;
            width: calc(100% + 50px);
            padding-right: 50px;
        }
    }
</style>