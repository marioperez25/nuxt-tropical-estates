export { default as ContactUsForm } from '../../components/ContactUsForm.vue'
export { default as HomePageBanner } from '../../components/HomePageBanner.vue'
export { default as MainNavigation } from '../../components/MainNavigation.vue'

export const LazyContactUsForm = import('../../components/ContactUsForm.vue' /* webpackChunkName: "components/ContactUsForm" */).then(c => c.default || c)
export const LazyHomePageBanner = import('../../components/HomePageBanner.vue' /* webpackChunkName: "components/HomePageBanner" */).then(c => c.default || c)
export const LazyMainNavigation = import('../../components/MainNavigation.vue' /* webpackChunkName: "components/MainNavigation" */).then(c => c.default || c)
