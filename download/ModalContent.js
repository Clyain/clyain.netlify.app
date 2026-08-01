const modalConfigs = {
    'modal-1': {
        title: 'EPNC-超强数值计算器 Ver.3.0.0',
        content: `
            <div class="label-group"> <div class="label" style="border: 1px solid #e54646; background-color: #e99f9f;">不进行维护</div> </div>
            <p class="modal-desc">欢迎来到代数的世界！<br>这里是EPNC-超强数值计算器，共16578积木（底层引擎约3624积木）。<br>它可以为您计算复杂的代数式。除键盘和少部分角色外，其他均由纯画笔绘制。</p>
            <div class="modal-features">
                <h4>支持的运算符及函数：</h4>
                <ul>
                    <li>基础算术运算：+-*/×÷()^√!</li>
                    <li>三角函数运算：sin cos tan asin acos atan csc sec cot acsc asec acot sinh cosh tanh csch sech coth
                        asinh acosh atanh acsch asech acoth</li>
                    <li>统计、列表运算：len max min median mean total stdev stdevp random var cov covp gcd lcm mad prod sum
                        set</li>
                    <li>其他函数运算：log ln exp fact sqrt abs round ceil floor gamma lg sign mod</li>
                </ul>
                <h4>提示：</h4>
                <ul>
                    <li>若启用了语法栏，可以使用键盘左上角的\`~键来输入</li>
                </ul>
                <h4>致谢：</h4>
                <ul>
                    <li>odbopqo：B22四万字中文画笔字库PTE,纯画笔,汉字,韩语,日语,unicode</li>
                    <li>MzCity：HpP圆角矩形实心</li>
                    <li>?：快速圆角矩形填充(开源)</li>
                    <li>爱编程的小陈同学：进制转换</li>
                </ul>
                <h4>注意事项见"EPNC-ENGINE Ver.2.1.0"的详情页面。</h4>
            </div>
            `,
        footer: `
            <button class="basic-btn download-btn" data-file="EPNC-超强数值计算器 Ver.3.0.0.sb3"><span class="no-select">下载</span></button>
            <button class="basic-btn onlineplay-btn" onclick="window.location.href='../onlineplay/eptex/'">
                <span class="no-select">在线游玩</span>
                <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg>
            </button>
            <button class="basic-btn skip-btn" onclick="window.open('https://www.ccw.site/detail/67a0b136e77d7c09f357fccd?inviteCode=yZdDWDdLlJrxDSVj', '_blank')">
                <span class="no-select">跳转至共创世界</span>
                <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg>
            </button>
        `
    },
    'modal-2': {
        title: 'EPNC-ENGINE Ver.2.1.0',
        content: `
            <div class="label-group">
                <div class="label" style="border: 1px solid #e54646; background-color: #e99f9f;">不进行维护</div>
                <div class="label" style="border: 1px solid hsl(214, 75%, 59%); background-color: hsl(214, 63%, 77%);">引擎</div>
            </div>
            <p class="modal-desc">欢迎来到代数的世界！<br>这里是EPNC-超强数值计算器的计算引擎，共约3624积木。<br>它可以为您计算复杂的代数式。</p>
            <div class="modal-features">
                <h4>支持的运算符及函数：</h4>
                <ul>
                    <li>基础算术运算： +-*/×÷()^√!</li>
                    <li>三角函数运算：sin cos tan asin acos atan csc sec cot acsc asec acot sinh cosh tanh csch sech coth
                        asinh acosh atanh acsch asech acoth</li>
                    <li>统计、列表运算：len max min median mean total stdev stdevp random var cov covp gcd lcm mad prod sum
                        set</li>
                    <li>其他函数运算：log ln exp fact sqrt abs round ceil floor gamma lg sign mod</li>
                </ul>
                <h4>调用：</h4>
                <ul>
                    <li>使用积木块<code
                            class="inline">!!! \\< main \\ > 计算代数式[1+1] < >::custom blocks</code>来调用计算引擎，前一个输入项输入表达式，后一个输入项输入布尔值（成立表示使用角度制，不成立表示使用弧度制）。
                    </li>
                    <li>使用积木块<code class="inline">(!!! \\< main \\> 结果)</code>来调用计算结果。</li>
                </ul>
                <h4>表达式注意事项：</h4>
                <ul>
                    <li>计算引擎对于表达式的输入十分敏感，因此请严格遵守下列规则：</li>
                    <li>表示运算顺序只能使用小括号()。</li>
                    <li>所有的乘号一律不允许省略，如 b*sin(6) 不可以写为 bsin(6) ， a*b*c 不可以写为 abc 。</li>
                    <li>使用set函数定义字母的值，如set(x,5)表示设置x的值为5，或set(x,[5,6,7])表示设置x的值为列表(5,6,7)。同时也要注意，设置列表的值需要在第二个参数外面加上中括号。
                    </li>
                    <li>默认的变量有26个（小写英文字母），可以使用set函数自定义变量；在调用自定义变量时外面必须使用小括号包住。</li>
                    <li>下标运算（测试功能，有bug）语法：[a_1]，前面的a为列表名，后面的1为索引（当然这个不固定，可以是其他数字，或者是另一个下标来嵌套）；索引由1开始，负数索引为倒着数的项目。如a的值为(2,3,4)，则[a_1]为2，[a_a_1]为3，[a_-2]为3。
                    </li>
                    <li>除了上述说的“支持的运算符及函数-基础算数运算”与mod为双目运算符，其他均为单目运算符。</li>
                    <li>只有统计、列表运算允许输入多个参数。但是在输入时若在单目运算符的参数括号中再套一个括号则会报错。如len(1,2,3)=3，len((1,2,3))会报错。</li>
                    <li>gamma函数输入的参数范围为： -141.3 &lt input &lt 300，同时由于fact函数也调用此函数，因此输参范围也受影响。</li>
                    <li>求和、求积运算符语法：sum(a,0,10,[a])，（求积prod也一样）。第一项参数为下限字母，第二项参数为下限值，第三项参数为上限值，第四项参数为求和、求积的内容（一定要用中括号括起来）。
                    </li>
                    <li>√前为根指数，后为被开方数；mod为取余运算，7除以3的余数表示为7mod3，如果输入参数为字母需要为字母添加括号。</li>
                    <li>random的输入参数可以是两个，也可以无输入（获取0至1之间的小数）。</li>
                </ul>
            </div>
        `,
        footer: `
        <button class="basic-btn download-btn" data-file="EPNC-ENGINE Ver.2.1.0.sb3"><span class="no-select">下载</span></button>
        `
    },
    'modal-3': {
        title: 'EPTeX Ver.0.6.7',
        content: `
            <div class="label-group">
                <div class="label" style="border: 1px solid hsl(185, 75%, 59%); background-color: hsl(185, 63%, 77%);">最新！</div>
            </div>
            <p class="modal-desc">一个TeX编辑器，正常人一般用它来写数学公式<br>虽然没啥用（<br>支持渲染超多LaTeX能显示的公式，共约15008积木。</p>
            <div class="modal-features">
                <h4>致谢：</h4>
                <ul>
                    <li>odbopqo：B22四万字中文画笔字库PTE,纯画笔,汉字,韩语,日语,unicode</li>
                </ul>
                <h4>直接使用即可；调用请见"EPTeX-ENGINE Ver.0.7.0"的详情页面。</h4>
            </div>
        `,
        footer: `
            <button class="basic-btn download-btn" data-file="EPTeX Ver.0.6.7.sb3"><span class="no-select">下载</span></button>
            <button class="basic-btn onlineplay-btn" onclick="window.location.href='../onlineplay/eptex/'">
                <span class="no-select">在线游玩</span>
                <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg>
            </button>
            <button class="basic-btn skip-btn" onclick="window.open('https://www.ccw.site/detail/6989b65bf84f05669a033765?accessKey=6e9231&inviteCode=qlWZVEqDDhGCL9Cp', '_blank')">
                <span class="no-select">跳转至共创世界</span>
                <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg>
            </button>
        `
    },
    "modal-4": {
        title: 'EPTeX-ENGINE Ver.0.7.0',
        content: `
            <div class="label-group">
                <div class="label" style="border: 1px solid hsl(214, 75%, 59%); background-color: hsl(214, 63%, 77%);">引擎</div>
                <div class="label" style="border: 1px solid hsl(185, 75%, 59%); background-color: hsl(185, 63%, 77%);">最新！</div>
            </div>
            <p class="modal-desc">这里是EPTeX的渲染引擎，支持渲染超多LaTeX能显示的公式，共约8664积木。</p>
            <div class="modal-features">
                <h4>使用前言：</h4>
                <li>关于调用积木：<code class="inline">定义 !!TeX渲染(公式)(x)(y)(size)(color) &lt顶点为左上角？&gt &lt不显示方框？&gt &lt调试？&gt</code>
                </li>
                <ul>
                    <li>调用方法一：使用自制积木<code
                            class="inline">!!TeX渲染[] [] [] [] [] &lt &lt  &gt不成立 &gt &lt &gt &lt &lt  &gt不成立 &gt::custom blocks//第一个参数在此时不会被读取</code>，并通过列表<code
                            class="inline">(!TeX渲染列表::list)</code>进行公式编辑。注意：列表的每一项只能存一个字符或一项命令。</li>
                    <li>调用方法二（推荐）：使用自制积木<code
                            class="inline">!!TeX渲染[1+1] [] [] [] [] &lt &lt  &gt不成立 &gt &lt &gt &lt &gt::custom blocks</code>来渲染公式，使用#bs渲染原来应在列表中的空项（方框，若第二个布尔值参数为true则不显示方框）；
                    </li>
                </ul>
                <br>
                <li>大小写的字母可直接输入并允许正常识别；</li>
                <li>可以使用#{textcode}来代替在键盘上难以直接打出的符号（{textcode}应选取列表“#内容”中的列表项），同时你也可以自己更改里面的内容来显示字符。</li><br>
                <li>注：<br>
                1. #sum表示求和符号，#prod表示求积符号，#int表示求积分符号；<br>
                2. <b>由于使用到了obdopqo的PTE引擎，因此需要将<code class="inline">(font.mathit.字体::list)</code><code class="inline">(font.mathrm.字体::list)</code><code class="inline">(font.mathrm/mathit.字库索引::list)</code><code class="inline">(font.mathsf.字库索引::list)</code>这四个列表的内容提前导出并导入到你的项目中。</b>
                </li>
                <br>
                <h4>支持以下命令：</h4>
                <li>\\lsup \\rsup上标</li>
                <li>\\lsub \\rsub下标</li>
                <li>\\llar \\rlar 大文字（一般用于渲染求和、求积、积分之类的）</li>
                <li>\\lsr \\rsr 平方根</li>
                <li>\\labs \\rabs 绝对值</li>
                <li>\\lp \\rp 小括号</li>
                <li>\\ls \\rs 中括号</li>
                <li>\\lb \\rb 大括号</li>
                <li>\\langle \\rangle 角括号</li>
                <li>\\frnr \\frli \\frdr 分数（使用\\frnr \\frli框定分子文本，使用\\frli \\frdr框定分母文本，不能分离（指中间没有任何字符或命令隔开，下同））</li>
                <li>\\lceil \\rceil 向上取整</li>
                <li>\\lfloor \\rfloor 向下取整</li>
                <li>\\lol \\rol 上划线</li>
                <li>\\lul \\rul 下划线</li>
                <li>\\lnthr \\mnthr \\rnthr 开n次方（使用\\lnthr \\mnthr框定开方数（指数）的文本，使用\\mnthr \\rnthr框定被开方数的文本，不能分离）</li>
                <li>\\lou \\rou \\los \\ros 顶标（使用\\lou \\rou框定范围，使用\\los \\ros框定顶标文本，不能分离）</li>
                <li>\\lou \\rou \\lus \\rus 底标（使用\\lou \\rou框定范围，使用\\lus \\rus框定底标文本，不能分离）</li>
                <li>\\lit \\rit 斜体（嵌套不叠加效果，只作用于文本）</li>
                <li>\\lbo \\rbo 粗体（嵌套不叠加效果，只作用于文本）</li>
                <li>\\{colorcode} \\{colorcode}
                    更改颜色（1.{colorcode}应选取列表“可使用的颜色代码”中的列表项；2.不同颜色嵌套时遵循“就近原则”；3.不用在前面加上前缀“l”、“r”）</li>
                <li>\\{#hex} \\{#hex} 更改颜色为hex值（1.{#hex}为16进制颜色表达方式，输入时应写为\\#xxxxxx
                    \\#xxxxxx；2.不同颜色嵌套时遵循“就近原则”；3.不用在前面加上前缀“l”、“r”）</li>
                <li>默认为无衬线字体，使用\\lmathit \\rmathit将字体更换为数学斜体Italic（by SQY），使用\\lmathrm
                    \\rmathrm将字体更换为数学罗马体（常规体，Regular）（by SQY）；上述斜体、粗体、颜色效果均可作用于这三种字体，且同样地，不同字体嵌套时遵循“就近原则”；</li>
                <li>默认颜色可在源代码中的列表更改</li>
                <br>
                <li>注：顶底标混合，命令顺序为\\lou \\rou \\los \\ros \\lus \\rus；<br>上下标混合，命令顺序为\\lsup \\rsup \\lsub
                    \\rsub；<br>使用上述两种混合时原本两个不同命令间应不能分离<br>所有在\\lou \\rou里实现的效果，必须在这两个命令中写入，不能在外部包裹（如（错误示范）：\\lul \\lou
                    \\rou \\rul，（正确示范）： \\lou \\lul \\rul \\rou）</li>
                <br>
                <h4>目前已知可能会出现bug的地方（目前无法修复）：</h4>
                <li>上下标组合中多次嵌套上下标组合小部分情况会出现部分字符在竖直方向偏移的情况<br>【真是一个巨大的bug ／‵Д′)／~ ╧╧ 】</li>
            </div>
        `,
        footer: `
            <button class="basic-btn download-btn" data-file="EPTeX-ENGINE Ver.0.7.0.sb3"><span class="no-select">下载</span></button>
        
        `
    }
};