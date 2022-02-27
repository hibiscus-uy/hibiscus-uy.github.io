<template>
  <section id="services">
    <h3>What we do</h3>
    <h1>Services</h1>
    <h3>Our philosophy is to deliver useful and high quality products.</h3>

    <div class="content">
      <div class="card">
        <img alt="Requirement Elicitation" src="@/assets/img/hibiscus_services_1.svg">
        <span>Requirement Elicitation</span>
      </div>
      <div class="card">
        <img alt="UX/UI Design" src="@/assets/img/hibiscus_services_2.svg">
        <span>UX/UI Design</span>
      </div>
      <div class="card">
        <img alt="Software development" src="@/assets/img/hibiscus_services_3.svg">
        <span>Software development</span>
      </div>
      <div class="card">
        <img alt="Maintenance" src="@/assets/img/hibiscus_services_4.svg">
        <span>Maintenance</span>
      </div>
    </div>


    <nuxt-link class="btn main" :to="{ path: '/', hash:'#contact'}">Tell us about your idea</nuxt-link>
  </section>
</template>

<script>
export default {
  name: "services"
}
</script>

<style lang="scss">
#services {
  background-color: #FFFFFF;
  color: #000000;

  display: flex;
  flex-direction: column;
  align-items: center;

  .content {
    padding-top: 4rem;
    padding-bottom: 4rem;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;


    .card {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 2rem;

      img {
        height: 10rem;
        padding-bottom: 2rem;

        user-select: none;
      }
    }
  }

  @media screen and (min-width: 768px) {

    .content {
      flex-direction: row;

      .card {
        flex: 50%;
      }
    }
  }
}
</style>
