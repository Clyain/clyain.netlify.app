// ===== 设置弹窗控制 =====
(function () {
    const overlay = document.getElementById('modalOverlay');
    const openBtn = document.getElementById('openModalBtn');
    const closeBtn = document.getElementById('closeModalBtn');
    // const cancelBtn = document.getElementById('cancelBtn');
    // const confirmBtn = document.getElementById('confirmBtn');

    // 打开弹窗
    function openModal() {
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // 关闭弹窗
    function closeModal() {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    // 绑定事件
    openBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    // cancelBtn.addEventListener('click', closeModal);
    // confirmBtn.addEventListener('click', function () {
        // closeModal();
    // });

    // 点击遮罩关闭
    overlay.addEventListener('click', function (e) {
        if (e.target === overlay) {
            closeModal();
        }
    });

    // ESC 关闭
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && overlay.classList.contains('active')) {
            closeModal();
        }
    });

    // 额外：弹窗打开时，如果内容区滚动条出现，保持体感流畅
    // (无需额外操作，CSS 已处理)
})();


// ===== 错误列表弹窗控制 =====
(function () {
    const errorOverlay = document.getElementById('errorModalOverlay');
    const errorCloseBtn = document.getElementById('closeErrorModalBtn');

    // 打开错误弹窗
    window.openErrorModal = function () {
        if (errorOverlay) {
            errorOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    };

    // 关闭错误弹窗
    function closeErrorModal() {
        if (errorOverlay) {
            errorOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    if (errorCloseBtn) {
        errorCloseBtn.addEventListener('click', closeErrorModal);
    }

    if (errorOverlay) {
        errorOverlay.addEventListener('click', function (e) {
            if (e.target === errorOverlay) {
                closeErrorModal();
            }
        });
    }

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && errorOverlay && errorOverlay.classList.contains('active')) {
            closeErrorModal();
        }
    });
})();