const mongo = require('mongoose')
const express = require('express')

mongo.connect('mongodb+srv://deepak08:qwerty123@cluster0.q06cc7h.mongodb.net/?retryWrites=true&w=majority')
mongo.connection.once('open',()=>{console.log('connected to mongoDB server')})