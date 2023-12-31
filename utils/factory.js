
const catchAsync = require('./catchAsync')
const AppError = require('./appError')
const APIFeatures = require('./apiFeatures')

exports.createOne = Model =>
    catchAsync(async (req, res, next) => {
        const doc = await Model.create(req.body)
        res.status(201).json({
            status: 'success',
            resposta: {
                data: doc
            }
        })
    })

exports.getOne = (Model, popOptions) =>
    catchAsync(async (req, res, next) => {
        var query
        req.params.id.length < 24 ? query = Model.find({ "student_identifier": req.params.id }) : query = Model.findById(req.params.id)
        if (popOptions) query = query.populate(popOptions)
        const doc = await query

        if (!doc) {
            return next(new AppError('No document found with that ID', 404))
        }

        res.status(200).json({
            status: 'success',
            data: {
                data: doc
            }
        })
    })

exports.getAll = Model =>
    catchAsync(async (req, res, next) => {
        // To allow for nested GET reviews on tour (hack)
        let filter = {}
        if (req.params.tourId) filter = { tour: req.params.tourId }

        const features = new APIFeatures(Model.find(filter), req.query)
            .filter()
            .sort()
            .limitFields()
            .paginate()
        // const doc = await features.query.explain()
        const doc = await features.query

        // SEND RESPONSE
        res.status(200).json({
            status: 'success',
            results: doc.length,
            data: doc
        })
    })