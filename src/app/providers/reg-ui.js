import ui from '../../shared/ui'

export const regUi = (app) => {
    ui.forEach(u => {
        app.component(u.name, u)
    })
}