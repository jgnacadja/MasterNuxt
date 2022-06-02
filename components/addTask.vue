<template>
  <section class="section container">
    <b-field label="Name">
       <b-input type="text" v-model.lazy.trim="currentTask"
       
       @keyup.enter="addNewtask"></b-input>
    </b-field>
   
  </section>
</template>

<script>
export default {
  data() {
    return {
      currentTask: "",
    };
  },
  methods:{
      addNewtask(){
          console.log(`${this.currentTask} is added`)
      }
  }
};
</script>

<style>
</style>