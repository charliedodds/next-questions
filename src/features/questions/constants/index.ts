import { Question } from '../types'

export const QUESTIONS: Question[] = [
  {
    id: '1',
    name: 'q1',
    label: 'Have you been to Genovia in the last 3 months?',
  },
  {
    id: '2',
    name: 'q2',
    label: 'Did you ingest a Genovian Pear?',
  },
  {
    id: '3',
    name: 'q3',
    label:
      'Did you suffer any symptoms of allergic reactions? (Rash, swelling, vomiting etc.)',
  },
  {
    id: '4',
    name: 'q4',
    label:
      'Are you currently taking any medication (including over the counter, prescription or recreational drugs)?',
  },
  {
    id: '5',
    name: 'q5',
    label: 'Are you aged over 18?',
  },
]

export const MAX_STEP = QUESTIONS.length
