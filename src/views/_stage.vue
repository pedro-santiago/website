<template>
  <div class="stage" @click.stop="toggle" :class="{ collapsed: collapsed }">
    <Comment :indentation="1" v-if="collapsed" :comment="abbreviation">
      <Collapsed />
    </Comment>
    <template v-if="!collapsed">
      <!-- PHP: new ClassName(...) -->
      <CodeLine v-if="isPhp">
        <Tab /><Tab /><Tab />
        <span class="keyword">new</span>
        <span class="white-space space"></span>
        <span class="type class">{{ className }}</span>
        <span class="expression">(</span>
      </CodeLine>
      <!-- JS/TS/Ruby: {...} -->
      <CodeLine v-else>
        <Tab />
        <span class="expression">{</span>
      </CodeLine>
      <slot />
      <template v-if="data.description">
        <CodeLine v-if="isPhp">
          <Tab /><Tab /><Tab /><Tab />
          <span class="variable">description</span>
          <span class="expression">:</span>
          <span class="white-space space"></span>
          <span class="string">
            {{ state.currentLanguageHelper.multilineString }}
          </span>
        </CodeLine>
        <CodeLine v-else>
          <Tab /><Tab />
          <span class="variable">description</span>
          <span class="expression">:</span>
          <span class="white-space space"></span>
          <span class="string">
            {{ state.currentLanguageHelper.multilineString }}
          </span>
        </CodeLine>
        <MultiLineString :value="data.description.trim()" :indentation="isPhp ? 4 : 3" />
        <CodeLine v-if="isPhp">
          <Tab /><Tab /><Tab /><Tab />
          <span class="string">
            {{ state.currentLanguageHelper.multilineString }}
          </span>
          <span class="expression">,</span>
        </CodeLine>
        <CodeLine v-else>
          <Tab /><Tab />
          <span class="string">
            {{ state.currentLanguageHelper.multilineString }}
          </span>
          <span class="expression">,</span>
        </CodeLine>
      </template>
      <CodeLine v-if="isPhp">
        <Tab /><Tab /><Tab /><Tab />
        <VariableName name="startsAt" />
        <span class="expression">:</span>
        <span class="white-space space"></span>
        <Date :value="data.startsAt"></Date>
        <span class="expression">,</span>
      </CodeLine>
      <CodeLine v-else>
        <Tab /><Tab />
        <VariableName name="startsAt" />
        <span class="expression">:</span>
        <span class="white-space space"></span>
        <Date :value="data.startsAt"></Date>
        <span class="expression">,</span>
      </CodeLine>
      <CodeLine v-if="isPhp">
        <Tab /><Tab /><Tab /><Tab />
        <VariableName name="endsAt" />
        <span class="expression">:</span>
        <span class="white-space space"></span>
        <Date :value="data.endsAt"></Date>
        <span class="expression">,</span>
      </CodeLine>
      <CodeLine v-else>
        <Tab /><Tab />
        <VariableName name="endsAt" />
        <span class="expression">:</span>
        <span class="white-space space"></span>
        <Date :value="data.endsAt"></Date>
        <span class="expression">,</span>
      </CodeLine>
      <CodeLine v-if="isPhp">
        <Tab /><Tab /><Tab /><Tab />
        <VariableName name="skills" />
        <span class="expression">:</span>
        <span class="white-space space"></span>
        <span class="expression">[</span>
      </CodeLine>
      <CodeLine v-else>
        <Tab /><Tab />
        <VariableName name="skills" />
        <span class="expression">:</span>
        <span class="white-space space"></span>
        <span class="expression">[</span>
      </CodeLine>
      <CodeLine v-if="isPhp" v-for="(skill, key) in data.skills" :key="`php-${key}`">
        <Tab /><Tab /><Tab /><Tab /><Tab />
        <String :value="key"></String>
        <span class="expression">,</span>
        <span class="white-space space"></span>
        <span class="comment">// {{ skill.level * 100 }}%</span>
      </CodeLine>
      <CodeLine v-else v-for="(skill, key) in data.skills" :key="`js-${key}`">
        <Tab /><Tab /><Tab />
        <span class="variable progress" :style="{ '--value': skill.level }">{{ key }}</span>
        <span class="expression">,</span>
      </CodeLine>
      <CodeLine v-if="isPhp">
        <Tab /><Tab /><Tab /><Tab />
        <span class="expression">]</span>
        <span class="expression">,</span>
      </CodeLine>
      <CodeLine v-else>
        <Tab /><Tab />
        <span class="expression">]</span>
        <span class="expression">,</span>
      </CodeLine>
      <!-- PHP closing -->
      <CodeLine v-if="isPhp">
        <Tab /><Tab /><Tab />
        <span class="expression">)</span>
        <span class="expression">,</span>
      </CodeLine>
      <!-- JS/TS/Ruby closing -->
      <CodeLine v-else>
        <Tab />
        <span class="expression">}</span>
        <span class="expression" v-if="isRuby">.with_indifferent_access</span>
        <span class="expression">,</span>
      </CodeLine>
      <CodeLine v-if="!isLast" />
    </template>
  </div>
</template>

<script lang="ts">
import { track } from '../util';

import CodeLine from './_code_line.vue';
import Comment from './_comment.vue';
import Tab from './_tab.vue';
import String from './_string.vue';
import MultiLineString from './_multi_line_string.vue';
import Date from './_date.vue';
import Collapsed from './_collapsed.vue';
import VariableName from './_variable_name.vue';

export default {
  data() {
    return {
      collapsed: true,
    };
  },
  props: ['isLast', 'data', 'abbreviation', 'className'],
  methods: {
    toggle() {
      this.collapsed = !this.collapsed;
      track((this.collapsed ? 'Close' : 'Open') + 'Stage', this.abbreviation);
    },
  },
  computed: {
    multiStringStart() {
      this.collapsed = !this.collapsed;
      track((this.collapsed ? 'Close' : 'Open') + 'Stage', this.abbreviation);
    },
  },
  components: {
    CodeLine,
    Comment,
    Tab,
    String,
    MultiLineString,
    Date,
    Collapsed,
    VariableName,
  },
};
</script>
