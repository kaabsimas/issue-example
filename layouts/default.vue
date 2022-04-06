<template lang="pug">
  v-app
    Nuxt

</template>

<script>
export default {
  name: 'DefaultLayout',
  head: () => ({
    title: 'Myapp Example'
  }),
  mounted () {
    const self = this
    self.$nextTick(() => {
      self.$nuxt.$loading.start('default')
      setTimeout(() => { self.$nuxt.$loading.finish() }, 3000)
    })
  }
}
</script>