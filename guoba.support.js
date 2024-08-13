import Config from './components/Config.js'

// 支持锅巴
export function supportGuoba() {
    return {
        // 插件信息，将会显示在前端页面
        // 如果你的插件没有在插件库里，那么需要填上补充信息
        // 如果存在的话，那么填不填就无所谓了，填了就以你的信息为准
        pluginInfo: {
            name: 'phi-plugin',
            title: 'Phi-Plugin',
            author: '@Catrong',
            authorLink: 'https://github.com/Catrong',
            link: 'https://github.com/Catrong/phi-plugin',
            isV3: true,
            isV2: false,
            description: 'Phigros查分及娱乐插件',
            // 显示图标，此为个性化配置
            // 图标可在 https://icon-sets.iconify.design 这里进行搜索
            icon: 'icon-park-solid:pigeon',
            // 图标颜色，例：#FF0000 或 rgb(255, 0, 0)
            iconColor: '#000'
        },
        // 配置项信息
        configInfo: {
            // 配置项 schemas
            schemas: [
                {
                    label: '渲染设置',
                    component: 'Divider'
                },
                {
                    field: 'b19size',
                    label: '渲染体积',
                    helpMessage: '标准（100）值的宽度为900px，按照百分比进行缩放，图片越大渲染越慢',
                    bottomHelpMessage: '选择b19和update图片的渲染体积，以缩减渲染所需时间，太大可能会炸掉 Chromium ',
                    component: 'InputNumber',
                    required: true,
                    componentProps: {
                        min: 1,
                        max: 9999,
                        placeholder: '缩放百分比',
                    },
                },
                {
                    field: 'randerQuality',
                    label: '渲染质量',
                    bottomHelpMessage: '对所有的图片生效，设置渲染的质量',
                    component: 'InputNumber',
                    required: true,
                    componentProps: {
                        min: 1,
                        max: 100,
                        placeholder: '请输入渲染质量',
                    },
                },
                {
                    field: 'renderScale',
                    label: '渲染精度',
                    bottomHelpMessage: '对所有的图片生效，设置渲染精度',
                    component: 'InputNumber',
                    required: true,
                    componentProps: {
                        min: 50,
                        max: 200,
                        placeholder: '请输入渲染精度',
                    },
                },
                {
                    field: 'timeout',
                    label: '渲染超时时间',
                    bottomHelpMessage: '对所有的图片生效，超时后重启puppeteer，单位ms',
                    component: 'InputNumber',
                    required: true,
                    componentProps: {
                        min: 1000,
                        max: 120000,
                        placeholder: '请输入渲染超时时间',
                    },
                },
                {
                    field: 'waitingTimeout',
                    label: '等待超时时间',
                    bottomHelpMessage: '对所有的图片生效，单位ms',
                    component: 'InputNumber',
                    required: true,
                    componentProps: {
                        min: 1000,
                        max: 120000,
                        placeholder: '请输入等待超时时间',
                    },
                },
                {
                    field: 'renderNum',
                    label: '并行渲染数量',
                    bottomHelpMessage: '并行数量越多，占用的资源越多，建议谨慎修改，修改后重启生效',
                    component: 'InputNumber',
                    required: true,
                    componentProps: {
                        min: 1,
                        max: 10,
                        placeholder: '请输入并行渲染数量',
                    },
                },
                {
                    field: 'B19MaxNum',
                    label: 'B19最大限制',
                    bottomHelpMessage: '用户可以获取B19图片成绩的最大数量，建议不要太大',
                    component: 'InputNumber',
                    required: true,
                    componentProps: {
                        min: 22,
                        max: 1000,
                        placeholder: '请输入B19最大限制',
                    },
                },
                {
                    field: 'HistoryDayNum',
                    label: '历史成绩单日数量',
                    bottomHelpMessage: '/update 展现历史成绩的单日最大数量，至少为2',
                    component: 'InputNumber',
                    required: true,
                    componentProps: {
                        min: 2,
                        max: 10000,
                        placeholder: '请输入最大限制',
                    },
                },
                {
                    field: 'HistoryScoreNum',
                    label: '历史成绩展示数量',
                    bottomHelpMessage: '/update 展现历史成绩的最大数量',
                    component: 'InputNumber',
                    required: true,
                    componentProps: {
                        min: 10,
                        max: 10000,
                        placeholder: '请输入最大限制',
                    },
                },
                {
                    field: 'HistoryScoreDate',
                    label: '历史成绩展示天数',
                    bottomHelpMessage: '/update 展现历史成绩的最大天数',
                    component: 'InputNumber',
                    required: true,
                    componentProps: {
                        min: 1,
                        max: 100,
                        placeholder: '请输入最大限制',
                    },
                },
                {
                    label: '系统设置',
                    component: 'Divider'
                },
                {
                    field: 'isGuild',
                    label: '频道模式',
                    bottomHelpMessage: '开启后文字版仅限私聊，关闭文字版图片，文字版将折叠为一条消息',
                    component: 'Switch',
                },
                {
                    field: 'TapTapLoginQRcode',
                    label: '绑定二维码',
                    bottomHelpMessage: '登录TapTap绑定是否发送二维码，开启仅发送二维码，关闭直接发送链接',
                    component: 'Switch',
                },
                {
                    field: 'WordB19Img',
                    label: '文字版B19曲绘图片',
                    bottomHelpMessage: '关闭可大幅度提升发送速度',
                    component: 'Switch',
                },
                {
                    field: 'WordSuggImg',
                    label: 'Suggest曲绘图片',
                    bottomHelpMessage: '关闭可大幅度提升发送速度',
                    component: 'Switch',
                },
                {
                    field: 'cmdhead',
                    label: '命令头',
                    bottomHelpMessage: '命令正则匹配开头，不包含#/，支持正则表达式，\'\\\' 请双写( \\s --> \\\\s )，最外层可以不加括号',
                    component: 'Input',
                    required: false,
                    componentProps: {
                        placeholder: '请输入命令头',
                    },
                },
                {
                    field: 'otherinfo',
                    label: '曲库',
                    bottomHelpMessage: '使用曲库的模式，若启用自定义则重名的以自定义为准',
                    component: 'Select',
                    componentProps: {
                        options: [
                            {
                                label: '原版曲库',
                                value: 0
                            },
                            {
                                label: '原版+自定义',
                                value: 1
                            },
                            {
                                label: '仅自定义',
                                value: 2
                            }
                        ]
                    }
                },
                {
                    label: '猜曲绘设置',
                    component: 'Divider'
                },
                {
                    field: 'GuessTipCd',
                    label: '提示间隔',
                    bottomHelpMessage: '猜曲绘的提示间隔时间，单位：秒',
                    component: 'InputNumber',
                    required: true,
                    componentProps: {
                        min: 0,
                        max: 120,
                        placeholder: '请输入时间',
                    },
                },
                {
                    field: 'GuessTipRecall',
                    label: '猜曲绘撤回',
                    bottomHelpMessage: '是否在下一条提示发出的时候撤回上一条',
                    component: 'Switch',
                },
                {
                    label: '开字母设置',
                    component: 'Divider'
                },
                {
                    field: 'LetterNum',
                    label: '字母条数',
                    bottomHelpMessage: '开字母的条数，最大为99999最小为1',
                    component: 'InputNumber',
                    required: true,
                    componentProps: {
                        min: 1,
                        max: 99999,
                        placeholder: '请输入数量',
                    },
                },
                {
                    field: 'LetterIllustration',
                    label: '发送曲绘',
                    bottomHelpMessage: '猜对后是否发送以及发送什么曲绘，水印版需要占用渲染资源，不发图片更快',
                    component: 'Select',
                    componentProps: {
                        options: [
                            {
                                label: '水印版',
                                value: "水印版"
                            },
                            {
                                label: '原版',
                                value: "原版"
                            },
                            {
                                label: '不发送',
                                value: "不发送"
                            }
                        ]
                    }
                },
                {
                    field: 'LetterRevealCd',
                    label: '字母提示间隔',
                    bottomHelpMessage: '开字母的全局开字母间隔时间，单位：秒',
                    component: 'InputNumber',
                    required: true,
                    componentProps: {
                        min: 0,
                        max: 120,
                        placeholder: '请输入时间',
                    },
                },
                {
                    field: 'LetterGuessCd',
                    label: '字母开启间隔',
                    bottomHelpMessage: '开字母的全局开启间隔时间，单位：秒',
                    component: 'InputNumber',
                    required: true,
                    componentProps: {
                        min: 0,
                        max: 120,
                        placeholder: '请输入时间',
                    },
                },
                {
                    field: 'LetterTipCd',
                    label: '字母猜测间隔',
                    bottomHelpMessage: '开字母的全局猜测间隔时间，单位：秒',
                    component: 'InputNumber',
                    required: true,
                    componentProps: {
                        min: 0,
                        max: 120,
                        placeholder: '请输入时间',
                    },
                },
                {
                    field: 'LetterTimeLength',
                    label: '猜字母最长时长',
                    bottomHelpMessage: '单位：秒',
                    component: 'InputNumber',
                    required: true,
                    componentProps: {
                        min: 0,
                        max: 9999999,
                        placeholder: '请输入时间',
                    },
                },
                {
                    label: '提示猜歌设置',
                    component: 'Divider'
                },
                {
                    field: 'GuessTipsTipCD',
                    label: '提示冷却',
                    bottomHelpMessage: '提示猜歌提示的冷却时间间隔，单位：秒',
                    component: 'InputNumber',
                    required: true,
                    componentProps: {
                        min: 0,
                        max: 120,
                        placeholder: '请输入时间',
                    },
                },
                {
                    field: 'GuessTipsTipNum',
                    label: '提示条数',
                    bottomHelpMessage: '提示猜歌的提示条数（除曲绘外），若总提示条数小于17条则将会发送全部提示',
                    component: 'InputNumber',
                    required: true,
                    componentProps: {
                        min: 0,
                        max: 17,
                        placeholder: '请输入条数',
                    },
                },
                {
                    field: 'GuessTipsTimeout',
                    label: '游戏时长',
                    bottomHelpMessage: '提示猜歌超时时长，单位：秒',
                    component: 'InputNumber',
                    required: true,
                    componentProps: {
                        min: 30,
                        max: 600,
                        placeholder: '请输入时间',
                    },
                },
                {
                    field: 'GuessTipsAnsTime',
                    label: '额外时间',
                    bottomHelpMessage: '发送曲绘后多久公布答案，单位：秒',
                    component: 'InputNumber',
                    required: true,
                    componentProps: {
                        min: 30,
                        max: 600,
                        placeholder: '请输入时间',
                    },
                },
                {
                    label: '其他设置',
                    component: 'Divider'
                },
                {
                    field: 'VikaToken',
                    label: 'token',
                    bottomHelpMessage: 'token 填写后请重启',
                    component: 'Input',
                    required: false,
                    componentProps: {
                        placeholder: '请输入token',
                    },
                },
            ],
            // 获取配置数据方法（用于前端填充显示数据）
            getConfigData() {
                const defset = Config.getdefSet('config')

                let config = {}
                for (var i in defset) {
                    config[i] = Config.getUserCfg('config', i)
                }
                return config
            },
            // 设置配置的方法（前端点确定后调用的方法）
            setConfigData(data, { Result }) {
                if (data.isGuild) {
                    data.WordB19Img = false
                    data.WordSuggImg = false
                }
                var vis = false
                if (data.VikaToken && data.VikaToken.length != 23) {
                    data.VikaToken = ''
                    vis = true
                }
                for (let [keyPath, value] of Object.entries(data)) {
                    Config.modify('config', keyPath, value)
                }
                if (vis) {
                    return Result.ok({}, 'VikaToken非法')
                } else {
                    return Result.ok({}, '保存成功~')
                }
            },
        },
    }
}
