%dw 2.0
output application/json
var status = {I: "Initialized", T:"Triggered", S:"Success", F: "Failure"}
---
{
	jobId: vars.jobData.jobId,
	watermarkId: vars.jobData.scheduleId,
	requestDate: vars.jobData.requestDate,
	startDateTime: (now() >> p('common-scheduler.timezone')) as String {format: "yyyy-MM-dd'T'HH:mm:ss"},
	endDateTime: "",
	status: status.I
}