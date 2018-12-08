'use strict'

process.env.NODE_ENV = 'test'

const chai = require('chai')
const expect = require('chai').expect

// Load model
const City = require("../models/City")

chai.use(require('chai-http'))

const app = require('../server.js')

describe('API endpoint /cities', function () {
    this.timeout(5000)

    // POST - Add new city
    it('should add two new cities', function () {
        return chai.request(app)
            .post('/cities')
            .send(
                {
                    "name": "Rovinj"
                }
            )
            .then(function (res) {
                expect(res).to.have.status(200)
                expect(res).to.be.json
            })
    })

    // GET - Get all cities
    it('should return all cities', function () {
        return chai.request(app)
            .get('/cities')
            .then(function (res) {
                expect(res).to.have.status(200)
                expect(res).to.be.json
                expect(res.body).to.not.be.empty
            })
    })

    // GET - Get one city
    it('should return one city', async function () {
        let id = await City.findOne()
                    .then(city => {return city._id})
        return chai.request(app)
            .get(`/cities/${id}`)
            .then(function (res) {
                expect(res).to.have.status(200)
                expect(res).to.be.json
                expect(res.body).to.be.an('object')
            })
    })

    // PATCH - Patch one city
    it('should patch one city', async function () {
        let id = await City.findOne()
                    .then(city => {return city._id})
        return chai.request(app)
            .patch(`/cities/${id}`)
            .send({
                "name": "Porec"
            })
            .then(function (res) {
                expect(res).to.have.status(200)
                expect(res).to.be.json
                expect(res.body).to.be.an('object')
            })
    })

    // DELETE - Delete one city
    it('should return one city', async function () {
        let id = await City.findOne()
                    .then(city => {return city._id})
        return chai.request(app)
            .delete(`/cities/${id}`)
            .then(function (res) {
                expect(res).to.have.status(200)
            })
    })

    // DELETE - Delete all cities
    it('should delete all cities', function () {
        return chai.request(app)
            .delete('/cities')
            .then(function (res) {
                expect(res).to.have.status(200)
            })
    })
})