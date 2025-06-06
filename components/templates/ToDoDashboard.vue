<template>
  <div class="dashboard-container">
    <h1 class="dashboard-title">Patient Dashboard</h1>

    <div class="stats-grid">
      <div class="stat-card">
        <h3>Total Patients</h3>
        <div class="stat-value">{{ patientStats.totalPatients }}</div>
      </div>

      <div class="stat-card">
        <h3>New This Week</h3>
        <div class="stat-value">{{ patientStats.newThisWeek }}</div>
      </div>

      <div class="stat-card">
        <h3>Appointments Today</h3>
        <div class="stat-value">{{ patientStats.appointmentsToday }}</div>
      </div>

      <div class="stat-card">
        <h3>Pending Reports</h3>
        <div class="stat-value">{{ patientStats.pendingReports }}</div>
      </div>
    </div>

    <div class="recent-patients">
      <h2>Recent Patients</h2>
      <div class="patient-list">
        <div v-for="patient in recentPatients" :key="patient.id" class="patient-item">
          <div class="patient-avatar">{{ getInitials(patient.name) }}</div>
          <div class="patient-details">
            <h4>{{ patient.name }}</h4>
            <p>{{ patient.condition }}</p>
          </div>
          <div class="patient-date">{{ patient.lastVisit }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getSamplePatientData } from '~/utils/sampleData';

const patientStats = ref({
  totalPatients: 0,
  newThisWeek: 0,
  appointmentsToday: 0,
  pendingReports: 0,
});

const recentPatients = ref([]);

onMounted(() => {
  const data = getSamplePatientData();
  patientStats.value = data.stats;
  recentPatients.value = data.recentPatients;
});

const getInitials = name => {
  return name
    .split(' ')
    .map(part => part.charAt(0))
    .join('');
};
</script>

<style scoped>
.dashboard-container {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.dashboard-title {
  margin-bottom: 24px;
  color: #2c3e50;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.stat-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
}

.stat-value {
  font-size: 32px;
  font-weight: bold;
  color: #3498db;
  margin-top: 10px;
}

.recent-patients {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.patient-list {
  margin-top: 15px;
}

.patient-item {
  display: flex;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #eee;
}

.patient-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #3498db;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-right: 15px;
}

.patient-details {
  flex: 1;
}

.patient-details h4 {
  margin: 0;
  color: #2c3e50;
}

.patient-details p {
  margin: 5px 0 0;
  color: #7f8c8d;
  font-size: 14px;
}

.patient-date {
  color: #95a5a6;
  font-size: 14px;
}
</style>
