<template>
  <div>
    <Navigation/>
    <section-home/>
    <section-services/>
    <section-about/>
    <section-contact/>
    <my-footer/>
  </div>
</template>

<script>

export default {
  name: 'IndexPage',
  mounted() {

    window.onscroll = function (e) {
      // console.log('scrollY', window.scrollY)
    }
  },
  methods: {
    change(hash) {
      window.history.pushState("", "", '#' + hash);
      console.log(this.$router)
      this.$router.push('#' + hash)
    }
  }
}
</script>
