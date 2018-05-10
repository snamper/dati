<template>
    <div id="app">

        <router-view/>
    </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
    box-sizing: border-box;
}
html{
    font-family: 'PingFang sc','STHeitiSC-Light','Helvetica-Light',arial,sans-serif;
}
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
