<template>
    <div>
        <h1>Escape Room</h1>
        <p>There is only one way in, and one way out.  You have been looked inside, with all the tools you need to escape.  How fast can you do it?</p>
        {{ rooms[0].look() }}
    </div>
</template>

<script>
    import Room from '../modules/room';
    export default {
        data() {
            return {
                rooms: [
                    new Room({
                        name: 'Escape Room',
                        tag: 'room',
                        description: 'You are stuck inside an industrial space.  Everywhere you can see rusted metal pipes, multi-colored wires hanging in disarray and puddles of unknown substances on the floor.  The light above is flickering and the there is the sound of dripping water coming from someplace unknown.  There is only one exit to the west and it is locked.',
                    }),
                ]
            }
        },
        watch: {
            $route (to, from) {
                // load new game
            }
        }
    }
</script>

<style>

</style>