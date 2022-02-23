<template>
  <nav :class="{'fade-in':!faded,'responsive':menuExpanded}">
    <div class="menu">
      <img v-if="light" class="logo" alt="hibiscus_menu_icon" src="@/assets/img/hibiscus_logo_light.svg">
      <img v-else       class="logo" alt="hibiscus_menu_icon" src="@/assets/img/hibiscus_logo_dark.svg">
      <a href="javascript:void(0);" class="icon" @click="menu">
        <img v-if="menuExpanded" alt="hibiscus_menu_close_icon" src="@/assets/img/hibiscus_menu_close_icon.svg">
        <img v-else alt="hibiscus_menu_icon" :class="{'light':light}" src="@/assets/img/hibiscus_menu_icon.svg">
      </a>
      <nuxt-link @click.native='handler' :class="{'active':$route.hash==='#home'}" :to="{ path: '/', hash:'#home'}">Home</nuxt-link>
      <nuxt-link @click.native='handler' :class="{'active':$route.hash==='#services'}" :to="{ path: '/', hash:'#services'}">Services</nuxt-link>
      <nuxt-link @click.native='handler' :to="{ path: '/'}"><img alt="hibiscus_menu_icon" src="@/assets/img/hibiscus_logo_dark_m.png"></nuxt-link>
      <nuxt-link @click.native='handler' :class="{'active':$route.hash==='#about'}" :to="{ path: '/', hash:'#about'}">About us</nuxt-link>
      <nuxt-link @click.native='handler' :class="{'active':$route.hash==='#contact'}" :to="{ path: '/', hash:'#contact'}">Contact us</nuxt-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      scroll: 0,
      menuExpanded: false
    }
  },
  computed: {
    faded() { return this.scroll > 70 },
    light() { return this.scroll > 350 }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.scroll = window.scrollY
    },
    handler(pointerEvent){
      if(this.menuExpanded) {
        this.menu()
      }
    },
    menu() {
      this.menuExpanded = !this.menuExpanded
      document.body.style.overflowY = this.menuExpanded ? 'hidden' : '';
    }
  }
}
</script>

<style scoped lang="scss">
nav {

  a {
    display: none;
  }
  .logo{
    height: 6rem;
  }

  .icon {
    display: inline-block;
    position: fixed;
    right: 2rem;
    top: 3rem;
  }

  .menu {
    max-width: 1200px;
    margin-right: auto;
    margin-left: auto;
    padding: 2rem;
  }
}

@media screen and (max-width: 767px) {
  &.responsive {
    background-color:  #000;
    height: 100vh;
  }

  &.responsive a {
    display: block;
    margin-bottom: 2rem;
    margin-left: 2rem;

    &:nth-child(3){
      margin-top: 3rem;
    }

    &:nth-child(5){
      display: none;
    }

    &:not(:nth-child(2)){
      font-size: 3rem;
    }
  }

  .icon img.light {
    filter: invert(100%);
  }
}

@media screen and (min-width: 768px) {
  nav {
    top: -10rem;

    a {
      display: inline-block;
    }

    .logo,
    .icon {
      display: none;
    }

    &.fade-in {
      top: 0;
    }

    .menu{
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  }
}
</style>
