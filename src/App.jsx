import { Routes, Route } from "react-router-dom";
import {
  Admin,
  Register,
  Login,
  Home,
  Layout,
  Editor,
  Missing,
  Unauthorized,
  Lounge,
  LinkPage,
  RequireAuth,
  PersistLogin,
} from "./components";

const ROLES = {
  User: 2001,
  Editor: 1984,
  Admin: 5150,
};

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="linkpage" element={<LinkPage />} />
        <Route path="unauthorized" element={<Unauthorized />} />

        {/* proteced routes */}
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
            <Route path="/" element={<Home />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={[ROLES.Editor]} />}>
            <Route path="editor" element={<Editor />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
            <Route path="admin" element={<Admin />} />
          </Route>

          <Route
            element={<RequireAuth allowedRoles={[ROLES.Editor, ROLES.Admin]} />}
          >
            <Route path="lounge" element={<Lounge />} />
          </Route>
        </Route>

        {/* everything elsel */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}
