function onMousedown(event, paddle) {
  let shiftY = event.clientY - paddle.getBoundingClientRect().top;

  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);

  function onMouseMove(event) {
    let bottomEdge =
      document.documentElement.clientHeight - paddle.offsetHeight;

    let newTop = event.clientY - shiftY;

    if (newTop > bottomEdge) {
      newTop = bottomEdge;
    } else if (newTop < 0) {
      newTop = 0;
    }
    paddle.style.top = newTop + "px";
  }

  function onMouseUp(event) {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  }
}
