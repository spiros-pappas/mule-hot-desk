%dw 2.0
output application/json
var time=(now() >> p('common-scheduler.timezone')) as String {format: "yyyy-MM-dd'T'HH:mm:ss"}
var status = {I: "Initialized", T:"Triggered", S:"Success", F: "Failure"}
---
{
	jobId: vars.aJob.jobId,
	startDateTime: time,
	endDateTime: time,
	status: status.T
}