import { cursorEffects } from '@anyfork/vuepress-plugin-cursor-effects-next'
import { kanBanNiang } from '@anyfork/vuepress-plugin-kan-ban-niang-next'

export const plugins = [
    //鼠标点击特效插件
    cursorEffects({
        size: 4,
        shape: 'star'
    }),
    //看板娘
    kanBanNiang(),
]