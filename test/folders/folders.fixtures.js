function makeFoldersArray() {
    return [
        {
            id: 1,
            name: 'First folder test'
        },
        {
            id: 2,
            name: 'Second folder test'
        },
        {
            id: 3,
            name: 'Third folder test'
        },
    ];
}

function makeMaliciousFolder() {
    const maliciousFolder = {
        id: 911,
        name: 'Malicious Folder <script>alert("xss");</script>'
    }
    const expectedFolder = {
        ...maliciousFolder,
        name: 'Malicious Folder &lt;script&gt;alert(\"xss\");&lt;/script&gt;'
    }
    return {
        maliciousFolder,
        expectedFolder
    }
}

module.exports = { makeFoldersArray, makeMaliciousFolder }