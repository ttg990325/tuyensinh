<template>
  <div id="app">
    <my-header></my-header>
    <my-menu></my-menu>
    <my-content></my-content>
    <my-footer></my-footer>
  </div>
</template>
// <script>
import Header from './views/layout/Header.vue'
import Menu from './views/layout/Menu.vue'
import Content from './views/tuyensinh/index.vue'
import Footer from './views/layout/Footer.vue'
export default {
  components:{
    'my-header': Header,
    'my-menu': Menu,
    'my-content': Content,
    'my-footer': Footer
  }
}
</script>

