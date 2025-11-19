<template>
  <div id="view" class="hidden">
    <CookieInfo />
    <CodeLine />
    <ClassDeclaration />
    <CodeLine />
    <Profile :data="data" />
    <Constructor :yearsOfExperience="data.yearsOfExperience" />
    <Navigation />
    <CodeLine />
    <Section :section="Section.About"></Section>
    <CodeLine />
    <About :text="data.about" />
    <CodeLine />
    <Section :section="Section.TechStack"></Section>
    <CodeLine />
    <Method methodName="developBackend" :data="data.backendStack" />
    <Method methodName="developFrontend" :data="data.frontendStack" />
    <Method methodName="architectSolutions" :data="data.cloudArchitecture" />
    <CodeLine />
    <Section :section="Section.CreditExpertise"></Section>
    <CodeLine />
    <Method methodName="buildCreditScoringSystem" :data="data.creditScoringSystem" />
    <CodeLine />
    <Section :section="Section.FintechSkills"></Section>
    <CodeLine />
    <Method methodName="processBankingAPIs" :data="data.bankingAPIs" />
    <Method methodName="buildSaaSArchitecture" :data="data.saasArchitecture" />
    <CodeLine />
    <Section :section="Section.Experience"></Section>
    <CodeLine />
    <CurriculumVitae :data="data.experience" />
    <CodeLine />
    <CodeLine />
    <Section :section="Section.CurrentProjects"></Section>
    <CodeLine />
    <Method methodName="getCurrentProjects" :data="data.currentProjects" />
    <CodeLine />
    <Section :section="Section.Customers"></Section>
    <CodeLine />
    <Customers :data="data.customers" />
    <CodeLine />
    <CodeLine />
    <Section :section="Section.AcademicBackground"></Section>
    <CodeLine />
    <CurriculumVitae :data="data.academicBackground" />
    <CodeLine />
    <CodeLine />
    <ClassClosing />
    <CodeLine />
    <Legal />
    <CodeLine />
  </div>
</template>

<script lang="ts">
import * as data from '../data';

import SkillSet from './_skill_set.vue';
import Section from './_section.vue';
import CodeLine from './_code_line.vue';
import ClassDeclaration from './_class_declaration.vue';
import ClassClosing from './_class_closing.vue';
import CurriculumVitae from './_curriculum_vitae.vue';
import Customers from './_customers.vue';
import About from './_about.vue';
import Legal from './_legal.vue';
import Profile from './_profile.vue';
import CookieInfo from './_cookie_info.vue';
import Navigation from './_navigation.vue';
import Method from './_method.vue';
import Constructor from './_constructor.vue';

export default {
  data() {
    return {
      data,
    };
  },
  computed: {
    year() {
      return new Date().getFullYear();
    },
  },
  components: {
    SkillSet,
    Section,
    CodeLine,
    ClassDeclaration,
    ClassClosing,
    CurriculumVitae,
    Customers,
    About,
    Legal,
    Profile,
    CookieInfo,
    Navigation,
    Method,
    Constructor,
  },
};
</script>
