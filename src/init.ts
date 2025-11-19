import './style.styl';
import type { App } from 'vue';
import { state } from './data';
import { snakeCase } from './util';
import { Section, Language } from './data_types';

let theme = 0;
const themeCount = 3;

if (state.language === undefined) {
  state.language = Language.php;
}

document.addEventListener('keydown', function(e) {
  switch (e.which) {
    case 32: {
      e.preventDefault();
      theme += 1;
      for (var i = 0; i < themeCount; i++) {
        document.body.classList.remove(`theme-${i}`);
      }
      document.body.classList.add(`theme-${theme % themeCount}`);
      break;
    }
    case 80: {
      state.language = Language.php;
      break;
    }
    case 82: {
      state.language = Language.ruby;
      break;
    }
    case 74: {
      state.language = Language.javascript;
      break;
    }
    case 84: {
      state.language = Language.typescript;
      break;
    }
  }
});

export function setupMixin(app: App) {
  app.mixin({
    data() {
      return {
        Section,
        state,
      };
    },
    methods: {
      snakeCase(str: string) {
        return (<any>this).isRuby ? snakeCase(str) : str;
      },
    },
    computed: {
      isJs() {
        return (
          this.state.currentLanguage === Language.javascript ||
          this.state.currentLanguage === Language.typescript
        );
      },
      isTs() {
        return this.state.currentLanguage === Language.typescript;
      },
      isRuby() {
        return this.state.currentLanguage === Language.ruby;
      },
      isPhp() {
        return this.state.currentLanguage === Language.php;
      },
    },
  });
}

console.log(
  '%c~/pedrosantiago.com.br %c%c  main%c cat %cREADME.md\n\n%c# pedrosantiago.com.br\n\nPortfolio of Pedro Santiago - CTO as a Service & PHP Specialist',
  'font-family: "Fira Code", monospace; padding: 2px 0; background-color: #2E8CCF; color: #000000;',
  'font-family: "Fira Code", monospace; padding: 2px 0; background-color: #85981C; color: #2E8CCF;',
  'font-family: "Fira Code", monospace; padding: 2px 0; background-color: #85981C; color: #000000;',
  'font-family: "Fira Code", monospace; padding: 2px 0; color: #75880C;',
  'font-family: "Fira Code", monospace; padding: 2px 0; color: #011;',
  'font-family: "Fira Code", monospace; padding: 2px 0; color: #233;',
);
