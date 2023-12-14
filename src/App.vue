<template>
  <div class="container">
    <Navbar />
    <Main v-if="weather" />

    <div v-else class="loading">
      <h2 class="load">Подождите идёт загрузка ... </h2>
    </div>

  </div>
</template>

<script>
import Main from './components/Main.vue';
import Navbar from './components/Navbar.vue';
import { mapActions, mapState } from 'vuex';

export default {
  components: { Navbar, Main },

  computed: {
    ...mapState(['weather'])
  },

  methods: {
    ...mapActions(['getWeather'])
  },

  created() {
    this.getWeather('ташкент')
  }


}
</script>
