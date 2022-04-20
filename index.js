//Back-end Holy

import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get("/holidays", (req, res) => {
    const holidays = [
        { date: "1/1/2022", name: "Confraternização mundial" },
        { date: "1/3/2022", name: "Carnaval" },
        { date: "17/4/2022", name: "Páscoa" },
        { date: "21/4/2022", name: "Tiradentes" },
        { date: "1/5/2022", name: "Dia do trabalho" },
        { date: "16/6/2022", name: "Corpus Christi" },
        { date: "7/9/2022", name: "Independência do Brasil" },
        { date: "12/10/2022", name: "Nossa Senhora Aparecida" },
        { date: "2/11/2022", name: "Finados" },
        { date: "15/11/2022", name: "Proclamação da República" },
        { date: "25/12/2022", name: "Natal" }
      ];
    res.send(holidays);
})

app.get("/is-today-holiday", (req, res) => {
    const holidays = [
        { date: "1/1/2022", name: "Confraternização mundial" },
        { date: "1/3/2022", name: "Carnaval" },
        { date: "17/4/2022", name: "Páscoa" },
        { date: "21/4/2022", name: "Tiradentes" },
        { date: "1/5/2022", name: "Dia do trabalho" },
        { date: "16/6/2022", name: "Corpus Christi" },
        { date: "7/9/2022", name: "Independência do Brasil" },
        { date: "12/10/2022", name: "Nossa Senhora Aparecida" },
        { date: "2/11/2022", name: "Finados" },
        { date: "15/11/2022", name: "Proclamação da República" },
        { date: "25/12/2022", name: "Natal" }
      ];
    const todayDate = new Date();
    const dataString = todayDate.toLocaleDateString();
    //const dataString = "1/1/2022";
    //console.log("hoje:" + dataString);
   
    let isTodayHoliday = holidays.find(holidays => holidays.date === dataString);//faz minha busca sem for
    if(isTodayHoliday == undefined){
        //console.log("sem feriado")
        res.send(`Nao, hoje não é feriado`);
    } else{
        //console.log(isTodayHoliday.name)
        res.send(`Sim, hoje é ${isTodayHoliday.name}`)
    }
})

app.get('/holidays/:idDoMes', (req, res) => {
    const holidays = [
        { date: "1/1/2022", name: "Confraternização mundial" },
        { date: "1/3/2022", name: "Carnaval" },
        { date: "17/4/2022", name: "Páscoa" },
        { date: "21/4/2022", name: "Tiradentes" },
        { date: "1/5/2022", name: "Dia do trabalho" },
        { date: "16/6/2022", name: "Corpus Christi" },
        { date: "7/9/2022", name: "Independência do Brasil" },
        { date: "12/10/2022", name: "Nossa Senhora Aparecida" },
        { date: "2/11/2022", name: "Finados" },
        { date: "15/11/2022", name: "Proclamação da República" },
        { date: "25/12/2022", name: "Natal" }
      ];

    function splitString(stringToSplit, separator) {
        let arrayOfStrings = stringToSplit.split(separator);
        //console.log('O array tem ' + arrayOfStrings.length + ' elementos: ' + arrayOfStrings.join(' / '));
        //console.log(arrayOfStrings[1])// segundo elemento que corresponde ao mes
        return arrayOfStrings[1];
    }

    function isMonth(holiday){
        const id = req.params.idDoMes;
        const bar = '/';
        let month = splitString(holiday.date, bar);
        //console.log(typeof(month))
        return month === id;
    }

    const monthHolidays = holidays.filter(isMonth)
    if(monthHolidays.length === 0){
        res.send(`Este mes nao tem feriado`);
    } else{
        res.send(monthHolidays)
    }
});

app.listen(4000, ()=> {
    console.log("Back-end funcionando, nao esquece de desligar a cada atualizaçao")
});