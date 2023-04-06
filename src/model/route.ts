export interface router {
    name?: string
    path: string
    component?: any
    meta?: metaInfo
    children?: router[]
    redirect?: string
  }
export interface metaInfo {
  title?: string
  icon?: string
}