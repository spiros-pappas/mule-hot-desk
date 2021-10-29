%dw 2.0
output application/json
var status = {I: "Initialized", T:"Triggered", S:"Success", F: "Failure"}
---
{
	jobId: vars.jobState.jobId,
	watermarkId: vars.jobState.watermarkId,
	requestDate: vars.jobState.requestDate,
	startDateTime: vars.jobState.startDateTime,
	endDateTime: "",
	status: status.T
}