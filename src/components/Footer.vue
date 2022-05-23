<template>
  <footer class="footer__wrapper">
      <div class="footer__content">
        <div class="footer__title title">Вопросы и ответы</div>
        <div :class="['news__points', 'points', this.$store.getters.getPageData.color]">
          <div class="point"></div>
          <div class="point"></div>
          <div class="point"></div>
          <div class="point"></div>
          <div class="point"></div>
          <div class="point"></div>
          <div class="point"></div>
          <div class="point"></div>
          <div class="point"></div>
          <div class="point"></div>
          <div class="point"></div>
          <div class="point"></div>
          <div class="point"></div>
          <div class="point"></div>
          <div class="point"></div>
          <div class="point"></div>
          <div class="point"></div>
          <div class="point"></div>
          <div class="point"></div>
          <div class="point"></div>
        </div>
        <div class="footer__body" :style="`background: ${this.$store.getters.getPageData.cssColor};`">
          <div class="container">
            <ul class="footer__list_questions">
              <li
                  v-for="(item, index) in this.$store.state.questionsAndResponse"
                  :key="index"
                  :class="['footer__list_questions-item', {'visible': item.visible}]">
                <div class="footer__list_questions-item_wrapper">
                  <img :src="item.iconPath" alt="Иконка" title="Иконка">
                  <div class="footer__question">{{item.question}}</div>
                  <div class="footer__arrow_button">
                    <img
                        src="../assets/images/footer/footer-white-arrow.svg"
                        alt="Стрелка"
                    >
                  </div>
                </div>
              </li>
            </ul>
            <div class="footer__form">
              <div class="footer__form-title">Задать вопрос</div>
              <div class="footer__form-input_question-wrapper">
                <input v-model="input_question" placeholder="Введите текст вопроса" type="text" class="footer__form-input footer__form-input_question">
              </div>
              <div class="footer__form-row_inputs">
                <input v-model="input_name" placeholder="Введите имя" type="text" class="footer__form-input footer__form-input_name">
                <input v-model="input_mail" placeholder="Введите e-mail" type="text" class="footer__form-input footer__form-input_mail">
              </div>
            </div>
            <ul class="footer__list_menu">
              <li
                  v-for="(item, index) in menuList"
                  :key="index"
                  @click="setActiveItemMenu(item)"
                  :class="['footer__list_menu-item', {'active': item == activeItemMenu}]">
                  <span>{{item}}</span>
              </li>
            </ul>
            <div class="footer__contacts">
              <a href="tel:+7(499) 123-45-67" class="footer__contacts-contact footer__contacts-telephone">+7(499) 123-45-67</a>
              <a href="mailto:mail@victorina22.ru" class="footer__contacts-contact footer__contacts-mail">mail@victorina22.ru</a>
            </div>
          </div>
        </div>
        <div class="footer__rights">2022 ©Все права защищены</div>
      </div>
  </footer>
</template>

<script>

export default {
  name: "Footer",
  data(){
    return {
      input_question: '',
      input_name: '',
      input_mail: '',
      menuList: [
          'О проекте',
          'Викторина',
          'Онлайн-урок',
          'Курсы',
      ],
      activeItemMenu: '',
    }
  },
  methods: {
    setActiveItemMenu(item){
      this.activeItemMenu = item;
      if (item === 'Викторина' || item === 'Онлайн-урок' || item === 'Курсы'){
        this.$store.dispatch('setActivePage', item);
      }
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
  }
}
</script>

<style lang="scss">
.footer__wrapper{
}
.footer__content{

}
.footer__body{
  padding: 41px 0 0 0;
}
.footer__body .container{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.footer__list_questions{
  margin: 0 0 35px 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  max-width: 1146px;
}
.footer__list_questions-item{
  display: flex;
  align-items: center;
  position: relative;
  flex: 0 1 558px;
  background: #FFFFFF;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15), 0 0 40px rgba(222, 222, 222, 0.5);
  border-radius: 50px;
  padding: 50px 75px 50px 55px;
}
.footer__list_questions-item_wrapper{
  display: flex;
  align-items: center;
  gap: 37px;
}
.footer__arrow_button{
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 37px;
  background: #FF7A8A;
  height: 32px;
  width: 32px;
  cursor: pointer;
  border-radius: 50%;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15), 0 0 40px rgba(222, 222, 222, 0.5);
  transform: matrix(-1, 0, 0, 1, 0, 0);
}
.footer__question{
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
}
.footer__form{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1142px;
  width: 100%;
  margin: 0 0 115px 0;
}
.footer__form-title{
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  margin: 0 0 12px 0;
}
.footer__form-input{
  background: #FFFFFF;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15), 0 0 40px rgba(222, 222, 222, 0.5);
  border-radius: 50px;
  padding: 14px 50px;
  font-size: 15px;
  line-height: 18px;
  color: #9F9F9F;
}
.footer__form-input_question-wrapper{
  position: relative;
  display: flex;
  width: 100%;

  &:after{
    content: url("../assets/images/footer/footer_PaperPlaneTilt.svg");
    position: absolute;
    top: 11px;
    right: 39px;
    cursor: pointer;
  }
}
.footer__form-input_question{
  flex: 1 1 1142px;
  margin: 0 0 23px 0;
}
.footer__form-row_inputs{
  width: 100%;
  gap: 29px;
  display: flex;
  justify-content: space-between;
}
.footer__form-input_name, .footer__form-input_mail{
  flex: 0 1 558px;
}
.footer__list_menu{
  margin: 0 0 36px 0;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  max-width: 668px;
  width: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.14);
}
.footer__list_menu-item{
  position: relative;
  font-weight: 500;
  padding: 0 5px 21px 5px;
  cursor: pointer;
  transition: all 1s ease;

  &:after{
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 2px;
    background: #000;
    transform: scale(0);
    opacity: 0;
    transition: all 0.2s ease;
  }

  &.active:after{
    opacity: 1;
    transform: scale(1);
  }
}
.footer__contacts{
  display: flex;
  justify-content: center;
  gap: 64px;
  max-width: 1142px;
  width: 100%;
  margin: 0 0 30px 0;
}
.footer__contacts-contact{
  display: flex;
  gap: 10px;
  font-size: 14px;
  line-height: 17px;
  flex: 0 0 150px;
}
.footer__contacts-telephone:before{
  content: url("../assets/images/footer/footer_telephone.svg");
}
.footer__contacts-mail:before{
  content: url("../assets/images/footer/footer_email.svg");
}
.footer__rights{
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 300;
  font-family: Montserrat, PT Serif, serif;
  background: #9F9F9F;
  color: #FAFAFB;
  opacity: 0.76;
  font-size: 12px;
  line-height: 15px;
  padding: 3px 0;
}
@media (max-width: 767.98px){
  .footer__form-row_inputs{
    flex-direction: column;
  }
  .footer__form-input_name, .footer__form-input_mail{
    flex: 1 1 auto;
  }
  .footer__form-row_inputs{
    gap: 0;
  }
  .footer__form-input_name{
    margin: 0 0 23px 0;
  }
}
@media (max-width: 1142px){
  .footer__form, .footer__list_questions{
    padding: 0 10px;
  }
}
</style>
