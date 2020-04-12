import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/front/Home.vue'),
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'Index',
        component: () => import('@/views/front/Index.vue'),
        meta: {
          title: '首页'
        }
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('@/views/front/About.vue'),
        meta: {
          title: '关于我们'
        }
      },
      {
        path: '/display',
        name: 'Display',
        component: () => import('@/views/front/Display.vue'),
        meta: {
          title: '信息展示'
        }
      },
      {
        path: '/person',
        name: 'Person',
        component: () => import('@/views/front/Person.vue'),
        redirect: '/person/complete',
        meta: {
          title: '个人中心'
        },
        children: [
          {
            path: 'complete',
            name: 'complete',
            component: () => import('@/components/person/Complete.vue'),
            meta: {
              title: '个人中心 | 完善资料'
            }
          },
          {
            path: 'password',
            name: 'password',
            component: () => import('@/components/person/password.vue'),
            meta: {
              title: '个人中心 | 修改密码'
            }
          },
          {
            path: 'photo',
            name: 'photo',
            component: () => import('@/components/person/photo.vue'),
            meta: {
              title: '个人中心 | 修改认证照片'
            }
          },
          {
            path: 'setting',
            name: 'setting',
            component: () => import('@/components/person/setting'),
            meta: {
              title: '个人中心 | 设置'
            }
          }
        ]
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/front/Login.vue'),
    meta: {
      title: '登录'
    }
  },
    {
      path: '/register',
      name: 'Register',
      component: () => import('@/views/front/Register.vue'),
      meta: {
        title: '注册'
      }
    },
    {
      path: '/face',
      name: 'face',
      component: () => import('@/components/face/face.vue')
    }

]


const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next()
});

export default router
