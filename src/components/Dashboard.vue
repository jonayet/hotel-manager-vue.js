<template>
  <div :class='$style.dashboard'>
    Dashboard
    <RoomOverview />
  </div>
</template>

<script>
import RoomOverview from '@/components/RoomOverview'

export default {
  name: 'Dashboard',
  data () {
    return {

    }
  },
  components: {
    RoomOverview
  }
}
</script>

<style lang="scss" module>
  .dashboard {
    font-size: 1em;
  }
</style>
