<template>
  <div class="intro__wrapper">
    <div class="container">
      <div class="intro__content">
        <div class="intro__left">
          <div class="intro__left-title">
            <img :src="require(`../assets/images/intro/intro-title-${getPageData.color}.png`)" alt="Заголовок" title="Заголовок">
            <div :class="['intro__left-mouthpiece_wrapper', getPageData.color !== 'orange' ? 'intro__left-mouthpiece_transform' : null]">
              <img :src="require(`../assets/images/intro/intro-mouthpiece-sound-${getPageData.color}.png`)" alt="Рупор" title="Рупор" class="intro__left-mouthpiece_sound">
              <img :src="require(`../assets/images/intro/intro-mouthpiece-${getPageData.color}.png`)" alt="Рупор" title="Рупор" class="intro__left-mouthpiece">
            </div>
          </div>
          <h1 :class="getPageData.color === 'blue' ? 'intro__left-second_title_small' : 'intro__left-second_title_full'" class="intro__left-second_title">{{this.$store.getters.getPageData.text}}</h1>
          <button class="intro__left-button rose-button">{{this.$store.state.page === 'Викторина' && this.$store.state.isAuth ? 'Перейти' : 'Участвовать'}}</button>
        </div>
        <div class="intro__right">
          <div class="intro__right-hint">
            <div class="intro__right-hint_left">
              <div class="intro__right-hint_count">200</div>
              <div class="intro__right-hint_text">{{getPageData.hintLeft}}</div>
            </div>
            <div class="intro__right-hint_bulb_wrapper">
              <img :src="require(`../assets/images/intro/left-light-bulb-${getPageData.color}.png`)" alt="Лампочка" title="Лампочка" class="intro__right-hint_light_left intro__right-hint_light">
              <img :src="require(`../assets/images/intro/bulb-${getPageData.color}.png`)" alt="Лампочка" title="Лампочка" class="intro__right-hint_bulb">
              <img :src="require(`../assets/images/intro/right-light-bulb-${getPageData.color}.png`)" alt="Лампочка" title="Лампочка" class="intro__right-hint_light_right intro__right-hint_light">
            </div>
            <div class="intro__right-hint_right">
              <div class="intro__right-hint_count">200</div>
              <div class="intro__right-hint_text">{{getPageData.hintRight}}</div>
            </div>
          </div>
          <div class="intro__right-images_wrapper">
            <div class="intro__right-images intro__right-images_green" v-if="getPageData.color === 'green'">
              <img src="../assets/images/intro/intro-main_background-green.png" alt="Дети" title="Дети">
            </div>
            <div class="intro__right-images intro__right-images_blue" v-else-if="getPageData.color === 'blue'">
              <img src="../assets/images/intro/intro-main_background-blue.png" alt="Учитель" title="Учитель">
            </div>
            <div class="intro__right-images intro__right-images_orange" v-else>
              <img src="../assets/images/intro/intro-main_background-orange.png" alt="Фон" title="Фон">
              <img src="../assets/images/intro/intro-main_image-boy.png" alt="Мальчик" title="Мальчик">
              <img src="../assets/images/intro/intro-main_image-1.png" alt="Памятник" title="Памятник">
              <img src="../assets/images/intro/intro-main_image-2.png" alt="Пушкин" title="Пушкин">
              <img src="../assets/images/intro/intro-main_image-3.png" alt="Ракета" title="Ракета">
              <img src="../assets/images/intro/intro-main_image-4.png" alt="Храм" title="Храм">
              <img src="../assets/images/intro/intro-main_image-5.png" alt="Гагарин" title="Гагарин">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Intro",
  computed: {
    getPageData(){
      return this.$store.getters.getPageData
    },
  }
}
</script>

<style lang="scss">
.intro__left-mouthpiece_transform{
  bottom: -20px !important;
  right: -230px !important;
}
.intro__left-mouthpiece_wrapper{
  position: absolute;
  bottom: -150px;
  right: -150px;
  max-width: 253px;
  display: flex;
}
.intro__left-mouthpiece_sound{
  transform: translate(50px, -60px);

  animation-name: mouthpiece;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
@keyframes mouthpiece {
  0%{
    transform: translate(50px, -60px) scale(1);
  }
  50%{
    transform: translate(40px, -70px) scale(1.1);
  }
  100%{
    transform: translate(50px, -60px) scale(1);
  }
}
.intro__wrapper{
  margin: 0 0 215px 0;
  position: relative;
}
.intro__content{
  display: flex;
  justify-content: space-between;
  padding: 72px 0 0 0;
  gap: 20px;
  height: 1050px;
}
.intro__left{
  padding: 0 0 0 95px;
  gap: 10px;
  max-width: 1050px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.intro__left-title{
  position: relative;
  max-width: 614px;

  img{
    width: 100%;
    object-fit: contain;
  }
}
.intro__left-second_title{
  font-family: 'PT Serif', sans-serif;
  font-weight: 700;
  font-size: 105px;
  line-height: 130%;
  flex: 1 1 auto;
}
.intro__left-button{
  padding: 25px 114px;
  font-weight: 600;
  font-size: 40px;
  line-height: 49px;
  max-width: 526px;
  width: 100%;
}
.intro__right{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1 1 auto;
}
.intro__right-hint{
  display: flex;
  justify-content: space-between;
  max-width: 686px;
  width: 100%;
  margin: 0 150px 050px 0;
  align-self: end;
  gap: 25px;
}
.intro__right-hint_light_left{
  animation-name: hint-light-left;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
.intro__right-hint_light_right{
  animation-name: hint-light-right;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
@keyframes hint-light-left {
  0%{
    transform: translateX(0) scale(1);
  }
  50%{
    transform: translateX(-10px) scale(1.1);
  }
  100%{
    transform: translateX(0) scale(1);
  }
}
@keyframes hint-light-right {
  0%{
    transform: translateX(0) scale(1);
  }
  50%{
    transform: translateX(10px) scale(1.1);
  }
  100%{
    transform: translateX(0) scale(1);
  }
}
.intro__right-hint_count{
  font-family: 'PT Serif', sans-serif;
  font-weight: 700;
  font-size: 80px;
  line-height: 106px;
}
.intro__right-hint_text{
  font-size: 40px;
  line-height: 49px;
}
.intro__right-hint_bulb_wrapper{
  display: flex;
  align-items: center;
  gap: 11px;
}
.intro__right-hint_left, .intro__right-hint_right{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  max-width: 198px;
  flex: 0 0 100%;
}
.intro__left-second_title_full{
  max-width: 750px;
}
.intro__right-images{
  z-index: -2;
  position: absolute;
  right: 0;
}
.intro__right-images_green{
  bottom: -50px;
}
.intro__right-images_blue{
  bottom: 0;
}
.intro__right-images_orange{
  bottom: 0;

  img{
    position: absolute;
    animation-delay: 0.5s;
    animation-duration: 1s;
    animation-fill-mode: forwards;

    &:nth-child(1){
      z-index: -2;
      bottom: 0;
      right: 0;
    }
    &:nth-child(2){
      z-index: 1;
      bottom: 10px;
      right: 210px;
    }
    &:nth-child(3){
      z-index: 0;
      bottom: -110px;
      right: 560px;
      transform: translate(350px, -100px) scale(0);

      animation-name: monument;
    }
    @keyframes monument {
      100%{
        transform: translate(0, 0) scale(1);
      }
    }
    &:nth-child(4){
      z-index: -1;
      bottom: 160px;
      right: 520px;
      transform: translate(350px, 100px) scale(0);

      animation-name: pushkin;
    }
    @keyframes pushkin {
      100%{
        transform: translate(0, 0) scale(1);
      }
    }
    &:nth-child(5){
      z-index: -1;
      bottom: 520px;
      right: 620px;
      transform: translate(150px, 400px) scale(0);

      animation-name: rocket;
    }
    @keyframes rocket {
      100%{
        transform: translate(0, 0) scale(1);
      }
    }
    &:nth-child(6){
      z-index: -2;
      bottom: 150px;
      right: 0;
      transform: translate(-350px, 100px) scale(0);

      animation-name: temple;
    }
    @keyframes temple {
      100%{
        transform: translate(0, 0) scale(1);
      }
    }
    &:nth-child(7){
      z-index: -1;
      bottom: -40px;
      right: 0;
      transform: translate(-350px, -100px) scale(0);

      animation-name: gagarin;
    }
    @keyframes gagarin {
      100%{
        transform: translate(0, 0) scale(1);
      }
    }
  }
}
@media(max-width: 1919.98px){
  .intro__left{
    padding: 0 0 0 10px;
  }
  .intro__left-second_title{
    font-size: 80px;
  }
  .intro__right-hint{
    margin: 0 10px 0 0;
    align-items: center;
  }
  .intro__right-hint_count{
    font-size: 50px;
    line-height: 100%;
  }
  .intro__right-hint_text{
    font-size: 30px;
    line-height: 100%;
  }
  .intro__right-hint_left, .intro__right-hint_right{
    max-width: 150px;
  }
  .intro__left-second_title_small{
    max-width: 750px;
  }
  .intro__left{
    max-width: 987px;
  }
  .intro__left-mouthpiece_wrapper{
    display: none;
  }
}
</style>
