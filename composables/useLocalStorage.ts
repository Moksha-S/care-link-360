/**
 * Composable for handling localStorage operations
 */
export const useLocalStorage = () => {
  /**
   * Set an item in localStorage
   * @param key - The key to store the value under
   * @param value - The value to store
   */
  const setItem = (key: string, value: any): void => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error setting localStorage item:', error);
    }
  };

  return {
    setItem,
  };
};
