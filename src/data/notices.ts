export interface Notice {
  id: string
  tag: string
  tagColor: string
  title: string
  desc: string
  date: string
  iconName: 'trophy' | 'calendar' | 'bell' | 'alert'
}

export interface EventItem {
  id: string
  date: string
  month: string
  title: string
  time: string
  desc: string
}

export const notices: Notice[] = [
  {
    id: 'n1',
    iconName: 'trophy',
    tag: 'Result',
    tagColor: '#16a34a',
    title: 'Primary School Annual Results',
    desc: 'Congratulations to all our students for their outstanding performance in the annual examinations. 100% pass rate achieved!',
    date: '15 May 2025',
  },
  {
    id: 'n2',
    iconName: 'calendar',
    tag: 'Exam',
    tagColor: '#d97706',
    title: 'Half-Yearly Exams Schedule',
    desc: 'Half-yearly examinations for School (Class 1–5) will be held from 10 June to 18 June 2025.',
    date: '1 May 2025',
  },
  {
    id: 'n3',
    iconName: 'bell',
    tag: 'Holiday',
    tagColor: '#7c3aed',
    title: 'Summer Vacation Notice',
    desc: 'School will remain closed for summer vacation from 20 June to 30 June 2025. Office remains open for admissions.',
    date: '28 Apr 2025',
  },
  {
    id: 'n4',
    iconName: 'alert',
    tag: 'Admission',
    tagColor: '#1a56db',
    title: 'Admissions Open – Session 2025–26',
    desc: 'New admissions are open for all classes. Limited seats. Contact us or visit the school to enrol.',
    date: '1 Apr 2025',
  },
]

export const events: EventItem[] = [
  {
    id: 'e1',
    date: '24',
    month: 'May',
    title: 'Parent-Teacher Meeting (PTM)',
    time: '09:00 AM – 12:30 PM',
    desc: 'Discussion of student progress and distribution of unit test feedback cards.'
  },
  {
    id: 'e2',
    date: '05',
    month: 'Jun',
    title: 'World Environment Day',
    time: '08:30 AM – 11:30 AM',
    desc: 'Tree plantation drive, poster making, and environmental awareness quiz.'
  },
  {
    id: 'e3',
    date: '21',
    month: 'Jun',
    title: 'International Yoga Day',
    time: '07:30 AM – 09:00 AM',
    desc: 'Special yoga and mindfulness session for children led by teachers.'
  },
  {
    id: 'e4',
    date: '01',
    month: 'Jul',
    title: 'School Reopens',
    time: '08:00 AM',
    desc: 'School classes resume following summer vacation. Attendance is mandatory.'
  }
]
