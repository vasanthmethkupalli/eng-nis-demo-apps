import Vue from 'vue'
import HelloWorld1 from '@/components/HelloWorld1.vue'
// import { shallowMount } from '@vue/test-utils'

describe('HelloWorld1.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HelloWorld1)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello1 h1').textContent)
      .to.equal('You are in hello world 1')
  })
  it('has created a hook', () => {
    expect(typeof HelloWorld1.created).to.eq('function')
  })
})
