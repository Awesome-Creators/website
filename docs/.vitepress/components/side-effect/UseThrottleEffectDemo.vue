<template>
  <div>
    <p><input type="text" v-model="text" /></p>
    <p>
      Effect list:
      <ul>
        <li v-for="t in list">{{ t }}</li>
      </ul>
    </p>
  </div>
</template>

<script lang="ts">
import { ref, reactive } from "vue";
import { useThrottleEffect } from "vueposu";

export default {
  setup() {
    const text = ref('');
    const list = reactive([]);

    useThrottleEffect(() => {
      list.push(text.value);
    }, text, 400);

    return {
      text,
      list,
    };
  },
};
</script>