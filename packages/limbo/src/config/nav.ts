import React from 'react'
import {
  MoveToInbox,
  Send,
  Drafts,
} from '@mui/icons-material'

const Home = React.lazy(() => import('@/pages/Home'))
const Count = React.lazy(() => import('@/pages/Count'))

export default [
  {
    name: 'home',
    component: Home,
    icon: MoveToInbox,
    children: [
      {
        name: 'count1',
        component: Count,
        icon: Drafts,
      },
    ],
  }, {
    name: 'count',
    component: Count,
    icon: Send,
  },
]
