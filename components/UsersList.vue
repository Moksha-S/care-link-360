<template>
  <div class="users-list">
    <h2>Users List</h2>
    
    <div class="controls">
      <div class="filters">
        <input 
          v-model="searchTerm" 
          placeholder="Search by name or email" 
          class="search-input"
        />
        <select v-model="roleFilter" class="role-filter">
          <option value="">All Roles</option>
          <option value="admin">Admin</option>
          <option value="manager">Manager</option>
          <option value="user">User</option>
        </select>
        <label class="status-filter">
          <input type="checkbox" v-model="showOnlyActive">
          Show only active users
        </label>
      </div>
      
      <button @click="showAddUserForm = true" class="add-button">Add New User</button>
    </div>
    
    <!-- Add User Form -->
    <div v-if="showAddUserForm" class="user-form">
      <h3>Add New User</h3>
      <form @submit.prevent="addNewUser">
        <div class="form-group">
          <label>Name:</label>
          <input v-model="newUser.name" required />
        </div>
        <div class="form-group">
          <label>Email:</label>
          <input v-model="newUser.email" type="email" required />
        </div>
        <div class="form-group">
          <label>Role:</label>
          <select v-model="newUser.role" required>
            <option value="admin">Admin</option>
            <option value="manager">Manager</option>
            <option value="user">User</option>
          </select>
        </div>
        <div class="form-group">
          <label>
            <input type="checkbox" v-model="newUser.active">
            Active
          </label>
        </div>
        <div class="form-actions">
          <button type="submit" class="submit-button">Add User</button>
          <button type="button" @click="showAddUserForm = false" class="cancel-button">Cancel</button>
        </div>
      </form>
    </div>

    <div v-if="filteredUsers.length === 0" class="no-users">
      No users available matching your criteria
    </div>
    
    <ul v-else class="users">
      <li v-for="user in filteredUsers" :key="user.id" class="user-item">
        <div class="user-info">
          <h3>{{ user.name }}</h3>
          <p>{{ user.email }}</p>
          <div class="user-details">
            <span class="role">Role: {{ user.role }}</span>
            <span
              class="status"
              :class="{ active: user.active, inactive: !user.active }"
            >
              Status: {{ user.active ? "Active" : "Inactive" }}
            </span>
          </div>
        </div>
        <div class="user-actions">
          <button @click="toggleUserStatus(user.id)" class="toggle-button">
            {{ user.active ? "Deactivate" : "Activate" }}
          </button>
          <button @click="deleteUserById(user.id)" class="delete-button">
            Delete
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from "~/stores/user";
import { ref, computed } from "vue";

// Get the user store
const userStore = useUserStore();

// Search and filter states
const searchTerm = ref('');
const roleFilter = ref('');
const showOnlyActive = ref(false);
const showAddUserForm = ref(false);

// New user form state
const newUser = ref({
  name: '',
  email: '',
  role: 'user',
  active: true
});

// Computed property for filtered users
const filteredUsers = computed(() => {
  return userStore.users.filter(user => {
    // Apply search filter
    const matchesSearch = searchTerm.value === '' || 
      user.name.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.value.toLowerCase());
    
    // Apply role filter
    const matchesRole = roleFilter.value === '' || user.role === roleFilter.value;
    
    // Apply active filter
    const matchesActive = !showOnlyActive.value || user.active;
    
    return matchesSearch && matchesRole && matchesActive;
  });
});

// User actions
const toggleUserStatus = (userId: number) => {
  const user = userStore.userById(userId);
  if (user) {
    userStore.updateUser(userId, { active: !user.active });
  }
};

const deleteUserById = (userId: number) => {
  if (confirm('Are you sure you want to delete this user?')) {
    userStore.deleteUser(userId);
  }
};

const addNewUser = () => {
  userStore.addUser({
    name: newUser.value.name,
    email: newUser.value.email,
    role: newUser.value.role,
    active: newUser.value.active
  });
  
  // Reset form
  newUser.value = {
    name: '',
    email: '',
    role: 'user',
    active: true
  };
  
  showAddUserForm.value = false;
};
</script>

<style scoped>
.users-list {
  margin: 20px 0;
}

.users {
  list-style: none;
  padding: 0;
}

.user-item {
  border: 1px solid #eee;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.user-info h3 {
  margin: 0 0 5px 0;
}

.user-info p {
  margin: 0 0 10px 0;
  color: #666;
}

.user-details {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.role {
  font-weight: bold;
}

.status {
  padding: 2px 8px;
  border-radius: 4px;
}

.active {
  color: green;
}

.inactive {
  color: red;
}

.no-users {
  padding: 20px;
  text-align: center;
  color: #666;
}

.controls {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.filters {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.search-input, .role-filter {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.status-filter {
  display: flex;
  align-items: center;
  gap: 5px;
}

.add-button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 4px;
  cursor: pointer;
}

.user-form {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 4px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input, .form-group select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.form-actions {
  display: flex;
  gap: 10px;
  margin-top: 15px;
}

.submit-button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 4px;
  cursor: pointer;
}

.cancel-button {
  background-color: #f44336;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 4px;
  cursor: pointer;
}

.user-actions {
  margin-top: 10px;
  display: flex;
  gap: 10px;
}

.toggle-button {
  background-color: #2196F3;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}

.delete-button {
  background-color: #f44336;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}
</style>
