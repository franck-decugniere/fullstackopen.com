:::mermaid

sequenceDiagram
    actor bob
    participant browser
    participant server

    bob->>browser: User type note and click on Save button 
    
    activate browser
    note over bob, browser: The browser executes the JavaScript code that :
    note over browser: (js) Add new note to js list of notes
    note over browser: (html) Clear input field
    note over browser: (html) Render the notes
    note over server: (Send new note to server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server-->>browser: {message: "note created"} - 201 data created
    deactivate server
    deactivate browser
