export interface Project {
  name: string
  link: string
  description: string
  badge?: string
}

export const projects: Project[] = [
  {
    name: 'JacobOS',
    link: 'https://jacho15.github.io/JacobOS/',
    description: 'Baremetal OS built with C and Assembly.',
  },
  {
    name: 'Muffin Time',
    link: 'https://muffin-time.vercel.app/',
    description: 'Productivity app with pomodoro and time tracking while combining Notion and Google calendar for event tracking.'
  },
  {
    name: 'amy',
    link: 'https://devpost.com/software/feesh',
    description: 'Amy (amygdala) is the empathy layer that gives vision-language models human-centered data so people stop deciding with half the picture.',
    badge: '1st IFM K2 AI & 1st MLH Vultr Tracks - HackTech by Caltech 2026',
  },
  {
    name: 'Nucleus',
    link: 'https://devpost.com/software/nucleus-3lgfki',
    description: 'Real-time hospital dashboard that consolidates patient data and clinical alerts, enabling nurses to manage entire floors with automated early warning scoring and smart triage.',
    badge: '1st Overall - SoCal Claude Builder Club Hackathon',
  },
  {
    name: 'Flavor Fetch',
    link: 'https://devpost.com/software/flavorfetch',
    description: 'AI-powered recipe app that suggests recipes and automatically orders their ingredients.',
    badge: '1st Place Dain AI Track - SoCal Tech Week 2024',
  },
]
