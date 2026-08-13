import { mkStarter } from '../../helpers/criar-starter.js'

export const ferramentasModules = [
      { title: 'Git no fluxo diário', learn: ['branching', 'commit limpo', 'merge/rebase'], practice: 'Crie uma branch de feature, faça três commits pequenos e una as mudanças sem perder histórico.', exercise: 'Conclua quando cada commit tiver mensagem clara e representar uma mudança única.', starter: mkStarter('Git fluxo', '#6366f1', 'Git') },
      { title: 'GitHub e colaboração', learn: ['PR', 'review', 'issues'], practice: 'Abra um Pull Request com descrição, critérios de validação e referência a uma issue fictícia.', exercise: 'Conclua quando o PR permitir entender o problema, a solução e como testar.', starter: mkStarter('GitHub colaboração', '#4f46e5', 'GitHub') },
      { title: 'npm scripts', learn: ['scripts utilitários', 'build/test/lint', 'versionamento'], practice: 'Crie scripts para dev, build, preview e check em um package.json.', exercise: 'Conclua quando um comando check executar as validações principais em sequência.', starter: mkStarter('npm scripts', '#4338ca', 'npm') },
      { title: 'Vite e ambiente', learn: ['config básica', 'env vars', 'aliases'], practice: 'Configure uma variável VITE_API_URL e um alias para a pasta src.', exercise: 'Conclua quando dev e build usarem a configuração sem caminhos quebrados.', starter: mkStarter('Vite setup', '#6366f1', 'Vite') },
      { title: 'ESLint e qualidade', learn: ['regras', 'plugins', 'autocorreção'], practice: 'Ative regras para detectar variáveis não usadas e padrões inconsistentes.', exercise: 'Conclua quando o lint apontar problemas reais e o código corrigido continuar funcionando.', starter: mkStarter('ESLint', '#818cf8', 'ESLint') },
      { title: 'Prettier e consistência', learn: ['formatação unificada', 'integração IDE', 'hooks'], practice: 'Configure Prettier e formate arquivos HTML, CSS e JS com a mesma regra.', exercise: 'Conclua quando a formatação não depender de ajustes manuais entre arquivos.', starter: mkStarter('Prettier', '#6366f1', 'Prettier') },
      { title: 'Pipeline local', learn: ['pre-commit', 'testes automáticos', 'build check'], practice: 'Crie um fluxo local que rode lint, testes e build antes do push.', exercise: 'Conclua quando uma falha em qualquer etapa impedir a entrega sem revisão.', starter: mkStarter('Pipeline local', '#6366f1', 'Pipeline') }
    ]
 
