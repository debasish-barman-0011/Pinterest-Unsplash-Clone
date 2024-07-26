const imageContainer = document.getElementById("image-container");
const showMoreBtn = document.getElementById("show-more");
let imageCount = 0;
// Fetching Random images //
function addImages(count) {
  for (let i = 0; i < count; i++) {
    const imageItem = document.createElement("div");
    imageItem.className = "image-item";
    const img = document.createElement("img");
    img.src = `https://picsum.photos/400/300?random=${imageCount + i}`;
    img.alt = "Random Image";
    img.loading = "lazy";
    imageItem.appendChild(img);
    imageContainer.appendChild(imageItem);

    imageItem.addEventListener("click", () => showDownloadPrompt(img.src));
  }
  imageCount += count;
}
// Download Sweet Alert //
function showDownloadPrompt(imageSrc) {
  Swal.fire({
    title: "SnapSafari",
    text: "Do you want to download this image?",
    imageUrl: imageSrc,
    imageWidth: 400,
    imageHeight: 300,
    showCancelButton: true,
    confirmButtonText: "Download Image",
    cancelButtonText: "Cancel",
  }).then((result) => {
    if (result.isConfirmed) {
      downloadImage(imageSrc);
    }
  });
}
// Creating Image URL to Download a Random Image //
function downloadImage(imageSrc) {
  fetch(imageSrc)
    .then((response) => response.blob())
    .then((blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      a.download = "SnapSafari_IMG.jpg";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    })
    .catch((error) => {
      console.error("Error downloading image:", error);
      Swal.fire(
        "Error",
        "Failed to download the image. Please try again.",
        "error"
      );
    });
}
// Show More Buton To Get More Image //
showMoreBtn.addEventListener("click", () => addImages(8));
// Will Add 12 Images More //
addImages(12);
