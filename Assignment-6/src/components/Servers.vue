<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li
                    v-bind:key="index"
                    class="list-group-item"
                    v-for="index in 5">
                Server #{{ index }}
            </li>
        </ul>
    </div>
</template>

<script>
</script>

<style scoped>
    div{
        border: 2px solid seagreen;
    }
</style>