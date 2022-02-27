<template>
  <section id="contact">

    <img id="hibiscus_background_2" alt="hibiscus_background_2" src="@/assets/img/hibiscus_background_2.svg">

    <h3>Let's create together</h3>
    <h1>Contact us</h1>

    <div class="container content">
      <div class="form">
        <input v-model="name" placeholder="Name" name="name" type="text">
        <input v-model="mail" placeholder="e-mail" name="email" type="email">
        <textarea v-model="msg" placeholder="Message"/>
        <div class="right">
          <button class="btn" @click="submit">Send</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "contact",
  data() {
    return {
      name: null,
      mail: null,
      msg: null,
    }
  }, methods: {
    submit() {
      const data = {name: this.name, _replyto: this.mail, contact: this.mail, message: this.msg}
      this.$axios.post(`https://formspree.io/f/meqngzzd`, data)
        .then(this.clear)
    },
    clear() {
      this.name = null;
      this.mail = null;
      this.msg = null;
    }
  }
}
</script>

<style lang="scss">
#contact {
  background-color: #FFFFFF;
  color: #000000;

  #hibiscus_background_2 {
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
    padding-top: 5rem;
    padding-right: 5rem;
    padding-left: 5rem;

    .form {
      display: flex;
      flex-direction: column;

      textarea {
        resize: vertical;
        height: 10rem;
      }

      input {
        margin-bottom: 1rem;
      }

      input[name="name"] {
        border-radius: 1rem 0 0 0;
      }

      textarea, input {
        padding: 1rem;
        border: 1px solid #00FFCF;
        background: rgba(0, 0, 0, 0.9);
        color: #00FFCF;
        font-size: 1rem;

        &:focus,
        &:focus-visible {
          border: 1px solid #FF1745;
          box-shadow: 0 0 0.2rem 0 #FF1745;
        }

        &::placeholder {
          color: #00FFCF80;
          opacity: 1; /* Firefox */
        }

        &::selection {
          color: #00FFCF;
          background: #FF174580;
        }
      }

      .right {
        text-align: right;

        .btn{
          padding: 0.5rem;
          border-radius: 0 0 1rem 1rem;
          width: 10rem;
            font-size: 1rem;
            font-weight: 500;
        }
      }

    }
  }

  @media (min-width: 768px) {
    //Small screens, laptops

    .content {
      padding-right: 10rem;
      padding-left: 10rem;
    }
  }
}
</style>
