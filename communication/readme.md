# communication

- short polling
- long pooling
- websocket
- SSE(server sent event)
- webhooks

# short polling
 - short live connection
 - No persistent connection
 - Less resource utility
 - Problem with scale

  # example
  - real time system
  - Notification
  - Cricinfo
  - Analytics
  - Version update

# long polling

- Single long lived connection
- connection is open until you get new data/ timeout

- cons: large number is connection more the load.
 

    # real time example
    - real time collaboration
    - 