import { useEffect, useState } from 'react';

const SharedStore = () => {
  const [store, setStore] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Dynamically import the store
    import('reducersharedstorage/store').then((module) => {
      const remoteStore = module.default;
      setStore(remoteStore);

      // Subscribe to store updates
      const unsubscribe = remoteStore.subscribe(() => {
        const state = remoteStore.getState();
        setCount(state.counter.initialCounter);
      });

      // Cleanup subscription on unmount
      return () => unsubscribe();
    });
  }, []);

  const increment = () => {
    if (store) {
      store.dispatch({ type: 'SET_INCREMENTED_VALUE' });
    }
  };

  const decrement = () => {
    if (store) {
      store.dispatch({ type: 'SET_DECREMENT_VALUE' });
    }
  };

  return { count, increment, decrement };
};

export default SharedStore;
