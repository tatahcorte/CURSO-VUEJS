const app = Vue.createApp({
  data() {
    return {
      enteredTask: "",
      tasks: [],
      taskVisible: true
    };
  },

  methods: {
    addTask() {
      this.tasks.push(this.enteredTask);
    },

    toggleTaskList() {
      this.taskVisible = !this.taskVisible;
    }
  },
});

app.mount("#assignment");
