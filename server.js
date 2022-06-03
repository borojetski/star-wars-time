const { response } = require('express')
const express = require('express')
const app = express()
const PORT = 8000
const swTitle = {
    'obi-wan kenobi': {
        'title': 'Obi-Wan Kenobi',
        'releaseYear': 2022,
        'rating': 6,
        'worthYourTime': 'No'
    },
    'the book of bobba fett': {
        'title': 'The Book of Bobba Fett',
        'releaseYear': 2022,
        'rating': 3,
        'worthYourTime': 'No'
    },
    'unknown':{
        'unknownTitle': 'Please enter a Star Wars Movie or TV Show title as listed on TheTVDB.com.'
    }

}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:title', (request, response) => {
    const showTitle = request.params.title.toLowerCase()
    if(swTitle[showTitle]){
        response.json(swTitle[showTitle])
    }else{
        response.json(swTitle['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on port ${PORT}.`)
})