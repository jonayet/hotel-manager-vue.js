<template>
  <div>
    <div>
      Booking Overview
    </div>

    <v-container grid-list-md text-xs-center>
        <v-layout row wrap fill-height>
          <div v-for="room of rooms" :key="room.id">
                <Room :room="room" :booking="room.booking"/>
          </div>
        </v-layout>
        <v-btn fab dark color="indigo" @click="bookRoom()">
          <v-icon dark>add</v-icon>
        </v-btn>
    </v-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Room from '@/components/Room'

export default {
  name: 'RoomOverview',
  data: () => ({

  }),
  computed: mapGetters('rooms', {
    rooms: 'all'
  }),
  methods: {
    ...mapActions('rooms', {
      bookRoom: 'book'
    })
  },
  components: {
    Room
  }
}
</script>

<style lang="scss" module>

</style>
