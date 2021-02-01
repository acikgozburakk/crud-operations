<template>
  <div>
    <appnavbar />
    <router-view></router-view>
  </div>
</template>
<script>
import appnavbar from "./components/Shared/navbar";
export default {
  components: {
    appnavbar,
  },
};
</script>