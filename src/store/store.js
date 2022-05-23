import { createStore } from 'vuex'

export const store = createStore({
    state () {
      return {
          page: 'Викторина',
          isAuth: true,
          questionsAndResponse: [
              {
                  question: 'Что такое Цифровой помощник «Дружба»?',
                  response: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices tincidunt arcu non sodales neque sodales ut. Tempus egestas sed sed risus pretium quam vulputate. Mi proin sed libero enim. Diam quam nulla porttitor massa id. Mattis aliquam faucibus purus in massa. Semper auctor neque vitae tempus quam pellentesque. Sagittis id consectetur purus ut faucibus pulvinar elementum. Odio morbi quis commodo odio. Blandit libero volutpat sed cras ornare arcu dui vivamus arcu. At in tellus integer feugiat. Sit amet nulla facilisi morbi. Facilisis mauris sit amet massa. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam.',
                  iconPath: require('../assets/images/footer/footer-item-computer.svg'),
              },
              {
                  question: 'Кто разработчики?',
                  response: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices tincidunt arcu non sodales neque sodales ut. Tempus egestas sed sed risus pretium quam vulputate. Mi proin sed libero enim. Diam quam nulla porttitor massa id. Mattis aliquam faucibus purus in massa. Semper auctor neque vitae tempus quam pellentesque. Sagittis id consectetur purus ut faucibus pulvinar elementum. Odio morbi quis commodo odio. Blandit libero volutpat sed cras ornare arcu dui vivamus arcu. At in tellus integer feugiat. Sit amet nulla facilisi morbi. Facilisis mauris sit amet massa. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam.',
                  iconPath: require('../assets/images/footer/footer-item-monitor.svg'),
              },
              {
                  question: 'Как начать заниматься? ',
                  response: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices tincidunt arcu non sodales neque sodales ut. Tempus egestas sed sed risus pretium quam vulputate. Mi proin sed libero enim. Diam quam nulla porttitor massa id. Mattis aliquam faucibus purus in massa. Semper auctor neque vitae tempus quam pellentesque. Sagittis id consectetur purus ut faucibus pulvinar elementum. Odio morbi quis commodo odio. Blandit libero volutpat sed cras ornare arcu dui vivamus arcu. At in tellus integer feugiat. Sit amet nulla facilisi morbi. Facilisis mauris sit amet massa. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam.',
                  iconPath: require('../assets/images/footer/footer-item-ink.svg'),
              },
              {
                  question: 'Кто может использовать?',
                  response: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices tincidunt arcu non sodales neque sodales ut. Tempus egestas sed sed risus pretium quam vulputate. Mi proin sed libero enim. Diam quam nulla porttitor massa id. Mattis aliquam faucibus purus in massa. Semper auctor neque vitae tempus quam pellentesque. Sagittis id consectetur purus ut faucibus pulvinar elementum. Odio morbi quis commodo odio. Blandit libero volutpat sed cras ornare arcu dui vivamus arcu. At in tellus integer feugiat. Sit amet nulla facilisi morbi. Facilisis mauris sit amet massa. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam.',
                  iconPath: require('../assets/images/footer/footer-item-glasses.svg'),
              },
              {
                  question: 'Есть ли проверка знаний?',
                  response: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices tincidunt arcu non sodales neque sodales ut. Tempus egestas sed sed risus pretium quam vulputate. Mi proin sed libero enim. Diam quam nulla porttitor massa id. Mattis aliquam faucibus purus in massa. Semper auctor neque vitae tempus quam pellentesque. Sagittis id consectetur purus ut faucibus pulvinar elementum. Odio morbi quis commodo odio. Blandit libero volutpat sed cras ornare arcu dui vivamus arcu. At in tellus integer feugiat. Sit amet nulla facilisi morbi. Facilisis mauris sit amet massa. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam.',
                  iconPath: require('../assets/images/footer/footer-item-bulb.svg'),
              },
              {
                  question: 'Что включает цифровой помощник? ',
                  response: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices tincidunt arcu non sodales neque sodales ut. Tempus egestas sed sed risus pretium quam vulputate. Mi proin sed libero enim. Diam quam nulla porttitor massa id. Mattis aliquam faucibus purus in massa. Semper auctor neque vitae tempus quam pellentesque. Sagittis id consectetur purus ut faucibus pulvinar elementum. Odio morbi quis commodo odio. Blandit libero volutpat sed cras ornare arcu dui vivamus arcu. At in tellus integer feugiat. Sit amet nulla facilisi morbi. Facilisis mauris sit amet massa. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam.',
                  iconPath: require('../assets/images/footer/footer-item-head.svg'),
              },
          ]
      }
    },
    actions: {
        setActivePage(context, activePage){
            context.commit('setActivePage', activePage);
        },
    },
    mutations: {
        setActivePage(state, activePage){
            state.page = activePage;
        },
    },
    getters: {
        getPageData(state){
            switch (state.page){
                case "Викторина":
                    return {
                        color: "orange",
                        cssColor: '#FBC233',
                        text: "Россия: история, культура, герои",
                        shortText: "«Россия: история, культура, герои»",
                        hintLeft: "вопросов",
                        hintRight: "призов",
                    }
                case "Онлайн-урок":
                    return {
                        color: "green",
                        cssColor: '#78DBB1',
                        text: "Всероссийский онлайн-урок «Дружба»",
                        shortText: "Всероссийский онлайн-урок «Дружба»",
                        hintLeft: "учеников",
                        hintRight: "учителей",
                    }
                case "Курсы":
                    return {
                        color: "blue",
                        cssColor: '#9DE5F6',
                        text: "Курс повышения квалификации для учителей",
                        shortText: "Курс повышения квалификации",
                        hintLeft: "часов",
                        hintRight: "курсов",
                    }
                default:
                    return {
                        color: "orange",
                        cssColor: '#FBC233',
                        text: "Россия: история, культура, герои",
                        shortText: "«Россия: история, культура, герои»",
                        hintLeft: "вопросов",
                        hintRight: "призов",
                    }
            }
        }
    }
  })

