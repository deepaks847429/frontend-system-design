# Networking 

# communication protocols
- HTTP - Hypertext Transfer Protocol (HTTP) is a set of rules that governs how web browsers and web servers communicate with each other to transfer files, such as images, text, video, and sound, over the web.

- TCP - A TCP connection is a reliable connection that allows devices to exchange data over a network using the Transmission Control Protocol (TCP). It gurantees no packet is lost.

- HTTP/3(QUIC) - HTTP/3 is the third major version of the Hypertext Transfer Protocol used to exchange information on the World Wide Web, complementing the widely-deployed HTTP/1.1 and HTTP/2. Unlike previous versions which relied on the well-established TCP (published in 1974),[2] HTTP/3 uses QUIC (officially introduced in 2021),[3] a multiplexed transport protocol built on UDP.

- UDP - User Datagram Protocol (UDP) is a communication protocol that allows data to be sent between computers on the internet quickly, but without establishing a connection first. (header compression, Better network congestion, Improved performance)

- HTTPS - HTTPS, or Hypertext Transfer Protocol Secure, is a security protocol that encrypts data sent between a user and a website. It's the secure version of HTTP, which is the primary protocol used to send data between a web browser and a website. HTTPS uses encryption technology like SSL or TLS to secure connections. 

- websocket - WebSocket is a computer communications protocol that allows for real-time, two-way communication between a client and a server over a single connection.

- Simple Mail Transfer Protocol (SMTP) is a standard communication protocol for sending and receiving emails over the internet. It's used by mail servers and other message transfer agents (MTAs) to transmit emails. 


# RESTAPI
- Architecture 
if frontend and backend is at same place is known as 1-tier architecture. if backend and frontend is at differnt place than it is known as 2-tier architecture. if frontend, backend, datase are at differnt place than it is known as 3-tier architecture. And the communication between these web service happen through REST API.

- REST API - Representational state transfer Application programming interface.

- HTTP - Hypertext Transfer protocol.


- What is RESTAI?
- why REST Benefits?
  - Ease of use.
  - stateless
  - scalability 
  - Flexibility
  - Uniform Interface.
  - Caching
  - Sepration of concerns.
  - Interoperability(Language agnostic)
  - Security
- Building Blocks(URL, http methods, headers, request, response, status code)
  - http methods
    - POST
    - GET
    - PUT / PATCH
    - DELETE
    - HEAD
    - OPTIONS - security
    - connect
    - trace
  - Headers
    - Request headers
    a-> Host (usecase - Target Host)
    b-> Origin(usecase - origin host)
    c-> Referer(indicate the previous web page making the request)
    d-> user Agent(identify the clint)
    e-> Accept(response content type)
    f-> Accept - Language(preferred response content language)
    g-> Accept-encoding(encoding algorithm)
    h -> connection(keep tcp connection open)
    i-> Authorization (send credentials)
    j-> cookie(previous server token can be resend)
    k- if-modified-since
    l-> cache-control
    - Response headers
    a-> date(when the response is generated)
    b-. server(provides server info)
    c-> content-Type(type of response content)
    d-> content-length(original body response length)
    e-> set-cookie(informs about cookkie need to store for future response)
    f-> content-encoding(response content-encoding)
    g-> cache-control()
    i-> last-modified
    j-> Etag

- status code
 - status range- 
 - 1XX - information related code
 - 2xx - success code
 - 3xx - Redirection
 - 4xx - (any client side error)
 - 5xx - server error

- Build app
- postman
- Http1/2/3
- Best practices
- Advance  

 # graphql

 - what is graphql? 
 - why graphql?
   - Avoid over fetching.
   - Avoid under fetching
   - Better mobile performance
   - Eficiency and precision
   - structured and hierarchial data
 - rest vs graphql
 - Building block of graphql
 - build small graphql app
 - calling graphql
 - Tool
 - Advance 

 - schema/types
  type Country {
    code: string
    currency: string
    phone: string
    name: string
    ID:ID
  }

 - query - to get the data
 type Query{
  countries: [Country]
 }
 - Mutation - to update the data
 type Mutation{
  language(id:Id) : Language
 }

 - Resolver 
 Query:{
  countries:(parent, args, context, info)=>{
   return //;
  }
 }

- Example
# Requirement
// structured

books{
  id, 
  title, 
  publishedYear,
  author
}

author{
  id,
  name,
  books
}

 // list of books
 // list of authors
 // list of books with author details
 // list of author with book

 # grpc( google remote procedure call)

 - grpc

 client functions -> client stub -> rpc runtime- > rpc runtime -> server stub -> server functions.
 - rpc
 - protobuf
   protocol buffer - IDL(interface definition language) uses http2
  - http2
  - protocol serialization
  - single long live connection
  - Bidirectional streaming



 - HandsOn
 - rest vs grpc
 - pros/cons
