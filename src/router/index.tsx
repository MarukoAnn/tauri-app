import routes from './route'
import { useState, useEffect, Suspense } from 'react'
const routerList = [...routes]
import RouterView from './routerView'

const ViewRouter = () => {
  return (
    <div>
      <Suspense>
        <RouterView route={routerList}></RouterView>
      </Suspense>
    </div>
  )
}

export default ViewRouter
