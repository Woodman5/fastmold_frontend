export default {
  state: {
    ads: [
      {
        title: 'First ad',
        description: 'Hello, I am a description',
        promo: false,
        imageSrc: 'https://cdn.quasar.dev/img/parallax2.jpg',
        id: '123'
      },
      {
        title: 'Second ad',
        description: 'Hello, I am a description',
        promo: true,
        imageSrc: 'https://cdn.quasar.dev/img/mountains.jpg',
        id: '1234'
      },
      {
        title: 'Third ad',
        description: 'Hello, I am a description',
        promo: true,
        imageSrc: 'https://cdn.quasar.dev/img/parallax1.jpg',
        id: '12345'
      },
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    ads (state) {
      return state.ads
    },
    promoAds (state) {
      return state.ads.filter(ad => {
        return ad.promo // ad.promo === true
      })
    },
    myAds (state) {
      return state.ads
    },
    adById (state) {
      return adId => {
        return state.ads.find(ad => ad.id === adId)
      }
    }
  }
}
