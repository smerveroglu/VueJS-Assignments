<template>
    <div class="container">
        <form v-if="!isSubmit">
            <div class="row" >
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <h2>Signup Form</h2> <br>
                    <div class="form-group">
                        <label for="firstName">First Name: </label>
                        <input
                                type="text"
                                id="fName"
                                class="form-control"
                                v-model="user.fName">
                    </div>
                    <div class="form-group">
                        <label for="lastName">Last Name: </label>
                        <input
                                type="text"
                                id="lName"
                                class="form-control"
                                v-model="user.lName">
                    </div>
                    <!-- Mail -->
                    <div class="form-group">
                        <label for="email">Mail</label>
                        <input
                                type="text"
                                id="email"
                                class="form-control"
                                v-model="user.email">
                    </div>
                    <!-- Password -->
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input
                                type="password"
                                id="password"
                                class="form-control"
                                v-model="user.password">
                    </div>
                    <!-- Store Data? Yes/No -->
                    <div class="form-group">
                        <label>
                            <input type="radio" value="Yes" v-model="storeData"> Yes
                        </label>
                        <label>
                            <input type="radio" value="No" v-model="storeData"> No
                        </label>
                    </div>
                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->
                    <button
                            type="submit"
                            @click.prevent="isSubmit = true"
                            class="btn btn-primary">Submit Form</button>
                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmit">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ user.fName }}  {{ user.lName }}</p>
                        <p>Mail: {{ user.email }}</p>
                        <p>Password: {{ user.password }}</p>
                        <p>Store in Database: {{ storeData }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                user:{
                    fName: 'Max',
                    lName:'Gerald',
                    email:'',
                    password:''
                },
                storeData:'Yes',
                isSubmit:false 
            };
        }
    }
</script>

<style>
</style>
