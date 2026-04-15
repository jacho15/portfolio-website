export interface Project {
  name: string
  link: string
  description: string
  badge?: string
}

export const projects: Project[] = [
  {
    name: 'JacobOS',
    link: 'https://github.com/jacho15/JacobOS',
    description: 'Baremetal OS built with C and Assembly.',
  },
  {
    name: 'Muffin Time',
    link: 'https://muffin-time.vercel.app/',
    description: 'Productivity app with pomodoro and time tracking while combining Notion and Google calendar for event tracking.',
    badge: '100+ active users',
  },
  {
    name: 'Flavor Fetch',
    link: 'https://devpost.com/software/flavorfetch',
    description: 'AI-powered recipe app that suggests recipes and automatically orders their ingredients.',
    badge: 'HackSC Dain AI Track 1st Place',
  },
]
