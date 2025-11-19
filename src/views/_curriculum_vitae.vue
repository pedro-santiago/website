<template>
  <div class="curriculum-vitae">
    <!-- PHP Method Signature -->
    <CodeLine v-if="isPhp">
      <Tab />
      <span class="keyword">public</span>
      <span class="white-space space"></span>
      <span class="keyword">function</span>
      <span class="white-space space"></span>
      <span class="expression">{{ methodName }}</span>
      <span class="expression">()</span>
      <span class="keyword">:</span>
      <span class="white-space space"></span>
      <span class="keyword">array</span>
    </CodeLine>
    <CodeLine v-if="isPhp">
      <Tab />
      <span class="expression">{</span>
    </CodeLine>
    <CodeLine v-if="isPhp">
      <Tab /><Tab />
      <span class="keyword">return</span>
      <span class="white-space space"></span>
      <span class="expression">[</span>
    </CodeLine>

    <!-- JavaScript/TypeScript -->
    <CodeLine v-if="!isPhp">
      <span class="storage-type" v-if="isJs">const</span>
      <span class="white-space space" v-if="isJs"></span>
      <VariableName :name="variableName" />
      <span class="keyword" v-if="isTs">:</span>
      <span class="white-space space"></span>
      <span class="expression" v-if="isTs">(</span>
      <span class="type class" v-if="isTs">Job</span>
      <span class="white-space space" v-if="isTs"></span>
      <span class="keyword" v-if="isTs">|</span>
      <span class="white-space space" v-if="isTs"></span>
      <span class="type class" v-if="isTs">Education</span>
      <span class="expression" v-if="isTs">)[]</span>
      <span class="white-space space" v-if="isTs"></span>
      <span class="expression">=</span>
      <span class="white-space space"></span>
      <span class="expression">[</span>
    </CodeLine>

    <template v-for="(entry, index) in data" :key="`entry-${index}`">
      <component
        :is="entry.company ? 'Job' : 'Education'"
        :data="entry"
        :isLast="index === data.length - 1"
      />
    </template>

    <!-- PHP Closing -->
    <CodeLine v-if="isPhp">
      <Tab /><Tab />
      <span class="expression">]</span>
      <span class="expression">;</span>
    </CodeLine>
    <CodeLine v-if="isPhp">
      <Tab />
      <span class="expression">}</span>
    </CodeLine>

    <!-- JavaScript/TypeScript Closing -->
    <CodeLine v-if="!isPhp">
      <span class="expression">]</span>
      <span class="expression" v-if="isJs">;</span>
    </CodeLine>
  </div>
</template>

<script lang="ts">
import VariableName from './_variable_name.vue';
import CodeLine from './_code_line.vue';
import Tab from './_tab.vue';
import Job from './_job.vue';
import Education from './_education.vue';

export default {
  props: ['data'],
  computed: {
    variableName() {
      // Infer variable name from data type
      if (this.data && this.data.length > 0) {
        if (this.data[0].company) return 'experience';
        if (this.data[0].university) return 'academicBackground';
      }
      return 'curriculumVitae';
    },
    methodName() {
      // Convert to method name like getExperience(), getAcademicBackground()
      const varName = this.variableName;
      return 'get' + varName.charAt(0).toUpperCase() + varName.slice(1);
    },
  },
  components: {
    CodeLine,
    Tab,
    Job,
    Education,
    VariableName,
  },
};
</script>
