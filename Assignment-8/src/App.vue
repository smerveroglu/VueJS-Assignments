<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="selected ='appBlue'">Load Blue Template</button>
                <button class="btn btn-success" @click="selected ='appGreen'">Load Green Template</button>
                <button class="btn btn-danger" @click="selected ='appRed'">Load Red Template</button>
                <hr>
                <!-- <app-blue>
                    <h1>Blue Component</h1>
                </app-blue>
                <app-green>
                    <h1>Green Component</h1>
                </app-green>
                <app-red>
                    <h1>Red Component</h1>
                </app-red> -->
                <component :is="selected">

                </component>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data : function(){
            return {
                selected :'appBlue'
            }
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style >

</style>