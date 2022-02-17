<template>
  <section id="contact">

    <img id="hibiscus_background_2" alt="hibiscus_background_2" src="@/assets/img/hibiscus_background_2.svg">
    <div class="title">
      <p>Lets create together</p>

      <p>Contact us</p>
    </div>


    <div class="container content">
      <div class="form">
        <input v-model="name" placeholder="Name" name="name" type="text">
        <input v-model="mail" placeholder="e-mail" name="email" type="email">
        <textarea v-model="msg" placeholder="Message"/>
        <div class="right">
          <button @click="submit">Send</button>
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
      const data = {name: this.name, _replyto: this.mail, message: this.msg}
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

<style lang="scss" scoped>
#contact {
  background-color: #FFFFFF;
  color: #000000;

  #hibiscus_background_2 {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .title {
    position: relative;
    text-align: center;

    p {
      font-size: 1.5rem;
      line-height: 4rem;
      font-style: normal;
      font-weight: normal;
      margin: 0;
    }

    p + p {
      font-size: 3rem;
      margin-bottom: 5rem;
    }
  }

  .content {
    position: relative;
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

        &:first-child{
          border-radius: 1rem 0 0 0;
        }
      }

      textarea, input {
        padding: 1rem;
        border: 1px solid #00FFCF;
        background: rgba(0, 0, 0, 0.9);
        color: #00FFCF;
        font-size: 1rem;

        &:focus-visible {
          outline: #FF1744 solid 2px;
          outline-offset: -2px;
        }

        &::placeholder {
          color: #00FFCF80;
          opacity: 1; /* Firefox */
        }
      }

      .right {
        text-align: right;

        button{
          padding: 0.5rem;
          width: 10rem;
          background: #00FFCF;
          border: none;
          border-radius: 0 0 1rem 1rem;
          font-size: 1rem;
          font-weight: 500;
        }
      }

    }
  }

  //
  //.title {
  //  //background-color: #002C23;
  //  color: #FFFFFF;
  //
  //  .container {
  //    display: flex;
  //    justify-content: space-between;
  //    align-items: center;
  //    padding: 0 1.5rem;
  //
  //    h2 {
  //      display: inline-block;
  //      margin-top: 2rem;
  //      margin-bottom: 2rem;
  //    }
  //  }
  //}
  //
  //.content {
  //  display: flex;
  //  flex-direction: column;
  //  padding-right: 5rem;
  //  padding-left: 5rem;
  //
  //  .form {
  //    display: flex;
  //    flex-direction: column;
  //
  //    button {
  //      margin-top: 1rem;
  //      padding: 1rem;
  //      border-radius: 0.5rem;
  //      border: 1px solid #002C23;
  //      background-color: #FFFFFF;
  //      color: #002C23;
  //      text-decoration: none;
  //      text-align: center;
  //      cursor: pointer;
  //
  //      &:hover {
  //        background-color: #002C23;
  //        color: #FFFFFF;
  //        border-color: #FFFFFF;
  //      }
  //    }
  //
  //    textarea {
  //      resize: vertical;
  //      height: 10rem;
  //    }
  //
  //    textarea, input {
  //      padding: 1rem;
  //      border: 1px solid #002C23;
  //      color: #002C23;
  //      font-size: 1rem;
  //
  //      &:focus-visible {
  //        outline: #00FFCE solid 1px;
  //        outline-offset: -1px;
  //      }
  //    }
  //
  //    :nth-child(1) {
  //      border-radius: 0.5rem 0.5rem 0 0;
  //    }
  //
  //    :nth-child(3) {
  //      border-radius: 0 0 0.5rem 0.5rem;
  //    }
  //  }
  //}


  @media (min-width: 768px) {
    //Small screens, laptops

    .content {
      padding-right: 10rem;
      padding-left: 10rem;
    }
  }

}
</style>
