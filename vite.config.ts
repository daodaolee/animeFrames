import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import react from '@vitejs/plugin-react'
// import presetAttributify from 'unocss/preset-attributify'
import { presetIcons, presetUno, presetAttributify } from 'unocss'
import tailwindcss from 'tailwindcss'

import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss()]
    },
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      }
    }
  },
  plugins: [react(), UnoCSS(({
    presets: [
      presetUno(),
      presetAttributify(),
      presetIcons()
    ]
  }))],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],

  }
})
