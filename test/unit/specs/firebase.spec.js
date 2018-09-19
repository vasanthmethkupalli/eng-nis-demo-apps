import Vue from 'Vue'
import firebase from '@/App.vue'

describe('testing firebase app', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(firebase)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h2')).to.eq(null)
  })
  it('has created a data hook', () => {
    expect(typeof firebase.data).to.eq('function')
  })
})
