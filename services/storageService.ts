export function saveState<T>(key: string, state: T): void {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.warn(`Error saving state for key "${key}":`, error);
  }
}

export function loadState<T>(key: string, defaultState: T): T {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) {
      return defaultState;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.warn(`Error loading state for key "${key}":`, error);
    return defaultState;
  }
}
