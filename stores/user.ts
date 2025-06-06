import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

// Define a User interface for type safety
interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  active: boolean;
}

export const useUserStore = defineStore('user', () => {
  // State
  const users = ref<User[]>([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'admin',
      active: true,
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'user',
      active: true,
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike@example.com',
      role: 'user',
      active: false,
    },
    {
      id: 4,
      name: 'Sarah Williams',
      email: 'sarah@example.com',
      role: 'manager',
      active: true,
    },
    {
      id: 5,
      name: 'Alex Brown',
      email: 'alex@example.com',
      role: 'user',
      active: true,
    },
  ]);

  const currentUser = ref<User | null>(null);

  // Getters
  const activeUsers = computed(() => users.value.filter(user => user.active));
  const userById = computed(
    () => (id: number) => users.value.find(user => user.id === id),
  );
  const usersByRole = computed(
    () => (role: string) => users.value.filter(user => user.role === role),
  );

  // Actions
  const addUser = (user: Omit<User, 'id'>) => {
    const newId =
      users.value.length > 0 ? Math.max(...users.value.map(u => u.id)) + 1 : 1;

    users.value.push({
      id: newId,
      ...user,
    });
  };

  const updateUser = (id: number, userData: Partial<User>) => {
    const index = users.value.findIndex(user => user.id === id);
    if (index !== -1) {
      users.value[index] = { ...users.value[index], ...userData };
    }
  };

  const deleteUser = (id: number) => {
    users.value = users.value.filter(user => user.id !== id);
  };

  const setCurrentUser = (id: number) => {
    currentUser.value = users.value.find(user => user.id === id) || null;
  };

  return {
    // State
    users,
    currentUser,

    // Getters
    activeUsers,
    userById,
    usersByRole,

    // Actions
    addUser,
    updateUser,
    deleteUser,
    setCurrentUser,
  };
});
