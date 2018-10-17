<template>
    <div class="nav-item form-group my-2 w-100">
        <input class="form-control"
               type="text"
               placeholder="What do you want to do?"
               v-model="command"
        />
    </div>
</template>

<script>
    export default {
        name: 'command-line',
        data() {
            return {
                command: null,
            };
        }
    };
</script>

<style>

</style>