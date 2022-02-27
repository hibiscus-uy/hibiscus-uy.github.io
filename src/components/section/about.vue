<template>
  <section id="about">

    <h3>Who we are</h3>
    <h1>About us</h1>

    <div class="container">
      <p>We are a team of geeks with a good pragmatic approach centred in the customer experience of IT assets.</p>
      <p>Our background comes from multinational enterprises with an entrepreneur skill set, always looking to experience something new, curious minds eager to deliver fast increments that makes a difference to our customers.</p>
      <p>If you are looking for a partner to grow your business, you can count on us!</p>

      <div class="members">
        <div class="card">
          <img class="profile-pic" alt="Pablo Fraga"
               src="https://media-exp1.licdn.com/dms/image/C4D03AQG6XVV1H839yw/profile-displayphoto-shrink_200_200/0/1625687951480?e=1651104000&v=beta&t=9FjgeCihsUA_E2_08tKccQ9EBuH0dbwuK-J6PborX44">
          <span>Pablo Fraga</span>
          <a href="https://linkedin.com/in/pablofraga/" target="_blank">
            <img alt="linkedin" src="@/assets/img/hibiscus_linkedin_icon.svg"></a>
          <p>22+ years of experience in IT, passionate programmer with strong skills in architecture and management,
            most experience comes from multinational companies like IBM, Pernod Ricard, Basf and Verifone,
            running projects that form part of our daily lives as consumers of the IT assets.</p>
        </div>

        <div class="card">
          <img class="profile-pic" alt="Germán Faller"
               src="https://media-exp1.licdn.com/dms/image/C4D03AQE8cKyk3Dt7iQ/profile-displayphoto-shrink_200_200/0/1645488513112?e=1651104000&v=beta&t=4tofbolUdr-WEatedbs2a1aLh1s-jQBQuMnWVuEWJbs">
          <span>Germán Faller</span>
          <a href="https://linkedin.com/in/faller222/" target="_blank">
            <img alt="linkedin" src="@/assets/img/hibiscus_linkedin_icon.svg"></a>
          <p>10+ years of experience in IT, passionate troubleshooter, handling wide range of technologies. Most
            experience comes from a national telecom company, multinational companies like BASF and Perficient. Working
            with on-premise and cloud architectures, microservices oriented, with German or American customers.</p>
        </div>

        <div class="card">
          <img class="profile-pic" alt="Yanina Viera"
               src="https://media-exp1.licdn.com/dms/image/C4E03AQHbaou1U61PLg/profile-displayphoto-shrink_200_200/0/1639152053966?e=1651104000&v=beta&t=A0rEAbNmqa_5JMSxKGsFG2RBsxCTQoG7Hx5Sfn_thrc">
          <span>Yanina Viera</span>
          <a href="https://linkedin.com/in/yaninaviera/" target="_blank">
            <img alt="linkedin" src="@/assets/img/hibiscus_linkedin_icon.svg"></a>
          <p>
            +5 years on designing experiences.
            In love with interactive product development and catching what people really need.
            Most experience come from North American and Israeli costumers,
            working on requirement elicitation, landing ideas and designing user interfaces.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "about"
}
</script>

<style lang="scss">
#about {
  background-color: #F8F8F8;
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

  .container {
    text-align: center;

    p {
      padding: 0 3rem;
    }

    .members {
      display: flex;
      flex-direction: column;

      .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 3rem;

        p {
          padding: 0;
        }

        .profile-pic {
          border-radius: 100%;
          max-width: 8rem;
          margin-bottom: 1rem;

          user-select: none;
        }
      }
    }
  }


  @media (min-width: 768px) {
    //Small screens, laptops
    .container {
      .members {
        flex-direction: row;
      }
    }
  }
}
</style>
