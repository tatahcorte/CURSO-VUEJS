<template>
  <section>
    <base-card>
      <!-- v-slot:header ou #header -->
      <template v-slot:header>
        <h3>{{ fullName }}</h3>
        <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
      </template>
      <template v-slot:default>
        <p>{{ infoText }}</p>
      </template>
    </base-card>
  </section>
</template>

<script>
import BaseCard from "./BaseCard.vue";
export default {
  components: { BaseCard },
  props: ["fullName", "infoText", "role"],
};
</script>

