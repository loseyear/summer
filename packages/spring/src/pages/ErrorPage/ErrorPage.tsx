import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'

const ErrorPage: FC = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1>Error Page !!!</h1>
      <div
        onClick={() => navigate('/')}
      >
        返回首页
      </div>
    </div>
  )
}

export default ErrorPage
