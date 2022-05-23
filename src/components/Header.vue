<template>
  <header :style="'border-bottom: 7px solid' + getColorHeader">
    <div class="container">
      <div class="header__content">
        <div class="header__left">
          <ul class="header__left-list">
            <li class="header__left-item">
              О проекте
            </li>
            <li class="header__left-item">
              Новости
            </li>
            <li @click="this.$store.dispatch('setActivePage', 'Курсы')" class="header__left-item course-button">
              Курсы
            </li>
            <li @click="this.$store.dispatch('setActivePage', 'Викторина')" class="header__left-item quiz-button">
              Викторина
            </li>
            <li @click="this.$store.dispatch('setActivePage', 'Онлайн-урок')" class="header__left-item lesson-button">
              Онлайн-урок
            </li>
            <li class="header__left-item">
              Контакты
            </li>
            <li class="header__left-item">
              {{this.$store.state.isAuth ? 'User name' : 'Войти'}}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  computed: {
    getColorHeader(){
      let colorPage = this.$store.getters.getPageData.color;

      switch (colorPage){
        case 'orange':
          return '#FBC233';
        case 'green':
          return '#FF7A8A';
        case 'blue':
          return '#78DBB1';
        default:
          return '#FBC233';
      }
    }
  }
}
</script>

<style lang="scss">
.header__wrapper{
  border-bottom: 7px solid #FBC233;
}
.header__content{
  max-width: 1500px;
  width: 100%;
  margin: 0 auto;
  padding: 10px 0 10px 0;
  font-weight: 500;
}
.header__left{
  flex: 1 1 auto;
  display: flex;
  padding: 8px 0 0 0;
  max-width: 1500px;
}
.header__left-list{
  display: flex;
  justify-content: space-between;
  gap: 5px;
  width: 100%;
}
.course-button, .quiz-button, .lesson-button{
  width: 146px;
}
.header__left-item{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 45px;

  span{
    cursor: pointer;
  }

  li{
    background-size: contain;
  }

  span{
    position: absolute;
    top: 9px;
    line-height: 20px;
  }
}
.lesson-button{
  background: url("../assets/images/header/header-button-background-green.png") no-repeat;
}
.quiz-button{
  background: url("../assets/images/header/header-button-background-orange.png") no-repeat;
}
.course-button{
  background: url("../assets/images/header/header-button-background-blue.png") no-repeat;
}
.header__right{
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
@media (max-width: 1589px) {
  .header__content{
    padding: 10px 10px 10px 10px;
  }
}
</style>
