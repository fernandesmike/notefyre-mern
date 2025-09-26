### NOTES & LEARNINGS

## MONGOOSE

# findByIdAndUpdate() vs findOneAndUpdate()

findByIdAndUpdate({\_id: id}) calls findOneAndUpdate({\_id: id}) under the hood. Use the latter, if you are finding/searching with an id properties. Otherwise, use findOneAndUpdate(), if you are not using id to find an Object.
