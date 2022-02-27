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


    <nuxt-link class="btn-contact" :to="{ path: '/', hash:'#contact'}">Tell us about your idea</nuxt-link>
  </section>
</template>

<script>
export default {
  name: "experience"
}
</script>

<style lang="scss">
#services {
  background-color: #FFFFFF;
  color: #000000;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1, h3 {
    font-weight: 400;
    text-align: center;
  }

  h1 {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

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


  .btn-contact {
    padding: 1rem 6rem;
    border-radius: 4rem;
    background: linear-gradient(275.68deg, #FF1744 -54.94%, #FF1744 -14.15%, #FF616F 34.87%, #5CC6AC 105.61%, #00FFCF 144.78%);
    color: #FFFFFF;
    text-decoration: none;
    text-align: center;
    font-size: 1.5rem;
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
