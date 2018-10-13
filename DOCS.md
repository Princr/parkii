# parkii v0.0.0



- [Auth](#auth)
	- [Authenticate](#authenticate)
	
- [Checks](#checks)
	- [Create checks](#create-checks)
	- [Delete checks](#delete-checks)
	- [Retrieve checks](#retrieve-checks)
	- [Update checks](#update-checks)
	
- [PasswordReset](#passwordreset)
	- [Send email](#send-email)
	- [Submit password](#submit-password)
	- [Verify token](#verify-token)
	
- [Pay](#pay)
	- [Create pay](#create-pay)
	- [Delete pay](#delete-pay)
	- [Retrieve pay](#retrieve-pay)
	- [Retrieve pays](#retrieve-pays)
	- [Update pay](#update-pay)
	
- [User](#user)
	- [Create user](#create-user)
	- [Delete user](#delete-user)
	- [Retrieve current user](#retrieve-current-user)
	- [Retrieve user](#retrieve-user)
	- [Retrieve users](#retrieve-users)
	- [Update password](#update-password)
	- [Update user](#update-user)
	


# Auth

## Authenticate



	POST /auth

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization			| String			|  <p>Basic authorization with email and password.</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>Master access_token.</p>							|

# Checks

## Create checks



	POST /checks


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| parkbayid			| 			|  <p>Checks's parkbayid.</p>							|
| car_reg			| 			|  <p>Checks's car_reg.</p>							|
| cellphone			| 			|  <p>Checks's cellphone.</p>							|
| name			| 			|  <p>Checks's name.</p>							|
| surname			| 			|  <p>Checks's surname.</p>							|

## Delete checks



	DELETE /checks/:id


## Retrieve checks



	GET /checks/:id


## Update checks



	PUT /checks/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| parkbayid			| 			|  <p>Checks's parkbayid.</p>							|
| car_reg			| 			|  <p>Checks's car_reg.</p>							|
| cellphone			| 			|  <p>Checks's cellphone.</p>							|
| name			| 			|  <p>Checks's name.</p>							|
| surname			| 			|  <p>Checks's surname.</p>							|

# PasswordReset

## Send email



	POST /password-resets


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| email			| String			|  <p>Email address to receive the password reset token.</p>							|
| link			| String			|  <p>Link to redirect user.</p>							|

## Submit password



	PUT /password-resets/:token


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| password			| String			|  <p>User's new password.</p>							|

## Verify token



	GET /password-resets/:token


# Pay

## Create pay



	POST /pays


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| allowed_time			| 			|  <p>Pay's allowed_time.</p>							|
| paid			| 			|  <p>Pay's paid.</p>							|

## Delete pay



	DELETE /pays/:id


## Retrieve pay



	GET /pays/:id


## Retrieve pays



	GET /pays


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update pay



	PUT /pays/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| allowed_time			| 			|  <p>Pay's allowed_time.</p>							|
| paid			| 			|  <p>Pay's paid.</p>							|

# User

## Create user



	POST /users


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>Master access_token.</p>							|
| email			| String			|  <p>User's email.</p>							|
| password			| String			|  <p>User's password.</p>							|
| name			| String			| **optional** <p>User's name.</p>							|
| picture			| String			| **optional** <p>User's picture.</p>							|
| role			| String			| **optional** <p>User's role.</p>							|

## Delete user



	DELETE /users/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|

## Retrieve current user



	GET /users/me


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|

## Retrieve user



	GET /users/:id


## Retrieve users



	GET /users


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update password



	PUT /users/:id/password

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization			| String			|  <p>Basic authorization with email and password.</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| password			| String			|  <p>User's new password.</p>							|

## Update user



	PUT /users/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|
| name			| String			| **optional** <p>User's name.</p>							|
| picture			| String			| **optional** <p>User's picture.</p>							|


