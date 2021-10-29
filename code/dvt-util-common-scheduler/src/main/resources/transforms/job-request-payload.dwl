%dw 2.0
output application/json
---
{
	jobId: vars.jobData.jobId,
	lastSuccess: vars.watermark.lastSuccess,
	requestDate: vars.jobData.requestDate
}