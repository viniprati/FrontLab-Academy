import { defineConfig } from 'vite'
import { resolve } from 'node:path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        trilhas: resolve(__dirname, 'trilhas.html'),
        roadmap: resolve(__dirname, 'roadmap.html'),
        exercicios: resolve(__dirname, 'exercicios.html'),
        desafios: resolve(__dirname, 'desafios.html'),
        projetos: resolve(__dirname, 'projetos.html'),
        pratica: resolve(__dirname, 'pratica.html'),
        docs: resolve(__dirname, 'docs.html'),
        'mini-ide': resolve(__dirname, 'mini-ide.html'),
        modulos: resolve(__dirname, 'modulos.html'),
        progresso: resolve(__dirname, 'progresso.html'),
        sobre: resolve(__dirname, 'sobre.html')
      }
    }
  }
})
