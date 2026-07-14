import { defineClientConfig } from '@vuepress/client'
import FlowerCat from './components/flowerCat.vue'
import BookNotes from './components/bookNotes.vue'
import MagicCard from './components/magicCard.vue'  
import whirligig from './components/whirligig.vue'
import irregularShadow from './components/shadow/irregularShadow.vue'
import normalShadow from './components/shadow/normalShadow.vue'


export default defineClientConfig({
  enhance({ app }) {
    app.component('flower-cat', FlowerCat)
    app.component('book-notes', BookNotes)
    app.component('magic-card', MagicCard)
    app.component('whirligig', whirligig)
    app.component('irregular-shadow', irregularShadow)
    app.component('normal-shadow', normalShadow)
  },
})