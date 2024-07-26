// Show MyQR Code on Sweet Alert //
document.addEventListener("DOMContentLoaded", function () {
  const contributeBtn = document.getElementById("contributeBtn");
  contributeBtn.addEventListener("click", function () {
    Swal.fire({
      title: "Thank You Dear",
      html: `
                  <img src="./images/QR.jpg" alt="QR Code" style="width: 215px; height: 255px;">
                  <p style="margin-top: 20px; font-size: 18px;"><strong>Pay Using UPI</strong></p>
              `,
      showCloseButton: true,
      showConfirmButton: false,
    });
  });
});
