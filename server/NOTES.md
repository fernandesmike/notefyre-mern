### NOTES & LEARNINGS

## SERVER / BACKEND

# ANATOMY OF A REQUEST OBJ

1. Headers `req.headers` - contains metadata, information about the host, or even the client's user-agent
2. Body `req.body` - contains the data sent to the server. Usually JSON or raw text. The format of the data are defined on the Header's `content-type` property.
3. Query Parameters `req.params` - key-value pairs of whatever is appended on the url. Query parameters after the `?` on the url.

## MONGOOSE

# findByIdAndUpdate() vs findOneAndUpdate()

findByIdAndUpdate({\_id: id}) calls findOneAndUpdate({\_id: id}) under the hood. Use the latter, if you are finding/searching with an id properties. Otherwise, use findOneAndUpdate(), if you are not using id to find an Object.

### LINKS & REFERENCES

1. [Anatomy of an HTTP Request](https://medium.com/@elijahechekwu/anatomy-of-an-http-request-cb5ed9508b5f)
2. [Structure of a request](https://learning.postman.com/collection-format/advanced-concepts/request-definition/#description)
