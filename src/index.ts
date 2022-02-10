const runTimeout = (delay: number) : Promise<void> => {
  return new Promise((resolve, reject) => {
    // create timeout
    const timeout = setTimeout(() => {
      // clear timeout
      clearTimeout(timeout);
      // resolve promise
      resolve();
    }, delay);
  });
};

export const milliseconds = async (milliseconds: number) : Promise<void> => await runTimeout(milliseconds);
export const seconds = async (seconds: number) : Promise<void> => await milliseconds(seconds * 1000);
export const minutes = async (minutes: number) : Promise<void> => await seconds(minutes * 60);
export const hours = async (hours: number) : Promise<void> => await minutes(hours * 60);