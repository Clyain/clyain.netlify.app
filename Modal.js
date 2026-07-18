(function () {
    const overlay = document.getElementById('modalOverlay');
    const closeBtn = document.getElementById('closeModalBtn');
    const modalContent = document.getElementById('modalContent');
    const modalFooter = document.getElementById('modalFooter');
    const modalTitle = document.getElementById('modalTitle');

    function openModal(modalKey) {
        const config = modalConfigs[modalKey];
        if (!config) return;

        modalTitle.textContent = config.title;
        modalContent.innerHTML = config.content;
        modalFooter.innerHTML = config.footer;

        if (['modal-1','modal-2','modal-3','modal-4'].includes(modalKey)) {
        // 重新渲染 scratchblocks
        requestAnimationFrame(() => {
            scratchblocks.renderMatching("code.inline", {
                inline: true,
                style: "scratch3",
                languages: ["zh_cn", "en"],
                scale: 0.675
            });
        });            
        }
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    window.closeModal = function() {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    };

    document.querySelectorAll('[data-modal]').forEach(btn => {
        btn.addEventListener('click', function() {
            openModal(this.getAttribute('data-modal'));
        });
    });

    closeBtn.addEventListener('click', window.closeModal);

    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) window.closeModal();
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && overlay.classList.contains('active')) {
            window.closeModal();
        }
    });
})();