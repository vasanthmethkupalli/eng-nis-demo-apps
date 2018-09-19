import {mount, createLocalVue} from '@vue/test-utils'
import App from '@/App.vue'
import VueRouter from 'vue-router'
import NestedRoute from '@/components/HelloWorld.vue'
import routes from '@/router/index.js'

const localVue = createLocalVue()
localVue.use(VueRouter)

describe('App for testing helloworld.vue route', () => {
  it('renders a child component via routing', () => {
    const router = new VueRouter({routes})
    const wrapper = mount(App, { localVue, router })

    router.push('/TEST1')
    expect(wrapper.find(NestedRoute).exists().toBe(true))
  })
})
