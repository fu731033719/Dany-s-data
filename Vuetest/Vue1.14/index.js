var base = {
  methods:{
    show() {
      this.visible = true;
    },
    hide() {
      this.visible = false;
    },
    toggle() {
      this.visible = !this.visible;
    },
  },
  data:function(){
    return{
      visible: false,
    }
  },
};
Vue.component('tooltip', {
  template: `
  <div>
  <span @mouseenter = "show" @mouseout = "hide">Popup</span>
    <div v-if="visible">
      <h4>title</h4>
      lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
    </div>
  </div>
  `,
  mixins:[base],
});
Vue.component('popup',{
  template:`
  <div>
  <button @click = "toggle">Popup</button>
    <div v-if="visible">
      <span @click="hide"></span>
      <h4>title</h4>
      lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
    </div>
  </div>
  `,
  mixins: [base]
});
new Vue({
  el:'#app',
  data:{
  },
});
