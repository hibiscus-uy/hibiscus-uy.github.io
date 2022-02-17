<template>
<footer>
  <div class="links">
  Home - Services - About us - Contact us
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
footer{
  height: 5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  .links{
    font-size: 1rem;
  }
  .msg{
    font-size: 0.8rem;
  }
}
</style>
