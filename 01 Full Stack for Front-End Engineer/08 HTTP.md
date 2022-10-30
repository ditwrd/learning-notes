
## Defining HTTP
- Hyper Text Transfer Protocol
- TCP -> Transmission Control Protocol

## HTTP Headers & Cookies
- Header -> metadata
	- Request
		- Host -> where it is going
		- User agent -> inspect browser requests
		- Accept -> the type of things expected on response
		- Accept-Encoding -> the encoding of the things expected in response
		- Set-cookie -> help with session
		- x header -> custom header
	- Response
		- Server->the server
		- Status code:
			- 200 ok
			- 301 moved permaniently
			- 302 temprary redirect
			- 401 Not authorized
			- 500 Internal server error
			- 1xx Information
			- 2xx Success
			- 3xx Redirect
			- 4xx Client error
			- 5xx Server error

## Custom Header

## HTTPS
- Encrypt Decrypt Schema of HTTP
- Encrypt on Client, Decrypt on Server
- Security need to be balance on Performance

## HTTPS with Nginx
- [Certbot](https://certbot.eff.org/) 
- HTTPS only work with domain name, bare IP won't work
- Certbot work by making a challenge, it basically add a /weirdlonghash endpoint to test if it actually works


## HTTP/2
- Need SSL enabled
- Multiplexing, reduce the amount of connection / handshake
- On Nginx just add `http2` on port 443

## HTTP/3
- Using UDP






