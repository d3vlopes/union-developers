type AnalityClickProps =
  | Gtag.CustomParams
  | Gtag.ControlParams
  | Gtag.EventParams
  | undefined

export function handleAnalityClick(eventPrams: AnalityClickProps) {
  gtag('event', 'click', eventPrams)
}
