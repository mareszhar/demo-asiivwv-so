import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  // Config Docs: https://vitejs.dev/config/#css-preprocessoroptions
  css: {
    // make global variables and mixins available in all Vue components:
    preprocessorOptions: {
      sass: {
        additionalData: `
        @use './src/global/Index' as GlobalStyles
        `
        // ...I chose to merge all my GlobalStyles into one single scope here,
        // but you can also import them individually.
      }
      //...you can change the key above from 'sass' to 'scss' if you use scss in
      // your Vue components. You could also repeat the same settings for both if
      // you alternate between sass and scss in your components. Note that this
      // distinction is not needed for the ".sass" or ".scss"" files you import into your
      // Vue components. Those are handled by the alias resolver below, which will work
      // regardless of the Sass file extension you use.
    }
  },

  resolve: {
    alias: [
      {
        // This will help us use our global styles from regular sass files:
        find: '@styles',
        replacement: path.resolve(__dirname, 'src/global/Index')
      }
    ]
  }
})

