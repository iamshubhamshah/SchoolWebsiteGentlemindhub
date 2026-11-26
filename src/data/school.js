// Replace this sample content with each school's approved details.
const demoSchool = {
  name: 'Greenfield Public School',
  shortName: 'Greenfield',
  tagline: 'Learn. Lead. Thrive.',
  location: 'Sector 45, Gurugram, Haryana',
  address: 'Greenfield Public School, Sector 45, Gurugram, Haryana 122003',
  phone: '+91 98765 43210',
  whatsapp: '919876543210',
  email: 'hello@greenfieldschool.example',
  hours: 'Monday – Saturday · 8:00 AM – 3:00 PM',
  established: '2008',
  mapUrl: 'https://maps.google.com/?q=Sector+45+Gurugram',
  logo: 'G',
  heroImage: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1800&q=85',
  aboutImage: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85',
  stats: [{ value: '15+', label: 'Years of learning' }, { value: '1,200+', label: 'Happy learners' }, { value: '45+', label: 'Dedicated educators' }],
  facilities: [
    { icon: 'BookOpen', title: 'Learning that inspires', text: 'Engaging classrooms and a thoughtful curriculum that builds strong foundations.' },
    { icon: 'FlaskConical', title: 'Explore & experiment', text: 'Hands-on science and computer learning that turns curiosity into discovery.' },
    { icon: 'Trophy', title: 'Sports & wellbeing', text: 'A healthy balance of sports, movement, teamwork and personal growth.' },
    { icon: 'Palette', title: 'Creative expression', text: 'Art, music and activities that give every learner room to shine.' },
    { icon: 'Library', title: 'A world of books', text: 'A welcoming library that encourages reading, imagination and independent thought.' },
    { icon: 'ShieldCheck', title: 'A safe environment', text: 'A caring campus culture where students feel respected, supported and secure.' }
  ],
  gallery: [
    { src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=85', title: 'Learning together', category: 'Classrooms' },
    { src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=85', title: 'Curious minds', category: 'Activities' },
    { src: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1000&q=85', title: 'Team spirit', category: 'Sports' },
    { src: 'https://images.unsplash.com/photo-1560785496-3c9d27877182?auto=format&fit=crop&w=1000&q=85', title: 'Creative moments', category: 'Activities' },
    { src: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1000&q=85', title: 'Bright beginnings', category: 'Classrooms' },
    { src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=85', title: 'Every day is a discovery', category: 'Campus' }
  ],
  social: { instagram: 'https://instagram.com/', facebook: 'https://facebook.com/', youtube: 'https://youtube.com/' }
}

export function getSchoolConfig() {
  const host = window.location.hostname
  const slug = host.split('.')[0]
  // Demo hostname uses sample content. Add a school registry/API when onboarding schools.
  if (slug && slug !== 'www' && slug !== 'localhost' && slug !== '127') {
    const readable = slug.replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
    return { ...demoSchool, name: readable, shortName: readable }
  }
  return demoSchool
}

export default demoSchool
