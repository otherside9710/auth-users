# Code Challenge :rocket:

Welcome to the Code Challenge! Here you will find the code made by Julio Sarmiento.

## Table of Contents

- [Getting started](#getting-started)
- [HTTP REQUESTS](#http-requests)
- [Create a new transaction](#create-a-new-transaction)
- [Get a transaction](#get-a-transaction)
- [Domain Driven Architectures](#domain-driven-architectures)
- [DDD and Clean Architecture](#ddd-and-clean-architecture)
  - [Clean Architecture layers](#clean-architecture-layers)
  - [Project anatomy](#project-anatomy)
  - [The Dependency Rule](#the-dependency-rule)
  - [Server, Routes and Plugins](#server-routes-and-plugins)
  - [Controllers](#controllers)
  - [Use Cases](#use-cases)
- [Pattern](#pattern)
  - [Bounded Context](#bounded-context)
- [Note](#note)

## Getting started 

1. Environment, create the .env file at the root of the project:
```
#APP
PORT=3000
NODE_ENV=dev

#DATABASE
DB_HOST=postgres
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_NAME=users

#API
EXTERNAL_CRUD_API=https://jsonplaceholder.typicode.com
```

2. How to run app - (Docker container):

run in your terminal:

```
docker-compose -f docker-compose.yml up -d
```

Once the docker command finishes executing, you can use the endpoints.

## HTTP Request's

CURL's for using endpoints.


## Login
```
curl --request POST \
  --url http://YOUR_HOST_HERE:3001/login \
  --header 'Content-Type: application/json' \
  --data '{
	"email": "user@mail.com",
	"password": "user123"
}'
```
## Create User
```
curl --request POST \
  --url http://YOUR_HOST_HERE:3001/users \
  --header 'Content-Type: application/json' \
  --header 'authorization: LOGIN_TOKEN_HERE' \
  --data '{
	"name": "Test User",
	"email": "email@mail.com",
	"phone": "12434"
}'
```

## Get All Users
```
curl --request GET \
  --url http://YOUR_HOST_HERE:3001/users \
  --header 'authorization: LOGIN_TOKEN_HERE'
```

## Domain Driven Architectures

Software design is a very hard thing. From years, a trend has appeared to put the business logic, a.k.a. the (Business) Domain, and with it the User, in the heart of the overall system. Based on this concept, different architectural patterns was imaginated.

One of the first and main ones was introduced by E. Evans in its [Domain Driven Design approach](http://dddsample.sourceforge.net/architecture.html).

![DDD Architecture](https://res.cloudinary.com/practicaldev/image/fetch/s--5Izc96n2--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/neskpxcjjz9a53hs9xir.png)

Based on it or in the same time, other applicative architectures appeared like [Onion Architecture](https://jeffreypalermo.com/2008/07/the-onion-architecture-part-1/) (by. J. Palermo), [Hexagonal Architecture](https://alistair.cockburn.us/hexagonal-architecture/) (by A. Cockburn) or [Clean Architecture](https://8thlight.com/blog/uncle-bob/2012/08/13/the-clean-architecture.html) (by. R. Martin).

This repository is an exploration of this type of architecture, mainly based on DDD and Clean Architecture, on a concrete and modern JavaScript application.

## DDD and Clean Architecture

The application follows the Uncle Bob "[Clean Architecture](https://8thlight.com/blog/uncle-bob/2012/08/13/the-clean-architecture.html)" principles and project structure :

### Clean Architecture layers

![Schema of flow of Clean Architecture](https://1048636645-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-MAffO8xa1ZWmgZvfeK2%2F-MBmS7EO8Fe7VVZVRc_Q%2F-MBmS9tX9OP1kMC9I4z6%2Fimage.png?alt=media&token=5aff66d7-0528-45ba-95d3-003b2b824ca0)

### Project anatomy

```
src
 └ context                          → Application sources
   └ users                          → User Context
    └ application                   → Application services layer
      └ use_cases                   → Application business rules
    └ domain                        → Enterprise core business layer such as domain model objects (Aggregates, Entities, Value Objects) and repository interfaces
    └ infrastructure                → Frameworks, drivers and tools such as Database, the Web Framework, mailing/logging/glue code etc.
```

### The Dependency Rule

> The overriding rule that makes this architecture work is The Dependency Rule. This rule says that source code dependencies can only point inwards. Nothing in an inner circle can know anything at all about something in an outer circle. In particular, the name of something declared in an outer circle must not be mentioned by the code in the an inner circle. That includes, functions, classes. variables, or any other named software entity.

src. https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html#the-dependency-rule

### Server, Routes and Plugins

Server, routes and plugins can be considered as "plumbery-code" that exposes the API to the external world, via an instance of Express.js server.

The role of the server is to intercept the HTTP request and match the corresponding route.

Routes are configuration objects whose responsibilities are to check the request format and params, and then to call the good controller (with the received request). They are registered as Plugins.

Plugins are configuration object that package an assembly of features (ex: authentication & security concerns, routes, pre-handlers, etc.) and are registered at the server startup.

### Controllers

Controllers are the entry points to the application context.

They have 3 main responsibilities :

1. Extract the parameters (query or body) from the request
2. Call the good Use Case (application layer)
3. Return an HTTP response (with status code and serialized data)

### Use Cases

A use case is a business logic unit.

It is a class that must have an `execute` method which will be called by controllers.

It may have a constructor to define its dependencies (concrete implementations - a.k.a. _adapters_ - of the _port_ objects) or its execution context.

**NOTE: A use case must have only one precise business responsibility!!!**

A use case can call objects in the same layer (such as data repositories) or in the domain layer, but not out...

## Pattern

> In software engineering, a design pattern is a general repeatable solution to a commonly occurring problem in software design. A design pattern isn't a finished design that can be transformed directly into code. It is a description or template for how to solve a problem that can be used in many different situations.

### Bounded Context

> Bounded Context is a central pattern in Domain-Driven Design. It is the focus of DDD's strategic design section which is all about dealing with large models and teams. DDD deals with large models by dividing them into different Bounded Contexts and being explicit about their interrelationships.

![Example](https://martinfowler.com/bliki/images/boundedContext/sketch.png)


### Note

> The response from the /login endpoint returns a token, which must be added to the /users endpoints in a header called "authorization", to be able to access the API resources, otherwise it will return unauthorized messages.