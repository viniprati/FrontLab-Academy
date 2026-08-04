import { defineConfig } from 'vite'
import { resolve } from 'node:path'

export default defineConfig({
  root: resolve(__dirname, 'src/pages'),
  publicDir: resolve(__dirname, 'public'),
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'src/pages/index.html'),
        trilhas: resolve(__dirname, 'src/pages/trilhas.html'),
        roteiro: resolve(__dirname, 'src/pages/roteiro.html'),
        exercicios: resolve(__dirname, 'src/pages/exercicios.html'),
        desafios: resolve(__dirname, 'src/pages/desafios.html'),
        projetos: resolve(__dirname, 'src/pages/projetos.html'),
        pratica: resolve(__dirname, 'src/pages/pratica.html'),
        documentacao: resolve(__dirname, 'src/pages/documentacao.html'),
        'mini-ide': resolve(__dirname, 'src/pages/mini-ide.html'),
        modulos: resolve(__dirname, 'src/pages/modulos.html'),
        progresso: resolve(__dirname, 'src/pages/progresso.html'),
        sobre: resolve(__dirname, 'src/pages/sobre.html')
      }
    }
  }
})
