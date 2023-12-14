<template>
    <div class="main__content">
        <div class="main__content_left">
            <img :src="getImg" alt="">
            <h2 class="main__content_left-title">{{ Math.round(weather.current.temp) }}°</h2>
            <p class="main__content_left-text">Сегодня</p>
            <p class="main__content_left-time">Время: {{ getTime }}</p>
            <p class="main__content_left-city">Город: {{ weather.name }}</p>
        </div>

        <div class="main__content_right">
            <img src="@/assets/img/header_bg.png" alt="">

            <div class="main__content_right_item">
                <div class="main__content_right_item-img">
                    <img src="@/assets/img/temp.svg" alt="">
                </div>

                <span>Температура</span>
                <p>{{ Math.round(weather.current.temp) }} ° - ощущается как
                    {{ Math.round(weather.current.feels_like) }}°
                </p>
            </div>

            <div class="main__content_right_item">
                <div class="main__content_right_item-img">
                    <img src="@/assets/img/pressure.svg" alt="">
                </div>

                <span>Давление </span>
                <p>{{ weather.current.pressure }} мм ртутного столба </p>
            </div>

            <div class="main__content_right_item">
                <div class="main__content_right_item-img">
                    <img src="@/assets/img/precipitation.svg" alt="">
                </div>

                <span>Осадки</span>
                <p>{{ description }}</p>
            </div>

            <div class="main__content_right_item">
                <div class="main__content_right_item-img">
                    <img src="@/assets/img/wind.svg" alt="">
                </div>

                <span>Ветер</span>
                <p>{{ weather.current.wind_speed }} м/с юго-запад </p>
            </div>

        </div>


    </div>
</template>

<script>
import { mapState } from 'vuex'
import weatherName from '@/icons'

export default {

    computed: {
        ...mapState(['weather']),

        getTime() {
            return new Date().toLocaleString('en-US', {

                timeZone: this.weather.timezone,

                timeStyle: 'short',

                hourCycle: 'h23',
            })
        },

        description() {
            return this.weather.current.weather[0].description
        },

        getImg() {
            return weatherName[this.description] || weatherName['Ясно']
        }

    }


}
</script>


