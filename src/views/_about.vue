<template>
  <div class="about" :class="{ collapsed }" @click="toggle">
    <CodeLine v-if="isPhp">
      <Tab />
      <span class="keyword">public</span>
      <span class="white-space space"></span>
      <span class="keyword">function</span>
      <span class="white-space space"></span>
      <span class="function">getAbout</span>
      <span class="expression">()</span>
      <span class="keyword">:</span>
      <span class="white-space space"></span>
      <span class="keyword">string</span>
      <span v-if="collapsed" class="white-space space"></span>
      <span v-if="collapsed" class="collapsed">{ /* ... */ }</span>
    </CodeLine>
    <CodeLine v-if="isPhp && !collapsed">
      <Tab />
      <span class="expression">{</span>
    </CodeLine>
    <CodeLine v-if="isPhp && !collapsed">
      <Tab /><Tab />
      <span class="keyword">return</span>
      <span class="white-space space"></span>
      <span class="expression">&lt;&lt;&lt;'ABOUT'</span>
    </CodeLine>
    <template v-if="!collapsed" v-for="(line, index) in lines" :key="index">
      <CodeLine v-if="line.trim()">
        <Tab /><Tab />
        <span class="string">{{ line }}</span>
      </CodeLine>
      <CodeLine v-else />
    </template>
    <CodeLine v-if="isPhp && !collapsed">
      <Tab /><Tab />
      <span class="expression">ABOUT;</span>
    </CodeLine>
    <CodeLine v-if="isPhp && !collapsed">
      <Tab />
      <span class="expression">}</span>
    </CodeLine>
    <CodeLine v-if="isPhp && !collapsed" />

    <!-- JavaScript/TypeScript version -->
    <template v-if="!isPhp">
      <CodeLine>
        <span class="storage-type" v-if="isJs">const</span>
        <span class="white-space space" v-if="isJs"></span>
        <span class="variable">about</span>
        <span class="keyword" v-if="isTs">:</span>
        <span class="white-space space" v-if="isTs"></span>
        <span class="type class" v-if="isTs">string</span>
        <span class="white-space space"></span>
        <span class="expression">=</span>
        <span class="white-space space"></span>
        <span class="expression">{{ state.currentLanguageHelper.multilineString }}</span>
      </CodeLine>
      <template v-for="(line, index) in lines" :key="index">
        <CodeLine v-if="line.trim()">
          <span class="string">{{ line }}</span>
        </CodeLine>
        <CodeLine v-else />
      </template>
      <CodeLine>
        <span class="expression">{{ state.currentLanguageHelper.multilineString }}</span>
        <span class="expression" v-if="isJs">;</span>
      </CodeLine>
      <CodeLine />
    </template>
  </div>
</template>

<script lang="ts">
import CodeLine from './_code_line.vue';
import Tab from './_tab.vue';

export default {
  props: ['text'],
  data() {
    return {
      collapsed: true
    };
  },
  methods: {
    toggle() {
      if (this.isPhp) {
        this.collapsed = !this.collapsed;
      }
    }
  },
  computed: {
    lines() {
      return this.text.trim().split('\n').map((line: string) => line.trim());
    },
  },
  components: {
    CodeLine,
    Tab,
  },
};
</script>
