%dw 2.0
output application/java
---
{
	serviceName: "Mule RESTful API",
	protocol: vars.jobData.protocol,
	method: vars.jobData.method,
	endpoint: vars.jobData.endpoint,
	transportHeaders: vars.jobData.transportHeaders,
	uriParameters: {},
	queryParameters: vars.jobData.queryParameters,
	timeout: vars.jobData.timeout
}