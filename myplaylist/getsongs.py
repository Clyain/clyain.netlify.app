# quick_generate.py
import os
import glob

# 设置音乐文件夹路径（修改这里）
AUDIO_FOLDER = './audio'

# 支持的音频格式
AUDIO_EXTENSIONS = ['.mp3', '.wav', '.ogg', '.m4a', '.flac']

songs = []

# 遍历所有音频文件
for ext in AUDIO_EXTENSIONS:
    for file_path in glob.glob(os.path.join(AUDIO_FOLDER, f'*{ext}')):
        # 获取文件名（不含路径）
        file_name = os.path.basename(file_path)
        # 获取标题（去掉后缀）
        title = os.path.splitext(file_name)[0]
        # 生成相对路径（将反斜杠转换为正斜杠）
        rel_path = file_path.replace('\\', '/')
        
        songs.append({
            'file': rel_path,
            'title': title,
            'tags': ['英文']
        })

# 按文件名排序
songs.sort(key=lambda x: x['file'])

# 输出JavaScript数组
print("const songs = [")
for i, song in enumerate(songs):
    comma = "," if i < len(songs) - 1 else ""
    print(f"    {{ file: '{song['file']}', title: '{song['title']}', tags: {song['tags']} }}{comma}")
print("];")