%dw 2.0
output application/json
var time = (now() >> p('common-scheduler.timezone')) as String {format: "yyyy-MM-dd'T'HH:mm:ss"}
var status = {I: "Initialized", T:"Triggered", S:"Success", F: "Failure"}
---
{
	jobId: vars.jobState.jobId,
	watermarkId: vars.jobState.watermarkId,
	requestDate: vars.jobState.requestDate,
	startDateTime: vars.jobState.startDateTime,
	endDateTime: time,
	status: 
		if (lower(message.payload.status) == "success")
			status.S
		else
			status.F
}