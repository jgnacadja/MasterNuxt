<template>
  <section class="container">
     <addTask/>
  </section>
</template>

<script>

export default {
    name:'home', 
    components:{
    "addTask": () => import("@/components/addTask.vue"),
    "listTask":() => import("@/components/listTasks.vue"),
    AddTask
}

}
</script>

<style>

</style>