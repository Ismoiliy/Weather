<template>
    <nav class="nav">
        <a href="#!" class="logo">
            <img src="@/assets/img/logo.svg" alt="logo">
            <span>vue weather</span>
        </a>
        <div class="nav__search">
            <img src="@/assets/img/drop.svg" alt="drop">

            <input 
            type="text" 
            placeholder="Введите город" 
            v-model="city" 
            @keydown.enter="getWeather(city), city = ''">

        </div>
    </nav>
</template>

<script>

import { mapActions } from "vuex";

export default {

    data() {
        return {
            city: ''
        }
    },

    methods: {
        ...mapActions(['getWeather'])
    }


}
</script>
