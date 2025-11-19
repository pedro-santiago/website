<template>
  <div class="class-declaration">
    <!-- PHP Interfaces and Abstract Class -->
    <CodeLine v-if="isPhp">
      <span class="keyword">interface</span>
      <span class="white-space space"></span>
      <span class="type class">Fintech</span>
      <span class="white-space space"></span>
      <span class="expression">{</span>
    </CodeLine>
    <CodeLine v-if="isPhp">
      <Tab />
      <span class="keyword">public</span>
      <span class="white-space space"></span>
      <span class="keyword">function</span>
      <span class="white-space space"></span>
      <span class="function">processBankingAPIs</span>
      <span class="expression">()</span>
      <span class="keyword">:</span>
      <span class="white-space space"></span>
      <span class="type class">array</span>
      <span class="expression">;</span>
    </CodeLine>
    <CodeLine v-if="isPhp">
      <Tab />
      <span class="keyword">public</span>
      <span class="white-space space"></span>
      <span class="keyword">function</span>
      <span class="white-space space"></span>
      <span class="function">handleCompliance</span>
      <span class="expression">()</span>
      <span class="keyword">:</span>
      <span class="white-space space"></span>
      <span class="type class">bool</span>
      <span class="expression">;</span>
    </CodeLine>
    <CodeLine v-if="isPhp">
      <span class="expression">}</span>
    </CodeLine>
    <CodeLine />
    <CodeLine v-if="isPhp">
      <span class="keyword">interface</span>
      <span class="white-space space"></span>
      <span class="type class">Laravel</span>
      <span class="white-space space"></span>
      <span class="expression">{</span>
    </CodeLine>
    <CodeLine v-if="isPhp">
      <Tab />
      <span class="keyword">public</span>
      <span class="white-space space"></span>
      <span class="keyword">function</span>
      <span class="white-space space"></span>
      <span class="function">buildSaaSArchitecture</span>
      <span class="expression">()</span>
      <span class="keyword">:</span>
      <span class="white-space space"></span>
      <span class="type class">array</span>
      <span class="expression">;</span>
    </CodeLine>
    <CodeLine v-if="isPhp">
      <Tab />
      <span class="keyword">public</span>
      <span class="white-space space"></span>
      <span class="keyword">function</span>
      <span class="white-space space"></span>
      <span class="function">implementMultiTenancy</span>
      <span class="expression">()</span>
      <span class="keyword">:</span>
      <span class="white-space space"></span>
      <span class="type class">bool</span>
      <span class="expression">;</span>
    </CodeLine>
    <CodeLine v-if="isPhp">
      <span class="expression">}</span>
    </CodeLine>
    <CodeLine />
    <CodeLine v-if="isPhp">
      <span class="keyword">abstract</span>
      <span class="white-space space"></span>
      <span class="keyword">class</span>
      <span class="white-space space"></span>
      <span class="type class">FullStackDeveloper</span>
      <span class="white-space space"></span>
      <span class="expression">{</span>
    </CodeLine>
    <CodeLine v-if="isPhp">
      <Tab />
      <span class="keyword">abstract</span>
      <span class="white-space space"></span>
      <span class="keyword">public</span>
      <span class="white-space space"></span>
      <span class="keyword">function</span>
      <span class="white-space space"></span>
      <span class="function">developBackend</span>
      <span class="expression">()</span>
      <span class="keyword">:</span>
      <span class="white-space space"></span>
      <span class="type class">array</span>
      <span class="expression">;</span>
    </CodeLine>
    <CodeLine v-if="isPhp">
      <Tab />
      <span class="keyword">abstract</span>
      <span class="white-space space"></span>
      <span class="keyword">public</span>
      <span class="white-space space"></span>
      <span class="keyword">function</span>
      <span class="white-space space"></span>
      <span class="function">developFrontend</span>
      <span class="expression">()</span>
      <span class="keyword">:</span>
      <span class="white-space space"></span>
      <span class="type class">array</span>
      <span class="expression">;</span>
    </CodeLine>
    <CodeLine v-if="isPhp">
      <Tab />
      <span class="keyword">abstract</span>
      <span class="white-space space"></span>
      <span class="keyword">public</span>
      <span class="white-space space"></span>
      <span class="keyword">function</span>
      <span class="white-space space"></span>
      <span class="function">architectSolutions</span>
      <span class="expression">()</span>
      <span class="keyword">:</span>
      <span class="white-space space"></span>
      <span class="type class">array</span>
      <span class="expression">;</span>
    </CodeLine>
    <CodeLine v-if="isPhp">
      <span class="expression">}</span>
    </CodeLine>
    <CodeLine />
    <CodeLine v-if="isPhp">
      <span class="comment">#[PassionDriven]</span>
    </CodeLine>
    <CodeLine v-if="isPhp">
      <span class="comment">#[CreditFintechSpecialist]</span>
    </CodeLine>
    <CodeLine v-if="isPhp">
      <span class="keyword">class</span>
      <span class="white-space space"></span>
      <span class="type class">PedroSantiago</span>
      <span class="white-space space"></span>
      <span class="keyword">extends</span>
      <span class="white-space space"></span>
      <span class="type class">FullStackDeveloper</span>
      <span class="white-space space"></span>
      <span class="keyword">implements</span>
      <span class="white-space space"></span>
      <span class="type class">Fintech</span>
      <span class="expression">,</span>
      <span class="white-space space"></span>
      <span class="type class">Laravel</span>
    </CodeLine>
    <CodeLine v-if="isPhp">
      <span class="expression">{</span>
    </CodeLine>
  </div>
</template>

<script lang="ts">
import CodeLine from './_code_line.vue';
import Tab from './_tab.vue';

export default {
  components: {
    CodeLine,
    Tab,
  },
};
</script>
