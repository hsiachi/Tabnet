<template>
  <div class="thumbnail">
    <span>{{ startPos ? startPos.x + ' ' + startPos.y : 'NULL' }}</span>
    <div
      class="thumbnail-item"
      v-for="(item, idx) in items"
      :key="idx"
      @click="selectItem(idx)"
      :style="{ left: item.position.left + 'px', top: item.position.top + 'px' }"
      ref="thumbnail-items"
    >
      <p class="thumbnail-item-text">{{ item.text }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { items } from '../scene';

export default Vue.extend({
  data() {
    return {
      items: items
    };
  },
  methods: {
    selectItem(id: number) {
      for (let i = 0; i < this.$refs['thumbnail-items'].length; i++) {
        const item = this.$refs['thumbnail-items'][i];
        if (i === id) {
          item.classList.add('selected');
          this.$emit('item-selected', id);
        } else {
          item.classList.remove('selected');
        }
      }
    }
  },
  props: {
    startPos: {}
  }
});
</script>

<style scoped>
.thumbnail {
  width: 600px;
  height: 400px;
  background-color: bisque;

  position: relative;
}

.thumbnail-item {
  --item-size: 50px;
  width: var(--item-size);
  height: var(--item-size);
  background-color: chocolate;
  margin-left: calc(var(--item-size) * -0.5);
  margin-top: calc(var(--item-size) * -0.5);
}

.thumbnail-item-text {
  font-size: 20px;
}

.thumbnail-item .thumbnail-item-text {
  margin-top: calc(var(--item-size) + 10px);
}

.thumbnail-item.selected {
  background-color: beige;
}

.thumbnail .thumbnail-item {
  position: absolute;
}
</style>
