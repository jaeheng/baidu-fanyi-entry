function submit () {
  var wd = document.getElementById('wd').value;
  var target = 'https://fanyi.baidu.com/#en/zh/' + wd
  if (wd) {
    window.open(target)
  }
}

(function () {
  var wd = document.getElementById('wd');
  var btn = document.getElementById('search');
  btn.addEventListener('click', submit)
  wd.addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {
      submit()
    }
  })
})()
