import DefaultLayout from '../layouts/DefaultLayout.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const items = [{ title: 'Yannick' }, { title: 'Joël' }, { title: 'Karine' }, { title: 'Houssem' }];
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({ ...{ class: ("flex-shrink-0") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("container") }, });
    // @ts-ignore
    const __VLS_5 = {}
        .VMenu;
    ({}.VMenu);
    ({}.VMenu);
    __VLS_components.VMenu;
    __VLS_components.vMenu;
    __VLS_components.VMenu;
    __VLS_components.vMenu;
    // @ts-ignore
    [VMenu, VMenu,];
    // @ts-ignore
    const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({}));
    const __VLS_7 = __VLS_6({}, ...__VLS_functionalComponentArgsRest(__VLS_6));
    ({}({}));
    const __VLS_10 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { activator: __VLS_thisSlot } = __VLS_nonNullable(__VLS_10.slots);
        const [{ props }] = __VLS_getSlotParams(__VLS_thisSlot);
        // @ts-ignore
        const __VLS_11 = {}
            .VBtn;
        ({}.VBtn);
        ({}.VBtn);
        __VLS_components.VBtn;
        __VLS_components.vBtn;
        __VLS_components.VBtn;
        __VLS_components.vBtn;
        // @ts-ignore
        [VBtn, VBtn,];
        // @ts-ignore
        const __VLS_12 = __VLS_asFunctionalComponent(__VLS_11, new __VLS_11({ color: ("primary"), ...(props), }));
        const __VLS_13 = __VLS_12({ color: ("primary"), ...(props), }, ...__VLS_functionalComponentArgsRest(__VLS_12));
        ({}({ color: ("primary"), ...(props), }));
        const __VLS_16 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_11, __VLS_13));
        __VLS_nonNullable(__VLS_16.slots).default;
    }
    // @ts-ignore
    const __VLS_17 = {}
        .VList;
    ({}.VList);
    ({}.VList);
    __VLS_components.VList;
    __VLS_components.vList;
    __VLS_components.VList;
    __VLS_components.vList;
    // @ts-ignore
    [VList, VList,];
    // @ts-ignore
    const __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17({}));
    const __VLS_19 = __VLS_18({}, ...__VLS_functionalComponentArgsRest(__VLS_18));
    ({}({}));
    const __VLS_22 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_17, __VLS_19));
    for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.items))) {
        // @ts-ignore
        const __VLS_23 = {}
            .VListItem;
        ({}.VListItem);
        ({}.VListItem);
        __VLS_components.VListItem;
        __VLS_components.vListItem;
        __VLS_components.VListItem;
        __VLS_components.vListItem;
        // @ts-ignore
        [VListItem, VListItem,];
        // @ts-ignore
        const __VLS_24 = __VLS_asFunctionalComponent(__VLS_23, new __VLS_23({ key: ((index)), value: ((index)), }));
        const __VLS_25 = __VLS_24({ key: ((index)), value: ((index)), }, ...__VLS_functionalComponentArgsRest(__VLS_24));
        ({}({ key: ((index)), value: ((index)), }));
        const __VLS_28 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_23, __VLS_25));
        // @ts-ignore
        const __VLS_29 = {}
            .VListItemTitle;
        ({}.VListItemTitle);
        ({}.VListItemTitle);
        __VLS_components.VListItemTitle;
        __VLS_components.vListItemTitle;
        __VLS_components.VListItemTitle;
        __VLS_components.vListItemTitle;
        // @ts-ignore
        [VListItemTitle, VListItemTitle,];
        // @ts-ignore
        const __VLS_30 = __VLS_asFunctionalComponent(__VLS_29, new __VLS_29({}));
        const __VLS_31 = __VLS_30({}, ...__VLS_functionalComponentArgsRest(__VLS_30));
        ({}({}));
        const __VLS_34 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_29, __VLS_31));
        (item.title);
        // @ts-ignore
        [items,];
        __VLS_nonNullable(__VLS_34.slots).default;
        __VLS_nonNullable(__VLS_28.slots).default;
    }
    __VLS_nonNullable(__VLS_22.slots).default;
    // @ts-ignore
    const __VLS_35 = {}
        .VBtn;
    ({}.VBtn);
    ({}.VBtn);
    __VLS_components.VBtn;
    __VLS_components.vBtn;
    __VLS_components.VBtn;
    __VLS_components.vBtn;
    // @ts-ignore
    [VBtn, VBtn,];
    // @ts-ignore
    const __VLS_36 = __VLS_asFunctionalComponent(__VLS_35, new __VLS_35({ color: ("primary"), }));
    const __VLS_37 = __VLS_36({ color: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_36));
    ({}({ color: ("primary"), }));
    const __VLS_40 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37));
    // @ts-ignore
    const __VLS_41 = {}
        .VMenu;
    ({}.VMenu);
    ({}.VMenu);
    __VLS_components.VMenu;
    __VLS_components.vMenu;
    __VLS_components.VMenu;
    __VLS_components.vMenu;
    // @ts-ignore
    [VMenu, VMenu,];
    // @ts-ignore
    const __VLS_42 = __VLS_asFunctionalComponent(__VLS_41, new __VLS_41({ activator: ("parent"), }));
    const __VLS_43 = __VLS_42({ activator: ("parent"), }, ...__VLS_functionalComponentArgsRest(__VLS_42));
    ({}({ activator: ("parent"), }));
    const __VLS_46 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_41, __VLS_43));
    // @ts-ignore
    const __VLS_47 = {}
        .VList;
    ({}.VList);
    ({}.VList);
    __VLS_components.VList;
    __VLS_components.vList;
    __VLS_components.VList;
    __VLS_components.vList;
    // @ts-ignore
    [VList, VList,];
    // @ts-ignore
    const __VLS_48 = __VLS_asFunctionalComponent(__VLS_47, new __VLS_47({}));
    const __VLS_49 = __VLS_48({}, ...__VLS_functionalComponentArgsRest(__VLS_48));
    ({}({}));
    const __VLS_52 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_47, __VLS_49));
    for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.items))) {
        // @ts-ignore
        const __VLS_53 = {}
            .VListItem;
        ({}.VListItem);
        ({}.VListItem);
        __VLS_components.VListItem;
        __VLS_components.vListItem;
        __VLS_components.VListItem;
        __VLS_components.vListItem;
        // @ts-ignore
        [VListItem, VListItem,];
        // @ts-ignore
        const __VLS_54 = __VLS_asFunctionalComponent(__VLS_53, new __VLS_53({ key: ((index)), value: ((index)), }));
        const __VLS_55 = __VLS_54({ key: ((index)), value: ((index)), }, ...__VLS_functionalComponentArgsRest(__VLS_54));
        ({}({ key: ((index)), value: ((index)), }));
        const __VLS_58 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_53, __VLS_55));
        // @ts-ignore
        const __VLS_59 = {}
            .VListItemTitle;
        ({}.VListItemTitle);
        ({}.VListItemTitle);
        __VLS_components.VListItemTitle;
        __VLS_components.vListItemTitle;
        __VLS_components.VListItemTitle;
        __VLS_components.vListItemTitle;
        // @ts-ignore
        [VListItemTitle, VListItemTitle,];
        // @ts-ignore
        const __VLS_60 = __VLS_asFunctionalComponent(__VLS_59, new __VLS_59({}));
        const __VLS_61 = __VLS_60({}, ...__VLS_functionalComponentArgsRest(__VLS_60));
        ({}({}));
        const __VLS_64 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_59, __VLS_61));
        (item.title);
        // @ts-ignore
        [items,];
        __VLS_nonNullable(__VLS_64.slots).default;
        __VLS_nonNullable(__VLS_58.slots).default;
    }
    __VLS_nonNullable(__VLS_52.slots).default;
    __VLS_nonNullable(__VLS_46.slots).default;
    __VLS_nonNullable(__VLS_40.slots).default;
    // @ts-ignore
    const __VLS_65 = {}
        .VBtn;
    ({}.VBtn);
    ({}.VBtn);
    __VLS_components.VBtn;
    __VLS_components.vBtn;
    __VLS_components.VBtn;
    __VLS_components.vBtn;
    // @ts-ignore
    [VBtn, VBtn,];
    // @ts-ignore
    const __VLS_66 = __VLS_asFunctionalComponent(__VLS_65, new __VLS_65({ id: ("menu-activator"), color: ("primary"), }));
    const __VLS_67 = __VLS_66({ id: ("menu-activator"), color: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_66));
    ({}({ id: ("menu-activator"), color: ("primary"), }));
    const __VLS_70 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_65, __VLS_67));
    __VLS_nonNullable(__VLS_70.slots).default;
    // @ts-ignore
    const __VLS_71 = {}
        .VMenu;
    ({}.VMenu);
    ({}.VMenu);
    __VLS_components.VMenu;
    __VLS_components.vMenu;
    __VLS_components.VMenu;
    __VLS_components.vMenu;
    // @ts-ignore
    [VMenu, VMenu,];
    // @ts-ignore
    const __VLS_72 = __VLS_asFunctionalComponent(__VLS_71, new __VLS_71({ activator: ("#menu-activator"), }));
    const __VLS_73 = __VLS_72({ activator: ("#menu-activator"), }, ...__VLS_functionalComponentArgsRest(__VLS_72));
    ({}({ activator: ("#menu-activator"), }));
    const __VLS_76 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_71, __VLS_73));
    // @ts-ignore
    const __VLS_77 = {}
        .VList;
    ({}.VList);
    ({}.VList);
    __VLS_components.VList;
    __VLS_components.vList;
    __VLS_components.VList;
    __VLS_components.vList;
    // @ts-ignore
    [VList, VList,];
    // @ts-ignore
    const __VLS_78 = __VLS_asFunctionalComponent(__VLS_77, new __VLS_77({}));
    const __VLS_79 = __VLS_78({}, ...__VLS_functionalComponentArgsRest(__VLS_78));
    ({}({}));
    const __VLS_82 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_77, __VLS_79));
    for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.items))) {
        // @ts-ignore
        const __VLS_83 = {}
            .VListItem;
        ({}.VListItem);
        ({}.VListItem);
        __VLS_components.VListItem;
        __VLS_components.vListItem;
        __VLS_components.VListItem;
        __VLS_components.vListItem;
        // @ts-ignore
        [VListItem, VListItem,];
        // @ts-ignore
        const __VLS_84 = __VLS_asFunctionalComponent(__VLS_83, new __VLS_83({ key: ((index)), value: ((index)), }));
        const __VLS_85 = __VLS_84({ key: ((index)), value: ((index)), }, ...__VLS_functionalComponentArgsRest(__VLS_84));
        ({}({ key: ((index)), value: ((index)), }));
        const __VLS_88 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_83, __VLS_85));
        // @ts-ignore
        const __VLS_89 = {}
            .VListItemTitle;
        ({}.VListItemTitle);
        ({}.VListItemTitle);
        __VLS_components.VListItemTitle;
        __VLS_components.vListItemTitle;
        __VLS_components.VListItemTitle;
        __VLS_components.vListItemTitle;
        // @ts-ignore
        [VListItemTitle, VListItemTitle,];
        // @ts-ignore
        const __VLS_90 = __VLS_asFunctionalComponent(__VLS_89, new __VLS_89({}));
        const __VLS_91 = __VLS_90({}, ...__VLS_functionalComponentArgsRest(__VLS_90));
        ({}({}));
        const __VLS_94 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_89, __VLS_91));
        (item.title);
        // @ts-ignore
        [items,];
        __VLS_nonNullable(__VLS_94.slots).default;
        __VLS_nonNullable(__VLS_88.slots).default;
    }
    __VLS_nonNullable(__VLS_82.slots).default;
    __VLS_nonNullable(__VLS_76.slots).default;
    __VLS_nonNullable(__VLS_4.slots).default;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['flex-shrink-0'];
        __VLS_styleScopedClasses['container'];
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
                items: items,
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
