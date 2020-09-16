<template>
    <li
        class="list-group-item"
        @click="choiceServer">
        Server #{{ server.id }}
    </li>
</template>

<script>
    import { eventBus } from '/Users/smeroglu/Desktop/Assignment-8/src/main.js';

    export default {
        props: ['server'],
        methods: {
            choiceServer() {
                eventBus.$emit('choiceServer', this.server);
            }
        }
    }
</script>

<style>

</style>
