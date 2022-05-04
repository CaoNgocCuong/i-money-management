<template>
  <div id="loading">
    <span></span>
  </div>
</template>
<script>
export default {
  name: "Loading",
  setup() {},
};
</script>
<style scoped>
#loading {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1001;
}

@keyframes spin {
  to {
    transform: rotateZ(360deg);
  }
}

#loading span {
  display: block;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #ffffff;
  border-bottom-color: #ffffff;
  margin: 0 auto;
  animation: spin ease 1000ms infinite;
}
</style>
