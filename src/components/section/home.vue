<template>
  <section id="home" ref="home">

    <img id="background_1" alt="background_1" src="@/assets/img/hibiscus_background_1.svg">


    <div class="container content">
        <p>We are a human-centered software products developer team.</p>
        <p>Tell us about your goals and lets take the journey together to make them real!</p>
        <nuxt-link class="btn-contact" :to="{ path: '/', hash:'#contact'}">Contact us</nuxt-link>
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
  color: #FFF;

  #background_1 {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .content {
    position: relative;

    margin-top: 15rem;
    padding: 1rem 3rem 1rem 1rem;

    p {
      font-size: 2rem;
      margin-bottom: 3rem;
      font-weight: 300;

      &:first-child{
        font-weight: 700;
      }
    }

    .btn-contact {
      padding: 1rem 6rem;
      border-radius: 4rem;
      background: linear-gradient(275.68deg, #FF1744 -54.94%, #FF1744 -14.15%, #FF616F 34.87%, #5CC6AC 105.61%, #00FFCF 144.78%);
      color: #FFFFFF;
      text-decoration: none;
      text-align: center;
      font-size: 1.5rem;
    }
  }

  @media screen and (min-width: 768px) {

    #background_1 {
      position: absolute;
      top: 0;
      height: 100%;
      width: 100%;
      //object-fit: cover;
    }

    .content{
      p{
        width: 50%;
      }
    }
  }
}
</style>
