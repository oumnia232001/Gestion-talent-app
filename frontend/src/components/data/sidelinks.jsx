import {IconBoxSeam, IconChecklist, IconLayoutDashboard, IconRouteAltLeft, IconTruck,} from '@tabler/icons-react'
import {TimerIcon} from "lucide-react";

export const sidelinks = [
  {
    title: 'Dashboard',
    label: '',
      href: '/',
    icon: <IconLayoutDashboard size={18} />,
  },
  {
      title: 'Groups',
      label: '',
      href: 'groups',
    icon: <IconChecklist size={18} />,
  },
  {
      title: 'Trainers',
    label: '',
      href: 'trainers',
    icon: <TimerIcon size={18} />,
  },
  {
      title: 'Rooms',
    label: '3',
      href: 'rooms',
    icon: <IconChecklist size={18} />,
  },
  {
      title: 'emploi',
    label: '3',
      href: 'emploi',
    icon: <IconChecklist size={18} />,
  },

  // {
  //   title: 'Chats',
  //   label: '9',
  //   href: '/chats',
  //   icon: <IconMessages size={18} />,
  // },
  // {
  //   title: 'Authentication',
  //   label: '',
  //   href: '',
  //   icon: <IconUserShield size={18} />,
  //   sub: [
  //     {
  //       title: 'Sign In (email + password)',
  //       label: '',
  //       href: '/sign-in',
  //       icon: <IconHexagonNumber1 size={18} />,
  //     },
  //     {
  //       title: 'Sign In (Box)',
  //       label: '',
  //       href: '/sign-in-2',
  //       icon: <IconHexagonNumber2 size={18} />,
  //     },
  //     {
  //       title: 'Sign Up',
  //       label: '',
  //       href: '/sign-up',
  //       icon: <IconHexagonNumber3 size={18} />,
  //     },
  //     {
  //       title: 'Forgot Password',
  //       label: '',
  //       href: '/forgot-password',
  //       icon: <IconHexagonNumber4 size={18} />,
  //     },
  //   ],
  // },
  // {
  //   title: 'Users',
  //   label: '',
  //   href: '/users',
  //   icon: <IconUsers size={18} />,
  // },
  {
    title: 'Invoices',
    label: '10',
    href: '/invoices',
    icon: <IconRouteAltLeft size={18} />,
    sub: [
      {
        title: 'payment online',
        label: '9',
        href: 'payment_online',
        icon: <IconBoxSeam size={18} />,
      },
      {
        title: 'cash on delivery',
        label: '',
        href: 'payment_delivery',
        icon: <IconTruck size={18} />,
      },
    ],
  },
  // {
  //   title: 'Analysis',
  //   label: '',
  //   href: '/analysis',
  //   icon: <IconChartHistogram size={18} />,
  // },
  // {
  //   title: 'Extra Components',
  //   label: '',
  //   href: '/extra-components',
  //   icon: <IconComponents size={18} />,
  // },
  // {
  //   title: 'Error Pages',
  //   label: '',
  //   href: '',
  //   icon: <IconExclamationCircle size={18} />,
  //   sub: [
  //     {
  //       title: 'Not Found',
  //       label: '',
  //       href: '/404',
  //       icon: <IconError404 size={18} />,
  //     },
  //     {
  //       title: 'Internal Server Error',
  //       label: '',
  //       href: '/500',
  //       icon: <IconServerOff size={18} />,
  //     },
  //     {
  //       title: 'Maintenance Error',
  //       label: '',
  //       href: '/503',
  //       icon: <IconBarrierBlock size={18} />,
  //     },
  //   ],
  // },
  // {
  //   title: 'Settings',
  //   label: '',
  //   href: '/settings',
  //   icon: <IconSettings size={18} />,
  // },
]
