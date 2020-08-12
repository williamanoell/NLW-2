const Database = require('./db')

const createProffy = require('./createProffy')

Database.then(async (db) => {
    // Inserir dados
    proffyValue = {
        name: "William Manoel",
        avatar: "https://avatars0.githubusercontent.com/u/40405535?s=460&u=0d4600a80f31faecdcf4be6195754bc20c15a6b1&v=4",
        whatsapp: "998876788",
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    }

    classValue = {
        //class_id vira pelo Banco de Dados
        subject: "História",
        cost: "20", 
        // proffy_id virá do bando de dados
    }

    classScheduleValues = [
        {
            weekday: 1, 
            time_from: 720, 
            time_to: 1220,
        },
        {
            weekday: 0, 
            time_from: 520, 
            time_to: 1220,
        }
    ]

    await createProffy(db, { proffyValue, classValue, classScheduleValues})

    // consultar dados 

    // todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")

    const selectedClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    

    const selectedClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520";
    `)
    //console.log(selectedClassesSchedules)
})