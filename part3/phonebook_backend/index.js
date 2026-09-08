require('dotenv').config()
const Persons = require('./models/persons')
const express = require('express')
const morgan = require('morgan')
const app = express()
const cors = require('cors')
app.use(express.json())
app.use(cors())

morgan.token('PORT', () => `Server running on port: ${PORT}`)
app.use(morgan(':PORT'))

morgan.token('postReq', (req) => JSON.stringify(req.body))
app.use(
  morgan(
    ':method :url :status :res[response-length] :response-time ms  :postReq',
  ),
)

app.get('/persons', (req, res) => {
  Persons.find({}).then((p) => {
    console.log(p)
    res.json(p)
  })
})
app.get('/persons/:id', async (req, res , next) => {
  try {
    const id = req.params.id
    const person =  await Persons.findById(id)
    console.log(person)
    if (!person) return res.status(404).end()
    res.json(person)
  } catch (error) {next(error)}
})
app.delete('/persons/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    const process = await Persons.findByIdAndDelete(id)
    console.log(process)
    res.status(204)
  } catch (error) {
    next(error)
  }
})
app.put('/persons/:id', async (req, res, next) => {
  try {
    const { name, number } = req.body
    const id = req.params.id
    const update = await Persons.findByIdAndUpdate(
      id,
      { name, number },
      { new: true, runValidators: true },
    )
    console.log('update :-', update)
    if (!update) return res.status(404).end()
    res.json(update)
  } catch (error) {
    next(error)
  }
})
app.post('/persons', async (req, res) => {
  const body = req.body

  if (!body.name)
    return res.status(400).json({ error: 'provide name to proceed!' })
  if (!body.number)
    return res.status(400).json({ error: 'provide Number to proceed!' })

  const name = body.name
  const number = body.number

  const person = new Persons({ name, number })
  res.status(201).json(await person.save())

  // const nameCheck = await Persons.findOne({ name });
  // console.log("found person :", nameCheck);
  // if (nameCheck)
  //   return res.status(400).json({ error: "name must be unique" });
})

const errorHandler = (error, req, res, ) => {
  console.log(error.message)
  if (error.name === 'CastError')
    return res.status(404).json({ error: 'incorrect format!' })
}
app.use(errorHandler)
const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`server running on port : ${PORT}`)
})
