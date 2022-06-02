<template>
<div class="columns is-mobile">
    <div class="column is-2">
        <b-field>
            <b-checkbox v-model="item.done">
                {{ checkbox }}
            </b-checkbox>
        </b-field>
    </div>
    <div class="column">
        <b-field>
            <b-checkbox>
                <span
                :class="item.done? 'done':'' ">{{ item.label }}</span>
            </b-checkbox>
        </b-field>
    </div>
</div></template>

<script>
export default {
  props: {
    item: {
      id: 0,
      label: "",
      done: false,
    },
  },
};
</script>

<style>

.done {
    text-decoration-line: line-through;
}
</style>