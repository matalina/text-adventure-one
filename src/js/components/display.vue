<template>
    <div id="display" class="pb-5">
        <router-view id="story" class="mb-1 pb-5"></router-view>
    </div>
</template>

<script>
    export default {
        name: 'display',
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