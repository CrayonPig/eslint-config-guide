<template>
  <div class="home-content">
    <div
      v-if="test === 123"
      class="title"
    >
      Device management
    </div>
  </div>
</template>

<script setup lang="ts">
import rule from '../lib/index';

const test: any = rule;
</script>
<script lang="ts">
export default {
  name: 'AppHome'
};
</script>
<style scoped lang="scss">
.home-content{
  background: #fff;
  padding: 24px;
  margin: 0 50px;
  margin-top: 24px;
  .title{
    color: #1D2129;
    font-weight: 700;
    font-size: 24px;
    line-height: 24px;
    margin-bottom: 16px;
  }
}
</style>
