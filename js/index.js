/**
Solution: 
Khi click vào nút moon 🌙 , thẻ body sẽ được thêm class dark.
Dựa vào class dark, ta viết css dành riêng cho dark theme.
Ngược lại, khi click vào nút sun ☀️, ta sẽ xóa class dark để css light theme hiện lại
*/
//gọi thẻ button có id là switchButton
// gắn chức năng click cho switchButton
document.getElementById("switchButton").onclick = function () {
  //khi button được click thì tìm đến thẻ body có id là myBody
  // dùng classlist để gọi thuộc tính class của thẻ body
  //Sử dụng toggle() để thêm hoặc xóa 1 class của thẻ html. Nếu thẻ body không có class dark thì toggle sẽ thêm class dark vào body. Ngược lại, nếu thẻ body đang có class dark thì toogle sẽ xóa class dark đi.
  console.log("a");
  document.getElementById("myBody").classList.toggle("dark");
};

// NAVIGATION BAR CLICK ACTIVE
var mainNav = document.getElementById("mainNav"); // Thẻ ul
var listNav = mainNav.getElementsByTagName("li"); // Tìm thẻ li
for (var i = 0; i < listNav.length; i++) {
  listNav[i].addEventListener("click", function () {
    // Tìm thẻ đang được gắn class active
    var current = document.querySelector("#mainNav .active");
    // Xóa class active của thẻ đang được gắn
    current.className = current.className.replace(" active", "");
    // Thêm class active vào cho thẻ li được click
    // nối chuỗi nav-item class = 'nav-item active'
    this.className += " active";
  });
}
