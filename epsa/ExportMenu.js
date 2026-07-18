(function () {
    const toggleIcon = document.getElementById('toggleIcon');
    const popupMenu = document.getElementById('popupMenu');
    let isOpen = false;

    function toggleMenu(e) {
        e.stopPropagation();
        isOpen = !isOpen;
        popupMenu.classList.toggle('open', isOpen);
        toggleIcon.classList.toggle('open', isOpen);
    }

    function closeMenu() {
        if (isOpen) {
            isOpen = false;
            popupMenu.classList.remove('open');
            toggleIcon.classList.remove('open');
        }
    }

    // 圆形图标切换
    toggleIcon.addEventListener('click', toggleMenu);

    // 菜单项点击：执行动作 + 关闭菜单
    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', function (e) {
            e.stopPropagation();
            closeMenu();
        });
    });

    // 点击外部关闭
    document.addEventListener('click', function (e) {
        const composite = document.getElementById('exportComposite');
        if (!composite.contains(e.target)) closeMenu();
    });

    // 键盘支持
    toggleIcon.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleMenu(e);
        }
    });
})();