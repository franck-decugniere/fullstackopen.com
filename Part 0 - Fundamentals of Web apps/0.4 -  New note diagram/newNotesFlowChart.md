:::mermaid

flowchart LR
    subgraph GET NOTE
    /notes("GET /notes") -->/main.css
    /notes -->/main.js
    /main.js -->/data.json
    end

    subgraph NEW NOTE
    user("Click save")-->/new_note
    /new_note("POST /new_note")-- "302 redirect" -->/notes
    end
    