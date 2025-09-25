import { Outlet, createRootRoute } from '@tanstack/react-router'
import Header from '../components/Header'

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <Outlet />
    </>
  ),
  errorComponent: ({ error }) => <>Something wrong happened {error.message}</>,
  notFoundComponent: () => <div>404 - Page Not Found</div>,
})
