const app = Vue.createApp({
  data() {
    return { // sempre retorna um objeto
      courseGoalA: 'Finish the course and learn Vue!',
      courseGoalB: '<h2>Master Vue and build amanzing apps!</h2>',
      vueLink: 'https://vuejs.org/'
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if(randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    }
  }
  
});

app.mount('#user-goal');