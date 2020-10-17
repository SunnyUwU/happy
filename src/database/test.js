const Database = require('./db');
const saveOrphanage = require('./saveOrphanage')

Database.then(async db => {
    //inserir dados na tabela
    /* await saveOrphanage(db, {
        lat: "-8.1554383",
        lng:  "-34.9410154",
        name: "Lar das meninas",
        about: "Presta assistência a crianças de 06 a 16 anos que se encontre em situação de risco e/ou vulnerabilidade social.", 
        whatsapp: "21848452122",
        images: [
            "https://images.unsplash.com/photo-1598983290606-cf5876b08655?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1597992350431-56cb7e28a7a2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(), 
        instructions: "Venha conhecer e traga muito amor e paciência.",
        opening_hours: "Horário de visitas Das 8:30h as 18h",
        open_on_weekends: "0"

    }) */

    //consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //consultar apenas um orfanato
    /* const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
    console.log(orphanage)
 */
    //deletar dado da tabela
    await db.run('DELETE FROM orphanages WHERE id ="5"')
})