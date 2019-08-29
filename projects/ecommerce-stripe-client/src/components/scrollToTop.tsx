import React, { FC, PropsWithChildren, useEffect } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'

type P = PropsWithChildren<RouteComponentProps>

const ScrollToTopComponent: FC<P> = ({
  children = null,
  location: { pathname },
}: P) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/33006
  return <>{children}</>
}

export const ScrollToTop = withRouter(ScrollToTopComponent)
