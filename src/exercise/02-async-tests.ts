interface APIOptions {
  url: string
  method: string
}

// Callback based API
export function fetchDataCallback(api: Function, options: APIOptions, callback: Function) {
  // simulate api request delay
  setTimeout(() => {
    callback(api(options))
  }, 300);
}

// Promise based API
export function fetchDataPromise(api: Function, options: APIOptions) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(api(options));
    }, 300);
  });
}
