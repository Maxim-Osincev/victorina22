<template>
  <div class="news__wrapper">
    <div class="container">
      <div class="news__content">
        <div class="news__title title">Новости</div>
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
        </div>
        <div class="news__slider">
          <swiper
              :slides-per-view="3"
              :space-between="-45"
              @swiper="onSwiper"
              @slideChange="onSlideChange"
              :loop="true"
          >
            <swiper-slide class="news__slider-item" v-for="slide in listNews" >
              <img class="news__slider-item_photo" :src="slide.imagePath" alt="Фото" title="Фото">
              <div class="news__slider-item_title">{{slide.title}}</div>
              <div class="news__slider-item_text">{{slide.text}}</div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

export default {
  name: "News",
  data () {
    return {
      listNews: [
        {
          imagePath: require('../assets/images/news/news-photo.png'),
          title: 'Первый (отборочный) этап',
          text: 'Первый (отборочный) этап включает в себя дистанционный сбор и оценку заявок участников, в том числе, видеозапись (визитную карточку) участника, видеозапись показательной работы.',
        },{
          imagePath: require('../assets/images/news/news-photo.png'),
          title: 'Первый (отборочный) этап',
          text: 'Первый (отборочный) этап включает в себя дистанционный сбор и оценку заявок участников, в том числе, видеозапись (визитную карточку) участника, видеозапись показательной работы.',
        },{
          imagePath: require('../assets/images/news/news-photo.png'),
          title: 'Первый (отборочный) этап',
          text: 'Первый (отборочный) этап включает в себя дистанционный сбор и оценку заявок участников, в том числе, видеозапись (визитную карточку) участника, видеозапись показательной работы.',
        },{
          imagePath: require('../assets/images/news/news-photo.png'),
          title: 'Первый (отборочный) этап',
          text: 'Первый (отборочный) этап включает в себя дистанционный сбор и оценку заявок участников, в том числе, видеозапись (визитную карточку) участника, видеозапись показательной работы.',
        },{
          imagePath: require('../assets/images/news/news-photo.png'),
          title: 'Первый (отборочный) этап',
          text: 'Первый (отборочный) этап включает в себя дистанционный сбор и оценку заявок участников, в том числе, видеозапись (визитную карточку) участника, видеозапись показательной работы.',
        },
      ]
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
    };
    const onSlideChange = () => {
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
}
</script>

<style lang="scss">
.news__wrapper{
  margin-bottom: 190px;
  padding: 0 54px;
  width: 100%;

  .swiper-slide{
    transition: transform 0.3s ease;
    transform: scale(0.65);

    &.swiper-slide-next{
      transition: transform 0.3s ease;
      transform: scale(1);
    }
  }
}
.news__slider-item{
  max-width: 841px;
  width: 100%;
}
.news__slider-item_photo{
  margin: 0 0 27px 0;
  width: 100%;
  object-fit: contain;
}
.news__slider-item_title{
  font-weight: 700;
  font-size: 23px;
  line-height: 28px;
  margin: 0 0 10px 0;
  color: #333333;
  padding: 0 0 0 28px;
}
.news__slider-item_text{
  font-size: 20px;
  line-height: 24px;
  color: #333333;
  padding: 0 0 0 28px;
}
</style>
