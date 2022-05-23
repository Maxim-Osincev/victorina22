<template>
  <div class="info__wrapper">
    <div class="info__top_buttons-wrapper">
      <div class="container">
        <div class="info__top_buttons">
          <button :style="'background:' + this.$store.getters.getPageData.cssColor" class="info__top_button">Правила участия</button>
          <button :style="'background:' + this.$store.getters.getPageData.cssColor" class="info__top_button">Призы</button>
        </div>
      </div>
    </div>
    <div :style="'background:' + this.$store.getters.getPageData.cssColor" class="info__text_content-wrapper">
      <div class="container">
        <div class="info__text_content">
          <h6 class="info__text_content-title">Возможности для участников</h6>
          <div class="info__text_content-text">Проведение конкурса-фестиваля дает возможность участникам презентовать свои идеи, показать свои достижения в той или иной сфере творческой деятельности, формирующие у зрителей представление о традиционной культуре народов Российской Федерации. Участники могут также познакомиться с идеями других конкурсантов и, конечно же, получить профессиональную оценку проделанной работы.</div>
          <div class="info__card_info" :style="`background: url(${getInfoCardBackgroung}) no-repeat;`">
            <div class="info__card_info-title">{{this.$store.state.page}}</div>
            <div class="info__card_info-second_title">{{this.$store.getters.getPageData.shortText}}</div>
            <ul class="info__card_info-list">
              <li class="info__card_info-item"><span>200</span><span>{{this.$store.getters.getPageData.hintLeft}}</span></li>
              <li class="info__card_info-item"><span>100</span><span>{{this.$store.getters.getPageData.hintRight}}</span></li>
              <li class="info__card_info-item"><img src="../assets/images/info/bulb.svg" alt="Лампочка" title="Лампочка"><span>сертификат (всем участникам)</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="info__join_button-wrapper">
      <div class="container">
        <div class="info__join_button">
          <button class="info__join_button-button rose-button">{{this.$store.state.page === 'Викторина' && this.$store.state.isAuth ? 'Перейти' : 'Участвовать'}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Info",
  computed: {
    getInfoCardBackgroung(){
      return require(`../assets/images/info/info_card_backgroung_${this.$store.getters.getPageData.color}.png`)
    },
  }
}
</script>

<style lang="scss">
.info__wrapper{
  display: flex;
  flex-direction: column;
  margin: 0 0 202px 0;
  padding: 111px 0 0 0;

  .container{
    padding: 0 0 0 219px;
  }
}
.info__top_buttons, .info__text_content, .info__join_button {
  display: flex;
  justify-content: flex-end;
  max-width: 1521px;
  width: 100%;
  padding-left: 500px !important;
}
.info__top_buttons-wrapper{
  margin: 0 0 64px 0;
}
.info__top_buttons{
  gap: 99px;
}
.info__top_button{
  font-weight: 600;
  font-size: 30px;
  line-height: 37px;
  box-shadow: 0px 22px 20px 3px rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 72px;
  max-width: 422px;
  width: 100%;
  padding: 31px 0 31px 0;
  cursor: pointer;
}
.info__text_content-wrapper{
  margin-bottom: 46px;
}
.info__text_content{
  position: relative;
  padding: 68px 0 81px 0;
  flex-direction: column;
  align-items: flex-end;
}
.info__text_content-title, .info__text_content-text{
  max-width: 927px;
  width: 100%;
  padding: 0 169px 0 0;
}
.info__text_content-title{
  font-weight: 700;
  font-size: 24px;
  line-height: 140%;
  margin-bottom: 10px;
}
.info__text_content-text{
  font-size: 22px;
  line-height: 140%;
}
.info__join_button-button{
  font-size: 30px;
  line-height: 37px;
  max-width: 927px;
  padding: 20px 0;
}
.info__card_info{
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: -274px;
  left: 0;
  height: 808px;
  max-width: 479px;
  width: 100%;
  padding: 45px 0 0 0;
}
.info__card_info-second_title, .info__card_info-list{
  max-width: 352px;
  width: 100%;
}
.info__card_info-title{
  transform: matrix(1, -0.03, 0, 1, 0, 0);
  font-size: 55px;
  line-height: 73px;
  margin: 0 0 85px 0;
}
.info__card_info-second_title{
  font-weight: 700;
  font-size: 35px;
  font-family: 'PT Serif', sans-serif;
  margin-bottom: 23px;
}
.info__card_info-item{
  display: flex;
  align-items: center;

  &:last-child{
    margin: 15px 0 0 0;
  }

  span:first-child, img:first-child{
    max-width: 95px;
    width: 100%;
    font-size: 50px;
    line-height: 61px;
    margin: 0 19px 0 0;
  }

  span:last-child{
    font-size: 25px;
    line-height: 30px;
    max-width: 240px;
  }

  img{
    max-width: 92px;
    object-fit: contain;
  }
}
@media(max-width: 1500px){
  .info__text_content-title, .info__text_content-text{
    padding-right: 0;
  }
  .info__wrapper{
    .container{
      padding: 0 30px 0 30px;
    }
  }
}
</style>
