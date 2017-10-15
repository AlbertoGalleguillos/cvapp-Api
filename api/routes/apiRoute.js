'use strict';
module.exports = function(app) {
    var jobList = require('../controllers/apiController');

    // jobList Routes
    app.route('/jobs')
        .get(jobList.list_all_jobs)
        .post(jobList.create_job);

    app.route('/job/:jobId')
        .get(jobList.read_a_job)
        .put(jobList.update_a_job)
        .delete(jobList.delete_a_job)
}