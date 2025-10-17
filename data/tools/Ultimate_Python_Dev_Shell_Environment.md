# 🐍 Ultimate Python Dev Shell Environment

一个跨平台（**Ubuntu / macOS / Windows PowerShell 7**）的高效开发环境配置脚本，专为 Python 开发者设计。  
包含常用工具、命令别名、语法高亮、智能补全、fzf 搜索、starship 美化等。  

---

## ✨ 功能概览

✅ **跨平台支持：**
- 🐧 Ubuntu / Debian
- 🍎 macOS (Homebrew)
- 🪟 Windows PowerShell 7（通过 Scoop）

✅ **终端增强：**
- Fish（Linux/macOS）或 PowerShell 7（Windows）
- Starship 极简提示符
- `fzf` 模糊搜索与命令历史快速查找
- `bat`（带语法高亮的 cat）
- `eza`（图标化文件列表）
- `ripgrep`（超快搜索）
- 自动集成 Python 环境与 uv 工具

✅ **Python 集成：**
- 使用 [`uv`](https://github.com/astral-sh/uv) 进行环境与包管理（比 pip/venv 更快）
- 常用 alias：`py`, `act`, `mkvenv`, `rmpycache`
- 无自动激活 `.venv`，完全手动控制（你可以自己执行 `act`）

✅ **便捷命令别名：**
通过 `help` 命令可以查看所有快捷命令：

```bash
help
```

输出：
```
==============================
 ⚡ Python Dev Shell Help
==============================
ll, la, py, act, deactivate, mkvenv, rmpycache
gs, gc, gp, ga, gl
cls, .., ..., update, extract, zipit, ports, killport, serve, findpy
fhist, help
==============================
```

---

## 🚀 安装步骤

### 🐧 Ubuntu / Debian

```bash
curl -fsSL https://yukun-guo.github.io/install_dev_shell.sh | bash
```

或手动执行脚本：

```bash
chmod +x install_dev_shell.sh
./install_dev_shell.sh
```

> 📦 依赖会自动安装：fish、fzf、bat、eza、ripgrep、python3、pip、uv、starship

安装完成后：
```bash
chsh -s /usr/bin/fish
fish
```

---

### 🍎 macOS

```bash
curl -fsSL https://yukun-guo.github.io/install_dev_shell.sh | bash
```

系统会自动安装：
- Homebrew（若未安装）
- fish、fzf、bat、eza、ripgrep、starship
- Python、uv、ipython、ruff

安装后重启终端或执行：
```bash
fish
```

---

### 🪟 Windows 10/11 (PowerShell 7)

打开 PowerShell 7（或 Windows Terminal 的 PowerShell 7 配置文件）：

```powershell
iwr -useb https://yukun-guo.github.io/install_dev_shell.ps1 | iex
```

系统会自动：
- 安装 Scoop（如果未安装）
- 通过 Scoop 安装 git、python、fzf、bat、eza、starship、uv
- 配置 PowerShell profile

安装完成后重启 PowerShell：
```powershell
Restart-Computer  # 或手动关闭重开终端
```

---

## 🧠 常用命令说明

| 命令 | 功能说明 |
|------|-----------|
| `help` | 显示全部可用命令及功能 |
| `ll` | 图标化长列表（`eza -alh --icons`） |
| `la` | 显示所有文件（含隐藏文件） |
| `cat` | 带语法高亮的文件内容查看（`bat`） |
| `py` | 使用 uv 运行 Python 脚本 |
| `act` | 激活当前目录下 `.venv` |
| `mkvenv` | 创建虚拟环境 (`uv venv`) |
| `rmpycache` | 删除所有 `__pycache__` 目录 |
| `gs` / `ga` / `gc` / `gp` / `gl` | Git 快捷操作 |
| `cls` | 清屏 |
| `..`, `...` | 快速跳转上级目录 |
| `update` | 一键更新系统或 Homebrew |
| `extract`, `zipit` | 快速解压/压缩文件 |
| `ports` | 查看当前监听端口 |
| `killport` | 杀掉占用端口的进程 |
| `serve` | 启动本地 HTTP 服务（`python -m http.server`） |
| `findpy` | 查找项目中所有 `.py` 文件 |
| `fhist` | 通过 fzf 搜索命令历史并执行 |

---

## 🎨 Shell 体验示例

### 🐟 Fish（macOS / Ubuntu）

![fish-example](https://user-images.githubusercontent.com/1234567/fish-example.png)

### 🪟 PowerShell 7

![pwsh-example](https://user-images.githubusercontent.com/1234567/pwsh-example.png)

---

## ⚙️ 手动配置文件位置

| 系统 | 配置文件路径 |
|------|---------------|
| Ubuntu / macOS | `~/.config/fish/config.fish` |
| Windows | `$PROFILE` (通常位于 `Documents\PowerShell\Microsoft.PowerShell_profile.ps1`) |

---

## 🧩 扩展建议

你可以在 `config.fish` 或 PowerShell profile 中添加自己的 alias 或函数，例如：

```fish
# 添加虚拟环境检测提示
function show_venv
    if test -n "$VIRTUAL_ENV"
        echo "🐍 Venv: (basename $VIRTUAL_ENV)"
    end
end
function fish_prompt
    show_venv
    starship prompt
end
```

---

## 🩺 故障排查

| 问题 | 原因 | 解决方案 |
|------|------|-----------|
| `eza: command not found` | eza 未安装成功 | 运行 `brew install eza` 或 `sudo apt install eza` |
| `uv: command not found` | pip 未正确安装 | 执行 `pip install uv --upgrade` |
| PowerShell profile 无效 | 权限问题 | 运行 `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser -Force` |
| 字体图标乱码 | 未安装 Nerd Font | 安装 [MesloLGS NF](https://www.nerdfonts.com/font-downloads) 并在终端启用 |

---

## 💡 提示

- `help` 命令永远是你最好的起点。
- Fish 与 PowerShell 都支持 Tab 自动补全。
- 推荐搭配 [Starship](https://starship.rs/) + [Nerd Font](https://www.nerdfonts.com/) 获取完整体验。

---

## 🧰 卸载

```bash
rm -rf ~/.config/fish
brew uninstall fish fzf bat eza ripgrep starship
pip uninstall uv ipython ruff
```

Windows:
```powershell
scoop uninstall fish fzf bat eza starship
Remove-Item $PROFILE
```

---

## 🧑‍💻 作者建议

> 适合深度 Python 开发者、数据科学家与科研人员。  
> 统一的终端体验让你在 Ubuntu、macOS、Windows 之间无缝切换。  
> **一套配置，所有平台都像家一样。**
