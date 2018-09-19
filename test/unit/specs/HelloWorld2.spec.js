import Vue from 'vue'
import HelloWorld2 from '@/components/HelloWorld2.vue'
import { shallowMount } from '@vue/test-utils'

describe('HelloWorld2', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HelloWorld2)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Hello World2')
  })
  it('increments count when button is clicked', () => {
    const wrapper = shallowMount(HelloWorld2)
    const h2 = wrapper.find('ul')
    expect(h2.text()).to.equal('First Name Second name Third Name')
  })
  it('has created a hook', () => {
    expect(typeof HelloWorld2.created).to.eq('function')
  })
  it('has created a data hook', () => {
    expect(typeof HelloWorld2.data).to.eq('function')
  })
})
