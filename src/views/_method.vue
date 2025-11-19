<template>
  <div class="method" :class="{ collapsed }" @click="toggle">
    <CodeLine>
      <Tab />
      <span class="keyword">public</span>
      <span class="white-space space"></span>
      <span class="keyword">function</span>
      <span class="white-space space"></span>
      <span class="function">{{ methodName }}</span>
      <span class="expression">()</span>
      <span class="keyword">:</span>
      <span class="white-space space"></span>
      <span class="type class">array</span>
      <span v-if="collapsed" class="white-space space"></span>
      <span v-if="collapsed" class="collapsed">{ /* ... */ }</span>
    </CodeLine>
    <CodeLine v-if="!collapsed">
      <Tab />
      <span class="expression">{</span>
    </CodeLine>
    <CodeLine v-if="!collapsed">
      <Tab /><Tab />
      <span class="keyword">return</span>
      <span class="white-space space"></span>
      <span class="expression">[</span>
    </CodeLine>

    <!-- Render array data -->
    <template v-if="!collapsed" v-for="(value, key) in data" :key="key">
      <!-- If value is an array of strings -->
      <template v-if="Array.isArray(value)">
        <CodeLine v-if="!collapsed">
          <Tab /><Tab /><Tab />
          <span class="string">'{{ key }}'</span>
          <span class="white-space space"></span>
          <span class="keyword">=></span>
          <span class="white-space space"></span>
          <span class="expression">[</span>
        </CodeLine>
        <CodeLine v-if="!collapsed" v-for="(item, index) in value" :key="`${key}-${index}`">
          <Tab /><Tab /><Tab /><Tab />
          <String :value="item"></String>
          <span class="expression">{{ index < value.length - 1 ? ',' : '' }}</span>
        </CodeLine>
        <CodeLine v-if="!collapsed">
          <Tab /><Tab /><Tab />
          <span class="expression">]</span>
          <span class="expression">,</span>
        </CodeLine>
      </template>

      <!-- If value is an object -->
      <template v-else-if="typeof value === 'object' && value !== null">
        <CodeLine v-if="!collapsed">
          <Tab /><Tab /><Tab />
          <span class="string">'{{ key }}'</span>
          <span class="white-space space"></span>
          <span class="keyword">=></span>
          <span class="white-space space"></span>
          <span class="expression">[</span>
        </CodeLine>
        <template v-if="!collapsed" v-for="(subValue, subKey) in value" :key="`${key}-${subKey}`">
          <!-- Nested arrays -->
          <template v-if="Array.isArray(subValue)">
            <CodeLine v-if="!collapsed">
              <Tab /><Tab /><Tab /><Tab />
              <span class="string">'{{ subKey }}'</span>
              <span class="white-space space"></span>
              <span class="keyword">=></span>
              <span class="white-space space"></span>
              <span class="expression">[</span>
              <template v-for="(item, idx) in subValue" :key="`${subKey}-${idx}`">
                <String :value="item"></String>
                <span class="expression">{{ idx < subValue.length - 1 ? ', ' : '' }}</span>
              </template>
              <span class="expression">]</span>
              <span class="expression">,</span>
            </CodeLine>
          </template>
          <!-- String values -->
          <template v-else>
            <CodeLine v-if="!collapsed">
              <Tab /><Tab /><Tab /><Tab />
              <span class="string">'{{ subKey }}'</span>
              <span class="white-space space"></span>
              <span class="keyword">=></span>
              <span class="white-space space"></span>
              <String :value="subValue"></String>
              <span class="expression">,</span>
            </CodeLine>
          </template>
        </template>
        <CodeLine v-if="!collapsed">
          <Tab /><Tab /><Tab />
          <span class="expression">]</span>
          <span class="expression">,</span>
        </CodeLine>
      </template>

      <!-- Simple string value -->
      <template v-else>
        <CodeLine v-if="!collapsed">
          <Tab /><Tab /><Tab />
          <span class="string">'{{ key }}'</span>
          <span class="white-space space"></span>
          <span class="keyword">=></span>
          <span class="white-space space"></span>
          <String :value="value"></String>
          <span class="expression">,</span>
        </CodeLine>
      </template>
    </template>

    <CodeLine v-if="!collapsed">
      <Tab /><Tab />
      <span class="expression">]</span>
      <span class="expression">;</span>
    </CodeLine>
    <CodeLine v-if="!collapsed">
      <Tab />
      <span class="expression">}</span>
    </CodeLine>
    <CodeLine v-if="!collapsed" />
  </div>
</template>

<script lang="ts">
import CodeLine from './_code_line.vue';
import Tab from './_tab.vue';
import String from './_string.vue';

export default {
  props: {
    methodName: {
      type: String,
      required: true
    },
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      collapsed: true
    };
  },
  methods: {
    toggle() {
      this.collapsed = !this.collapsed;
    }
  },
  components: {
    CodeLine,
    Tab,
    String,
  },
};
</script>
