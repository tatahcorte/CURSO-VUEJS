const app = Vue.createApp({
  data() {
    return {
      inputClass: '',
      pVIsible: true,
      inputBackgroundColor: ''
    };
  },

  computed: {
    paraClasses() {
      return {
        user1: this.inputClass == 'user1',
        user2: this.inputClass == 'user2',
        visible: this.pVIsible,
        hidden: !this.pVIsible 
      };
    }
  },

  methods: {
    toggleParagraphVisibility() {
      this.pVIsible = !this.pVIsible;
    }
  },
});

app.mount("#assignment");
