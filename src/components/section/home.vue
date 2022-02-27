<template>
  <section id="home" ref="home">

    <img id="background_1" alt="background_1" src="@/assets/img/hibiscus_background_1.svg">

    <div class="container content">
        <p>We are a human-centered software products developer team.</p>
        <p>Tell us about your goals and let's take the journey together to make them real!</p>
        <nuxt-link class="btn" :to="{ path: '/', hash:'#contact'}">Contact us</nuxt-link>
    </div>

  </section>
</template>

<script>
const delta = 20;

export default {
  name: "home",
  computed:{
  },
  data() {
    return {
    }
  },
  mounted() {
  }, methods: {
  }
}
</script>

<style scoped lang="scss">
#home {
  background-color: #1E1E1E;
  color: #F8F8F8;

  .content p::selection {
    background-color: #F8F8F8;
    color: #1E1E1E;
  }


  #background_1 {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;

    user-select: none;
    pointer-events: none;
  }

  .content {
    position: relative;

    margin-top: 15rem;
    padding: 1rem 3rem 1rem 3rem;

    p {
      font-size: 2rem;
      margin-bottom: 3rem;
      font-weight: 300;

      &:first-child {
        font-weight: 700;
      }
    }

  }

  @media screen and (min-width: 768px) {

    #background_1 {
      position: absolute;
      left: 30%;
      height: 60rem;
      width: auto;
    }

    .content {
      p {
        width: 60%;
      }
    }
  }
}
</style>
