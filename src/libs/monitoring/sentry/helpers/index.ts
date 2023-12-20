import { Sentry } from '..'

interface CaptureMessageArgs extends Sentry.Breadcrumb {
  user?: Sentry.User
  error?: unknown
  logMessage?: string
}

export function captureMessage({
  category,
  message,
  level,
  user,
  error,
  logMessage,
}: CaptureMessageArgs) {
  Sentry.addBreadcrumb({
    category,
    message,
    level,
  })

  if (user) Sentry.setUser(user)
  if (logMessage) Sentry.captureMessage(logMessage)
  if (error) {
    Sentry.setUser(user || null)
    Sentry.captureException(error)
  }
}
