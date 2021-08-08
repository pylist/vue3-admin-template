import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import ViteComponents, { ElementPlusResolver } from 'vite-plugin-components'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 组件自动导入
    ViteComponents({
      customComponentResolvers: [
        // 自动导入element-ui组件
        ElementPlusResolver()
      ]
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})
