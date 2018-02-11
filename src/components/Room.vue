<template>
<v-flex xs12>
  <v-card>
    <v-card-text>
      <v-list three-line subheader>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>{{room.label}}</v-list-tile-title>
            <v-list-tile-sub-title>{{booking.name}}</v-list-tile-sub-title>
            <v-list-tile-sub-title>{{booking.checkin}}</v-list-tile-sub-title>
            <v-list-tile-sub-title>{{booking.checkout}}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-card-text>
    <v-card-actions :class="room.isAvailable ? 'green' : 'red'">
      <v-spacer></v-spacer>
      <v-icon color="white darken-2" v-text="room.isAvailable ? 'check_circle' : 'block'">check_circle</v-icon>
    </v-card-actions>
  </v-card>
</v-flex>
</template>

<script>
export default {
  name: 'Room',
  data: () => ({

  }),
  props: {
    room: {
      type: Object,
      reqired: true,
      default: () => ({
        id: '',
        label: '',
        isAvailable: true
      })
    },
    booking: {
      type: Object,
      reqired: false,
      default: () => ({
        name: '',
        checkin: '',
        checkout: ''
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
