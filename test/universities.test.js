'use strict'

process.env.NODE_ENV = 'test'

const chai = require('chai')
const expect = require('chai').expect

// Load model
const University = require("../models/University")

chai.use(require('chai-http'))

const app = require('../server.js')

describe('API endpoint /universities', function () {
    this.timeout(5000)

    // POST - Add new university
    it('should add new university', function () {
        return chai.request(app)
            .post('/universities')
            .send(
                {
                    "name": "Sveuciliste Juraj Dobrila u Puli"
                }
            )
            .then(function (res) {
                expect(res).to.have.status(200)
                expect(res).to.be.json
            })
    })

    // GET - Get all universities
    it('should return all universities', function () {
        return chai.request(app)
            .get('/universities')
            .then(function (res) {
                expect(res).to.have.status(200)
                expect(res).to.be.json
                expect(res.body).to.not.be.empty
            })
    })

    // GET - Get one university
    it('should return one university', async function () {
        let id = await University.findOne()
                    .then(university => {return university._id})
        return chai.request(app)
            .get(`/universities/${id}`)
            .then(function (res) {
                expect(res).to.have.status(200)
                expect(res).to.be.json
                expect(res.body).to.be.an('object')
            })
    })

    // PATCH - Patch one university
    it('should patch one university', async function () {
        let id = await University.findOne()
                    .then(university => {return university._id})
        return chai.request(app)
            .patch(`/universities/${id}`)
            .send({
                "name": "Porec"
            })
            .then(function (res) {
                expect(res).to.have.status(200)
                expect(res).to.be.json
                expect(res.body).to.be.an('object')
            })
    })

    // DELETE - Delete one university
    it('should return one university', async function () {
        let id = await University.findOne()
                    .then(university => {return university._id})
        return chai.request(app)
            .delete(`/universities/${id}`)
            .then(function (res) {
                expect(res).to.have.status(200)
            })
    })

    // DELETE - Delete all universities
    it('should delete all universities', function () {
        return chai.request(app)
            .delete('/universities')
            .then(function (res) {
                expect(res).to.have.status(200)
            })
    })
})