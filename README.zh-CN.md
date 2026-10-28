# Ficora

脑机接口研究主题网站。Ficora 以神经星河为视觉隐喻，把神经科学、时间序列分析与周期数学放在同一个可交互的研究界面中。

英文说明：[README.md](README.md)

## 本地运行

需要 Node.js 22.18 及以上版本（数值测试会直接加载 TypeScript）以及 npm。

安装依赖并启动开发服务器：

```sh
npm install
npm run dev
```

构建、检查代码并运行测试：

```sh
npm run build
npm run lint
npm test
```

## 页面与交互

- 页面基于更新后的 `periodicity-react 0.1.15` 构建：页首主题下拉框与 `International` 管理主题和语言，`GridLayout` / `LinearLayout` / `Sticky` 组织布局，`Text` / `Card` / `Surface` / `Tag` 呈现内容，`Button` / `Select` / `Radio` / `SeekBar` 提供交互，`LineChart` 展示时域与功率谱，`Tex` 呈现公式。
- 组件通过 UI 库公开的属性和主题令牌配置；页面样式只负责排版、响应式布局与科学插图，不覆盖组件内部样式。
- 卡片、信号面板和主要按钮支持悬浮与点击 ripple 动画；页面也会遵循系统的“减少动态效果”设置。
- Canvas 星河缓慢旋转，遵循系统的“减少动态效果”设置；当画布离开视口或页面切换到后台时会暂停。
- 信号实验支持 theta、alpha/mu、beta、gamma 频段，可调整频率、振幅和初始相位，播放相位变化并导出 CSV。
- 支持英语、简体中文、日语、西班牙语和法语，并提供浏览器语言识别、偏好保存以及 `?lang=zh-CN` 链接。

## 本地 UI 库

项目依赖固定为 `vendor/periodicity-react-0.1.15.tgz`，该文件来自相邻的 `periodicity-react` 项目构建产物。安装依赖时直接使用这个本地包，确保页面使用本次更新的组件版本。

更新 UI 库时，请先在库项目中完成构建，再将新的包放入 `vendor/` 并更新依赖版本。

## 科学内容

实验使用 256 Hz 采样率和 512 个采样点生成合成信号，其中二次谐波振幅为基波的 0.22 倍。信号去均值后使用对称 Hann 窗计算单边功率谱密度（µV²/Hz），频点间隔为 0.5 Hz。数值测试覆盖峰值频率、二次谐波、PSD 归一化、振幅平方律和相位变化。

星河是艺术概念图，信号是数学合成示例，研究方向不代表临床性能。`periodicity-react` 是界面组件库，与下列 Periodicity 数学研究仓库分别引用。

- [Pfurtscheller & Lopes da Silva：事件相关同步与去同步](https://doi.org/10.1016/S1388-2457(99)00141-8)
- [SciPy：`periodogram` 方法](https://docs.scipy.org/doc/scipy/reference/generated/scipy.signal.periodogram.html)
- [Eloy Kim：Periodicity 研究纲领](https://github.com/eloyhere/periodicity)

周期数学部分使用旋转向量和时域投影说明复数振荡；Periodicity 更广泛的框架在脑机接口中的应用仍需要实验评价。
