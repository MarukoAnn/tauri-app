import { makeAutoObservable } from 'mobx'
import { makePersistable } from 'mobx-persist-store'
class UseMobxLoginStore {
  token: string = ''
  constructor() {
    // 对初始化数据进行响应式处理
    makeAutoObservable(this)
    // makePersistable 数据持久化存储
    makePersistable(this, {
      name: 'login', // 存储到Storage里面的key值，此处为字符串
      properties: ['token'], // 需要持久化的数据，此数据为上面声明的变量，并且值为 ['string']
      storage: sessionStorage, // 你的数据采用什么方式存储，常见的是localStorage
    })
  }

  // 设置改变数据的方法
  setToken(option: string): void {
    this.token = option
  }
  getToken(): string {
    return this.token
  }
}
// 导出这个实例
let useMobxLoginStore = new UseMobxLoginStore()

export default useMobxLoginStore
