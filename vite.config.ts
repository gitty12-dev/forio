import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


// 設定値の型設定
interface ImportMetaEnv {
  readonly VITE_ENV_MOBILE_SIZE: string,
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

// https://vitejs.dev/config/
export default defineConfig({
  base: 'forio', 
  plugins: [vue()]
})
