export enum Section {
  Profile,
  About,
  TechStack,
  CreditExpertise,
  FintechSkills,
  Experience,
  CurrentProjects,
  Customers,
  AcademicBackground,
}

export enum Language {
  ruby,
  typescript,
  javascript,
  php,
}

export const languages: Language[] = [Language.php, Language.ruby, Language.typescript, Language.javascript];

export enum HumanLanguage {
  'pt-BR',
  'en-US',
}

export const humanLanguages: HumanLanguage[] = [HumanLanguage['pt-BR'], HumanLanguage['en-US']];

export interface Stage {
  description?: string;
  startsAt: Date;
  endsAt?: Date;
  skills: { [key: string]: Skill };
}

export interface Job extends Stage {
  company: string;
  remote: boolean;
  position: string | string[];
}

export interface Education extends Stage {
  university: string;
  graduiation: string;
}

export interface ShowCase extends Stage {
  name: string;
  urls: string[];
  media: string[];
}

export interface Customer extends Stage {
  client: string;
  project: string;
}

export interface Skill {
  level: number;
  name: string;
}

export interface SkillSet {
  title: string;
  data: SkillSet[] | { [key: string]: Skill };
}

export class State {
  currentLanguage: Language;
  currentLanguageHelper: LanguageHelper;

  private getLanguageClass(lang: Language): string {
    return `lang-${Language[lang]}`;
  }

  get language(): Language {
    return this.currentLanguage;
  }

  set language(lang: Language) {
    this.currentLanguage = lang;
    this.currentLanguageHelper = new LanguageHelper(lang);
    for (const language of languages) {
      document.body.classList.remove(this.getLanguageClass(language));
    }
    document.body.classList.add(this.getLanguageClass(lang));
    const title = document.title.substr(0, document.title.length - 2);
    switch (lang) {
      case Language.php: {
        document.title = title + 'php';
        break;
      }
      case Language.ruby: {
        document.title = title + 'rb';
        break;
      }
      case Language.typescript: {
        document.title = title + 'ts';
        break;
      }
      case Language.javascript: {
        document.title = title + 'js';
        break;
      }
    }
  }
}

export class LanguageHelper {
  constructor(private language: Language) {}

  get commentChar() {
    return this.language === Language.ruby || this.language === Language.php ? '#' : '*';
  }

  get commentEnd() {
    return this.language === Language.ruby || this.language === Language.php ? '#' : '/';
  }

  get multilineString() {
    return this.language === Language.ruby ? "'" : '`';
  }

  get comment() {
    return this.language === Language.ruby || this.language === Language.php ? '#' : '//';
  }

  get undefined() {
    if (this.language === Language.ruby) return 'nil';
    if (this.language === Language.php) return 'null';
    return 'undefined';
  }
}
