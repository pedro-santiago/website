<template>
  <div class="profile">
    <Section :section="Section.Profile"></Section>
    <CodeLine />
    <CodeLine>
      <Tab />
      <span class="keyword">private</span>
      <span class="white-space space"></span>
      <span class="keyword">string</span>
      <span class="white-space space"></span>
      <span class="variable">$fullName</span>
      <span class="white-space space"></span>
      <span class="expression">=</span>
      <span class="white-space space"></span>
      <String :value="data.myName"></String>
      <span class="expression">;</span>
    </CodeLine>
    <CodeLine>
      <Tab />
      <span class="keyword">private</span>
      <span class="white-space space"></span>
      <span class="keyword">string</span>
      <span class="white-space space"></span>
      <span class="variable">$currentRole</span>
      <span class="white-space space"></span>
      <span class="expression">=</span>
      <span class="white-space space"></span>
      <String :value="data.profession"></String>
      <span class="expression">;</span>
    </CodeLine>
    <CodeLine>
      <Tab />
      <span class="keyword">private</span>
      <span class="white-space space"></span>
      <span class="keyword">string</span>
      <span class="white-space space"></span>
      <span class="variable">$location</span>
      <span class="white-space space"></span>
      <span class="expression">=</span>
      <span class="white-space space"></span>
      <String :value="data.city"></String>
      <span class="expression">;</span>
    </CodeLine>
    <CodeLine>
      <Tab />
      <span class="keyword">private</span>
      <span class="white-space space"></span>
      <span class="keyword">string</span>
      <span class="white-space space"></span>
      <span class="variable">$workMode</span>
      <span class="white-space space"></span>
      <span class="expression">=</span>
      <span class="white-space space"></span>
      <String value="Remote"></String>
      <span class="expression">;</span>
    </CodeLine>
    <CodeLine>
      <Tab />
      <span class="keyword">private</span>
      <span class="white-space space"></span>
      <span class="type class">DateTime</span>
      <span class="white-space space"></span>
      <span class="variable">$careerStart</span>
      <span class="expression">;</span>
      <span class="white-space space"></span>
      <span class="comment">// {{ data.careerStartYear }}</span>
    </CodeLine>
    <CodeLine />
    <CodeLine>
      <Tab />
      <span class="keyword">private</span>
      <span class="white-space space"></span>
      <span class="keyword">array</span>
      <span class="white-space space"></span>
      <span class="variable">$contact</span>
      <span class="white-space space"></span>
      <span class="expression">=</span>
      <span class="white-space space"></span>
      <span class="expression">[</span>
    </CodeLine>
    <CodeLine>
      <Tab /><Tab />
      <span class="string">'email'</span>
      <span class="white-space space"></span>
      <span class="keyword">=></span>
      <span class="white-space space"></span>
      <Url :value="emailLink"></Url>
      <span class="expression">,</span>
    </CodeLine>
    <CodeLine v-for="(url, name) in data.socialNetworks" :key="name">
      <Tab /><Tab />
      <span class="string">'{{ name }}'</span>
      <span class="white-space space"></span>
      <span class="keyword">=></span>
      <span class="white-space space"></span>
      <Url :value="url"></Url>
      <span class="expression">,</span>
    </CodeLine>
    <CodeLine>
      <Tab />
      <span class="expression">]</span>
      <span class="expression">;</span>
    </CodeLine>
    <CodeLine />
    <CodeLine>
      <Tab />
      <span class="keyword">private</span>
      <span class="white-space space"></span>
      <span class="keyword">array</span>
      <span class="white-space space"></span>
      <span class="variable">$languages</span>
      <span class="white-space space"></span>
      <span class="expression">=</span>
      <span class="white-space space"></span>
      <span class="expression">[</span>
    </CodeLine>
    <CodeLine v-for="(level, lang) in data.languages" :key="lang">
      <Tab /><Tab />
      <span class="string">'{{ lang }}'</span>
      <span class="white-space space"></span>
      <span class="keyword">=></span>
      <span class="white-space space"></span>
      <String :value="level"></String>
      <span class="expression">,</span>
    </CodeLine>
    <CodeLine>
      <Tab />
      <span class="expression">]</span>
      <span class="expression">;</span>
    </CodeLine>
    <CodeLine />
    <CodeLine>
      <Tab />
      <span class="keyword">private</span>
      <span class="white-space space"></span>
      <span class="keyword">array</span>
      <span class="white-space space"></span>
      <span class="variable">$passions</span>
      <span class="white-space space"></span>
      <span class="expression">=</span>
      <span class="white-space space"></span>
      <span class="expression">[</span>
    </CodeLine>
    <CodeLine v-for="(description, passion) in data.passions" :key="passion">
      <Tab /><Tab />
      <span class="string">'{{ passion }}'</span>
      <span class="white-space space"></span>
      <span class="keyword">=></span>
      <span class="white-space space"></span>
      <String :value="description"></String>
      <span class="expression">,</span>
    </CodeLine>
    <CodeLine>
      <Tab />
      <span class="expression">]</span>
      <span class="expression">;</span>
    </CodeLine>
    <CodeLine />
    <CodeLine />
  </div>
</template>

<script lang="ts">
import { track } from '../util';

import CodeLine from './_code_line.vue';
import Variable from './_variable.vue';
import String from './_string.vue';
import Url from './_url.vue';
import Section from './_section.vue';
import Tab from './_tab.vue';

export default {
  props: ['data'],
  computed: {
    email() {
      const emails = this.data.emails;
      return emails[Math.floor(Math.random() * emails.length)];
    },
    emailLink() {
      return 'mailto:' + this.email;
    },
  },
  components: {
    CodeLine,
    Variable,
    String,
    Url,
    Section,
    Tab,
  },
};
</script>
