import { useEffect, useState } from 'react';

const SharedStore = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // Dynamically import the store
        import('reducersharedstorage/store').then((module) => {
            const remoteStore = module.default;

            // Subscribe to store updates
            const unsubscribe = remoteStore.subscribe(() => {
                const state = remoteStore.getState();
                setCount(state.counter.initialCounter);
            });

            // Cleanup subscription on unmount
            return () => unsubscribe();
        });
    }, []);

    return { count };
};

export default SharedStore;
