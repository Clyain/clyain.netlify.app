// ===== 标签系统 =====
const tagSystem = {
    allTags: ['Avicii', 'Alan Walker', 'Vicetone', 'Tobu', 'TheFatRat', '电音', '超燃', 'Phonk', '节奏', '串烧', '俄文', '日文', '英文', 'M86'],
    selectedTags: [],

    getAllTags: function () {
        return this.allTags;
    },

    toggleTag: function (tag) {
        const index = this.selectedTags.indexOf(tag);
        if (index === -1) {
            this.selectedTags.push(tag);
        } else {
            this.selectedTags.splice(index, 1);
        }
    },

    isTagSelected: function (tag) {
        return this.selectedTags.includes(tag);
    },

    clearTags: function () {
        this.selectedTags = [];
    },

    isSongMatchTags: function (song) {
        if (this.selectedTags.length === 0) return true;
        return this.selectedTags.some(tag => song.tags && song.tags.includes(tag));
    }
};

// ===== 播放模式系统 =====
const playbackMode = {
    currentMode: 'list',
    currentSongIndex: -1,
    visibleSongsIndices: [],

    setMode: function (mode) {
        this.currentMode = mode;
        updateLoopButtons();
    },

    setCurrentSongIndex: function (index) {
        this.currentSongIndex = index;
    },

    setVisibleSongs: function (visibleSongIndices) {
        this.visibleSongsIndices = visibleSongIndices;
    },

    getNextSong: function () {
        if (this.currentMode === 'single') {
            return null;
        }
        if (this.visibleSongsIndices.length === 0) {
            return null;
        }
        const currentIndexInVisible = this.visibleSongsIndices.indexOf(this.currentSongIndex);
        if (currentIndexInVisible === -1) {
            return this.visibleSongsIndices[0];
        } else if (currentIndexInVisible >= this.visibleSongsIndices.length - 1) {
            return this.visibleSongsIndices[0];
        } else {
            return this.visibleSongsIndices[currentIndexInVisible + 1];
        }
    },

    getVisibleSongByIndex: function (indexInVisibleList) {
        if (indexInVisibleList >= 0 && indexInVisibleList < this.visibleSongsIndices.length) {
            return songs[this.visibleSongsIndices[indexInVisibleList]];
        }
        return null;
    }
};

// ===== 歌曲数据 =====
const songs = [
    { file: './audio/Do Better.mp3', title: 'Do Better', tags: ['超燃', '英文'] },
    { file: './audio/Fool For You.mp3', title: 'Fool For You', tags: ['超燃', '英文'] },
    { file: './audio/Funny.mp3', title: 'Funny', tags: ['英文'] },
    { file: './audio/Got It(Phonk).mp3', title: 'Got It(Phonk)', tags: ['Phonk', '电音', '节奏', '英文'] },
    { file: './audio/Lightning Moment.mp3', title: 'Lightning Moment', tags: ['电音', '超燃', '英文'] },
    { file: './audio/Moth To a Flame x After Hours(sped up).mp3', title: 'Moth To a Flame x After Hours(sped up)', tags: ['串烧', '电音', '英文'] },
    { file: './audio/Once upon a Time.mp3', title: 'Once upon a Time', tags: ['超燃', '英文'] },
    { file: './audio/Power.mp3', title: 'Power', tags: ['电音', '超燃', '英文'] },
    { file: './audio/S.T.A.Y.mp3', title: 'S.T.A.Y', tags: ['电音', '英文'] },
    { file: './audio/Sleepwalker.mp3', title: 'Sleepwalker', tags: ['电音', '英文'] },
    { file: './audio/Temple.mp3', title: 'Temple', tags: ['电音', '英文'] },
    { file: './audio/The Spectre.mp3', title: 'The Spectre', tags: ['电音', 'Alan Walker', '英文'] },
    { file: './audio/This Far.mp3', title: 'This Far', tags: ['超燃', '电音', '英文'] },
    { file: './audio/Feel You.mp3', title: 'Feel You', tags: ['电音', '英文'] },
    { file: './audio/Time Stop.mp3', title: 'Time Stop', tags: ['英文'] },
    { file: './audio/Towards the Light.mp3', title: 'Towards the Light', tags: ['电音', '英文'] },
    { file: './audio/Wake.mp3', title: 'Wake', tags: ['电音', '英文'] },
    { file: './audio/Walk Thru Fire.mp3', title: 'Walk Thru Fire', tags: ['Vicetone', '电音', '英文'] },
    { file: './audio/Wasted.mp3', title: 'Wasted', tags: ['超燃', '英文'] },
    { file: './audio/Watch Me Work.mp3', title: 'Watch Me Work', tags: ['英文'] },
    { file: './audio/Without You.mp3', title: 'Without You', tags: ['Avicii', '英文'] },
    { file: './audio/Под луной.mp3', title: 'Под луной', tags: ['俄文'] },
    { file: './audio/манго нектар.mp3', title: 'манго нектар', tags: ['俄文'] },
    { file: './audio/はじまりの曲.mp3', title: 'はじまりの曲', tags: ['日文'] },
    { file: './audio/反乌托邦.mp3', title: '反乌托邦', tags: [] },
    { file: './audio/Broken Arrows.mp3', title: 'Broken Arrows', tags: ['Avicii', '英文'] },
    { file: './audio/Heaven.mp3', title: 'Heaven', tags: ['Avicii', '英文'] },
    { file: './audio/Hey Brother.mp3', title: 'Hey Brother', tags: ['Avicii', '英文'] },
    { file: './audio/I Could Be The One.mp3', title: 'I Could Be The One', tags: ['Avicii', '英文'] },
    { file: './audio/Levels.mp3', title: 'Levels', tags: ['Avicii', '英文'] },
    { file: './audio/Lonely Together.mp3', title: 'Lonely Together', tags: ['Avicii', '英文'] },
    { file: './audio/Silhouettes.mp3', title: 'Silhouettes', tags: ['Avicii', '英文'] },
    { file: './audio/The Nights.mp3', title: 'The Nights', tags: ['Avicii', '英文'] },
    { file: './audio/Waiting For Love.mp3', title: 'Waiting For Love', tags: ['Avicii', '英文'] },
    { file: './audio/Wake Me Up.mp3', title: 'Wake Me Up', tags: ['Avicii', '英文'] },
    { file: './audio/You Be Love.mp3', title: 'You Be Love', tags: ['Avicii', '英文'] },
    { file: './audio/The Days.mp3', title: 'The Days', tags: ['Avicii', '英文'] },
    { file: './audio/Higher.mp3', title: 'Higher', tags: ['超燃', 'Tobu', '英文'] },
    { file: './audio/Nevada.mp3', title: 'Nevada', tags: ['超燃', 'Vicetone', '英文'] },
    { file: './audio/Alone.mp3', title: 'Alone', tags: ['超燃', '电音', 'Alan Walker', '英文'] },
    { file: './audio/Closer.mp3', title: 'Closer', tags: ['英文'] },
    { file: './audio/Faded.mp3', title: 'Faded', tags: ['超燃', '电音', 'Alan Walker', '英文'] },
    { file: './audio/Falling Down.mp3', title: 'Falling Down', tags: ['超燃', '英文'] },
    { file: './audio/Hiding In The Blue.mp3', title: 'Hiding In The Blue', tags: ['TheFatRat', '超燃', '英文'] },
    { file: './audio/Meant To Be.mp3', title: 'Meant To Be', tags: ['超燃', '英文'] },
    { file: './audio/Midnight City.mp3', title: 'Midnight City', tags: ['超燃', 'M86', '英文'] },
    { file: './audio/Mine.mp3', title: 'Mine', tags: ['超燃', '英文'] },
    { file: './audio/Move Your Body(Remix).mp3', title: 'Move Your Body(Remix)', tags: ['超燃', '英文'] },
    { file: './audio/Outside.mp3', title: 'Outside', tags: ['超燃', '英文'] },
    { file: './audio/Rather Be.mp3', title: 'Rather Be', tags: ['超燃', '英文'] },
    { file: './audio/Shed A Light.mp3', title: 'Shed A Light', tags: ['超燃', '英文'] },
    { file: './audio/Shelter.mp3', title: 'Shelter', tags: ['超燃', '英文'] },
    { file: './audio/So Far Away.mp3', title: 'So Far Away', tags: ['超燃', '英文'] },
    { file: './audio/Something Just Like This.mp3', title: 'Something Just Like This', tags: ['英文'] },
    { file: './audio/The Best Of Me.mp3', title: 'The Best Of Me', tags: ['超燃', '英文'] },
    { file: './audio/Wish You Were Here.mp3', title: 'Wish You Were Here', tags: ['超燃', '英文', 'Vicetone'] },
    { file: './audio/Go Again.mp3', title: 'Go Again', tags: ['超燃', '英文'] },
    { file: './audio/Love Story.mp3', title: 'Love Story', tags: ['爱情', '英文'] },
    { file: './audio/Take Me Hand.mp3', title: 'Take Me Hand', tags: ['爱情', '英文'] },
    { file: './audio/That Girl.mp3', title: 'That Girl', tags: ['爱情', '英文'] },
    { file: './audio/打上花火.mp3', title: '打上花火', tags: ['爱情', '日文'] },
    { file: './audio/One Last Kiss.mp3', title: 'One Last Kiss', tags: ['爱情', '日文'] },
    { file: './audio/Into You.mp3', title: 'Into You', tags: ['爱情', '英文'] },
    { file: './audio/Slow Down.mp3', title: 'Slow Down', tags: ['英文'] },
    { file: './audio/We Won\'t Be Alone.mp3', title: 'We Won\'t Be Alone', tags: ['超燃', '英文'] },
    { file: './audio/Run Free.mp3', title: 'Run Free', tags: ['爱情', '英文', '超燃'] },
    { file: './audio/Cure For Me.mp3', title: 'Cure For Me', tags: ['超燃', '英文'] },
    { file: './audio/Sunburst.mp3', title: 'Sunburst', tags: ['超燃', '英文', 'Tobu'] },
    { file: './audio/Move Up(Lost Gravity).mp3', title: 'Move Up(Lost Gravity)', tags: ['超燃', '英文'] },
    { file: './audio/Time To Pretend.mp3', title: 'Time To Pretend', tags: ['超燃', '英文'] },
    { file: './audio/Falling Again.mp3', title: 'Falling Again', tags: ['超燃', '英文'] },
];

// ===== 更新已选标签显示 =====
function updateSelectedTagsDisplay() {
    const container = document.getElementById('selected-tags-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    if (tagSystem.selectedTags.length === 0) {
        return;
    }
    
    const title = document.createElement('div');
    title.className = 'selected-tags-title';
    title.textContent = '已选标签:';
    container.appendChild(title);
    
    const tagsList = document.createElement('div');
    tagsList.className = 'selected-tags-list';
    
    tagSystem.selectedTags.forEach(tag => {
        const tagItem = document.createElement('div');
        tagItem.className = 'selected-tag-item';
        
        const tagText = document.createElement('span');
        tagText.textContent = tag;
        
        const removeBtn = document.createElement('button');
        removeBtn.className = 'remove-tag-btn';
        removeBtn.textContent = '×';
        removeBtn.onclick = function (e) {
            e.stopPropagation();
            tagSystem.toggleTag(tag);
            // 更新弹窗中的标签状态
            if (typeof refreshFilterTags === 'function') {
                refreshFilterTags();
            }
            filterSongs();
            updateSelectedTagsDisplay();
        };
        
        tagItem.appendChild(tagText);
        tagItem.appendChild(removeBtn);
        tagsList.appendChild(tagItem);
    });
    
    container.appendChild(tagsList);
}

// ===== 更新循环按钮状态 =====
function updateLoopButtons() {
    const listBtn = document.getElementById('list-loop-btn');
    const singleBtn = document.getElementById('single-loop-btn');
    
    if (listBtn) listBtn.classList.toggle('active', playbackMode.currentMode === 'list');
    if (singleBtn) singleBtn.classList.toggle('active', playbackMode.currentMode === 'single');
}

// ===== 设置播放模式 =====
function setPlaybackMode(mode) {
    playbackMode.setMode(mode);
}

// ===== 创建标签显示元素 =====
function createTagElements(tags) {
    const container = document.createElement('div');
    container.className = 'song-tags';
    
    tags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.className = 'song-tag';
        tagElement.textContent = tag;
        container.appendChild(tagElement);
    });
    
    return container;
}

// ===== 创建播放器标签显示 =====
function createPlayerTagElements(tags) {
    const container = document.getElementById('current-song-tags');
    if (!container) return;
    
    container.innerHTML = '';
    
    tags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.className = 'tag-badge';
        tagElement.textContent = tag;
        container.appendChild(tagElement);
    });
}

// ===== 全局变量 =====
let currentVisibleSongIndices = [];

// ===== 初始化歌曲列表 =====
function initializeSongs() {
    const container = document.getElementById('songs-container');
    if (!container) return;
    
    container.innerHTML = '';
    currentVisibleSongIndices = [];

    songs.forEach((song, index) => {
        const songItem = document.createElement('div');
        songItem.className = 'inner-container song-item';
        songItem.id = `song-${index}`;
        songItem.style.display = 'flex';

        const playButton = document.createElement('button');
        playButton.className = 'play-button';
        playButton.onclick = function () {
            play(song.file, song.title, index);
        };

        const songTitleContainer = document.createElement('div');
        songTitleContainer.className = 'song-title';

        const songMainTitle = document.createElement('div');
        songMainTitle.className = 'song-main-title';
        songMainTitle.innerHTML = `<b>${song.title}</b>`;

        const songTags = createTagElements(song.tags || []);

        songTitleContainer.appendChild(songMainTitle);
        songTitleContainer.appendChild(songTags);

        songItem.appendChild(playButton);
        songItem.appendChild(songTitleContainer);

        container.appendChild(songItem);
        currentVisibleSongIndices.push(index);
    });

    playbackMode.setVisibleSongs(currentVisibleSongIndices);
}

// ===== 播放函数 =====
function play(filePath, title, songIndex) {
    const player = document.getElementById('player');
    const currentSongName = document.getElementById('current-song-name');
    const currentSong = songs[songIndex];

    if (!player || !currentSongName) return;

    playbackMode.setCurrentSongIndex(songIndex);

    currentSongName.textContent = title;
    createPlayerTagElements(currentSong.tags || []);

    player.src = filePath;
    player.play().catch(e => {
        console.error('播放错误:', e);
    });

    player.onerror = function () {
        currentSongName.textContent = '播放错误';
        const tagsContainer = document.getElementById('current-song-tags');
        if (tagsContainer) tagsContainer.innerHTML = '';
    };
    
    player.onended = function () {
        if (playbackMode.currentMode === 'single') {
            player.currentTime = 0;
            player.play();
        } else {
            const nextSongIndex = playbackMode.getNextSong();
            if (nextSongIndex !== null && nextSongIndex !== undefined) {
                const nextSong = songs[nextSongIndex];
                play(nextSong.file, nextSong.title, nextSongIndex);
            }
        }
    };
}

// ===== 搜索和标签过滤 =====
function filterSongs() {
    const searchInput = document.getElementById('search-box');
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';

    currentVisibleSongIndices = [];

    songs.forEach((song, index) => {
        const songElement = document.getElementById(`song-${index}`);
        if (!songElement) return;
        
        const songTitle = song.title.toLowerCase();
        const searchMatch = searchTerm === '' || songTitle.includes(searchTerm);
        const tagMatch = tagSystem.isSongMatchTags(song);

        if (searchMatch && tagMatch) {
            songElement.style.display = 'flex';
            currentVisibleSongIndices.push(index);
        } else {
            songElement.style.display = 'none';
        }
    });

    playbackMode.setVisibleSongs(currentVisibleSongIndices);

    const player = document.getElementById('player');
    const currentSongName = document.getElementById('current-song-name');
    const currentSongTags = document.getElementById('current-song-tags');

    if (!currentVisibleSongIndices.includes(playbackMode.currentSongIndex) && player && !player.paused) {
        player.pause();
        if (currentSongName) currentSongName.textContent = '该歌曲不在筛选范围内';
        if (currentSongTags) currentSongTags.innerHTML = '';
    }
}

// ===== 页面初始化 =====
document.addEventListener('DOMContentLoaded', function () {
    // 将 tagSystem 暴露到全局，供 Modal.js 使用
    window.tagSystem = tagSystem;
    
    initializeSongs();
    updateLoopButtons();
    updateSelectedTagsDisplay();

    const player = document.getElementById('player');
    const currentSongName = document.getElementById('current-song-name');

    if (player) {
        player.addEventListener('play', function () {
            if (player.src && currentSongName && currentSongName.textContent === '') {
                currentSongName.textContent = '正在播放';
            }
        });
    }

    // 键盘快捷键
    document.addEventListener('keydown', function (event) {
        // 空格键切换播放/暂停
        if (event.code === 'Space' && event.target.tagName !== 'INPUT') {
            event.preventDefault();
            if (player && player.paused) {
                player.play();
            } else if (player) {
                player.pause();
            }
        }

        // ESC 键清除搜索并关闭弹窗
        if (event.code === 'Escape') {
            const searchInput = document.getElementById('search-box');
            if (searchInput) {
                searchInput.value = '';
                filterSongs();
                searchInput.blur();
            }
            
            // 关闭弹窗（由 Modal.js 提供的全局函数）
            if (typeof closeFilterModal === 'function') {
                closeFilterModal();
            }
        }
    });

    // 搜索框回车支持
    const searchInput = document.getElementById('search-box');
    if (searchInput) {
        searchInput.addEventListener('keypress', function (event) {
            if (event.code === 'Enter') {
                filterSongs();
            }
        });
    }
});