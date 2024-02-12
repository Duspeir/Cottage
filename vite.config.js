import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// merge(webpackConfig, {
//   plugins:[
//     new webpack.ProvidePlugin({
//       process: 'process/browser'
//     })
//   ]
// })

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
