import Root from '@/components/Root'
import Home from '@/pages/Home'
import FocusDock from '@/pages/FocusDock'
import LegoPoliceStory from '@/pages/LegoPoliceStory'
import Nouri from '@/pages/Nouri'

export const routeConfig = [
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'projects/focus-dock', Component: FocusDock },
      { path: 'projects/lego-police-story', Component: LegoPoliceStory },
      { path: 'projects/nouri', Component: Nouri },
    ],
  },
]
