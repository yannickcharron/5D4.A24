const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({ ...{ class: ("navbar navbar-expand-md navbar-dark fixed-top bg-dark") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("container-fluid") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ class: ("navbar-brand") }, href: ("#"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("navbar-toggler") }, type: ("button"), "data-bs-toggle": ("collapse"), "data-bs-target": ("#navbarCollapse"), "aria-controls": ("navbarCollapse"), "aria-expanded": ("false"), "aria-label": ("Toggle navigation"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("navbar-toggler-icon") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ id: ("navbarCollapse"), ...{ class: ("collapse navbar-collapse") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("navbar-nav me-auto mb-2 mb-md-0") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("nav-item") }, });
    // @ts-ignore
    const __VLS_0 = {}
        .RouterLink;
    ({}.RouterLink);
    ({}.RouterLink);
    __VLS_components.RouterLink;
    __VLS_components.routerLink;
    __VLS_components.RouterLink;
    __VLS_components.routerLink;
    // @ts-ignore
    [RouterLink, RouterLink,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("nav-link") }, to: (({ name: 'home' })), }));
    const __VLS_2 = __VLS_1({ ...{ class: ("nav-link") }, to: (({ name: 'home' })), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ class: ("nav-link") }, to: (({ name: 'home' })), }));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    __VLS_nonNullable(__VLS_5.slots).default;
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("nav-item") }, });
    // @ts-ignore
    const __VLS_6 = {}
        .RouterLink;
    ({}.RouterLink);
    ({}.RouterLink);
    __VLS_components.RouterLink;
    __VLS_components.routerLink;
    __VLS_components.RouterLink;
    __VLS_components.routerLink;
    // @ts-ignore
    [RouterLink, RouterLink,];
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ class: ("nav-link") }, to: (({ name: 'planets' })), }));
    const __VLS_8 = __VLS_7({ ...{ class: ("nav-link") }, to: (({ name: 'planets' })), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ ...{ class: ("nav-link") }, to: (({ name: 'planets' })), }));
    const __VLS_11 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8));
    __VLS_nonNullable(__VLS_11.slots).default;
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("nav-item") }, });
    // @ts-ignore
    const __VLS_12 = {}
        .RouterLink;
    ({}.RouterLink);
    ({}.RouterLink);
    __VLS_components.RouterLink;
    __VLS_components.routerLink;
    __VLS_components.RouterLink;
    __VLS_components.routerLink;
    // @ts-ignore
    [RouterLink, RouterLink,];
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...{ class: ("nav-link") }, to: (({ name: 'vuetify' })), }));
    const __VLS_14 = __VLS_13({ ...{ class: ("nav-link") }, to: (({ name: 'vuetify' })), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    ({}({ ...{ class: ("nav-link") }, to: (({ name: 'vuetify' })), }));
    const __VLS_17 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14));
    __VLS_nonNullable(__VLS_17.slots).default;
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ class: ("d-flex") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ ...{ class: ("form-control me-2") }, type: ("search"), placeholder: ("Search"), "aria-label": ("Search"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("btn btn-outline-success") }, type: ("submit"), });
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['navbar'];
        __VLS_styleScopedClasses['navbar-expand-md'];
        __VLS_styleScopedClasses['navbar-dark'];
        __VLS_styleScopedClasses['fixed-top'];
        __VLS_styleScopedClasses['bg-dark'];
        __VLS_styleScopedClasses['container-fluid'];
        __VLS_styleScopedClasses['navbar-brand'];
        __VLS_styleScopedClasses['navbar-toggler'];
        __VLS_styleScopedClasses['navbar-toggler-icon'];
        __VLS_styleScopedClasses['collapse'];
        __VLS_styleScopedClasses['navbar-collapse'];
        __VLS_styleScopedClasses['navbar-nav'];
        __VLS_styleScopedClasses['me-auto'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['mb-md-0'];
        __VLS_styleScopedClasses['nav-item'];
        __VLS_styleScopedClasses['nav-link'];
        __VLS_styleScopedClasses['nav-item'];
        __VLS_styleScopedClasses['nav-link'];
        __VLS_styleScopedClasses['nav-item'];
        __VLS_styleScopedClasses['nav-link'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['form-control'];
        __VLS_styleScopedClasses['me-2'];
        __VLS_styleScopedClasses['btn'];
        __VLS_styleScopedClasses['btn-outline-success'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {};
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
