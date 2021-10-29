%dw 2.0
output application/json
var timestamp = now() >> p('common-scheduler.timezone')
var scheduleId = vars.scheduleId
var endpointId = p("$(scheduleId).endpoint-id")
var jobId = scheduleId default "default" ++ "-" ++ uuid()
// endpoint
var protocol = lower(p("$(endpointId).protocol"))
var host = p("$(endpointId).host")
var port = p("$(endpointId).port")
var path = p("$(endpointId).path")
var method = p("$(endpointId).method")
var clientId = p("$(endpointId).header.client_id")
var clientSecret = p("secure::$(endpointId).header.client_secret")
var responseTimeout = p("$(endpointId).timeout.response")
// callback
var callbackProtocol = lower(p('common-scheduler.callback.protocol'))
var callbackHost = p('common-scheduler.callback.host')
var callbackPort = p('common-scheduler.callback.port')
var callbackPath = p('common-scheduler.callback.path')
var callbackURL = "$(callbackProtocol)://$(callbackHost):$(callbackPort)/$(callbackPath)"
---
{
	scheduleId: scheduleId,
	jobId: jobId,
	protocol: protocol,
	method: method,
	endpoint: "$(protocol)://$(host):$(port)/$(path)",
	transportHeaders: {
		client_id: clientId,
		client_secret: clientSecret
	},
	uriParameters: {},
	queryParameters: vars.queryParams default {} ++ { callbackURL: callbackURL replace "(jobId)" with jobId },
	timeout: {
		response: responseTimeout
	},
	requestDate: vars.requestDate default (timestamp as String {format: "yyyy-MM-dd"})
}