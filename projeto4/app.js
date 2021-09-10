const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      fullname: "",
      lastName: ''
    };
  },

  // watch será executado apenas quando tiver uma mudança nas propriedades do data()
  watch: {
    counter(value) {
      if(value > 50) {
        this.counter = 0;
      }
    }

    // name(value) {
    //   if (this.name == "") {
    //     this.fullname = "";
    //   } else {
    //     this.fullname = value + " " + "Corte";
    //   }
    // }, QUANDO QUISERMOS USAR MAIS QUE UMA PROPRIEDADE PARA A MESMA COISA, O IDEAL É O ""COMPUTED""
  },

  computer: {
    fullname() {
      if(this.name == '' || this.lastName == '') {
        return '';
      }
      return this.name + ' ' + this.lastName;
    }
  },

  methods: {
    outputFullname() {
      if (this.name == "") {
        return "";
      }
      return this.name + " " + "Corte";
    },

    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },

    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
