Vue.createApp({
  data() {
    return {
      name: 'Tamires',
      age: 24,
      ageInFive: 24+5,
      linkImg: 'https://en.wikipedia.org/wiki/File:City_of_London_skyline_from_London_City_Hall_-_Oct_2008.jpg',
      enteredValue: ''
    };
  },
  methods: {
    favoriteNumber() {
      return Math.random();
    }
  }
}).mount('#assignment');