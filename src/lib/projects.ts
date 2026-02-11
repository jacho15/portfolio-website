export interface Project {
  name: string
  description: string
  link: string
  repo: string
}

export const projects: Project[] = [
  {
    name: 'Muffin Time',
    description: 'A productivity app that combines calendar management, task tracking, and focused study timers.',
    link: 'https://muffin-time.vercel.app/',
    repo: 'https://github.com/jacho15/muffin-time',
  },
]
