declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.graphql'

declare namespace jest {
  interface Matchers<R> {
    toHaveClassName(className: string): R;
    toExist(): R;
    toHaveProp(prop: string, value: any): R;
    toHaveText(text: string): R;
  }
}

declare namespace NodeJS {
  export interface Global {
    fetch: Function
  }
}
