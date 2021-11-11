import { Route, Switch } from 'react-router-dom'
import { Home } from '../pages/Home'
import { CharacterPage } from '../pages/CharacterPage'
import { EpisodePage } from '../pages/EpisodePage'
import { NotFound } from '../pages/NotFound'

export const AllRoutes = () => {
  const routes = [
    {
      id: 1,
      path: '/',
      component: Home,
    },
    {
      id: 2,
      path: '/character/:id',
      component: CharacterPage,
    },
    {
      id: 3,
      path: '/episodes/:id',
      component: EpisodePage,
    },
  ]
  return (
    <>
      <Switch>
        {routes.map((route) => (
          <Route
            exact
            path={route.path}
            component={route.component}
            key={route.id}
          />
        ))}
        <Route component={NotFound} />
      </Switch>
    </>
  )
}
