const app = Vue.createApp({
  data() {
    return {
      output1: '',
      confirmOutput1: '',
      output2: '',
      confirmOutput2: ''
    };
  },
  methods: {
    setText(event) {
      this.output1 = event.target.value;
    },

    confirmText() {
      this.confirmOutput1 = this.output1;
    },

    alertButton() {
      alert('Button has clicked!');
    },

    setText2(event) {
      this.output2 = event.target.value;
    },

    confirmText2() {
      this.confirmOutput2 = this.output2;
    }
  }
});

app.mount('#assignment');
