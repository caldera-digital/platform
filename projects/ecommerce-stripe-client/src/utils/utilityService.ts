export const isWelcomeFlowComplete = (user: any): boolean => {
  return Boolean(user.serviceEmail)
}
