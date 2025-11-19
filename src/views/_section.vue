<template>
  <div class="section" :data-value="title">
    <!-- Section Header as Laravel-style Comment Block -->
    <CodeLine>
      <Tab />
      <span class="comment">/**</span>
    </CodeLine>
    <CodeLine>
      <Tab />
      <span class="comment">{{ state.currentLanguageHelper.commentChar }} {{ title }}:</span>
      <span class="white-space space"></span>
      <template v-for="(section, index) in sections" :key="`section-${section}`">
        <span
          class="comment selectable"
          :class="{ active: title === section }"
          @click="scrollToSection(section)"
        >{{ section }}</span>
        <span v-if="index < sections.length - 1" class="comment">,</span>
        <span v-if="index < sections.length - 1" class="white-space space"></span>
      </template>
    </CodeLine>
    <CodeLine>
      <Tab />
      <span class="comment">{{ state.currentLanguageHelper.commentEnd }}/</span>
    </CodeLine>
  </div>
</template>

<script lang="ts">
import { Section } from '../data_types';
import { animate, Easing, track } from '../util';

import CodeLine from './_code_line.vue';
import Tab from './_tab.vue';

export default {
  props: ['section'],
  methods: {
    scrollToSection(name: string) {
      if (name !== this.title) {
        track('navigateTo', name);
        const target = document.querySelector(`.section[data-value=${name}]`);
        animate({
          target: document.querySelector('html'),
          key: 'scrollTop',
          value: (<HTMLElement>target).offsetTop,
          duration: 300,
          ease: Easing.EaseInOut,
        });
      }
    },
  },
  computed: {
    sections() {
      const keys = Object.keys(Section);
      return keys.slice(keys.length / 2);
    },
    title() {
      return Section[this.section];
    },
  },
  components: {
    CodeLine,
    Tab,
  },
};
</script>
