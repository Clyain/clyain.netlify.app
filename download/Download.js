// 打开弹窗
const viewDetailsBtns = document.querySelectorAll('.view-details-btn');
viewDetailsBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const modalId = btn.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});

// 关闭弹窗
const modalCloses = document.querySelectorAll('.modal-close');
modalCloses.forEach(closeBtn => {
    closeBtn.addEventListener('click', function () {
        const modal = this.closest('.modal-overlay');
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});

// 点击遮罩层关闭弹窗
const overlays = document.querySelectorAll('.modal-overlay');
overlays.forEach(overlay => {
    overlay.addEventListener('click', function (e) {
        if (e.target === overlay) {
            overlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});

// 下载功能
const downloadButtons = document.querySelectorAll('.download-btn');
downloadButtons.forEach(button => {
    button.addEventListener('click', function (e) {
        e.stopPropagation();
        const fileName = this.getAttribute('data-file');
        if (fileName) {
            const fileUrl = `assets/${fileName}`;
            const link = document.createElement('a');
            link.href = fileUrl;
            link.download = fileName;
            link.style.display = 'none';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    });
});
