import "./styles.css";
document.body.onscroll = myFunction;

function myFunction() {
  var docHeight = Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight,
    document.body.clientHeight
  );

  var per = window.scrollY / (docHeight - window.innerHeight);
  document.getElementById("per").innerHTML = Math.floor(per * 100);
}
