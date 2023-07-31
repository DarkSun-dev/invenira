const Configuration = require('../model/configuration')
const Analytics = require('../model/analytics')
const Student = require('../model/student')
const Supervisor = require('../model/supervisor')
const Work = require('../model/work')
const catchAsync = require('./../utils/catchAsync')
const AppError = require('./../utils/appError')

const factory = require('./../utils/factory')
const Comment = require('../model/comment')

exports.createStudent = factory.createOne(Student)
exports.getStudents = factory.getAll(Student)
exports.getStudent = factory.getOne(Student)
exports.createSupervisor = factory.createOne(Supervisor)

exports.configActivity = factory.createOne(Configuration)
exports.getActivities = factory.getAll(Configuration)
exports.getActivity = factory.getOne(Configuration)

exports.submitanalytic = factory.createOne(Analytics)
exports.getAnalytics = factory.getAll(Analytics)
exports.submitWorkActivity = factory.createOne(Work)

exports.getWorks = factory.getAll(Work)
exports.getWork = factory.getOne(Work)

exports.comment = factory.createOne(Comment)
exports.getComment = async (req, res) => {
    const resp = await Comment.find({ work_identifier : req.params.id})
res.send({
    data: resp
})
}

