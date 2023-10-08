// translate.config.js
import { Lang } from 'language-translate/types'
import { defineConfig } from 'language-translate/utils'

export default defineConfig({
    proxy: {
        host: '127.0.0.1',
        port: 10900
    },
    translateRuntimeMergeEnabled: false,
    fromLang: Lang['zh-CN'],
    fromPath: 'translate.entry.json',
    translate: [
        {
            label: '将结果翻译到locales文件夹下',
            targetConfig: [
                { targetLang: Lang['zh-CN'], outPath: 'locales/zh-CN.json' },
                { targetLang: Lang['zh-TW'], outPath: 'locales/zh-CHT.json' },
                { targetLang: Lang['zh-TW'], outPath: 'locales/zh-CHT.id.json' },
                { targetLang: Lang.ar, outPath: 'locales/ar.json' },
                { targetLang: Lang.bn, outPath: 'locales/bn.json' },
                { targetLang: Lang.en, outPath: 'locales/en.json' },
                { targetLang: Lang.es, outPath: 'locales/es.json' },
                { targetLang: Lang.fa, outPath: 'locales/fa.json' },
                { targetLang: Lang.hi, outPath: 'locales/hi.json' },
                { targetLang: Lang.id, outPath: 'locales/id.json' },
                { targetLang: Lang.ja, outPath: 'locales/ja.json' },
                { targetLang: Lang.ko, outPath: 'locales/ko.json' },
                { targetLang: Lang.ms, outPath: 'locales/ms.json' },
                { targetLang: Lang.pt, outPath: 'locales/pe.json' },
                { targetLang: Lang.ru, outPath: 'locales/ru.json' },
                { targetLang: Lang.th, outPath: 'locales/th.json' },
                { targetLang: Lang.tl, outPath: 'locales/tl.json' },
                { targetLang: Lang.tr, outPath: 'locales/tr.json' },
                { targetLang: Lang.uk, outPath: 'locales/uk.json' },
                { targetLang: Lang.vi, outPath: 'locales/vi.json' }
            ]
        }
    ]
})
