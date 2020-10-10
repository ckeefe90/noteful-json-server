function makeNotesArray() {
    return [
        {
            id: 1,
            name: 'First note test',
            content: 'First note content test',
            date_published: '2029-01-22T16:28:32.615Z',
            folder_id: 1
        },
        {
            id: 2,
            name: 'Second note test',
            content: 'Second note content test',
            date_published: '2029-01-20T16:28:32.615Z',
            folder_id: 2
        },
        {
            id: 3,
            name: 'Third note test',
            content: 'Third note content test',
            date_published: '2029-01-18T16:28:32.615Z',
            folder_id: 3
        },
    ];
}

function makeMaliciousNote() {
    const maliciousNote = {
        id: 911,
        name: 'Malicious Note <script>alert("xss");</script>',
        content: 'Malicious content for note',
        date_published: '2029-01-16T16:28:32.615Z',
        folder_id: 1
    }
    const expectedNote = {
        ...maliciousNote,
        name: 'Malicious Note &lt;script&gt;alert(\"xss\");&lt;/script&gt;'
    }
    return {
        maliciousNote,
        expectedNote
    }
}

module.exports = { makeNotesArray, makeMaliciousNote }