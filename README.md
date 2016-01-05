# What is Ankyra

Ankyra is a very limited, single user, Flashcard Application. It is intended
to run on Heroku on a free tier.

## Architecture

Ankyra is composed of a node.js + express.js + mongodb backend and
an Angular.js frontend that interacts with it through a rest interface.

## Data Model

There is a single collection called cards. A card looks like this:

```yaml
{
  id: 1,
  created: Date(),
  front: "1 + 1",
  back: "2",
  easy: 0,
  hard: 0,
  comments:
    - "This is too easy."
  tags:
    - "math.algebra"
}
```

A result looks like this:

```yaml
{
  card: 1,
  result: "easy"
}
```

Results are not stored, they are posted and used to increment the counters
on the card objects.

## API

The restful API is accessible through the /api URL:

* Cards CRUD:
 * Create card: POST /api/cards
 * Retrieve cards: GET /api/cards
 * Retrieve card: GET /api/cards/:id
 * Update card: PUT /api/cards/:id
 * Delete card: DELETE /api/cards/:id
* Views:
 * Retrieve next card: GET /api/views
 * Increment results: POST /api/views

## References

* [Node.js MongoDB Driver API](http://mongodb.github.io/node-mongodb-native/2.0/api/)
* [Express.js API](http://expressjs.com/en/4x/api.html)
