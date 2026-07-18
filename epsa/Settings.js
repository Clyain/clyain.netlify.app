// ============================================================
// 设置管理 (保存/加载/应用)
// ============================================================

// 默认设置
const DEFAULT_SETTINGS = {
    showFileName: true,
    showFileSize: true,
    showSpriteCount: true,
    showCostumeCount: true,
    showSoundCount: true,
    showBlocksNum: true,
    showTrueBlocksNum: true,
    showPilesNum: true,
    showTruePilesNum: true,
    showExtensionsNum: true,
    showExtensionsInfo: false,
    showSpecificExtensions: true,
    showVarDefinitionsNum: false,
    showListDefinitionsNum: false,
    showFuncDefinitionsNum: false,
    betterProgressBar: false,
    orderType: 'original',
    datadisplayway: 'onlydata'
};

// 1. 获取所有设置checkbox
const settingCheckboxes = {
    showFileName: document.getElementById('showFileName'),
    showFileSize: document.getElementById('showFileSize'),
    showSpriteCount: document.getElementById('showSpriteCount'),
    showCostumeCount: document.getElementById('showCostumeCount'),
    showSoundCount: document.getElementById('showSoundCount'),
    showBlocksNum: document.getElementById('showBlocksNum'),
    showTrueBlocksNum: document.getElementById('showTrueBlocksNum'),
    showPilesNum: document.getElementById('showPilesNum'),
    showTruePilesNum: document.getElementById('showTruePilesNum'),
    showExtensionsInfo: document.getElementById('showExtensionsInfo'),
    showSpecificExtensions: document.getElementById('showSpecificExtensions'),
    showVarDefinitionsNum: document.getElementById('showVarDefinitionsNum'),
    showListDefinitionsNum: document.getElementById('showListDefinitionsNum'),
    showFuncDefinitionsNum: document.getElementById('showFuncDefinitionsNum'),
    showExtensionsNum: document.getElementById('showExtensionsNum'),
    betterProgressBar: document.getElementById('betterProgressBar')
};

function getOrderType() {
    const original = document.getElementById('orderOriginal');
    const byCount = document.getElementById('orderByCount');
    if (byCount && byCount.checked) return 'byCount';
    return 'original';
}

function getDataDisplayWay() {
    const onlydata = document.getElementById('onlydata');
    const separated = document.getElementById('separated');
    if (separated && separated.checked) return 'separated';
    return 'onlydata';
}

// 2. 获取当前设置
function getCurrentSettings() {
    const settings = {};
    for (const [key, checkbox] of Object.entries(settingCheckboxes)) {
        settings[key] = checkbox ? checkbox.checked : DEFAULT_SETTINGS[key];
    }
    settings.orderType = getOrderType();
    settings.datadisplayway = getDataDisplayWay();
    return settings;
}

// 3. 保存设置到 localStorage
function saveSettings() {
    const settings = getCurrentSettings();
    localStorage.setItem('scratchAnalyzerSettings', JSON.stringify(settings));
}

// 4. 加载设置
function loadSettings() {
    const saved = localStorage.getItem('scratchAnalyzerSettings');
    const settings = saved ? JSON.parse(saved) : DEFAULT_SETTINGS;

    for (const [key, checkbox] of Object.entries(settingCheckboxes)) {
        if (checkbox && settings[key] !== undefined) {
            checkbox.checked = settings[key];
        }
    }
    if (settings.orderType === 'byCount') {
        const byCount = document.getElementById('orderByCount');
        if (byCount) byCount.checked = true;
    } else {
        const original = document.getElementById('orderOriginal');
        if (original) original.checked = true;
    }
    if (settings.datadisplayway === 'onlydata') {
        const onlydata = document.getElementById('onlydata');
        if (onlydata) onlydata.checked = true;
    } else {
        const separated = document.getElementById('separated');
        if (separated) separated.checked = true;
    }
    
    document.dispatchEvent(new CustomEvent('settingsLoaded'));
}

// 5. 通用的重新渲染函数
function reRenderIfNeeded() {
    const projectInfo = document.getElementById('projectInfo');
    if (projectInfo && 
        !projectInfo.innerHTML.includes('请先选择') && 
        !projectInfo.innerHTML.includes('正在分析') &&
        !projectInfo.innerHTML.includes('稍等...') &&
        !projectInfo.innerHTML.includes('加载拓展中...') &&
        !projectInfo.innerHTML.includes('统计数据中...')) {
        if (window._lastFileData) {
            renderDashboardWithData(window._lastFileData);
        }
    }
}

// 6. 监听 checkbox 变化
for (const checkbox of Object.values(settingCheckboxes)) {
    if (checkbox) {
        checkbox.addEventListener('change', function () {
            saveSettings();
            reRenderIfNeeded();
        });
    }
}

// 7. 监听 radio 变化（orderType 和 datadisplayway）
document.addEventListener('DOMContentLoaded', function () {
    // 排序方式 radio
    const orderRadios = document.querySelectorAll('input[name="order"]');
    orderRadios.forEach(radio => {
        radio.addEventListener('change', function () {
            saveSettings();
            reRenderIfNeeded();
        });
    });

    // 数据显示方式 radio（变量/列表）
    const dataRadios = document.querySelectorAll('input[name="datadisplayway"]');
    dataRadios.forEach(radio => {
        radio.addEventListener('change', function () {
            saveSettings();
            reRenderIfNeeded();
        });
    });
});

// 8. 页面加载时恢复设置
document.addEventListener('DOMContentLoaded', function () {
    loadSettings();
});

// 9. 重置为默认设置
function resetToDefault() {
    localStorage.removeItem('scratchAnalyzerSettings');
    loadSettings();
    if (window._lastFileData) {
        renderDashboardWithData(window._lastFileData);
    }
    localStorage.removeItem('noShow');
    alert('已恢复默认设置');
}