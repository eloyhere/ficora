import type { Locale } from './locales'

const en = {
  meta: { title: 'Ficora — Reading the rhythms of the brain', description: 'Brain–computer interfaces, neural rhythms and the mathematics of time. Explore the science with Ficora.' },
  brand: { name: 'Ficora', descriptor: 'Neural interfaces' },
  nav: { platform: 'Approach', science: 'Signal lab', applications: 'Applications', clinical: 'Research notes', cta: 'Let’s talk' },
  language: 'Language', theme: 'Theme', menu: 'Open menu', closeMenu: 'Close menu', skipToContent: 'Skip to content', navLabel: 'Main navigation',
  hero: {
    eyebrow: 'BRAIN–COMPUTER INTERFACES', titleA: 'The brain has a rhythm.', titleB: 'We’re listening.',
    description: 'Between a thought and an action, there is a signal. We explore how neural rhythms become a language for human–machine interaction.',
    primary: 'Explore the signal', secondary: 'Our approach', figure: 'A universe of neural rhythms',
    note: 'A closer look at the signals that connect us.', diagram: 'An artistic spiral galaxy with neural connections, amplitude, frequency and phase annotations, and synthetic signal traces.',
    topView: 'NEURAL CONSTELLATION', motor: 'RHYTHMS IN CONNECTION', signal: 'SYNTHETIC EEG', caption: 'Galaxy / neural rhythm concept study',
    disciplines: ['Neuroscience', 'Time-series analysis', 'Periodic mathematics'], scroll: 'SCROLL TO EXPLORE',
  },
  approach: {
    eyebrow: '01 / THE APPROACH', title: 'Start with the signal.', description: 'An interface begins with understanding what the brain is doing — and what a measurement can actually tell us.',
    items: [
      { title: 'Observe', sub: 'The neural substrate', body: 'Scalp EEG reflects the summed activity of neuronal populations. Electrode position, reference and artifacts shape every recording.', meta: 'EEG · 10–20 SYSTEM' },
      { title: 'Resolve', sub: 'The temporal structure', body: 'Window the signal, examine its spectrum and follow changes in power over time. A rhythm is useful only in the context of a task and a baseline.', meta: 'WINDOWING · SPECTRAL POWER' },
      { title: 'Connect', sub: 'The feedback loop', body: 'Motor imagery can modulate sensorimotor rhythms. A BCI translates task-related features into feedback, followed by calibration and validation.', meta: 'MOTOR IMAGERY · FEEDBACK' },
    ],
  },
  lab: {
    eyebrow: '02 / THE SIGNAL LAB', title: 'One signal. Many perspectives.', description: 'Change a rhythm. Watch its waveform, spectral peak and phase evolve together. A small experiment in the mathematics behind a neural interface.',
    kicker: 'INTERACTIVE STUDY / 001', titleSmall: 'Anatomy of a rhythm', simulated: 'SYNTHETIC SIGNAL',
    bands: ['Theta', 'Alpha / Mu', 'Beta', 'Gamma'], bandNotes: ['4–8 Hz · Appears in many tasks, including memory studies.', '8–13 Hz · Alpha is often prominent posteriorly; mu rhythms are observed over sensorimotor areas.', '13–30 Hz · Sensorimotor beta power can change with movement and motor imagery.', '30–45 Hz shown · Higher-frequency scalp activity needs careful muscle-artifact control.'],
    time: 'Time domain', spectrum: 'Power spectrum', phase: 'Phase plane', amplitude: 'Amplitude', phaseControl: 'Phase offset', frequency: 'Frequency',
    reset: 'Reset study', play: 'Animate phase', pause: 'Pause phase', export: 'Export signal .csv',
    window: 'Hann window', samples: 'samples', resolution: 'bin spacing', peak: 'Spectral peak', power: 'Power',
    caption: 'A 2 s, 256 Hz synthetic trace with a weaker second harmonic. The spectrum uses a Hann-windowed DFT; phase changes the waveform, while the power distribution is largely preserved.',
    figure: 'Waveform, power spectrum and phase-plane diagram calculated from the current controls.',
  },
  mathematics: {
    eyebrow: '03 / PERIODIC MATHEMATICS', title: 'A different lens on repetition.', intro: 'Amplitude. Frequency. Phase. Three coordinates for describing an oscillation — and a starting point for studying how rhythms combine.',
    formulaLabel: 'COMPLEX OSCILLATORY REPRESENTATION', terms: ['Amplitude', 'Angular frequency', 'Initial phase'],
    body: 'Eloy Kim’s Periodicity research programme develops a framework around epicycle families and relationships between periodic structures. Here, rotating vectors make the connection between a complex oscillation and its time-domain projection visible.',
    distinction: 'The interactive study uses standard signal analysis. The broader Periodicity framework is a research perspective; its application to BCI needs experimental evaluation.',
    link: 'Read the Periodicity research', figure: 'Two rotating vectors, one composite trajectory.',
  },
  applications: {
    eyebrow: '04 / POSSIBLE DIRECTIONS', title: 'Keep the human in the loop.', description: 'Different goals call for different experiments. These are research directions, each requiring its own evaluation.',
    items: [
      { title: 'Motor rehabilitation', tag: '01 / SENSORIMOTOR', body: 'Study task-related mu and beta desynchronisation to inform feedback during imagined or attempted movement.' },
      { title: 'Assistive interaction', tag: '02 / COMMUNICATION', body: 'Explore motor imagery and evoked responses as inputs for selection and communication interfaces.' },
      { title: 'Neural rhythm research', tag: '03 / INVESTIGATION', body: 'Compare spectral features, phase relationships and changes over time with reproducible analysis protocols.' },
    ],
  },
  notes: {
    eyebrow: '05 / THE RESEARCH NOTEBOOK', title: 'Good questions need clear references.',
    items: [
      { category: 'NEUROSCIENCE', title: 'Event-related synchronisation & desynchronisation', detail: 'Pfurtscheller & Lopes da Silva · 1999', description: 'A foundation for understanding task-related changes in EEG power.' },
      { category: 'TIME-SERIES METHODS', title: 'From samples to spectral estimates', detail: 'SciPy · Signal processing documentation', description: 'Windowing, normalisation and the assumptions behind a periodogram.' },
      { category: 'PERIODIC MATHEMATICS', title: 'Periodicity: a research programme', detail: 'Eloy Kim · Open research repository', description: 'Epicycle families, periodic structures and the author’s distinction between results and research proposals.' },
    ],
  },
  cta: { eyebrow: 'LET’S COMPARE NOTES', title: 'What are you listening for?', description: 'Bring a research question, a signal or an interface idea. Let’s start a conversation.', primary: 'Get in touch', mailSubject: 'Ficora research enquiry' },
  footer: { tagline: 'Reading the rhythms of the brain.', explore: 'Explore', contact: 'Contact', platform: 'Approach', science: 'Signal lab', applications: 'Applications', clinical: 'Research notes', email: 'hello@ficora.com', location: 'Neuroscience / Signals / Interfaces', copyright: 'Ficora. All rights reserved.', backToTop: 'Back to top', note: 'Research concepts & illustrative signals. No clinical performance claims.' },
}

export type Messages = typeof en

const zh: Messages = {
  meta: { title: 'Ficora — 读懂大脑的节律', description: '从神经节律、时序分析到周期数学，探索脑机接口背后的科学。' },
  brand: { name: 'Ficora', descriptor: '脑机接口研究' },
  nav: { platform: '研究方法', science: '信号实验室', applications: '应用方向', clinical: '研究笔记', cta: '交流合作' },
  language: '语言', theme: '主题', menu: '打开菜单', closeMenu: '关闭菜单', skipToContent: '跳至正文', navLabel: '主导航',
  hero: {
    eyebrow: 'BRAIN–COMPUTER INTERFACES / 脑机接口', titleA: '大脑自有节律。', titleB: '我们用心聆听。',
    description: '从一个念头，到一次行动，其间有信号流动。我们研究神经节律，探索人与机器之间新的交互语言。',
    primary: '进入信号实验室', secondary: '了解研究方法', figure: '神经节律，宛若星河', note: '从可观测的信号，理解更细微的连接。',
    diagram: '以星河隐喻神经连接的艺术图形，标注振幅、频率与相位，下方展示合成信号。', topView: '神经星图 / 概念', motor: '节律之间，万千连接', signal: '合成脑电信号', caption: '星河与神经节律 · 概念图',
    disciplines: ['神经科学', '时间序列分析', '周期数学'], scroll: '向下探索',
  },
  approach: {
    eyebrow: '01 / 研究方法', title: '从信号本身出发。', description: '理解大脑正在做什么，也理解一次测量究竟能告诉我们什么。这是建立脑机接口的起点。',
    items: [
      { title: '观测', sub: '神经活动的可测表达', body: '头皮脑电反映神经元群体活动的叠加。电极位置、参考方式与眼电、肌电伪迹，共同影响每一次记录。', meta: 'EEG · 10–20 电极系统' },
      { title: '解析', sub: '藏在时间中的结构', body: '对信号加窗、分析频谱，并追踪功率随时间的变化。将节律放回任务与基线的语境中，才能理解其意义。', meta: '时间窗 · 频谱功率' },
      { title: '连接', sub: '形成可校准的反馈', body: '运动想象可以调制感觉运动节律。脑机接口将任务相关特征转化为反馈，再通过个体校准与独立验证检验效果。', meta: '运动想象 · 闭环反馈' },
    ],
  },
  lab: {
    eyebrow: '02 / 信号实验室', title: '一个信号，多个观察维度。', description: '调整一种节律，观察波形、频谱峰值与相位如何相互对应。亲手做一次小实验，理解脑机接口背后的数学。',
    kicker: '交互研究 / 001', titleSmall: '解剖一段节律', simulated: '合成信号演示', bands: ['Theta 节律', 'Alpha / Mu', 'Beta 节律', 'Gamma 节律'],
    bandNotes: ['4–8 Hz · 出现在多类任务中，包括记忆相关研究。', '8–13 Hz · Alpha 常见于后部脑区；感觉运动区可观察到 mu 节律。', '13–30 Hz · 感觉运动区 beta 功率可随运动及运动想象发生变化。', '此处展示 30–45 Hz · 分析高频头皮信号时，需谨慎排除肌电污染。'],
    time: '时域波形', spectrum: '功率谱', phase: '相位平面', amplitude: '振幅', phaseControl: '初始相位', frequency: '频率', reset: '重置实验', play: '播放相位变化', pause: '暂停相位变化', export: '导出信号 .csv',
    window: 'Hann 窗', samples: '采样点', resolution: '频点间隔', peak: '频谱峰值', power: '功率',
    caption: '示例为 2 秒、256 Hz 采样的合成信号，含较弱的二次谐波。功率谱由 Hann 加窗后的离散傅里叶变换计算；相位改变波形，功率分布则基本保持。',
    figure: '根据当前参数计算的时域波形、功率谱和相位平面图。',
  },
  mathematics: {
    eyebrow: '03 / 周期数学', title: '换一个视角，理解往复。', intro: '振幅、频率、相位。描述一次振荡的三个坐标，也是探索节律如何叠加的起点。', formulaLabel: '复数振荡表示', terms: ['振幅', '角频率', '初始相位'],
    body: 'Eloy Kim 的 Periodicity 研究纲领以周期圆族为出发点，讨论不同周期结构之间的关系。这里用旋转向量展示复数振荡，以及它向时域信号的投影。',
    distinction: '交互实验采用常规信号分析方法。Periodicity 的更广泛框架提供一种研究视角，其在脑机接口中的适用性仍需实验检验。',
    link: '阅读 Periodicity 原始研究', figure: '两个旋转向量，一条合成轨迹。',
  },
  applications: {
    eyebrow: '04 / 应用方向', title: '让人的参与始终在环。', description: '不同的目标，需要不同的实验。以下方向各自需要独立的研究设计与效果评估。',
    items: [
      { title: '运动康复研究', tag: '01 / 感觉运动', body: '研究运动想象或尝试运动时 mu 与 beta 节律的去同步化，为反馈设计提供依据。' },
      { title: '辅助交互', tag: '02 / 沟通表达', body: '探索运动想象及诱发反应作为选择、沟通与辅助操作界面的输入。' },
      { title: '神经节律研究', tag: '03 / 科学探索', body: '通过可复现的分析流程，比较频谱特征、相位关系及它们随时间的变化。' },
    ],
  },
  notes: {
    eyebrow: '05 / 研究笔记', title: '好的问题，需要清晰的出处。',
    items: [
      { category: '神经科学', title: '事件相关同步与去同步', detail: 'Pfurtscheller & Lopes da Silva · 1999', description: '理解任务相关脑电功率变化的一项基础研究。' },
      { category: '时序分析方法', title: '从采样点到频谱估计', detail: 'SciPy · 信号处理文档', description: '了解周期图中的加窗、归一化与基本假设。' },
      { category: '周期数学', title: 'Periodicity：一项研究纲领', detail: 'Eloy Kim · 开放研究仓库', description: '周期圆族、周期结构，以及作者对已证结果与研究构想的区分。' },
    ],
  },
  cta: { eyebrow: '一起交换研究笔记', title: '你想听见什么？', description: '一个研究问题、一段信号，或一种交互设想。让我们从这里开始交流。', primary: '联系 Ficora', mailSubject: 'Ficora 研究合作咨询' },
  footer: { tagline: '读懂大脑的节律。', explore: '探索', contact: '联系', platform: '研究方法', science: '信号实验室', applications: '应用方向', clinical: '研究笔记', email: 'hello@ficora.com', location: '神经科学 / 信号 / 交互', copyright: 'Ficora. 保留所有权利。', backToTop: '返回顶部', note: '研究概念与信号示意，不代表临床性能。' },
}

const ja: Messages = {
  meta: { title: 'Ficora — 脳のリズムを読み解く', description: '神経リズム、時系列解析、周期数学から脳とコンピュータの接点を探ります。' },
  brand: { name: 'Ficora', descriptor: 'ニューラルインターフェース' },
  nav: { platform: '研究手法', science: '信号ラボ', applications: '応用分野', clinical: '研究ノート', cta: 'お問い合わせ' },
  language: '言語', theme: 'テーマ', menu: 'メニューを開く', closeMenu: 'メニューを閉じる', skipToContent: '本文へ', navLabel: 'ナビゲーション',
  hero: { eyebrow: 'BRAIN–COMPUTER INTERFACES', titleA: '脳にはリズムがある。', titleB: 'その声を聴く。', description: '思考から行動へ。その間には信号があります。神経リズムを通じ、人と機械の新たな対話を探ります。', primary: '信号を探る', secondary: '研究手法', figure: '神経リズムの星図', note: '人をつなぐ信号を、より近くから。', diagram: '銀河と神経接続を重ねた概念図。振幅・周波数・位相と合成信号を表示。', topView: '神経の星図 / 概念', motor: 'つながるリズム', signal: '合成脳波', caption: '銀河と神経リズム · 概念図', disciplines: ['神経科学', '時系列解析', '周期数学'], scroll: '下へスクロール' },
  approach: { eyebrow: '01 / 研究手法', title: '信号そのものから始める。', description: '脳の活動と、測定から実際に何がわかるのか。その理解がインターフェースの出発点です。', items: [
    { title: '観測する', sub: '神経活動の測定', body: '頭皮脳波は神経細胞集団の活動を反映します。電極位置、基準電極、眼電・筋電の影響を考慮します。', meta: 'EEG · 10–20 法' },
    { title: '解析する', sub: '時間の中の構造', body: '窓関数とスペクトルから、パワーの時間変化を調べます。リズムは課題と基準状態の文脈で解釈します。', meta: '窓関数 · スペクトルパワー' },
    { title: 'つなぐ', sub: 'フィードバックループ', body: '運動想像は感覚運動リズムを変調し得ます。課題に関連する特徴をフィードバックへ変換し、校正と検証を行います。', meta: '運動想像 · フィードバック' },
  ] },
  lab: { eyebrow: '02 / 信号ラボ', title: 'ひとつの信号、多様な視点。', description: 'リズムを変え、波形、周波数ピーク、位相の関係を観察しましょう。神経インターフェースの数学を体験する小さな実験です。', kicker: 'インタラクティブ研究 / 001', titleSmall: 'リズムを読み解く', simulated: '合成信号', bands: ['シータ', 'アルファ / ミュー', 'ベータ', 'ガンマ'], bandNotes: ['4–8 Hz · 記憶研究など多様な課題で見られます。', '8–13 Hz · 後部のアルファと感覚運動領域のミューは区別されます。', '13–30 Hz · 運動や運動想像に伴いパワーが変化し得ます。', '表示範囲 30–45 Hz · 筋電混入の慎重な管理が必要です。'], time: '時間波形', spectrum: 'パワースペクトル', phase: '位相平面', amplitude: '振幅', phaseControl: '初期位相', frequency: '周波数', reset: 'リセット', play: '位相を再生', pause: '位相を停止', export: '信号を出力 .csv', window: 'Hann 窓', samples: 'サンプル', resolution: '周波数間隔', peak: 'ピーク周波数', power: 'パワー', caption: '2 秒、256 Hz の合成信号に弱い第2高調波を加えています。Hann 窓付き DFT で計算。位相は波形を変えますが、パワー分布は概ね保たれます。', figure: '現在の設定から計算した波形、スペクトル、位相平面。' },
  mathematics: { eyebrow: '03 / 周期数学', title: '繰り返しを、別の視点から。', intro: '振幅、周波数、位相。振動を記述する3つの座標から、リズムの合成を考えます。', formulaLabel: '複素振動の表現', terms: ['振幅', '角周波数', '初期位相'], body: 'Eloy Kim の Periodicity 研究計画は、周転円の族と周期構造の関係を探ります。回転ベクトルで複素振動と時間波形への射影を可視化します。', distinction: '実験には標準的な信号解析を使用。Periodicity の広い枠組みを BCI に応用するには実験的な評価が必要です。', link: 'Periodicity の原資料', figure: '2つの回転ベクトル、ひとつの合成軌跡。' },
  applications: { eyebrow: '04 / 応用分野', title: '人が参加するループへ。', description: '目的ごとに異なる実験と評価が必要です。以下は研究の方向性です。', items: [
    { title: '運動リハビリ研究', tag: '01 / 感覚運動', body: '運動想像や運動企図時のミュー・ベータ脱同期を調べ、フィードバックに役立てます。' },
    { title: '支援的な対話', tag: '02 / コミュニケーション', body: '運動想像や誘発反応を、選択・意思伝達インターフェースの入力として探ります。' },
    { title: '神経リズム研究', tag: '03 / 探究', body: '再現可能な手順でスペクトル特徴、位相関係、時間変化を比較します。' },
  ] },
  notes: { eyebrow: '05 / 研究ノート', title: 'よい問いには、明確な出典を。', items: [
    { category: '神経科学', title: '事象関連同期と脱同期', detail: 'Pfurtscheller & Lopes da Silva · 1999', description: '課題に関連した脳波パワー変化を理解する基礎研究。' },
    { category: '時系列解析', title: 'サンプルからスペクトルへ', detail: 'SciPy · 信号処理ドキュメント', description: '周期図の窓関数、正規化、基本的な仮定。' },
    { category: '周期数学', title: 'Periodicity：研究計画', detail: 'Eloy Kim · 公開研究リポジトリ', description: '周転円の族、周期構造、証明と研究提案の区別。' },
  ] },
  cta: { eyebrow: '研究ノートを交換しましょう', title: '何を聴きたいですか。', description: '研究課題、信号、インターフェースのアイデアから対話を始めましょう。', primary: 'お問い合わせ', mailSubject: 'Ficora 研究のお問い合わせ' },
  footer: { tagline: '脳のリズムを読み解く。', explore: '探索', contact: '連絡先', platform: '研究手法', science: '信号ラボ', applications: '応用分野', clinical: '研究ノート', email: 'hello@ficora.com', location: '神経科学 / 信号 / 対話', copyright: 'Ficora. All rights reserved.', backToTop: 'ページ上部へ', note: '研究概念と合成信号。臨床性能を示すものではありません。' },
}

const es: Messages = {
  meta: { title: 'Ficora — Leer los ritmos del cerebro', description: 'Interfaces cerebro–ordenador, ritmos neuronales y matemáticas del tiempo.' }, brand: { name: 'Ficora', descriptor: 'Interfaces neuronales' },
  nav: { platform: 'Enfoque', science: 'Laboratorio', applications: 'Aplicaciones', clinical: 'Notas', cta: 'Hablemos' }, language: 'Idioma', theme: 'Tema', menu: 'Abrir menú', closeMenu: 'Cerrar menú', skipToContent: 'Ir al contenido', navLabel: 'Navegación principal',
  hero: { eyebrow: 'INTERFACES CEREBRO–ORDENADOR', titleA: 'El cerebro tiene un ritmo.', titleB: 'Lo escuchamos.', description: 'Entre un pensamiento y una acción hay una señal. Exploramos cómo los ritmos neuronales se convierten en un lenguaje de interacción.', primary: 'Explorar la señal', secondary: 'Nuestro enfoque', figure: 'Un universo de ritmos neuronales', note: 'Una mirada cercana a las señales que nos conectan.', diagram: 'Galaxia artística con conexiones neuronales, amplitud, frecuencia y fase, y señales sintéticas.', topView: 'CONSTELACIÓN NEURONAL', motor: 'RITMOS EN CONEXIÓN', signal: 'EEG SINTÉTICO', caption: 'Galaxia y ritmos neuronales · concepto', disciplines: ['Neurociencia', 'Series temporales', 'Matemática periódica'], scroll: 'EXPLORAR' },
  approach: { eyebrow: '01 / EL ENFOQUE', title: 'Empezar por la señal.', description: 'Comprender la actividad cerebral y lo que una medición realmente puede decirnos es el punto de partida.', items: [
    { title: 'Observar', sub: 'El sustrato neuronal', body: 'El EEG refleja la actividad de poblaciones neuronales. La posición, la referencia y los artefactos influyen en cada registro.', meta: 'EEG · SISTEMA 10–20' },
    { title: 'Resolver', sub: 'La estructura temporal', body: 'Aplicamos ventanas y estudiamos el espectro y su evolución. Interpretamos cada ritmo en relación con una tarea y una línea base.', meta: 'VENTANAS · POTENCIA ESPECTRAL' },
    { title: 'Conectar', sub: 'El bucle de retroalimentación', body: 'La imaginación motora puede modular ritmos sensoriomotores. Una BCI traduce características de la tarea en feedback y requiere calibración y validación.', meta: 'IMAGINACIÓN MOTORA · FEEDBACK' },
  ] },
  lab: { eyebrow: '02 / LABORATORIO DE SEÑALES', title: 'Una señal. Muchas perspectivas.', description: 'Cambia un ritmo y observa su onda, su pico espectral y su fase. Un pequeño experimento con las matemáticas de una interfaz neuronal.', kicker: 'ESTUDIO INTERACTIVO / 001', titleSmall: 'Anatomía de un ritmo', simulated: 'SEÑAL SINTÉTICA', bands: ['Theta', 'Alfa / Mu', 'Beta', 'Gamma'], bandNotes: ['4–8 Hz · Presente en distintas tareas, incluidos estudios de memoria.', '8–13 Hz · Alfa suele ser posterior; mu se observa en áreas sensoriomotoras.', '13–30 Hz · La potencia beta puede cambiar con el movimiento y la imaginación motora.', '30–45 Hz aquí · Es necesario controlar los artefactos musculares.'], time: 'Dominio temporal', spectrum: 'Espectro de potencia', phase: 'Plano de fase', amplitude: 'Amplitud', phaseControl: 'Fase inicial', frequency: 'Frecuencia', reset: 'Reiniciar', play: 'Animar fase', pause: 'Pausar fase', export: 'Exportar señal .csv', window: 'Ventana Hann', samples: 'muestras', resolution: 'intervalo espectral', peak: 'Pico espectral', power: 'Potencia', caption: 'Señal sintética de 2 s a 256 Hz con un segundo armónico débil. Espectro calculado mediante DFT con ventana Hann. La fase cambia la onda y conserva aproximadamente la distribución de potencia.', figure: 'Onda, espectro y plano de fase calculados a partir de los controles.' },
  mathematics: { eyebrow: '03 / MATEMÁTICA PERIÓDICA', title: 'Otra mirada a la repetición.', intro: 'Amplitud, frecuencia y fase. Tres coordenadas para describir una oscilación y estudiar cómo se combinan los ritmos.', formulaLabel: 'REPRESENTACIÓN OSCILATORIA COMPLEJA', terms: ['Amplitud', 'Frecuencia angular', 'Fase inicial'], body: 'El programa Periodicity de Eloy Kim explora familias de epiciclos y relaciones entre estructuras periódicas. Los vectores rotatorios muestran la conexión entre una oscilación compleja y su proyección temporal.', distinction: 'El experimento utiliza análisis de señales estándar. El marco amplio de Periodicity es una perspectiva de investigación; su aplicación a BCI necesita evaluación experimental.', link: 'Leer la investigación Periodicity', figure: 'Dos vectores rotatorios, una trayectoria compuesta.' },
  applications: { eyebrow: '04 / POSIBLES DIRECCIONES', title: 'La persona, dentro del bucle.', description: 'Cada objetivo requiere sus propios experimentos y evaluación. Estas son líneas de investigación.', items: [
    { title: 'Rehabilitación motora', tag: '01 / SENSORIOMOTOR', body: 'Estudiar la desincronización mu y beta para orientar el feedback durante movimientos imaginados o intentados.' },
    { title: 'Interacción asistida', tag: '02 / COMUNICACIÓN', body: 'Explorar imaginación motora y respuestas evocadas para interfaces de selección y comunicación.' },
    { title: 'Ritmos neuronales', tag: '03 / INVESTIGACIÓN', body: 'Comparar características espectrales, relaciones de fase y cambios temporales con protocolos reproducibles.' },
  ] },
  notes: { eyebrow: '05 / CUADERNO DE INVESTIGACIÓN', title: 'Buenas preguntas, referencias claras.', items: [
    { category: 'NEUROCIENCIA', title: 'Sincronización y desincronización relacionadas con eventos', detail: 'Pfurtscheller & Lopes da Silva · 1999', description: 'Una base para interpretar cambios de potencia EEG ligados a tareas.' },
    { category: 'SERIES TEMPORALES', title: 'De las muestras al espectro', detail: 'SciPy · Documentación de señales', description: 'Ventanas, normalización y supuestos de un periodograma.' },
    { category: 'MATEMÁTICA PERIÓDICA', title: 'Periodicity: un programa de investigación', detail: 'Eloy Kim · Repositorio abierto', description: 'Epiciclos, estructuras periódicas y distinción entre resultados y propuestas.' },
  ] },
  cta: { eyebrow: 'INTERCAMBIEMOS NOTAS', title: '¿Qué estás escuchando?', description: 'Una pregunta, una señal o una idea de interfaz. Empecemos una conversación.', primary: 'Contactar', mailSubject: 'Consulta de investigación Ficora' },
  footer: { tagline: 'Leer los ritmos del cerebro.', explore: 'Explorar', contact: 'Contacto', platform: 'Enfoque', science: 'Laboratorio', applications: 'Aplicaciones', clinical: 'Notas', email: 'hello@ficora.com', location: 'Neurociencia / Señales / Interfaces', copyright: 'Ficora. Todos los derechos reservados.', backToTop: 'Volver arriba', note: 'Conceptos de investigación y señales ilustrativas. Sin afirmaciones de rendimiento clínico.' },
}

const fr: Messages = {
  meta: { title: 'Ficora — Lire les rythmes du cerveau', description: 'Interfaces cerveau–machine, rythmes neuronaux et mathématiques du temps.' }, brand: { name: 'Ficora', descriptor: 'Interfaces neuronales' },
  nav: { platform: 'Approche', science: 'Laboratoire', applications: 'Applications', clinical: 'Notes', cta: 'Échangeons' }, language: 'Langue', theme: 'Thème', menu: 'Ouvrir le menu', closeMenu: 'Fermer le menu', skipToContent: 'Aller au contenu', navLabel: 'Navigation principale',
  hero: { eyebrow: 'INTERFACES CERVEAU–MACHINE', titleA: 'Le cerveau a un rythme.', titleB: 'Nous l’écoutons.', description: 'Entre une pensée et une action, il y a un signal. Nous explorons comment les rythmes neuronaux deviennent un langage d’interaction.', primary: 'Explorer le signal', secondary: 'Notre approche', figure: 'Un univers de rythmes neuronaux', note: 'Observer de plus près les signaux qui nous relient.', diagram: 'Galaxie artistique, connexions neuronales, amplitude, fréquence et phase, avec signaux synthétiques.', topView: 'CONSTELLATION NEURONALE', motor: 'RYTHMES EN CONNEXION', signal: 'EEG SYNTHÉTIQUE', caption: 'Galaxie et rythmes neuronaux · concept', disciplines: ['Neurosciences', 'Séries temporelles', 'Mathématiques périodiques'], scroll: 'EXPLORER' },
  approach: { eyebrow: '01 / NOTRE APPROCHE', title: 'Partir du signal.', description: 'Comprendre l’activité cérébrale et ce qu’une mesure peut réellement nous apprendre : le point de départ d’une interface.', items: [
    { title: 'Observer', sub: 'Le substrat neuronal', body: 'L’EEG reflète l’activité de populations neuronales. La position des électrodes, la référence et les artéfacts influencent chaque enregistrement.', meta: 'EEG · SYSTÈME 10–20' },
    { title: 'Analyser', sub: 'La structure temporelle', body: 'Fenêtrer le signal et suivre la puissance spectrale dans le temps. Chaque rythme s’interprète dans le contexte d’une tâche et d’une référence.', meta: 'FENÊTRAGE · PUISSANCE SPECTRALE' },
    { title: 'Relier', sub: 'La boucle de retour', body: 'L’imagerie motrice peut moduler les rythmes sensorimoteurs. Une BCI transforme des caractéristiques liées à la tâche en retour, puis nécessite calibration et validation.', meta: 'IMAGERIE MOTRICE · RETOUR' },
  ] },
  lab: { eyebrow: '02 / LE LABORATOIRE', title: 'Un signal. Plusieurs perspectives.', description: 'Modifiez un rythme. Observez ensemble sa forme, son pic spectral et sa phase. Une petite expérience des mathématiques d’une interface neuronale.', kicker: 'ÉTUDE INTERACTIVE / 001', titleSmall: 'Anatomie d’un rythme', simulated: 'SIGNAL SYNTHÉTIQUE', bands: ['Thêta', 'Alpha / Mu', 'Bêta', 'Gamma'], bandNotes: ['4–8 Hz · Observé dans diverses tâches, notamment les études de mémoire.', '8–13 Hz · Alpha est souvent postérieur ; mu est observé en région sensorimotrice.', '13–30 Hz · La puissance bêta peut varier avec le mouvement et l’imagerie motrice.', '30–45 Hz ici · Le contrôle des artéfacts musculaires est essentiel.'], time: 'Domaine temporel', spectrum: 'Spectre de puissance', phase: 'Plan de phase', amplitude: 'Amplitude', phaseControl: 'Phase initiale', frequency: 'Fréquence', reset: 'Réinitialiser', play: 'Animer la phase', pause: 'Arrêter la phase', export: 'Exporter le signal .csv', window: 'Fenêtre Hann', samples: 'échantillons', resolution: 'pas fréquentiel', peak: 'Pic spectral', power: 'Puissance', caption: 'Signal synthétique de 2 s à 256 Hz avec une faible deuxième harmonique. Spectre par DFT et fenêtre Hann. La phase modifie la forme, la distribution de puissance reste presque identique.', figure: 'Forme d’onde, spectre et plan de phase calculés depuis les réglages.' },
  mathematics: { eyebrow: '03 / MATHÉMATIQUES PÉRIODIQUES', title: 'Un autre regard sur la répétition.', intro: 'Amplitude, fréquence, phase. Trois coordonnées pour décrire une oscillation et étudier la combinaison des rythmes.', formulaLabel: 'REPRÉSENTATION OSCILLATOIRE COMPLEXE', terms: ['Amplitude', 'Pulsation', 'Phase initiale'], body: 'Le programme Periodicity d’Eloy Kim explore les familles d’épicycles et les relations entre structures périodiques. Les vecteurs tournants relient une oscillation complexe à sa projection temporelle.', distinction: 'L’expérience utilise l’analyse classique du signal. Le cadre général de Periodicity est une perspective de recherche ; son application aux BCI nécessite une évaluation expérimentale.', link: 'Lire la recherche Periodicity', figure: 'Deux vecteurs tournants, une trajectoire composée.' },
  applications: { eyebrow: '04 / PISTES D’APPLICATION', title: 'Garder l’humain dans la boucle.', description: 'Chaque objectif exige ses propres expériences et évaluations. Voici des pistes de recherche.', items: [
    { title: 'Rééducation motrice', tag: '01 / SENSORIMOTEUR', body: 'Étudier la désynchronisation mu et bêta pour guider le retour pendant les mouvements imaginés ou tentés.' },
    { title: 'Interaction assistée', tag: '02 / COMMUNICATION', body: 'Explorer l’imagerie motrice et les réponses évoquées comme entrées d’interfaces de sélection et de communication.' },
    { title: 'Rythmes neuronaux', tag: '03 / INVESTIGATION', body: 'Comparer les caractéristiques spectrales, les phases et leurs évolutions avec des protocoles reproductibles.' },
  ] },
  notes: { eyebrow: '05 / CARNET DE RECHERCHE', title: 'De bonnes questions, des sources claires.', items: [
    { category: 'NEUROSCIENCES', title: 'Synchronisation et désynchronisation événementielles', detail: 'Pfurtscheller & Lopes da Silva · 1999', description: 'Une base pour interpréter les variations de puissance EEG liées aux tâches.' },
    { category: 'SÉRIES TEMPORELLES', title: 'Des échantillons aux estimations spectrales', detail: 'SciPy · Documentation du signal', description: 'Fenêtrage, normalisation et hypothèses du périodogramme.' },
    { category: 'MATHÉMATIQUES PÉRIODIQUES', title: 'Periodicity : un programme de recherche', detail: 'Eloy Kim · Dépôt ouvert', description: 'Épicycles, structures périodiques, distinction entre résultats et propositions.' },
  ] },
  cta: { eyebrow: 'COMPARONS NOS NOTES', title: 'Qu’écoutez-vous ?', description: 'Une question de recherche, un signal ou une idée d’interface. Ouvrons la conversation.', primary: 'Nous contacter', mailSubject: 'Demande de recherche Ficora' },
  footer: { tagline: 'Lire les rythmes du cerveau.', explore: 'Explorer', contact: 'Contact', platform: 'Approche', science: 'Laboratoire', applications: 'Applications', clinical: 'Notes', email: 'hello@ficora.com', location: 'Neurosciences / Signaux / Interfaces', copyright: 'Ficora. Tous droits réservés.', backToTop: 'Retour en haut', note: 'Concepts de recherche et signaux illustratifs. Aucune revendication de performance clinique.' },
}

export const messages: Record<Locale, Messages> = { 'en-US': en, 'zh-CN': zh, 'ja-JP': ja, 'es-ES': es, 'fr-FR': fr }
