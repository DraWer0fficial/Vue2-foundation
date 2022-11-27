'use strict';

// スタイルバインドの基礎
new Vue({
  el: '#color',
  data: function() {
    return {
      textColor: 'green'
    }
  }
})

// classバインドの基礎
new Vue({
  el: '#yellow',
  data: function() {
    return {
      isClassText : true
    }
  }
})

// classバインドComponentsを用いて
new Vue({
  el: '#brown',
  data: function () {
    return {
      shouldApply: true,
    }
  },
  computed: {
    textBrown: function () {
      return {
        textBrown: this.shouldApply,
      }
    },
    textFont: function () {
      return {
        textFont: this.shouldApply
      }
    }
  }
})
 
// propsの基礎
Vue.component('the-header', {
  template: '<h2>{{ textGreeting }}</h2>',
  props: ['textGreeting'],
})
new Vue({
  el: '#pro'
})

// v-forの基礎
new Vue({
  el: '#for',
  data: function () {
    return {
      itemList: [
        'item-1',
        'item-2',
        'item-3'
      ]
    }
  }
})

// filterの基礎
new Vue({
  el: '#filter',
  data: function () {
    return {
      text: '01234567891011121314151617181920'
    }
  },
  filters: {
    truncateText: function (text) {
      if (text.length < 16) return text;
      return `${text.slice(0,15)} ...`
    }
  }
})