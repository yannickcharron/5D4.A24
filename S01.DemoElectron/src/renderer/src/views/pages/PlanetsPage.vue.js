import { onMounted, ref } from 'vue';
import DefaultLayout from '../layouts/DefaultLayout.vue';
import { PlanetRepository } from '@renderer/repositories/PlanetRepository';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const planetRepository = new PlanetRepository();
const planets = ref();
onMounted(async () => {
    //TODO: Retrouver les planètes
    planets.value = await planetRepository.retrieveAll();
    console.log(planets);
});
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    // @ts-ignore
    [DefaultLayout, DefaultLayout,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(DefaultLayout, new DefaultLayout({}));
    const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
    ({}({}));
    const __VLS_4 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(DefaultLayout, __VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    for (const [planet] of __VLS_getVForSourceType((__VLS_ctx.planets))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((planet.name)), ...{ class: ("col-4") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({});
        (planet.name);
        // @ts-ignore
        [planets,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ class: ("planet") }, src: ((planet.icon)), alt: ((planet.name)), });
    }
    __VLS_nonNullable(__VLS_4.slots).default;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['container'];
        __VLS_styleScopedClasses['col-4'];
        __VLS_styleScopedClasses['planet'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                DefaultLayout: DefaultLayout,
                planets: planets,
            };
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
