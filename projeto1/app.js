Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: ''
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = '';
    }
  }
}).mount('#app');


// const button = document.querySelector('button');
// const input = document.querySelector('input');
// const list = document.querySelector('ul');

// function addGoal() {
//   const valorInserido = input.value;
//   const ItemLista = document.createElement('li');
//   ItemLista.textContent = valorInserido;
//   list.appendChild(ItemLista);
//   input.value = '';

// }

// button.addEventListener('click', addGoal);