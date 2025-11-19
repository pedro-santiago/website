<template>
  <div class="navigation">
    <!-- Navigation as Laravel-style comment block -->
  </div>
</template>

<script lang="ts">
import { Section } from '../data_types';
import { animate, Easing, track } from '../util';

import CodeLine from './_code_line.vue';
import Tab from './_tab.vue';

export default {
  methods: {
    scrollToSection(name: string) {
      track('navigateTo', name);
      const target = document.querySelector(`.section[data-value=${name}]`);
      if (target) {
        animate({
          target: document.querySelector('html'),
          key: 'scrollTop',
          value: (<HTMLElement>target).offsetTop,
          duration: 300,
          ease: Easing.EaseInOut,
        });
      }
    },
    getMethodName(section: string): string {
      return 'get' + section;
    },
  },
  computed: {
    sections() {
      const keys = Object.keys(Section);
      return keys.slice(keys.length / 2);
    },
  },
  components: {
    CodeLine,
    Tab,
  },
};
</script>
