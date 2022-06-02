<template>
  <b-navbar>
    <template #start>
      <b-navbar-item> <nuxt-link to="/">Home</nuxt-link> </b-navbar-item>
      <b-navbar-item href="#"> <nuxt-link to="/about">A Propos</nuxt-link> </b-navbar-item>
    </template>
  </b-navbar>
</template>
<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "headerComponent",
  setup() {},
});
</script>
