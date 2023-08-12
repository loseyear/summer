import React from 'react'

interface IProps {
  children: React.ReactNode
}

interface IState {
  hasError: boolean
  error: string
}

class ErrorBoundary extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {
      hasError: false,
      error: '',
    }
  }

  static getDerivedStateFromError(_: Error) {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    console.log(_)
    return {
      hasError: true,
    }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // 你同样可以将错误日志上报给服务器
    // logErrorToMyService(error, errorInfo)
    console.error(error)
    console.log(errorInfo)

    this.setState({
      error: error.message,
    })
  }

  render() {
    const { hasError, error } = this.state
    const { children } = this.props

    if (hasError) {
      // 你可以自定义降级后的 UI 并渲染
      return (
        <>
          <h1>Something went wrong.</h1>
          {error}
        </>
      )
    }

    return children
  }
}

export default ErrorBoundary
