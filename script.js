const qrTrigger = document.querySelector(".qr-trigger");
const qrLightbox = document.querySelector(".qr-lightbox");
const qrClose = document.querySelector(".qr-close");
const qrBackdrop = document.querySelector(".qr-lightbox-backdrop");
const qrLightboxContent = document.querySelector(".qr-lightbox-content");

if (qrTrigger && qrLightbox && qrClose && qrBackdrop && qrLightboxContent) {
    function closeQrLightbox() {
        qrLightbox.hidden = true;
        document.body.classList.remove("lightbox-open");
    }

    qrTrigger.addEventListener("click", function () {
        qrLightbox.hidden = false;
        document.body.classList.add("lightbox-open");
    });

    qrClose.addEventListener("click", closeQrLightbox);
    qrBackdrop.addEventListener("click", closeQrLightbox);
    qrLightboxContent.addEventListener("click", function (event) {
        event.stopPropagation();
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && !qrLightbox.hidden) {
            closeQrLightbox();
        }
    });
}
