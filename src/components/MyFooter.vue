<template>
<footer>
  <div class="links">
    <nuxt-link :class="{'active':$route.hash==='#home'}" :to="{ path: '/', hash:'#home'}">Home</nuxt-link>
    <span>-</span>
    <nuxt-link :class="{'active':$route.hash==='#services'}" :to="{ path: '/', hash:'#services'}">Services</nuxt-link>
    <span>-</span>
    <nuxt-link :class="{'active':$route.hash==='#about'}" :to="{ path: '/', hash:'#about'}">About us</nuxt-link>
    <span>-</span>
    <nuxt-link :class="{'active':$route.hash==='#contact'}" :to="{ path: '/', hash:'#contact'}">Contact us</nuxt-link>
  </div>
  <div class="msg">
    made with <img id="heart" alt="heart" src="@/assets/img/hibiscus_heart.svg"> by us <img id="hibiscus" alt="hibiscus logo" src="@/assets/img/hibiscus_off_white.svg">
  </div>
</footer>
</template>

<script>
export default {
  name: "MyFooter"
}
</script>

<style scoped lang="scss">
footer {
  background-color: #1E1E1E;
  color: #F8F8F8;

  .msg::selection,
  .msg img::selection,
  .links a::selection {
    background-color: #F8F8F8;
    color: #1E1E1E;
  }

  height: 5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  .links {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    max-width: 900px;
    margin-right: auto;
    margin-left: auto;

    font-size: 1rem;
    width: 100%;

    a {

      color: #FFFFFF;
    }
  }

  .msg {
    font-size: 0.8rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 11rem;
  }
}
</style>
