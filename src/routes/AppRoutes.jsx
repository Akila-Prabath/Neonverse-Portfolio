import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import ProjectDetails from '../pages/ProjectDetails'

/**
 * AppRoutes
 * Centralises all application routes.
 *
 * /               → Home (all sections)
 * /project/:id    → Individual project detail page
 */
export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="project/:id" element={<ProjectDetails />} />
      </Route>
    </Routes>
  )
}
