<template>
  <nav :class="{'fade-in':!faded,'responsive':menuExpanded}">
    <div class="menu">
      <img class="logo" alt="hibiscus_menu_icon" src="@/assets/img/hibiscus_logo_dark_s.png">
      <a href="javascript:void(0);" class="icon" @click="menu">
        <img alt="hibiscus_menu_icon" src="@/assets/img/hibiscus_menu_icon.svg">
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
    faded() {
      return this.scroll > 70
    }
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
}

@media screen and (min-width: 768px) {
  nav {

    a {
      display: inline-block;
    }

    .logo,
    .icon {
      display: none;
    }

    &.fade-in {
      top: 6rem;
    }

    .menu{
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  }
}
</style>
