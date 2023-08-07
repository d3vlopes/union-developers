type AnalityClickProps =
  | Gtag.CustomParams
  | Gtag.ControlParams
  | Gtag.EventParams
  | undefined

export function handleAnalityClick(eventParams: AnalityClickProps) {
  gtag('event', 'click', eventParams)
}

export function handleAnalitySubscriptions(
  eventParams: AnalityClickProps,
) {
  gtag('event', 'subscription', eventParams)
}
