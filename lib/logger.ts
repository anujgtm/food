export const isProduction = (): boolean => {
  return process.env.NODE_ENV === "production"
}

let didDisableLog = false

export const disableConsoleLogInProduction = (): void => {
  if (didDisableLog || !isProduction()) return

  didDisableLog = true
  console.log = () => {}
}

export const log = (...args: unknown[]): void => {
  if (isProduction()) return
  console.log(...args)
}
