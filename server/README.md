This is a topic first doubts app for teachers, teachers can come and create doubt sessions and inside each doubt session

1. whenever new user comes, they need to sign up
2. Sign In-ed users get session tokens for authorization
3. The first thing a signed in user can see is a list of topics, regarding which doubts are being asked
4. inside each topic user can see active doubts, which are sorted according to the upvotes they got
5. each doubt contains title and description 6. below each doubt people can comment things

End-Points

1. /session End Points

- Post /session/create
- Get /session/:sessionId

2. /topic End Points

- Post /topic/create: create topic for some sessionId in req.body
-

1. Post /signup - for allowing people to sign up
1. Post /signin - for allowing people to sign in
1. Post /room/create - users can create room, inside it they can add bunch of topics regarding people can ask doubts, this returns an invite link which will give access to other users for this room, only the user who creates this room has access to creating topics
1. Get /room/:roomid/topics - add topic to existing room
1. /room/:roomid/topics - list of all the topics in current room
1. /room/:roomid/topics/:topicid/doubts - list of active doubts for this topic sorted according to number of upvotes.
