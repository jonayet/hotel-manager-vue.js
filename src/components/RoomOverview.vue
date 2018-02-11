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
</v-container>

  </div>
</template>

<script>
import moment from 'moment';
import Room from '@/components/Room'

export default {
  name: 'RoomOverview',
  data: () => ({
    rooms: [
      {
        id: '1',
        label: 'Room 1',
        isAvailable: false,
        booking: {
          name: 'John Doe',
          checkin: moment().format('DD/MM/YY hh:mm:ss a'),
          checkout: moment().format('DD/MM/YY hh:mm:ss a')
        }
      },
      {
        id: '2',
        label: 'Room 2',
        isAvailable: true
      }
    ]
  }),
  components: {
    Room
  }
}
</script>

<style lang="scss" module>

</style>
