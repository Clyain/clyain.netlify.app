// 定义全局渲染函数，用于设置变化时重新渲染
window.renderDashboardWithData = function (data) {
    if (!data) return;

    const { file, ProjectData, fileSizeMB, ExtensionsInfo, ToplevelBlockOPs, MenuOPs } = data;

    // 获取当前设置
    const settings = getCurrentSettings();

    // 使用当前的 datadisplayway 重新计算统计数据
    const stats = Stats(ProjectData, ToplevelBlockOPs, MenuOPs, settings.datadisplayway);

    const blockTypeNames = {
        motion: '运动', looks: '外观', sound: '声音', event: '事件',
        control: '控制', sensing: '侦测', operator: '运算',
        data: '变量', variable: '变量', list: '列表',
        procedures: '自制', addons: '插件', others: '其他'
    };

    const costumeCount = function () {
        let count = 0;
        ProjectData.targets?.forEach(target => { count += target.costumes?.length || 0; });
        return count;
    };
    const soundCount = function () {
        let count = 0;
        ProjectData.targets?.forEach(target => { count += target.sounds?.length || 0; });
        return count;
    };

    const variableCount = function () {
        let count = 0;
        ProjectData.targets?.forEach(target => { count += Object.keys(target.variables).length || 0; });
        return count;
    };
    const listCount = function () {
        let count = 0;
        ProjectData.targets?.forEach(target => { count += Object.keys(target.lists).length || 0; });
        return count;
    };

    const extensionInfoStr = Object.keys(ExtensionsInfo).length > 0
        ? Object.values(ExtensionsInfo).map(info => info.name).join('、')
        : '无';

    const statConfigs = [
        { key: 'showFileSize', icon: './assets/FileIcon.svg', label: '文件', value: `${fileSizeMB}<span style="color: #404853; font-size: 45%;"> MB</span>` },
        { key: 'showSpriteCount', icon: './assets/SpriteIcon.svg', label: '角色', value: ProjectData.targets?.length || 0 },
        { key: 'showCostumeCount', icon: './assets/CostumeIcon.svg', label: '造型', value: costumeCount() },
        { key: 'showSoundCount', icon: './assets/SoundIcon.svg', label: '声音', value: soundCount() },
        { key: 'showBlocksNum', icon: './assets/BlocksIcon.svg', label: '合计', value: stats.BlocksNum },
        { key: 'showEffectiveBlocksNum', icon: './assets/TrueBlocksIcon.svg', label: '有效', value: stats.EffectiveBlocksNum },
        { key: 'showScriptsNum', icon: './assets/PilesIcon.svg', label: '合计', value: stats.ScriptsNum },
        { key: 'showEffectiveScriptsNum', icon: './assets/TruePilesIcon.svg', label: '有效', value: stats.EffectiveScriptsNum },
        { key: 'showExtensionsNum', icon: './assets/ExtensionIcon.svg', label: '扩展', value: ProjectData.extensions?.length || 0 },
        { key: 'showVarDefinitionsNum', icon: './assets/VarIcon.svg', label: '变量', value: variableCount() },
        { key: 'showListDefinitionsNum', icon: './assets/ListIcon.svg', label: '列表', value: listCount() },
        { key: 'showFuncDefinitionsNum', icon: './assets/FuncIcon.svg', label: '函数', value: stats.FuncDefinitionsNum }
    ];

    // 构建统计项映射
    const statMap = {};
    statConfigs.forEach(config => {
        statMap[config.key] = config;
    });

    // 分组配置：标签在上方居中
    const displayOrder = [
        { groupLabel: '文件信息', keys: ['showFileSize', 'showExtensionsNum'] },
        { groupLabel: '资源', keys: ['showSpriteCount', 'showCostumeCount', 'showSoundCount'] },
        { groupLabel: '积木数量', keys: ['showBlocksNum', 'showEffectiveBlocksNum'] },
        { groupLabel: '积木段数', keys: ['showScriptsNum', 'showEffectiveScriptsNum'] },
        { groupLabel: '定义', keys: ['showVarDefinitionsNum', 'showListDefinitionsNum', 'showFuncDefinitionsNum'] }
    ];

    let statsHtml = '';
    let hasVisible = false;

    displayOrder.forEach(group => {
        // 过滤出可见的项
        const visibleItems = group.keys.filter(key => settings[key] !== false);
        if (visibleItems.length === 0) return;
        hasVisible = true;

        // 构建该组的HTML - 分组标签在头顶居中
        let itemsHtml = '';
        visibleItems.forEach((key, index) => {
            const config = statMap[key];
            if (!config) return;
            // 如果是该组的最后一个，添加 no-divider 类
            const isLast = index === visibleItems.length - 1;
            itemsHtml += `
            <div class="stat-item ${isLast ? 'no-divider' : ''}" style="padding: 0 12px; flex: 0 0 auto;">
                <img src="${config.icon}" alt="${config.label}">
                <div class="stat-label">${config.label}</div>
                <div class="stat-value">${config.value}</div>
            </div>
        `;
        });

        statsHtml += `
        <div style="display: flex; flex-direction: column; align-items: center; gap: 2px; padding: 4px 6px 6px 6px; background: #f6f9ff; border-radius: 12px; border: 2px solid #f1f5f9; flex: 0 0 auto; min-width: 0;">
            <span style="font-size: clamp(0.5rem, 1.4vw, 0.65rem); font-weight: 600; color: #94a3b8; white-space: nowrap; letter-spacing: 0.5px; margin-bottom:8px">${group.groupLabel}</span>
            <div style="display: flex; align-items: center; gap: 0px;">
                ${itemsHtml}
            </div>
        </div>
    `;
    });

    if (!hasVisible) {
        statsHtml = `<div style="text-align:center;color:#94a3b8;padding:10px;font-size:0.85rem;">所有统计项已隐藏，请在设置中开启</div>`;
    }

    const fileNameHtml = settings.showFileName !== false ? `
            <div style="font-size: clamp(1.1rem, 5vw, 1.45rem);font-weight: 700;color: #0a1927;border-left: 3px solid #3b82f6;padding-left: 12px;margin-bottom: 1rem; word-break: break-word;">${file.name}</div>
        ` : '';

    const topHtml = fileNameHtml + `
            <div style="display: flex; flex-wrap: wrap; gap: 8px; background: #fafcff; border-radius: 20px; padding: 10px 12px; border: 1px solid #f1f5f9; margin-bottom: 20px; justify-content: center;">
                ${statsHtml}
            </div>
        `;

    const ExtensionInfoHtml = settings.showExtensionsInfo !== false ? `
            <div class="extensions-board">
                    <strong>扩展信息：</strong>${extensionInfoStr}
            </div>
        ` : '';

    let total;

    const colorMap = {
        motion: 'motionColor', looks: 'looksColor', sound: 'soundColor',
        event: 'eventColor', control: 'controlColor', sensing: 'sensingColor',
        operator: 'operatorColor', data: 'dataColor', variable: 'dataColor', list: 'listColor',
        procedures: 'proceduresColor', others: 'othersColor', addons: 'addonsColor'
    };

    let barsHtml = '';

    if (settings.showSpecificExtensions === true) {
        const orderType = settings.orderType || 'original';
        const datadisplayway = settings.datadisplayway || 'onlydata';
        const allCategories = [];
        let baseCategories;

        if (datadisplayway === 'onlydata') {
            baseCategories = ['motion', 'looks', 'sound', 'event', 'control', 'sensing', 'operator', 'data', 'procedures', 'addons'];
        } else {
            baseCategories = ['motion', 'looks', 'sound', 'event', 'control', 'sensing', 'operator', 'variable', 'list', 'procedures', 'addons'];
        }

        baseCategories.forEach(key => {
            const count = stats.BlocksNumInType[key] || 0;
            if (count > 0) {
                allCategories.push({
                    key: key,
                    count: count,
                    isExtension: false,
                    displayName: blockTypeNames[key] || key,
                    colorClass: colorMap[key] || 'color-gray',
                    color: null
                });
            }
        });

        const extEntries = Object.entries(stats.ExtBlocksNumInTypes || {}).filter(([, count]) => count > 0);
        extEntries.forEach(([extName, count]) => {
            const info = ExtensionsInfo[extName] || { name: extName, color: '#0FBD8C' };
            allCategories.push({
                key: extName,
                count: count,
                isExtension: true,
                displayName: info.name || extName,
                colorClass: null,
                color: info.color || '#0FBD8C'
            });
        });

        if (orderType === 'byCount') {
            allCategories.sort((a, b) => b.count - a.count);
        }

        if (allCategories.length === 0) {
            barsHtml = `<div style="text-align:center;color:#94a3b8;padding:8px 0;font-size:0.85rem;">（未检测到积木）</div>`;
        } else {
            allCategories.forEach(item => {

                total = stats.BlocksNum || 1;
                let pctL = ((item.count / total) * 100).toFixed(1);
                if (settings.betterProgressBar === true) {
                    total = Object.values(stats.BlocksNumInType).length > 0 ? Math.max(...Object.values(stats.BlocksNumInType)) : 1;
                }
                let pctR = ((item.count / total) * 100).toFixed(1);

                if (item.isExtension) {
                    barsHtml += `
        <div class="block-row">
            <span class="block-count">${item.count}</span>
            <span class="block-percent"> (${pctL}%) </span>
            <span class="block-name" style="color: ${item.color};">${item.displayName}</span>
            <div class="progress-bar-bg">
                <div class="progress-bar-fill" style="width: ${pctR}%; background: ${item.color};"></div>
            </div>
        </div>
    `;
                } else {
                    barsHtml += `
        <div class="block-row">
            <span class="block-count">${item.count}</span>
            <span class="block-percent"> (${pctL}%) </span>
            <span class="block-name">${item.displayName}</span>
            <div class="progress-bar-bg">
                <div class="progress-bar-fill ${item.colorClass}" style="width: ${pctR}%;"></div>
            </div>
        </div>
    `;
                }
            });
        }
    } else {
        const orderType = settings.orderType || 'original';
        const datadisplayway = settings.datadisplayway || 'onlydata';
        const allCategories = [];

        let baseCategories;

        if (datadisplayway === 'onlydata') {
            baseCategories = ['motion', 'looks', 'sound', 'event', 'control', 'sensing', 'operator', 'data', 'procedures', 'addons'];
        } else {
            baseCategories = ['motion', 'looks', 'sound', 'event', 'control', 'sensing', 'operator', 'variable', 'list', 'procedures', 'addons'];
        }


        baseCategories.forEach(key => {
            const count = stats.BlocksNumInType[key] || 0;
            if (count > 0) {
                allCategories.push({
                    key: key,
                    count: count,
                    displayName: blockTypeNames[key] || key,
                    colorClass: colorMap[key] || 'color-gray'
                });
            }
        });

        const othersCount = stats.BlocksNumInType.others || 0;
        if (othersCount > 0) {
            allCategories.push({
                key: 'others',
                count: othersCount,
                displayName: '其他',
                colorClass: 'othersColor'
            });
        }

        if (orderType === 'byCount') {
            allCategories.sort((a, b) => b.count - a.count);
        }

        if (allCategories.length === 0) {
            barsHtml = `<div style="text-align:center;color:#94a3b8;padding:8px 0;font-size:0.85rem;">（未检测到积木）</div>`;
        } else {
            allCategories.forEach(item => {
                total = stats.BlocksNum || 1;
                let pctL = ((item.count / total) * 100).toFixed(1);
                if (settings.betterProgressBar === true) {
                    total = Object.values(stats.BlocksNumInType).length > 0 ? Math.max(...Object.values(stats.BlocksNumInType)) : 1;
                }
                let pctR = ((item.count / total) * 100).toFixed(1);

                barsHtml += `
            <div class="block-row">
                <span class="block-count">${item.count}</span>
                <span class="block-percent"> (${pctL}%) </span>
                <span class="block-name">${item.displayName}</span>
                <div class="progress-bar-bg">
                    <div class="progress-bar-fill ${item.colorClass}" style="width: ${pctR}%;"></div>
                </div>
            </div>
        `;
            });
        }
    }

    const d = new Date();

    // 当扩展信息不显示时，给积木分类栏底部增加间距
    const extensionInfoVisible = settings.showExtensionsInfo !== false;
    const bottomSpacer = extensionInfoVisible ? '' : '<div style="height: 16px;"></div>';

    document.getElementById('projectInfo').innerHTML = topHtml + `<div class="block-stats">${barsHtml}</div>` + ExtensionInfoHtml + bottomSpacer + `<div style=" display: flex; justify-content: space-between;color: #475569"><span>分析器网址：clyain.netlify.app/epsa</span><span>分析时间：${d.toLocaleDateString()}</span></div>`;

    if (stats.ErrorList.length !== 0) {
        document.querySelectorAll('.view-error').forEach(btn => btn.remove());

        const exportComposite = document.getElementById('exportComposite');
        if (exportComposite) {
            const button = document.createElement('button');
            button.className = 'view-error';

            const img = document.createElement('img');
            img.src = 'Error.svg';
            img.alt = '';

            button.appendChild(img);
            exportComposite.after(button);

            button.addEventListener('click', function () {
                const errorContent = document.getElementById('errorListContent');
                if (errorContent) {
                    if (stats.ErrorList.length === 0) {
                        errorContent.innerHTML = '<p style="color: #22c55e;">没有发现错误</p>';
                    } else {
                        let html = '<ul style="list-style: none; padding: 0; margin: 0;">';
                        stats.ErrorList.forEach((error, index) => {
                            // 使用 textContent 纯文本显示，将错误信息放在一个容器中
                            const errorText = typeof error === 'string' ? error : JSON.stringify(error);
                            html += `
                    <li style="
                        padding: 10px 14px;
                        margin-bottom: 8px;
                        background: #fef2f2;
                        border-left: 4px solid #ef4444;
                        border-radius: 8px;
                        color: #1e293b;
                        font-size: 0.9rem;
                        word-break: break-word;
                    ">
                        <span style="font-weight: 600; color: #dc2626;">#${index + 1}</span>
                        <span id="error-text-${index}"></span>
                    </li>
                `;
                        });
                        html += '</ul>';
                        html += `<p style="margin-top: 12px; color: #64748b; font-size: 0.85rem;">共 ${stats.ErrorList.length} 个错误</p>`;
                        errorContent.innerHTML = html;

                        // 用 textContent 填充每个错误文本（避免 HTML 解析）
                        stats.ErrorList.forEach((error, index) => {
                            const textSpan = document.getElementById(`error-text-${index}`);
                            if (textSpan) {
                                const errorText = typeof error === 'string' ? error : JSON.stringify(error);
                                textSpan.textContent = errorText;
                            }
                        });
                    }
                }

                if (typeof openErrorModal === 'function') {
                    openErrorModal();
                }
            });
        }
    } else {
        document.querySelectorAll('.view-error').forEach(btn => btn.remove());
    }

};