export default function disabledEventPropagation(e) {
  if (e.stopPropagation) {
    e.stopPropagation();
  } else if (window.e) {
    window.e.cancelBubble = true;
  }
}
