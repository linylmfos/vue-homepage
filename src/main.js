// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import $ from 'jquery'
import App from './app'
import Nav from './components/nav'
import VueRouter from 'vue-router'
import About from './components/about'
import Education from './components/education'
import Footer from './components/footer'
import Header from './components/header'
import Project from './components/project'
import Skills from './components/skills'
import Work from './components/work'
import Contact from './components/contact'
import Aside from './components/aside'

Vue.use(VueRouter)

let router = new VueRouter({
  routes: [
    {
      path: '/',
      components: {
        header: Header,
        footer: Footer,
        nav: Nav,
        about: About,
        education: Education,
        app: App,
        nav: Nav,
        project: Project,
        skills: Skills,
        work: Work,
        contact: Contact,
        aside: Aside
      }
    }
  ]
})


new Vue({
  el: '#app',
  router,
  render: h => {
    return h(App)
  }
})
