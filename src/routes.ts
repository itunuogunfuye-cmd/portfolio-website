import { createBrowserRouter } from 'react-router'
import Root from '@/components/Root'
import Home from '@/pages/Home'
import FocusDock from '@/pages/FocusDock'
import LegoPoliceStory from '@/pages/LegoPoliceStory'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'projects/focus-dock', Component: FocusDock },
      { path: 'projects/lego-police-story', Component: LegoPoliceStory },
    ],
  },
])
