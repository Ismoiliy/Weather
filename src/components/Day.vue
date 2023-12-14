<template>
    <div class="main__week_day">
        <h3 class="main__week_day-title">{{ getWeekDay }}</h3>
        <p class="main__week_day-date">{{ getDay }} {{ getMonth }}</p>

        <img :src="getImg" alt="sun">

        <p class="main__week_day-text">Темп: {{ Math.round(day.temp.max) }}°</p>
        <p class="main__week_day-feels">Ощущается: {{ Math.round(day.feels_like.day) }}°</p>
        <p class="main__week_day-desc">{{ description }}</p>

    </div>
</template>

<script>
import weatherName from "@/icons";
import { unix } from '@/unix.js'
export default {

    props: {
        day: {
            typeof: Object
        }
    },

    computed: {
        description() {
            return this.day.weather[0].description
        },

        getImg() {
            return weatherName[this.description] || weatherName['Ясно']
        },
        getDay() {
            return unix(this.day.dt, 'day')
        },
        getWeekDay() {
            return unix(this.day.dt, 'weekDay')
        },
        getMonth() {
            return unix(this.day.dt, 'month')
        },
    }

}
</script>

