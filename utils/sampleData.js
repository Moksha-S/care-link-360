/**
 * Provides sample patient data for demonstration purposes
 */
export function getSamplePatientData() {
  return {
    stats: {
      totalPatients: 1248,
      newThisWeek: 42,
      appointmentsToday: 28,
      pendingReports: 13,
    },
    recentPatients: [
      {
        id: 1,
        name: 'Jane Smith',
        condition: 'Post-surgery recovery',
        lastVisit: '2 hours ago',
      },
      {
        id: 2,
        name: 'Robert Johnson',
        condition: 'Diabetes follow-up',
        lastVisit: 'Yesterday',
      },
      {
        id: 3,
        name: 'Maria Garcia',
        condition: 'Prenatal checkup',
        lastVisit: '2 days ago',
      },
      {
        id: 4,
        name: 'David Lee',
        condition: 'Hypertension',
        lastVisit: '3 days ago',
      },
      {
        id: 5,
        name: 'Sarah Wilson',
        condition: 'Allergy consultation',
        lastVisit: '1 week ago',
      },
    ],
  };
}

/**
 * Generates a random set of patient data
 * @param {number} count - Number of patients to generate
 */
export function generateRandomPatients(count = 10) {
  const conditions = [
    'Hypertension',
    'Diabetes',
    'Asthma',
    'Arthritis',
    'Allergies',
    'Flu',
    'Common cold',
    'Migraine',
    'Back pain',
    'Anxiety',
    'Depression',
  ];

  const timeframes = [
    'Today',
    'Yesterday',
    '2 days ago',
    '3 days ago',
    'Last week',
    '2 weeks ago',
    'Last month',
  ];

  const firstNames = [
    'John',
    'Jane',
    'Michael',
    'Emma',
    'David',
    'Sarah',
    'Robert',
    'Maria',
    'William',
    'Jennifer',
    'Richard',
    'Lisa',
  ];

  const lastNames = [
    'Smith',
    'Johnson',
    'Williams',
    'Brown',
    'Jones',
    'Miller',
    'Davis',
    'Garcia',
    'Rodriguez',
    'Wilson',
    'Martinez',
    'Anderson',
  ];

  const patients = [];

  for (let i = 0; i < count; i++) {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];

    patients.push({
      id: i + 1,
      name: `${firstName} ${lastName}`,
      condition: conditions[Math.floor(Math.random() * conditions.length)],
      lastVisit: timeframes[Math.floor(Math.random() * timeframes.length)],
    });
  }

  return patients;
}
