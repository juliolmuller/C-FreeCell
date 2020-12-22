import angular from 'angular'
import Controller from './controller'
import Card from './components/Card'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'

const app = angular.module('myApplication', [])

app.controller('myController', Controller)
app.component('card', Card)
