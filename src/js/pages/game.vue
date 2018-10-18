<template>
    <div>
        {{ game.description }}
        {{ rooms[0].look() }}
    </div>
</template>

<script>
    import Room from '../modules/room';
    import Game from '../modules/game';

    export default {
        data() {
            return {
                rooms: [
                    new Room({
                        name: 'Escape Room',
                        tag: 'room',
                        description: 'You are stuck inside an industrial space.  Everywhere you can see rusted metal pipes, multi-colored wires hanging in disarray and puddles of unknown substances on the floor.  The light above is flickering and the there is the sound of dripping water coming from someplace unknown.  There is only one exit to the west and it is locked.\n\n There is a grate on the wall that looks like it might fall off at any time.',
                    }),
                ]
            }
        },
        computed: {
            game() {
                //let game = new Game();
                let loadGame = async () => {
                    let response =  await Game.load(this.$route.params.game);

                    return response.data;
                };

                return loadGame()
            }
        },
        watch: {
            $route (to, from) {

            }
        },
        mounted () {
        }
    }
</script>

<style>

</style>