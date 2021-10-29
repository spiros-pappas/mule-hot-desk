%dw 2.0
output application/json
var time = (now() >> p('common-scheduler.timezone')) as String {format: "yyyy-MM-dd'T'HH:mm:ss"}
var status = {I: "Initialized", T:"Triggered", S:"Success", F: "Failure"}
var id = vars.jobData.key ++ "-" ++ uuid()
---
{
	jobId: id,
	lastSuccess: vars.savePayload.lastSuccess,
	callbackURL: "/" ++ "callback" ++ "/" ++ id
}