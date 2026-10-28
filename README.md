# Ficora

脑机接口研究主题网站。以神经星河为视觉隐喻，结合神经科学、时间序列分析与周期数学的研究内容。

## 本地运行

需要 Node.js 22.18+（数值测试直接加载 TypeScript）和 npm。

```sh
npm install
npm run dev
```

```sh
npm run build
npm run lint
npm test
```

## 页面与交互

- 基于更新后的 `periodicity-react 0.1.15`：Theme / International 管理主题与语言，GridLayout / LinearLayout / Sticky 组织布局，Text / Card / Surface / Tag 呈现内容，Button / Select / Radio / SeekBar 提供交互，LineChart 展示时域与功率谱，Tex 呈现公式。
- 组件通过库公开的属性与主题令牌配置；页面样式负责排版、响应式与科学插图，不覆盖组件内部样式。
- Canvas 星河缓慢旋转，尊重减少动态效果设置；离开视口或切换到后台时暂停。
- 信号实验支持 theta、alpha/mu、beta、gamma 频段，调整频率、振幅、初始相位，播放相位变化并导出 CSV。
- 英语、简体中文、日语、西班牙语、法语，支持浏览器语言识别、偏好保存与 `?lang=zh-CN` 链接。

## 本地 UI 库

依赖固定到 `vendor/periodicity-react-0.1.15.tgz`，来自相邻 `periodicity-react` 项目的构建产物。安装时直接使用此包，确保页面使用本次更新的组件版本。后续更新 UI 库后，先在库项目完成构建，再将新包放入 `vendor/` 并更新依赖。

## 科学内容

实验使用 256 Hz 采样率、512 个采样点的合成信号，含振幅为基波 0.22 倍的二次谐波。去均值后使用对称 Hann 窗计算单边功率谱密度（µV²/Hz），频点间隔为 0.5 Hz。数值测试验证峰值频率、二次谐波、PSD 归一化、振幅平方律与相位变化。

星河为艺术概念图；信号为数学合成示例。研究方向不代表临床性能。`periodicity-react` 是界面组件库，与下述 Periodicity 数学研究仓库分别引用。

- [Pfurtscheller & Lopes da Silva：事件相关同步与去同步](https://doi.org/10.1016/S1388-2457(99)00141-8)
- [SciPy：periodogram 方法](https://docs.scipy.org/doc/scipy/reference/generated/scipy.signal.periodogram.html)
- [Eloy Kim：Periodicity 研究纲领](https://github.com/eloyhere/periodicity)

周期数学部分用旋转向量与时域投影说明复数振荡；Periodicity 更广泛的框架在脑机接口中的应用仍需要实验评价。
