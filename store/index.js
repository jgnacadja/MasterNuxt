export const state = () => ({
    tasks: []
})

export const mutations = {
    add(state, text) {
        state.tasks.push({
            id: Date.now(),
            label:text,
            done: false
        })
    },
    remove(state, { todo }) {
        state.tasks.splice(state.tasks.indexOf(todo), 1)
    },
    toggle(todo) {
        todo.done = !todo.done
    }
}
