import BorderBoxThree from './src/component/BorderBoxThree.vue'
export const BorderBoxThreePlugin = {
    install: function (app) {
        app.component(BorderBoxThree.name, BorderBoxThree)
    }
}