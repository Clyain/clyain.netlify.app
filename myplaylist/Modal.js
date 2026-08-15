// ===== 筛选弹窗控制 =====
(function () {
    const overlay = document.getElementById('modalOverlay');
    const openBtn = document.getElementById('openModalBtn');
    const closeBtn = document.getElementById('closeModalBtn');
    const modalBody = document.getElementById('modalBody');

    // 打开弹窗并初始化标签
    function openModal() {
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        initializeTagsInModal(); // 每次打开时刷新标签
    }

    // 关闭弹窗
    function closeModal() {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    // ===== 初始化弹窗中的标签 =====
    function initializeTagsInModal() {
        if (!modalBody) return;
        
        const tagList = modalBody.querySelector('.tag-list');
        if (!tagList) return;
        
        tagList.innerHTML = '';

        // 从全局 tagSystem 获取所有标签
        const allTags = window.tagSystem ? window.tagSystem.getAllTags() : [];
        
        allTags.forEach(tag => {
            const tagElement = document.createElement('div');
            tagElement.className = 'tag-item';
            tagElement.textContent = tag;
            
            // 检查是否已被选中
            if (window.tagSystem && window.tagSystem.isTagSelected(tag)) {
                tagElement.classList.add('active');
            }
            
            tagElement.onclick = function () {
                if (window.tagSystem) {
                    window.tagSystem.toggleTag(tag);
                    tagElement.classList.toggle('active', window.tagSystem.isTagSelected(tag));
                    
                    // 触发筛选
                    if (typeof filterSongs === 'function') {
                        filterSongs();
                    }
                    if (typeof updateSelectedTagsDisplay === 'function') {
                        updateSelectedTagsDisplay();
                    }
                }
            };
            
            tagList.appendChild(tagElement);
        });
    }

    // 暴露全局函数供其他脚本调用
    window.openFilterModal = openModal;
    window.closeFilterModal = closeModal;
    window.refreshFilterTags = initializeTagsInModal;

    // 绑定事件
    if (openBtn) {
        openBtn.addEventListener('click', function(e) {
            e.preventDefault();
            openModal();
        });
    }
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    // 点击遮罩关闭
    if (overlay) {
        overlay.addEventListener('click', function (e) {
            if (e.target === overlay) {
                closeModal();
            }
        });
    }

    // ESC 关闭
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && overlay && overlay.classList.contains('active')) {
            closeModal();
        }
    });
})();