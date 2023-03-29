import { router } from '@/router/index'
// import NProgress from 'nprogress'
// import 'nprogress/nprogress.css'
// import { Message } from 'element-ui'
import { _RouteLocationBase } from 'vue-router'
// import { UserModule } from '@/store/modules/user'
// import { PermissionModule } from '@/store/modules/permisson'

// NProgress.configure({ showSpinner: false })

router.beforeEach(async (to: _RouteLocationBase, from: _RouteLocationBase, next: any) => {
  console.log(to, from)
  next({ path: '/' })
  // Start progress bar
  // NProgress.start()
  // Determine whether the user has logged in
  /* if (UserModule.token) {
    if (to.path === '/login') {
      // If is logged in, redirect to the home page
      next({ path: '/' })
      // NProgress.done()
    } else {
      // Check whether the user has obtained his permission roles
      if (UserModule.roles.length === 0) {
        try {
          // Get user info, including roles
          await UserModule.GetUserInfo()
          PermissionModule.GenerateRoutes().then((accessedRoutes: any) => {
            router.addRoutes(accessedRoutes)
            next({ ...to, replace: true })
          })
        } catch (err) {
          // Remove token and redirect to login page
          UserModule.LogOut().then(() => {
            Message.error(err || '接口失效')
            next(`/login`)
            NProgress.done()
          })
        }
      } else {
        next()
      }
    }
  } else {
    // Has no token
    if (whiteList.indexOf(to.path) !== -1) {
      // In the free login whitelist, go directly
      next()
    } else {
      // Other pages that do not have permission to access are redirected to the login page.
      next(`/login`)
      // NProgress.done()
    }
  } */
})

router.afterEach(() => {
  console.log('导航：afterEach')
  // Finish progress bar
  // NProgress.done()

  // set page title
  // document.title = to.meta.title
})
