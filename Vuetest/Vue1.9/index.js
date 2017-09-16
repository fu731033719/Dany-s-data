Vue.component('balance',{
  template:`
  <div>
  <show></show>
  </div>
  `
})
Vue.component('show', {
  template:`
  <button>显示余额</button>
  `,
  methods:{},
})
let app = new Vue({
  el:'#app',
  data:{},
});
