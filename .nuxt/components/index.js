export { default as MountainList } from '../../components/MountainList.vue'

export const LazyMountainList = import('../../components/MountainList.vue' /* webpackChunkName: "components/MountainList" */).then(c => c.default || c)
