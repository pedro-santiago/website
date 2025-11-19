<template>
  <CodeLine>
    <!-- PHP class property -->
    <template v-if="isPhp">
      <Tab />
      <span class="keyword">private</span>
      <span class="white-space space"></span>
      <span class="keyword" v-if="type">{{ type }}</span>
      <span class="white-space space" v-if="type"></span>
      <VariableName :name="name" :length="length" />
      <span class="white-space space"></span>
      <span class="keyword">=</span>
      <span class="white-space space"></span>
      <slot>
        <span class="constant">
          {{ state.currentLanguageHelper.undefined }}
        </span>
      </slot>
      <span class="expression">;</span>
    </template>

    <!-- JS/TS/Ruby -->
    <template v-else>
      <span class="storage-type" v-if="isJs">const</span>
      <span class="white-space space" v-if="isJs"></span>
      <VariableName :name="name" :length="length" />
      <template v-if="padLeft">
        <span v-for="i in padLeft" :key="i" class="white-space space"></span>
      </template>
      <template v-if="type && isTs">
        <span class="keyword">:</span>
        <span class="white-space space"></span>
        <span class="type class">{{ type }}</span>
      </template>
      <span class="white-space space"></span>
      <span class="keyword">=</span>
      <span class="white-space space"></span>
      <slot>
        <span class="constant">
          {{ state.currentLanguageHelper.undefined }}
        </span>
      </slot>
      <span class="expression" v-if="isJs">;</span>
    </template>
  </CodeLine>
</template>

<script lang="ts">
import CodeLine from './_code_line.vue';
import Tab from './_tab.vue';
import VariableName from './_variable_name.vue';

export default {
  props: ['name', 'length', 'type'],
  components: {
    CodeLine,
    Tab,
    VariableName,
  },
};
</script>
