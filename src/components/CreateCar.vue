
<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Add Car</h3>
            <form @submit.prevent="handleSubmitForm">
                <div class="form-group">
                    <label>Make</label>
                    <input type="text" class="form-control" v-model="car.make" required>
                </div>

                <div class="form-group">
                    <label>Model</label>
                    <input type="text" class="form-control" v-model="car.model" required>
                </div>

                <div class="form-group">
                    <label>Year</label>
                    <input type="number" class="form-control" v-model="car.year" required>
                </div>

                <div class="form-group">
                    <label>Color</label>
                    <input type="text" class="form-control" v-model="car.color" required>
                </div>

                <div class="form-group">
                    <button class="btn btn-danger btn-block">Add</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";

    export default {
        data() {
            return {
                car: {
                   make: '',
                   model: '',
                   year: '',
                   color: ''
                }
            }
        },
        methods: {
            handleSubmitForm() { let apiURL = 'http://localhost:4000/api/add-car';
                
                axios.post(apiURL, this.car).then(() => {
                  this.$router.push('/view')
                  this.car = {
                    make: '',
                    model: '',
                    year: '',
                    color: ''
                  }
                }).catch(error => {
                    console.log(error)
                });
            }
        }
    }
</script>