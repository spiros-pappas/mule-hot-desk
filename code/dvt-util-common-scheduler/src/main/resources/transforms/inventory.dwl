%dw 2.0
output application/json
---
{
	key: p('inventory.os-key'),
	host: p('inventory.host'),
	port: p('inventory.port'),
	path: p('inventory.path'),
	method: p('inventory.method'),
	idleTimeout: p('inventory.connection-idle-timeout'),
	responseTimeout: p('inventory.response-timeout')
}