<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">Servers</p>
        <p v-else>Server #{{ server.id }} selected, Status: {{ server.status }}</p>
        <hr>
        <button @click="reset">Change Status</button>
    </div>

</template>

<script>
    import { eventBus } from '/Users/smeroglu/Desktop/Assignment-8/src/main.js';

    export default {
        data: function() {
            return {
                server: null
            }
        },
        methods: {
          reset() {
              this.server.status = 'Normal';
          }
        },
        created() {
            eventBus.$on('choiceServer', (server) => {
                this.server = server;
            });
        }
    }
</script>

<style>

</style>
