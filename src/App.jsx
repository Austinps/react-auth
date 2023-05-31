import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import {
  Admin,
  Register,
  Login,
  Home,
  Editor,
  NotFound,
  Unauthorized,
  Lounge,
  LinkPage,
} from "./pages";
import { Layout, RequireAuth, PersistLogin } from "./components";
import { ROLES } from "./data/roles";
import { Spinner } from "@chakra-ui/react";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      {/* public routes */}
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
      <Route path='linkpage' element={<LinkPage />} />
      <Route path='unauthorized' element={<Unauthorized />} />

      {/* proteced routes */}
      <Route element={<PersistLogin />}>
        <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
          <Route path='/' element={<Home />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Editor]} />}>
          <Route path='editor' element={<Editor />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
          <Route path='admin' element={<Admin />} />
        </Route>

        <Route
          element={<RequireAuth allowedRoles={[ROLES.Editor, ROLES.Admin]} />}
        >
          <Route path='lounge' element={<Lounge />} />
        </Route>
      </Route>

      {/* 404 */}
      <Route path='*' element={<NotFound />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} fallbackElement={<Spinner />} />;
}
