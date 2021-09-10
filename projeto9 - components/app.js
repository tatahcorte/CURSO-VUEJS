const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "Tamires",
          name: "Tamires Corte",
          phone: "18991564208",
          email: "tata_corte@hotmail.com",
        },
        {
          id: "Leonardo",
          name: "Leonardo Stábile",
          phone: "18991111111",
          email: "leoberteck@hotmail.com",
        },
      ],
    };
  },
});

app.component("friend-contact", {
  template: `
  <li>
    <h2>{{ friend.name }}</h2>
    <button>Show Details</button>
    <ul>
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>
  `,

  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "Tamires",
        name: "Tamires Corte",
        phone: "18991564208",
        email: "tata_corte@hotmail.com",
      },
    };
  },

  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount("#app");
