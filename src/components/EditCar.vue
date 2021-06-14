<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Update Car</h3>
            <form @submit.prevent="handleUpdateForm">
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
                    <button class="btn btn-danger btn-block">Update</button>
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
            car: { }
        }
    },
    created() {
        let apiURL = `http://localhost:4000/api/edit-car/${this.$route.params.id}`;

        axios.get(apiURL).then((res) => {
            this.car = res.data;
        })
    },
    methods: {
        handleUpdateForm() {
            let apiURL = `http://localhost:4000/api/update-car/${this.$route.params.id}`;

            axios.put(apiURL, this.car).then((res) => {
                console.log(res)
                this.$router.push('/view')
            }).catch(error => {
                console.log(error)
            });
        }
    }
}
</script>