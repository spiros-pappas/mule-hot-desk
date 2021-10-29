%dw 2.0
output application/json
var time = (now() >> p('common-scheduler.timezone')) as String {format: "yyyy-MM-dd'T'HH:mm:ss"}
---
{
	watermarkId: vars.watermark.watermarkId,
	lastSuccess: attributes.queryParams.timestamp default time
}