import Vue from 'vue'
import sample from '@/views/sample'
import { shallowMount } from '@vue/test-utils'

describe('sample.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(sample)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Test Heading')
  })
  it('increments count when button is clicked', () => {
    const wrapper = shallowMount(sample)
    // basically mocking the trigger by clicking on the button
    wrapper.find('button').trigger('click')
    expect(wrapper.find('div').text()).match(/1/)
  })
  it('has created a hook', () => {
    expect(typeof sample.created).to.eq('function')
  })
  it('has created a hook', () => {
    expect(typeof sample.methods).to.eq('object')
  })
})
